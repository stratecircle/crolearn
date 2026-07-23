import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Lesson } from "@/types/content";
import { isQuizSlide } from "@/types/content";
import { db } from "@/lib/db";
import { seedCardsForLesson } from "@/lib/srs";
import SlideRenderer from "@/components/SlideRenderer";
import TutorChat from "@/features/tutor/TutorChat";
import { hasApiKey } from "@/lib/claude";
import { stopSpeaking } from "@/lib/tts";
import {
  advance,
  firstTryAccuracy,
  goBack as deckGoBack,
  initDeck,
  isRetryPosition,
  type DeckState,
} from "./deckMachine";

/**
 * Thin React shell over the pure deck state machine (deckMachine.ts) —
 * retry/accuracy semantics live and are tested there. Completion persists
 * progress and seeds SRS cards.
 */
export default function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const quizTotal = useMemo(() => lesson.slides.filter(isQuizSlide).length, [lesson]);
  const [deck, setDeck] = useState<DeckState>(() => initDeck(lesson.slides.length));
  const [finished, setFinished] = useState<{ accuracy: number; newCards: number } | null>(null);
  /** Forces a remount of a replayed slide so its local state resets. */
  const [runId, setRunId] = useState(0);
  /** "Ask the tutor about this slide" overlay (kept mounted over the lesson so
   *  the learner's in-lesson position survives the detour). */
  const [askOpen, setAskOpen] = useState(false);

  const { playlist, pos, maxPos } = deck;
  const slideIndex = playlist[pos];
  const slide = lesson.slides[slideIndex];
  const lastIndex = lesson.slides.length - 1;

  const complete = useCallback(
    async (finalDeck: DeckState) => {
      const accuracy = firstTryAccuracy(finalDeck, quizTotal);
      const prev = await db.lessonProgress.get(lesson.id);
      await db.lessonProgress.put({
        lessonId: lesson.id,
        completedAt: new Date(),
        firstAttemptAccuracy: accuracy,
        attempts: (prev?.attempts ?? 0) + 1,
      });
      const newCards = await seedCardsForLesson(lesson);
      setFinished({ accuracy, newCards });
    },
    [lesson, quizTotal],
  );

  const onDone = useCallback(
    (correct: boolean) => {
      stopSpeaking();
      const next = advance(deck, {
        slideId: slide.id,
        isQuiz: isQuizSlide(slide),
        correct,
        lastIndex,
      });
      setDeck(next);
      setRunId((r) => r + 1);
      if (next.finished) void complete(next);
    },
    [deck, slide, lastIndex, complete],
  );

  const goBack = useCallback(() => {
    if (pos === 0) return;
    stopSpeaking();
    setDeck(deckGoBack(deck));
    setRunId((r) => r + 1);
  }, [deck, pos]);

  if (finished) {
    const pct = Math.round(finished.accuracy * 100);
    return (
      <div className="m-auto w-full max-w-xl py-10 text-center">
        <div className="text-6xl">{pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h2 className="mt-3 text-3xl font-black">Lesson complete!</h2>
        <p className="mt-2 text-lg text-stone-600">
          First-try accuracy: <strong>{pct}%</strong>
        </p>
        <p className="text-stone-600">
          {finished.newCards > 0
            ? `${finished.newCards} new cards added to your review deck.`
            : "This lesson's cards are already in your review deck."}
        </p>
        {pct < 60 && (
          <p className="mx-auto mt-4 max-w-md rounded-xl bg-amber-50 p-3 text-sm text-amber-800">
            💡 That was a tough one — totally normal. Before moving on, read this lesson's notes
            and replay it once; second passes usually feel completely different.
          </p>
        )}
        <div className="mt-6 grid gap-3">
          {pct < 60 && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-xl border-2 border-amber-500 bg-amber-50 py-3 font-bold text-amber-800 hover:bg-amber-100"
            >
              🔁 Replay this lesson
            </button>
          )}
          <Link
            to={`/notes/${lesson.id}`}
            className="rounded-xl border-2 border-stone-900 py-3 font-bold hover:bg-stone-100"
          >
            📓 Open lesson notes
          </Link>
          <Link to="/" className="rounded-xl bg-stone-900 py-3 font-bold text-white hover:bg-stone-700">
            Back to the path →
          </Link>
        </div>
      </div>
    );
  }

  const progressPct = Math.round((pos / playlist.length) * 100);
  const isRetry = isRetryPosition(deck);

  // The section this slide belongs to = the nearest section slide at or before it.
  let currentSection: string | null = null;
  for (let i = slideIndex; i >= 0; i--) {
    const s = lesson.slides[i];
    if (s.type === "section") {
      currentSection = i === 0 ? null : s.title; // the lesson menu isn't a "part"
      break;
    }
  }

  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 py-3">
        <Link to="/" aria-label="Exit lesson" className="text-2xl text-stone-400 hover:text-stone-700">
          ✕
        </Link>
        <button
          type="button"
          aria-label="Previous slide"
          title="Go back a slide (nothing gets re-graded)"
          disabled={pos === 0}
          onClick={goBack}
          className="text-xl font-black text-stone-400 hover:text-stone-700 disabled:opacity-25"
        >
          ←
        </button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-stone-200">
          <div className="h-full rounded-full bg-green-600 transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="text-sm font-bold text-stone-500">
          {pos + 1}/{playlist.length}
        </span>
        {hasApiKey() && slideIndex !== 0 && slide.type !== "section" && (
          <button
            type="button"
            title="Ask the tutor about this slide"
            className="text-lg opacity-40 hover:opacity-100"
            onClick={() => {
              stopSpeaking();
              setAskOpen(true);
            }}
          >
            💬
          </button>
        )}
        <button
          type="button"
          title="Report a mistake on this slide"
          className="text-lg opacity-40 hover:opacity-100"
          onClick={() => {
            const note = window.prompt("What looks wrong on this slide? (saved for review)");
            if (note?.trim()) {
              void db.errorReports.add({
                lessonId: lesson.id,
                slideId: slide.id,
                note: note.trim(),
                createdAt: new Date(),
              });
            }
          }}
        >
          🚩
        </button>
      </div>
      {currentSection && slide.type !== "section" && (
        <p className="text-center text-xs font-black uppercase tracking-widest text-stone-400">
          {currentSection}
        </p>
      )}
      {/* The stage: slide centered in the remaining viewport, like a projector deck. */}
      <div className="flex flex-1 overflow-y-auto">
        <div className="m-auto w-full max-w-2xl py-6">
          {pos < maxPos && (
            <p className="mb-3 rounded-lg bg-stone-100 px-3 py-1.5 text-sm font-semibold text-stone-600">
              👀 Looking back — answers here don't count; step forward to continue.
            </p>
          )}
          {isRetry && pos >= maxPos && (
            <p className="mb-3 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">
              🔁 Retry — let's get it right!
            </p>
          )}
          {slide.review && !isRetry && (
            <p className="mb-3 rounded-lg bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-800">
              ⏪ Review from an earlier lesson
            </p>
          )}
          <SlideRenderer
            key={`${slide.id}-${runId}`}
            slide={slide}
            vocab={lesson.vocab}
            isLessonMenu={slideIndex === 0}
            onDone={onDone}
          />
        </div>
      </div>

      {askOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4"
          onClick={() => setAskOpen(false)}
        >
          <div
            className="flex h-[85dvh] w-full max-w-2xl flex-col rounded-t-2xl bg-stone-50 p-4 shadow-2xl sm:h-[80dvh] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-black">💬 Ask about this slide</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setAskOpen(false)}
                className="text-2xl leading-none text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <TutorChat
                seedFocus={`Lesson: "${lesson.title}". The slide the learner is asking about (raw JSON):\n${JSON.stringify(slide)}`}
                seedPrompt="Can you explain this slide?"
                emptyHint="Ask me anything about this slide 👇"
                starters={["Can you explain this slide?", "Give me another example", "Break down the grammar here"]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
