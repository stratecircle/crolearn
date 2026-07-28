import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Check, Flag, MessageCircle, X } from "lucide-react";
import type { Lesson } from "@/types/content";
import { isQuizSlide } from "@/types/content";
import { db } from "@/lib/db";
import { seedCardsForLesson } from "@/lib/srs";
import SlideRenderer from "@/components/SlideRenderer";
import TutorChat from "@/features/tutor/TutorChat";
import { hasApiKey } from "@/lib/claude";
import { stopSpeaking } from "@/lib/tts";
import { ACCENT, Banner, BLUE, BODY2, BtnGhost, BtnPrimary, DoneCard, IconBtn, INK, MUTED, ORANGE, SHADOW_FLOAT } from "@/ui/kit";
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
 *
 * ČISTO player chrome: a slim full-width bar (exit · back · meta+title ·
 * position · tutor · flag) over a hairline, with the progress line living in
 * the bar's bottom edge. The slide sits alone in a centered column.
 */
export default function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const nav = useNavigate();
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
      <div className="m-auto w-full max-w-[640px] px-5 py-10">
        <DoneCard icon={Check} title="Lesson complete">
          <div className="mx-auto mb-1.5 max-w-[440px] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
            First-try accuracy: <strong style={{ color: INK }}>{pct}%</strong>
          </div>
          <div className="mx-auto mb-8 max-w-[440px] text-sm" style={{ color: BODY2 }}>
            {finished.newCards > 0
              ? `${finished.newCards} new cards added to your review deck.`
              : "This lesson's cards are already in your review deck."}
          </div>
          {pct < 60 && (
            <p className="mx-auto mb-8 max-w-md rounded-[10px] px-4 py-3 text-sm leading-relaxed" style={{ background: "var(--tint)", color: BODY2 }}>
              That was a tough one — totally normal. Before moving on, read this lesson's notes and
              replay it once; second passes usually feel completely different.
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            {pct < 60 && (
              <BtnGhost onClick={() => window.location.reload()}>Replay this lesson</BtnGhost>
            )}
            <BtnGhost icon={BookOpen} onClick={() => nav(`/notes/${lesson.id}`)}>Lesson notes</BtnGhost>
            <BtnPrimary onClick={() => nav("/")}>Back home</BtnPrimary>
          </div>
        </DoneCard>
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
      <header className="relative flex-none border-b" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
        <div className="mx-auto flex h-14 w-full max-w-[980px] items-center gap-1.5 px-4">
          <IconBtn icon={X} label="Exit lesson" onClick={() => nav("/")} />
          <IconBtn icon={ArrowLeft} label="Previous slide (nothing gets re-graded)" disabled={pos === 0} onClick={goBack} />
          <div className="min-w-0 flex-1 px-2">
            <div className="meta truncate" style={{ color: MUTED }}>
              {lesson.unitId.toUpperCase()}
              {currentSection && slide.type !== "section" ? ` · ${currentSection}` : ""}
            </div>
            <div className="truncate text-sm font-semibold leading-tight" style={{ color: INK, letterSpacing: "-.01em" }}>
              {lesson.title}
            </div>
          </div>
          <span className="meta whitespace-nowrap tabular-nums px-1" style={{ color: MUTED }}>
            {pos + 1}/{playlist.length}
          </span>
          {hasApiKey() && slideIndex !== 0 && slide.type !== "section" && (
            <IconBtn
              icon={MessageCircle}
              label="Ask the tutor about this slide"
              onClick={() => {
                stopSpeaking();
                setAskOpen(true);
              }}
            />
          )}
          <IconBtn
            icon={Flag}
            label="Report a mistake on this slide"
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
          />
        </div>
        {/* progress lives in the header's bottom edge */}
        <div className="absolute bottom-[-1px] left-0 h-[2px]" style={{ width: `${progressPct}%`, background: ACCENT, transition: "width 300ms ease" }} />
      </header>

      {/* The stage: slide centered in the remaining viewport, like a projector deck. */}
      <div className="flex flex-1 overflow-y-auto">
        <div className="m-auto w-full max-w-[640px] px-5 py-8">
          {pos < maxPos && <Banner color={INK}>Looking back — answers here don't count; step forward to continue.</Banner>}
          {isRetry && pos >= maxPos && <Banner color={ORANGE}>Retry — let's get it right!</Banner>}
          {slide.review && !isRetry && <Banner color={BLUE}>Review from an earlier lesson</Banner>}
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
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 sm:items-center sm:p-4"
          onClick={() => setAskOpen(false)}
        >
          <div
            className="flex h-[85dvh] w-full max-w-2xl flex-col rounded-t-2xl bg-[color:var(--card)] p-5 sm:h-[80dvh] sm:rounded-xl"
            style={{ boxShadow: SHADOW_FLOAT }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[15px] font-semibold" style={{ color: INK }}>Ask about this slide</h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setAskOpen(false)}
                className="rounded-lg p-1.5 transition-colors duration-150 hover:bg-[color:var(--tint)]"
              >
                <X size={18} color={MUTED} />
              </button>
            </div>
            <div className="min-h-0 flex-1">
              <TutorChat
                seedFocus={`Lesson: "${lesson.title}". The slide the learner is asking about (raw JSON):\n${JSON.stringify(slide)}`}
                seedPrompt="Can you explain this slide?"
                emptyHint="Ask me anything about this slide"
                starters={["Can you explain this slide?", "Give me another example", "Break down the grammar here"]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
