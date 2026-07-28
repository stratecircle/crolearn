/**
 * Flashcards — the FSRS review session.
 * CroLearn's SRS is 4-button FSRS (CLAUDE.md): Again / Hard / Good / Easy,
 * each in its own semantic colour, the FSRS-suggested one washed in that colour.
 * Recognition cards use the 3D flip; typed kinds keep the answer input +
 * grading, then rate.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Volume2, X } from "lucide-react";
import { db, type SrsCard } from "@/lib/db";
import { getDueCards, isTypedCard, rate, Rating, seedCardsForLesson } from "@/lib/srs";
import { findLesson } from "@/content";
import { gradeTyped, type GradeResult } from "@/lib/grader";
import AnswerInput from "@/components/AnswerInput";
import { speak } from "@/lib/tts";
import { BODY2, BtnGhost, BtnPrimary, CRVENI, DoneCard, INK, Meta, MUTED, ProgressBar, GREEN, tint } from "@/ui/kit";

const KIND_LABEL: Record<SrsCard["kind"], string> = {
  recognition: "What does it mean?",
  production: "Say it in Croatian",
  listening: "Type what you hear",
  cloze: "Fill in the gap",
};

const FACE =
  "flex min-h-[300px] flex-col items-center justify-center rounded-[10px] border bg-[color:var(--card)] px-10 py-10 text-center max-[700px]:min-h-[240px] max-[700px]:px-5";

function faceSize(text: string): string {
  return text.length > 24 ? "clamp(20px,3.2vw,26px)" : "clamp(28px,4.6vw,40px)";
}

function CardFace({ eyebrow, big, sub, children, back }: { eyebrow: string; big: string; sub?: string; children?: React.ReactNode; back?: boolean }) {
  return (
    <div
      className={FACE}
      style={{ borderColor: "rgba(var(--ink-rgb),.1)", gridArea: "1/1", backfaceVisibility: "hidden", transform: back ? "rotateY(180deg)" : undefined }}
    >
      <div className="meta mb-5" style={{ color: MUTED }}>{eyebrow}</div>
      <div className="mb-3 font-bold" style={{ fontSize: faceSize(big), lineHeight: 1.2, letterSpacing: "-.02em", color: INK }}>{big}</div>
      {sub && <div className="text-sm" style={{ color: "var(--muted3)" }}>{sub}</div>}
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

  if (queue === null) return null;

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

  if (!card) {
    return (
      <div className="mx-auto w-full max-w-[560px]">
        <DoneCard icon={Check} title={total > 0 ? "Session complete" : "Nothing due"}>
          <div className="mx-auto mb-8 max-w-[420px] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
            {total > 0
              ? `You reviewed ${done} cards — ${counts.known} kept, ${counts.again} coming back sooner.`
              : "Your review inbox is clear. New cards arrive as you complete lessons."}
          </div>
          <div className="flex justify-center gap-3">
            <BtnPrimary onClick={() => nav("/")}>Back home</BtnPrimary>
            <BtnGhost onClick={() => nav("/practice")}>Practice more</BtnGhost>
          </div>
        </DoneCard>
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
    <div className="mt-4 flex gap-2 max-[700px]:flex-wrap">
      {(
        [
          [Rating.Again, "Again", CRVENI],
          [Rating.Hard, "Hard", "var(--orange)"],
          [Rating.Good, "Good", GREEN],
          [Rating.Easy, "Easy", "var(--blue)"],
        ] as const
      ).map(([r, label, color]) => (
        <button
          key={label}
          disabled={rating}
          onClick={() => void applyRating(r)}
          className="h-11 flex-1 rounded-lg border text-sm font-semibold transition-colors duration-150 disabled:opacity-50"
          style={{
            color,
            borderColor: suggested === r ? tint(color, 0.5) : "rgba(var(--ink-rgb),.12)",
            background: suggested === r ? tint(color, 0.09) : "transparent",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="flex items-baseline justify-between gap-4">
        <Meta>Review · card {Math.min(done + 1, total || done + 1)} of {total || done + 1}</Meta>
        <button onClick={() => nav("/practice")} className="meta inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-[color:var(--body)]" style={{ color: "var(--muted3)" }}>
          <X size={12} strokeWidth={2.4} />End session
        </button>
      </div>
      <ProgressBar pct={total ? (done / total) * 100 : 0} className="mb-8 mt-3" />

      {!typed ? (
        <>
          <button onClick={() => (revealed ? undefined : reveal())} className="mb-4 block w-full text-left" style={{ perspective: 1800 }}>
            <div className="grid" style={{ transformStyle: "preserve-3d", transition: "transform .6s cubic-bezier(.35,.15,.25,1)", transform: revealed ? "rotateY(180deg)" : "rotateY(0)" }}>
              <CardFace eyebrow={KIND_LABEL[card.kind]} big={card.front} sub="Tap to reveal" />
              <CardFace eyebrow="Answer" big={card.back} back>
                {card.tts && (
                  <button
                    onClick={(e) => { e.stopPropagation(); void speak(card.tts!); }}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[13px] transition-colors duration-150 hover:bg-[color:var(--tint)]"
                    style={{ borderColor: "rgba(var(--ink-rgb),.14)", color: BODY2 }}
                  >
                    <Volume2 size={14} color={MUTED} />Hear it
                  </button>
                )}
              </CardFace>
            </div>
          </button>
          {revealed ? (
            ratingButtons
          ) : (
            <button onClick={reveal} className="flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]" style={{ background: INK }}>
              Show meaning
            </button>
          )}
        </>
      ) : (
        <>
          <div className={`${FACE} mb-4`} style={{ borderColor: "rgba(var(--ink-rgb),.1)" }}>
            <div className="meta mb-5" style={{ color: MUTED }}>{KIND_LABEL[card.kind]}</div>
            {card.kind === "listening" ? (
              <button onClick={() => void speak(card.tts ?? card.back)} className="mb-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[15px] font-semibold text-white" style={{ background: INK }}>
                <Volume2 size={17} />Play audio
              </button>
            ) : (
              <div className="mb-6 font-bold" style={{ fontSize: faceSize(card.front), lineHeight: 1.2, letterSpacing: "-.02em", color: INK }}>{card.front}</div>
            )}
            {!revealed ? (
              <div className="w-full max-w-[420px]">
                <AnswerInput value={value} onChange={setValue} onSubmit={check} autoFocus placeholder="Type in Croatian…" />
                <button
                  disabled={!value.trim()}
                  onClick={check}
                  className="mt-3 flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold transition-colors duration-150"
                  style={value.trim() ? { background: INK, color: "#fff" } : { background: "rgba(var(--ink-rgb),.1)", color: "var(--muted2)", cursor: "default" }}
                >
                  Check answer
                </button>
              </div>
            ) : (
              <div className="w-full max-w-[420px] border-t pt-5" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
                {typedResult && (
                  <div className="mb-2 text-sm font-semibold" style={{ color: typedResult.verdict === "wrong" ? CRVENI : typedResult.verdict === "diacritics" ? "var(--orange)" : GREEN }}>
                    {typedResult.verdict === "wrong" ? "Not quite" : typedResult.verdict === "diacritics" ? "Correct — mind the diacritics" : "Točno — correct!"}
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 text-[22px] font-bold" style={{ letterSpacing: "-.01em", color: INK }}>
                  {card.back}
                  {card.tts && (
                    <button onClick={() => void speak(card.tts!)} aria-label="Hear it">
                      <Volume2 size={17} color={MUTED} />
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
  );
}
