import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db, type SrsCard } from "@/lib/db";
import { getDueCards, isTypedCard, rate, Rating, seedCardsForLesson } from "@/lib/srs";
import { findLesson } from "@/content";
import { gradeTyped, type GradeResult } from "@/lib/grader";
import AnswerInput from "@/components/AnswerInput";
import TtsButton from "@/components/TtsButton";
import { speak } from "@/lib/tts";

/**
 * FSRS review session (§6): typed kinds are auto-graded first (suggests a
 * rating), then the learner confirms with the 4 buttons. Again-rated cards
 * come back within the same session (they become due immediately).
 */
export default function ReviewPage() {
  const [queue, setQueue] = useState<SrsCard[] | null>(null);
  const [done, setDone] = useState(0);
  const [value, setValue] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [typedResult, setTypedResult] = useState<GradeResult | null>(null);
  const [rating, setRating] = useState(false);

  const load = useCallback(async () => {
    // Backfill (idempotent): lessons completed before newer card types existed
    // (e.g. the cloze grammar cards) get their missing cards seeded here.
    const completed = await db.lessonProgress.toArray();
    for (const p of completed) {
      const lesson = findLesson(p.lessonId);
      if (lesson) await seedCardsForLesson(lesson);
    }
    setQueue(await getDueCards());
  }, []);
  useEffect(() => {
    void load();
  }, [load]);

  // Think time for the review log: reset whenever a new card is shown.
  const currentCardId = queue?.[0]?.id;
  const shownAtRef = useRef(performance.now());
  useEffect(() => {
    shownAtRef.current = performance.now();
  }, [currentCardId, done]);

  if (queue === null) return <p className="py-10 text-center text-stone-400">Loading…</p>;

  const card = queue[0];
  if (!card) {
    return (
      <div className="py-16 text-center">
        <div className="text-6xl">🎉</div>
        <h2 className="mt-3 text-2xl font-black">All reviewed!</h2>
        <p className="mt-1 text-stone-600">{done > 0 ? `${done} cards today. Nice work!` : "Nothing due today."}</p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 font-bold text-white">
          Back to the path →
        </Link>
      </div>
    );
  }

  const typed = isTypedCard(card.kind);
  const answers = card.answers ?? [card.back];

  const applyRating = async (r: (typeof Rating)[keyof typeof Rating] & number) => {
    if (rating) return; // guard against double-click double-rating
    setRating(true);
    try {
      const updated = await rate(card, r as 1 | 2 | 3 | 4, new Date(), performance.now() - shownAtRef.current);
      const rest = queue.slice(1);
      // Again → the card is due again shortly; keep it in this session's queue.
      setQueue(r === Rating.Again ? [...rest, updated] : rest);
      setDone((d) => d + 1);
      setValue("");
      setRevealed(false);
      setTypedResult(null);
    } finally {
      setRating(false);
    }
  };

  const check = () => {
    const res = gradeTyped(value, answers);
    setTypedResult(res);
    setRevealed(true);
    if (card.tts) void speak(card.tts);
  };

  const KIND_LABEL: Record<SrsCard["kind"], string> = {
    recognition: "What does it mean?",
    production: "How do you say it in Croatian?",
    listening: "Type what you hear",
    cloze: "Fill in the gap",
  };

  const suggested: number | null = typedResult
    ? typedResult.verdict === "wrong"
      ? Rating.Again
      : typedResult.verdict === "diacritics"
        ? Rating.Hard
        : Rating.Good
    : null;

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-stone-500">
        <span>🃏 Review</span>
        <span>{queue.length} left</span>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-xs font-black uppercase tracking-wide text-stone-400">{KIND_LABEL[card.kind]}</p>
        <div className="mt-2 text-3xl font-bold">
          {card.kind === "listening" ? (
            <TtsButton text={card.tts ?? card.back} label="Listen" className="!px-4 !py-2 !text-lg" />
          ) : (
            <>
              {card.front}
              {card.kind === "recognition" && card.tts && <TtsButton text={card.tts} className="ml-2 align-middle" />}
            </>
          )}
        </div>

        {typed && !revealed && (
          <div className="mt-5">
            <AnswerInput value={value} onChange={setValue} onSubmit={check} autoFocus placeholder="Your answer…" />
            <button
              type="button"
              disabled={!value.trim()}
              onClick={check}
              className="mt-3 w-full rounded-xl bg-stone-900 py-2.5 font-bold text-white disabled:opacity-40"
            >
              Check
            </button>
          </div>
        )}

        {!typed && !revealed && (
          <button
            type="button"
            autoFocus
            onClick={() => {
              setRevealed(true);
              if (card.tts && card.kind === "recognition") void speak(card.tts);
            }}
            className="mt-5 w-full rounded-xl bg-stone-900 py-2.5 font-bold text-white"
          >
            Show answer
          </button>
        )}

        {revealed && (
          <div className="mt-5">
            {typedResult && (
              <p className={`font-bold ${typedResult.verdict === "wrong" ? "text-red-700" : typedResult.verdict === "diacritics" ? "text-amber-700" : "text-green-700"}`}>
                {typedResult.verdict === "wrong" ? "❌ Not quite" : typedResult.verdict === "diacritics" ? "🟡 Correct — mind the diacritics" : "✅ Correct"}
              </p>
            )}
            <p className="mt-1 text-2xl font-semibold">
              {card.back} {card.tts && card.kind !== "recognition" && <TtsButton text={card.tts} />}
            </p>
          </div>
        )}
      </div>

      {revealed && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {(
            [
              [Rating.Again, "Again", "bg-red-600"],
              [Rating.Hard, "Hard", "bg-amber-500"],
              [Rating.Good, "Good", "bg-green-600"],
              [Rating.Easy, "Easy", "bg-sky-600"],
            ] as const
          ).map(([r, label, color]) => (
            <button
              key={label}
              type="button"
              disabled={rating}
              onClick={() => void applyRating(r)}
              className={`rounded-xl py-3 font-bold text-white disabled:opacity-50 ${color} ${suggested === r ? "ring-4 ring-stone-900/40" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
