/**
 * Flashcards — Nativ deck screen (README §Screens 3) over the real FSRS queue.
 * Design deviation (recorded): CroLearn's SRS is 4-button FSRS (CLAUDE.md),
 * so the design's two buttons become Again / Hard / Good / Easy in the same
 * pill style. Recognition cards use the 3D flip; typed kinds keep the answer
 * input + grading, then rate.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, RotateCcw, Volume2, X } from "lucide-react";
import { db, type SrsCard } from "@/lib/db";
import { getDueCards, isTypedCard, rate, Rating, seedCardsForLesson } from "@/lib/srs";
import { findLesson } from "@/content";
import { gradeTyped, type GradeResult } from "@/lib/grader";
import AnswerInput from "@/components/AnswerInput";
import { speak } from "@/lib/tts";
import { BODY2, BtnGhost, BtnPrimary, Eyebrow, INK, MUTED, ProgressBar, GREEN, RED, tint } from "@/ui/kit";

const KIND_LABEL: Record<SrsCard["kind"], string> = {
  recognition: "WHAT DOES IT MEAN?",
  production: "SAY IT IN CROATIAN",
  listening: "TYPE WHAT YOU HEAR",
  cloze: "FILL IN THE GAP",
};

function CardFace({ eyebrow, big, sub, children, back }: { eyebrow: string; big: string; sub?: string; children?: React.ReactNode; back?: boolean }) {
  return (
    <div
      className="flex min-h-[340px] flex-col items-center justify-center rounded-[10px] border bg-[color:var(--card)] px-12 py-11 text-center max-[700px]:min-h-[280px] max-[700px]:px-6"
      style={{ borderColor: "rgba(var(--ink-rgb),.14)", boxShadow: "none", gridArea: "1/1", backfaceVisibility: "hidden", transform: back ? "rotateY(180deg)" : undefined }}
    >
      <div className="mb-5 text-xs font-semibold" style={{ letterSpacing: ".13em", color: MUTED }}>{eyebrow}</div>
      <div className="mb-3" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: big.length > 24 ? "clamp(22px,3.4vw,30px)" : "clamp(32px,5.4vw,48px)", lineHeight: 1.15, color: INK }}>{big}</div>
      {sub && <div className="text-[16px] leading-relaxed" style={{ color: BODY2 }}>{sub}</div>}
      {children}
    </div>
  );
}

export default function ReviewPage() {
  const nav = useNavigate();
  const [queue, setQueue] = useState<SrsCard[] | null>(null);
  const [total, setTotal] = useState(0);
  const [done, setDone] = useState(0);
  const [value, setValue] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [typedResult, setTypedResult] = useState<GradeResult | null>(null);
  const [rating, setRating] = useState(false);
  const [counts, setCounts] = useState({ known: 0, again: 0 });

  const load = useCallback(async () => {
    const completed = await db.lessonProgress.toArray();
    for (const p of completed) {
      const lesson = findLesson(p.lessonId);
      if (lesson) await seedCardsForLesson(lesson);
    }
    const due = await getDueCards();
    setQueue(due);
    setTotal(due.length);
  }, []);
  useEffect(() => {
    void load();
  }, [load]);

  const currentCardId = queue?.[0]?.id;
  const shownAtRef = useRef(performance.now());
  useEffect(() => {
    shownAtRef.current = performance.now();
  }, [currentCardId, done]);

  if (queue === null) return <p className="py-10 text-center" style={{ color: MUTED }}>Loading…</p>;

  const card = queue[0];

  const applyRating = async (r: 1 | 2 | 3 | 4) => {
    if (rating || !card) return;
    setRating(true);
    try {
      const updated = await rate(card, r, new Date(), performance.now() - shownAtRef.current);
      const rest = queue.slice(1);
      setQueue(r === Rating.Again ? [...rest, updated] : rest);
      if (r === Rating.Again) setCounts((c) => ({ ...c, again: c.again + 1 }));
      else setCounts((c) => ({ ...c, known: c.known + 1 }));
      setDone((d) => d + 1);
      setValue("");
      setRevealed(false);
      setTypedResult(null);
    } finally {
      setRating(false);
    }
  };

  const header = (
    <div className="mb-7 flex items-start justify-between gap-6">
      <div>
        <Eyebrow className="mb-2.5">REVIEW · SPACED REPETITION</Eyebrow>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: "clamp(28px,4.4vw,40px)", lineHeight: 1.1, color: INK }}>Flashcards</div>
      </div>
      <BtnGhost icon={X} onClick={() => nav("/practice")}>End session</BtnGhost>
    </div>
  );

  if (!card) {
    return (
      <div className="flex flex-col items-center pt-8">
        <div className="w-full max-w-[780px]">
          {header}
          <div className="rounded-[10px] border bg-[color:var(--card)] px-12 py-14 text-center" style={{ borderColor: "rgba(var(--ink-rgb),.14)", boxShadow: "none" }}>
            <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full" style={{ background: tint(GREEN, 0.1) }}>
              <Check size={30} color={GREEN} />
            </div>
            <div className="mb-3" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 38, lineHeight: 1.15, color: INK }}>
              {total > 0 ? "Session complete" : "Nothing due"}
            </div>
            <div className="mx-auto mb-8 max-w-[460px] text-[17px] leading-relaxed" style={{ color: BODY2 }}>
              {total > 0
                ? `You reviewed ${done} cards — ${counts.known} kept, ${counts.again} coming back sooner.`
                : "Your review inbox is clear. New cards arrive as you complete lessons."}
            </div>
            <div className="flex justify-center gap-3.5">
              <BtnPrimary onClick={() => nav("/")}>Back to path</BtnPrimary>
              <BtnGhost onClick={() => nav("/practice")}>Practice more</BtnGhost>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const typed = isTypedCard(card.kind);
  const answers = card.answers ?? [card.back];
  const check = () => {
    const res = gradeTyped(value, answers);
    setTypedResult(res);
    setRevealed(true);
    if (card.tts) void speak(card.tts);
  };
  const reveal = () => {
    setRevealed(true);
    if (card.tts && card.kind === "recognition") void speak(card.tts);
  };
  const suggested: number | null = typedResult
    ? typedResult.verdict === "wrong"
      ? Rating.Again
      : typedResult.verdict === "diacritics"
        ? Rating.Hard
        : Rating.Good
    : null;

  const ratingButtons = (
    <div className="mt-5 flex gap-3.5 max-[700px]:flex-wrap">
      {(
        [
          [Rating.Again, "Again", "var(--primary)", true],
          [Rating.Hard, "Hard", "var(--orange)", false],
          [Rating.Good, "Good", "var(--green)", false],
          [Rating.Easy, "Easy", "var(--blue)", false],
        ] as const
      ).map(([r, label, color]) => (
        <button
          key={label}
          disabled={rating}
          onClick={() => void applyRating(r)}
          className="flex h-14 flex-1 items-center justify-center gap-2.5 rounded-lg text-[16px] font-semibold text-white transition-transform duration-[180ms] hover:-translate-y-px disabled:opacity-50"
          style={{ background: color, boxShadow: suggested === r ? `0 8px 22px ${tint(color, 0.35)}, 0 0 0 3px ${tint(color, 0.3)}` : undefined }}
        >
          {r === Rating.Again ? <RotateCcw size={18} /> : <Check size={18} />}
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="w-full max-w-[780px]">
        {header}
        <div className="mb-2 flex justify-between text-sm" style={{ color: BODY2 }}>
          <span>Card {Math.min(done + 1, total || done + 1)} of {total || done + 1}</span>
          <span>{counts.known} kept · {counts.again} to revisit</span>
        </div>
        <ProgressBar pct={total ? (done / total) * 100 : 0} color={RED} height={8} className="mb-9" />

        {!typed ? (
          <>
            <button onClick={() => (revealed ? undefined : reveal())} className="mb-[22px] block w-full text-left" style={{ perspective: 1800 }}>
              <div className="grid" style={{ transformStyle: "preserve-3d", transition: "transform .6s cubic-bezier(.35,.15,.25,1)", transform: revealed ? "rotateY(180deg)" : "rotateY(0)" }}>
                <CardFace eyebrow={KIND_LABEL[card.kind]} big={card.front} sub="Tap to reveal" />
                <CardFace eyebrow="ANSWER" big={card.back} back>
                  {card.tts && (
                    <button
                      onClick={(e) => { e.stopPropagation(); void speak(card.tts!); }}
                      className="mt-6 inline-flex items-center gap-2 rounded-lg border bg-[color:var(--card)] px-4 py-2 text-sm"
                      style={{ borderColor: "rgba(var(--ink-rgb),.18)", color: BODY2 }}
                    >
                      <Volume2 size={16} color={MUTED} />Hear it
                    </button>
                  )}
                </CardFace>
              </div>
            </button>
            {revealed ? (
              ratingButtons
            ) : (
              <button onClick={reveal} className="flex h-14 w-full items-center justify-center gap-2.5 rounded-lg text-[16px] font-semibold text-white transition-colors duration-[180ms]" style={{ background: INK }}>
                Show meaning
              </button>
            )}
          </>
        ) : (
          <>
            <div className="mb-[22px] flex min-h-[340px] flex-col items-center justify-center rounded-[10px] border bg-[color:var(--card)] px-12 py-11 text-center max-[700px]:min-h-[280px] max-[700px]:px-5" style={{ borderColor: "rgba(var(--ink-rgb),.14)", boxShadow: "none" }}>
              <div className="mb-5 text-xs font-semibold" style={{ letterSpacing: ".13em", color: MUTED }}>{KIND_LABEL[card.kind]}</div>
              {card.kind === "listening" ? (
                <button onClick={() => void speak(card.tts ?? card.back)} className="mb-6 inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-[17px] font-semibold text-white" style={{ background: INK }}>
                  <Volume2 size={19} />Play audio
                </button>
              ) : (
                <div className="mb-6" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: card.front.length > 24 ? "clamp(20px,3.2vw,28px)" : "clamp(30px,5vw,44px)", lineHeight: 1.2, color: INK }}>{card.front}</div>
              )}
              {!revealed ? (
                <div className="w-full max-w-[520px]">
                  <AnswerInput value={value} onChange={setValue} onSubmit={check} autoFocus placeholder="Type in Croatian…" />
                  <button
                    disabled={!value.trim()}
                    onClick={check}
                    className="mt-3.5 flex h-[50px] w-full items-center justify-center rounded-lg text-[15px] font-semibold transition-colors duration-[180ms]"
                    style={value.trim() ? { background: INK, color: "#fff" } : { background: "rgba(var(--ink-rgb),.14)", color: "var(--muted2)", cursor: "default" }}
                  >
                    Check answer
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-[520px] border-t pt-5" style={{ borderColor: "rgba(var(--ink-rgb),.14)" }}>
                  {typedResult && (
                    <div className="mb-2 text-[15px] font-semibold" style={{ color: typedResult.verdict === "wrong" ? RED : typedResult.verdict === "diacritics" ? "var(--orange)" : GREEN }}>
                      {typedResult.verdict === "wrong" ? "Not quite" : typedResult.verdict === "diacritics" ? "Correct — mind the diacritics" : "Točno — correct!"}
                    </div>
                  )}
                  <div className="flex items-center justify-center gap-2" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 26, color: INK }}>
                    {card.back}
                    {card.tts && (
                      <button onClick={() => void speak(card.tts!)} aria-label="Hear it">
                        <Volume2 size={19} color={MUTED} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            {revealed && ratingButtons}
          </>
        )}
      </div>
    </div>
  );
}
