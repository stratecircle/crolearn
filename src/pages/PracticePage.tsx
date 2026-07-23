import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { QuizSlide } from "@/types/content";
import { allUnits, findTest, courseGrounding } from "@/content";
import { aiErrorMessage, gradeFreeForm, generateExercises, hasApiKey, type AiGradeResult } from "@/lib/claude";
import { db, type SrsCard } from "@/lib/db";
import { getLeeches } from "@/lib/srs";
import { stopSpeaking } from "@/lib/tts";
import SlideRenderer from "@/components/SlideRenderer";
import { advance, firstTryAccuracy, initDeck, isRetryPosition, type DeckState } from "@/features/lesson/deckMachine";

/** A weak spot fed to the exercise generator, with a human-readable label. */
type WeakSpot = { label: string; focusLine: string };

/** Free-writing tasks, gated to units that exist (index into allUnits). */
const WRITING_TASKS: { unitIndex: number; task: string }[] = [
  { unitIndex: 0, task: "Say hello, introduce yourself (Ja sam… / Zovem se…), say how you are today, and say goodbye." },
  { unitIndex: 1, task: "Say where you are from, your nationality, which languages you speak, and what your profession is." },
  { unitIndex: 2, task: "Describe your family in 3–4 sentences: who they are, whose they are, what they are like, and what pets you have (or don't have)." },
];

/** Describe a missed test slide in one line for the generator. */
function describeTestSlide(testId: string, slideId: string): string | null {
  const test = findTest(testId);
  if (!test) return null;
  const slide = test.sections.flatMap((s) => s.slides).find((s) => s.id === slideId);
  if (!slide) return null;
  switch (slide.type) {
    case "mc":
      return `Missed test question: "${slide.prompt}"${"tts" in slide && slide.tts ? ` (audio: "${slide.tts}")` : ""}`;
    case "fill":
      return `Missed fill-in: "${slide.text}" (answer: ${slide.blanks.map((b) => b[0]).join(", ")})`;
    case "listen-type":
      return `Missed dictation: "${slide.tts}"`;
    case "match":
      return `Missed matching: ${slide.pairs.map((p) => p.a).join(", ")}`;
    default:
      return null;
  }
}

function leechLine(c: SrsCard): string {
  return `Leech card (${c.kind}, lesson ${c.lessonId}): "${c.front}" → "${c.back}"`;
}

/* ---------------------------- drill runner ---------------------------- */

/**
 * Minimal player over generated quiz slides: same retry semantics as
 * LessonPlayer (wrong answers replay at the end, shuffled; accuracy =
 * first attempts) but nothing persists — this is extra practice.
 */
function PracticeRunner({ slides, onExit }: { slides: QuizSlide[]; onExit: () => void }) {
  const [deck, setDeck] = useState<DeckState>(() => initDeck(slides.length));
  const [runId, setRunId] = useState(0);

  const { playlist, pos } = deck;
  const slide = slides[playlist[pos]];

  const onDone = useCallback(
    (correct: boolean) => {
      stopSpeaking();
      // lastIndex: -1 — practice decks have no recap slide, so pending
      // retries splice only at the very end of the playlist.
      setDeck(advance(deck, { slideId: slide.id, isQuiz: true, correct, lastIndex: -1 }));
      setRunId((r) => r + 1);
    },
    [deck, slide],
  );

  if (deck.finished) {
    const pct = Math.round(firstTryAccuracy(deck, slides.length) * 100);
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
        <div className="text-5xl">{pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h2 className="mt-2 text-2xl font-black">Practice set complete!</h2>
        <p className="mt-1 text-stone-600">
          First-try accuracy: <strong>{pct}%</strong>
        </p>
        <button
          type="button"
          onClick={onExit}
          className="mt-4 rounded-xl bg-stone-900 px-6 py-3 font-bold text-white hover:bg-stone-700"
        >
          Back to practice →
        </button>
      </div>
    );
  }

  const isRetry = isRetryPosition(deck);
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <button
          type="button"
          onClick={onExit}
          aria-label="Exit practice set"
          className="text-xl text-stone-400 hover:text-stone-700"
        >
          ✕
        </button>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-green-600 transition-all"
            style={{ width: `${Math.round((pos / playlist.length) * 100)}%` }}
          />
        </div>
        <span className="text-sm font-bold text-stone-500">
          {pos + 1}/{playlist.length}
        </span>
      </div>
      {isRetry && (
        <p className="mb-3 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-800">
          🔁 Retry — let's get it right!
        </p>
      )}
      <SlideRenderer key={`${slide.id}-${runId}`} slide={slide} vocab={[]} onDone={onDone} />
    </div>
  );
}

/* ------------------------------- page ------------------------------- */

export default function PracticePage() {
  const keyPresent = hasApiKey();
  const [weakSpots, setWeakSpots] = useState<WeakSpot[]>([]);
  const [loadingSpots, setLoadingSpots] = useState(true);

  const [generating, setGenerating] = useState(false);
  const [drillError, setDrillError] = useState<string | null>(null);
  const [drill, setDrill] = useState<QuizSlide[] | null>(null);

  const tasks = useMemo(() => WRITING_TASKS.filter((t) => t.unitIndex < allUnits.length), []);
  const [taskIdx, setTaskIdx] = useState(() => Math.floor(Math.random() * Math.max(1, tasks.length)));
  const [writing, setWriting] = useState("");
  const [grading, setGrading] = useState(false);
  const [gradeError, setGradeError] = useState<string | null>(null);
  const [grade, setGrade] = useState<AiGradeResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const spots: WeakSpot[] = [];
      const leeches = await getLeeches();
      for (const c of leeches.slice(0, 10)) {
        spots.push({ label: `🩹 ${c.front} → ${c.back}`, focusLine: leechLine(c) });
      }
      // Latest result per test; its wrong items are prime practice targets.
      const results = await db.testResults.toArray();
      const latestByTest = new Map<string, (typeof results)[number]>();
      for (const r of results) {
        const prev = latestByTest.get(r.testId);
        if (!prev || r.takenAt > prev.takenAt) latestByTest.set(r.testId, r);
      }
      for (const r of latestByTest.values()) {
        for (const sid of r.wrongSlideIds) {
          const line = describeTestSlide(r.testId, sid);
          if (line) spots.push({ label: `❌ ${line.replace(/^Missed /, "")}`, focusLine: line });
        }
      }
      if (!cancelled) {
        setWeakSpots(spots);
        setLoadingSpots(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const generate = useCallback(async () => {
    setGenerating(true);
    setDrillError(null);
    try {
      const latest = allUnits[allUnits.length - 1];
      const focus = weakSpots.length
        ? weakSpots.map((s) => s.focusLine).join("\n")
        : `No specific weak points recorded — build a varied mixed review of ${latest.levelId} Unit ${latest.number} "${latest.title}" (${latest.theme}), lightly sampling earlier units.`;
      const slides = await generateExercises({ focus, levelContext: courseGrounding({ includeVocab: true }), count: 8 });
      if (!slides.length) throw new Error("empty");
      // Re-id defensively: generated ids may collide with each other.
      setDrill(slides.map((s, i) => ({ ...s, id: `p${String(i).padStart(2, "0")}` }) as QuizSlide));
    } catch (e) {
      setDrillError((e as Error).message === "empty" ? "The model returned no usable exercises — try again." : aiErrorMessage(e));
    } finally {
      setGenerating(false);
    }
  }, [weakSpots]);

  const gradeWriting = useCallback(async () => {
    if (!writing.trim()) return;
    setGrading(true);
    setGradeError(null);
    setGrade(null);
    try {
      const result = await gradeFreeForm({
        task: tasks[taskIdx]?.task ?? WRITING_TASKS[0].task,
        learnerAnswer: writing.trim(),
        levelContext: courseGrounding(),
      });
      setGrade(result);
    } catch (e) {
      setGradeError(aiErrorMessage(e));
    } finally {
      setGrading(false);
    }
  }, [writing, tasks, taskIdx]);

  if (drill) {
    return (
      <div className="py-6">
        <PracticeRunner slides={drill} onExit={() => setDrill(null)} />
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-3xl font-black">🎯 Practice more</h1>
      <p className="mt-1 text-stone-600">
        AI-generated drills aimed at your weak spots, plus free writing with feedback.
      </p>

      {!keyPresent && (
        <div className="mt-4 rounded-xl bg-amber-50 p-4 text-amber-800">
          These features need your Anthropic API key.{" "}
          <Link to="/settings" className="font-bold underline">
            Add it in Settings →
          </Link>{" "}
          Everything else in the app works without it.
        </div>
      )}

      <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-black">Targeted drills</h2>
        {loadingSpots ? (
          <p className="mt-2 text-sm text-stone-500">Checking your review deck and test history…</p>
        ) : weakSpots.length ? (
          <>
            <p className="mt-2 text-sm text-stone-600">
              Aiming at your {weakSpots.length} recorded weak spot{weakSpots.length === 1 ? "" : "s"}:
            </p>
            <ul className="mt-2 max-h-48 space-y-1 overflow-y-auto text-sm">
              {weakSpots.map((s, i) => (
                <li key={i} className="truncate rounded-lg bg-stone-50 px-3 py-1.5">
                  {s.label}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-2 text-sm text-stone-600">
            No leeches or missed test answers recorded yet — you'll get a mixed review of your latest
            unit instead.
          </p>
        )}
        <button
          type="button"
          disabled={!keyPresent || generating || loadingSpots}
          onClick={() => void generate()}
          className="mt-4 w-full rounded-xl bg-stone-900 py-3 font-bold text-white hover:bg-stone-700 disabled:opacity-40"
        >
          {generating ? "Generating exercises…" : "Generate a practice set (8 exercises)"}
        </button>
        {drillError && <p className="mt-2 text-sm font-semibold text-red-700">{drillError}</p>}
      </section>

      {tasks.length > 0 && (
        <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-black">✍️ Free writing</h2>
            <button
              type="button"
              onClick={() => {
                setTaskIdx((i) => (i + 1) % tasks.length);
                setGrade(null);
                setGradeError(null);
              }}
              className="rounded-full px-3 py-1 text-sm font-semibold text-stone-600 hover:bg-stone-100"
            >
              🎲 Another task
            </button>
          </div>
          <p className="mt-2 rounded-lg bg-stone-50 px-3 py-2 text-sm">{tasks[taskIdx]?.task}</p>
          <textarea
            value={writing}
            onChange={(e) => setWriting(e.target.value)}
            rows={4}
            placeholder="Write your answer in Croatian…"
            className="mt-3 w-full rounded-xl border-2 border-stone-200 p-3 focus:border-stone-900 focus:outline-none"
          />
          <button
            type="button"
            disabled={!keyPresent || grading || !writing.trim()}
            onClick={() => void gradeWriting()}
            className="mt-2 w-full rounded-xl bg-stone-900 py-3 font-bold text-white hover:bg-stone-700 disabled:opacity-40"
          >
            {grading ? "Grading…" : "Grade my writing"}
          </button>
          {gradeError && <p className="mt-2 text-sm font-semibold text-red-700">{gradeError}</p>}
          {grade && (
            <div className={`mt-4 rounded-xl p-4 ${grade.correct ? "bg-green-50" : "bg-amber-50"}`}>
              <p className="font-black">
                {grade.correct ? "✅" : "📝"} Score: {Math.round(grade.score)}/100
              </p>
              <p className="mt-1 text-sm">{grade.feedback}</p>
              {grade.corrected_text.trim() && grade.corrected_text.trim() !== writing.trim() && (
                <p className="mt-2 text-sm">
                  <span className="font-bold">Corrected:</span> {grade.corrected_text}
                </p>
              )}
              {grade.errors.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm">
                  {grade.errors.map((err, i) => (
                    <li key={i}>
                      <span className="rounded bg-white px-1.5 py-0.5 text-xs font-bold">{err.type}</span>{" "}
                      {err.explanation}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
