/**
 * Flashcards — the FSRS review session.
 * CroLearn's SRS is 4-button FSRS (CLAUDE.md): Again / Hard / Good / Easy,
 * each in its own semantic colour, the FSRS-suggested one washed in that colour.
 * Recognition cards use the 3D flip; typed kinds keep the answer input +
 * grading, then rate.
 *
 * The card is a real elevated object, and the answer side carries the picture
 * the word was taught with — an app about learning words should show the words'
 * pictures. Images are decorative here (`alt=""`): the answer text beside them
 * already carries the meaning.
 *
 * Desktop keyboard: Space flips the card, 1–4 rate it once it's face-up, Esc
 * leaves the session. Every shortcut is shown where it applies — the digit sits
 * under its rating button, the Space hint under the flip.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Volume2, X } from "lucide-react";
import { db, type SrsCard } from "@/lib/db";
import { getDueCards, isTypedCard, rate, Rating, seedCardsForLesson } from "@/lib/srs";
import { allLessons, findLesson } from "@/content";
import { gradeTyped, type GradeResult } from "@/lib/grader";
import AnswerInput from "@/components/AnswerInput";
import { speak } from "@/lib/tts";
import { useHotkeys } from "@/lib/hotkeys";
import { BODY2, BORDER, BtnGhost, BtnPrimary, Card, CRVENI, DIVIDER, DoneCard, GREEN, INK, Kbd, MUTED, Panel, ProgressBar, tint, View, ViewBody } from "@/ui/kit";
import { ForecastBars } from "@/ui/charts";
import { loadInsights, type Insights } from "@/features/nativ/insights";

const KIND_LABEL: Record<SrsCard["kind"], string> = {
  recognition: "What does it mean?",
  production: "Say it in Croatian",
  listening: "Type what you hear",
  cloze: "Fill in the gap",
};

/** vocabId → the picture that item was taught with. Static, so built once. */
const VOCAB_IMAGES = new Map<string, string>(
  allLessons.flatMap((l) => l.vocab.filter((v) => v.image).map((v) => [v.id, v.image as string] as const)),
);

const FACE =
  "flex min-h-[260px] flex-col items-center justify-center rounded-xl border bg-[color:var(--card)] px-10 py-9 text-center max-[700px]:min-h-[220px] max-[700px]:px-5";

/** The card is the one genuinely elevated surface on this screen. */
const FACE_STYLE = { borderColor: BORDER, boxShadow: "var(--e2)" } as const;

function faceSize(text: string): string {
  return text.length > 24 ? "clamp(20px,3.2vw,26px)" : "clamp(28px,4.6vw,40px)";
}

/** The taught picture, sized to sit above the answer without crowding it. */
function CardPicture({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="mb-5 h-[104px] w-[104px] flex-none rounded-xl object-contain p-2 max-[700px]:h-[84px] max-[700px]:w-[84px]"
      style={{ background: "var(--tint)" }}
    />
  );
}

function CardFace({ eyebrow, big, sub, image, children, back }: { eyebrow: string; big: string; sub?: string; image?: string; children?: React.ReactNode; back?: boolean }) {
  return (
    <div
      className={FACE}
      style={{ ...FACE_STYLE, gridArea: "1/1", backfaceVisibility: "hidden", transform: back ? "rotateY(180deg)" : undefined }}
    >
      <div className="meta mb-5" style={{ color: MUTED }}>{eyebrow}</div>
      {image && <CardPicture src={image} />}
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
  const [ins, setIns] = useState<Insights | null>(null);

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

  // The end-of-session screen shows a real figure, so the forecast is loaded
  // once the queue runs dry (and on arrival when nothing was due at all).
  useEffect(() => {
    if (queue !== null && queue.length === 0) void loadInsights().then(setIns);
  }, [queue]);

  const card: SrsCard | undefined = queue?.[0];
  const currentCardId = card?.id;
  const shownAtRef = useRef(performance.now());
  useEffect(() => {
    shownAtRef.current = performance.now();
  }, [currentCardId, done]);

  const typed = card ? isTypedCard(card.kind) : false;

  const applyRating = async (r: 1 | 2 | 3 | 4) => {
    if (rating || !card || !queue) return;
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

  const reveal = () => {
    if (!card) return;
    setRevealed(true);
    if (card.tts && card.kind === "recognition") void speak(card.tts);
  };

  /*
   * Space flips, 1–4 rate, Esc exits. The hotkey lib already ignores bare
   * chords while focus is in the typed card's input, so typing "1" into an
   * answer never rates the card.
   */
  useHotkeys(
    {
      escape: () => nav("/practice"),
      " ": (e) => {
        if (!card || typed || revealed) return;
        e.preventDefault();
        reveal();
      },
      "1": () => {
        if (card && revealed) void applyRating(Rating.Again);
      },
      "2": () => {
        if (card && revealed) void applyRating(Rating.Hard);
      },
      "3": () => {
        if (card && revealed) void applyRating(Rating.Good);
      },
      "4": () => {
        if (card && revealed) void applyRating(Rating.Easy);
      },
    },
    [card, queue, typed, revealed, rating, nav],
  );

  if (queue === null) return null;

  const pos = Math.min(done + 1, total || done + 1);
  const outOf = total || done + 1;

  if (!card) {
    const finished = total > 0;
    const summary: { v: number; k: string; c: string }[] = [
      { v: done, k: "Reviewed", c: INK },
      { v: counts.known, k: "Kept", c: GREEN },
      { v: counts.again, k: "Again", c: CRVENI },
    ];
    return (
      <View title="Review" sub={finished ? `${done} reviewed` : "Inbox clear"}>
        <ViewBody>
          <div className="mx-auto w-full max-w-[560px]">
            <Card className="rise rise-1 overflow-hidden">
              <DoneCard icon={Check} title={finished ? "Session complete" : "Nothing due"}>
                <div className="mx-auto mb-8 max-w-[420px] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
                  {finished
                    ? `You reviewed ${done} cards — ${counts.known} kept, ${counts.again} coming back sooner.`
                    : "Your review inbox is clear. New cards arrive as you complete lessons."}
                </div>
                <div className="flex justify-center gap-3">
                  <BtnPrimary onClick={() => nav("/")}>Back home</BtnPrimary>
                  <BtnGhost onClick={() => nav("/practice")}>Practice more</BtnGhost>
                </div>
              </DoneCard>
              {finished && (
                <div className="grid grid-cols-3 divide-x divide-[rgba(var(--ink-rgb),.08)] border-t" style={{ borderColor: DIVIDER }}>
                  {summary.map((s) => (
                    <div key={s.k} className="px-4 py-4 text-center">
                      <div className="tabular-nums font-bold leading-none" style={{ fontSize: 24, letterSpacing: "-.03em", color: s.c }}>{s.v}</div>
                      <div className="meta mt-1.5" style={{ color: MUTED }}>{s.k}</div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Panel
              className="rise rise-2 mt-5"
              title="Review forecast"
              right={
                <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                  {ins ? `${ins.reviewsToday} today` : ""}
                </span>
              }
            >
              {ins ? <ForecastBars bars={ins.forecast} /> : <div style={{ height: 118 }} />}
              {ins && ins.forecast.every((b) => b.value === 0) && (
                <p className="mt-3 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                  Nothing scheduled for the next week — finish a lesson to seed new cards.
                </p>
              )}
            </Panel>
          </div>
        </ViewBody>
      </View>
    );
  }

  const image = card.vocabId ? VOCAB_IMAGES.get(card.vocabId) : undefined;
  const answers = card.answers ?? [card.back];
  const check = () => {
    const res = gradeTyped(value, answers);
    setTypedResult(res);
    setRevealed(true);
    if (card.tts) void speak(card.tts);
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
          [Rating.Again, "Again", CRVENI, "1"],
          [Rating.Hard, "Hard", "var(--orange)", "2"],
          [Rating.Good, "Good", GREEN, "3"],
          [Rating.Easy, "Easy", "var(--blue)", "4"],
        ] as const
      ).map(([r, label, color, digit]) => (
        <button
          key={label}
          disabled={rating}
          onClick={() => void applyRating(r)}
          className="lift flex h-14 flex-1 flex-col items-center justify-center gap-1.5 rounded-lg border bg-[color:var(--card)] text-sm font-semibold disabled:opacity-50"
          style={{
            color,
            borderColor: suggested === r ? tint(color, 0.5) : "rgba(var(--ink-rgb),.12)",
            background: suggested === r ? tint(color, 0.09) : "var(--card)",
            boxShadow: suggested === r ? "var(--e1)" : undefined,
          }}
        >
          {label}
          <Kbd>{digit}</Kbd>
        </button>
      ))}
    </div>
  );

  const remaining = queue.length;

  return (
    <View
      title="Review"
      sub={`${pos} of ${outOf}`}
      actions={
        <button
          onClick={() => nav("/practice")}
          className="meta inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-[color:var(--body)]"
          style={{ color: "var(--muted3)" }}
        >
          <X size={12} strokeWidth={2.4} />End session
          <Kbd>Esc</Kbd>
        </button>
      }
    >
      <ViewBody>
        <div className="mx-auto w-full max-w-[560px]">
          {/* ── where the session stands ─────────────────────────────── */}
          <div className="rise rise-1 mb-7">
            <div className="mb-3 flex items-end justify-between gap-4">
              <div>
                <div className="meta" style={{ color: MUTED }}>Remaining</div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="tabular-nums font-bold leading-none" style={{ fontSize: 26, letterSpacing: "-.035em", color: INK }}>
                    {remaining}
                  </span>
                  <span className="text-[13px]" style={{ color: MUTED }}>{remaining === 1 ? "card" : "cards"}</span>
                </div>
              </div>
              <div className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{pos} of {outOf}</div>
            </div>
            <ProgressBar pct={total ? (done / total) * 100 : 0} />
          </div>

          <div className="rise rise-2">
            {!typed ? (
              <>
                <button onClick={() => (revealed ? undefined : reveal())} className="mb-4 block w-full text-left" style={{ perspective: 1800 }}>
                  <div className="grid" style={{ transformStyle: "preserve-3d", transition: "transform .6s cubic-bezier(.35,.15,.25,1)", transform: revealed ? "rotateY(180deg)" : "rotateY(0)" }}>
                    <CardFace eyebrow={KIND_LABEL[card.kind]} big={card.front} sub="Tap to reveal" />
                    <CardFace eyebrow="Answer" big={card.back} image={image} back>
                      {card.tts && (
                        <button
                          onClick={(e) => { e.stopPropagation(); void speak(card.tts!); }}
                          className="mt-5 inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[13px] transition-colors duration-150 hover:bg-[color:var(--tint)]"
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
                  <>
                    <button onClick={reveal} className="flex h-12 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]" style={{ background: INK }}>
                      Show meaning
                    </button>
                    <div className="meta mt-3 flex items-center justify-center gap-1.5" style={{ color: "var(--muted3)" }}>
                      <Kbd>Space</Kbd> to flip
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className={`${FACE} mb-4`} style={FACE_STYLE}>
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
                    <div className="w-full max-w-[420px] border-t pt-5" style={{ borderColor: DIVIDER }}>
                      {typedResult && (
                        <div className="mb-2 text-sm font-semibold" style={{ color: typedResult.verdict === "wrong" ? CRVENI : typedResult.verdict === "diacritics" ? "var(--orange)" : GREEN }}>
                          {typedResult.verdict === "wrong" ? "Not quite" : typedResult.verdict === "diacritics" ? "Correct — mind the diacritics" : "Točno — correct!"}
                        </div>
                      )}
                      {image && (
                        <div className="flex justify-center">
                          <CardPicture src={image} />
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
        </div>
      </ViewBody>
    </View>
  );
}
