import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findTest } from "@/content";
import { db } from "@/lib/db";
import SlideRenderer from "@/components/SlideRenderer";
import type { QuizSlide } from "@/types/content";

/**
 * Unit test (§8): no hints, no retry queue, first-attempt scoring.
 * Soft gate — a fail warns but never blocks (the dashboard still allows moving on).
 */
export default function TestPage() {
  const { id } = useParams<{ id: string }>();
  const test = id ? findTest(id) : undefined;
  const flat = useMemo(
    () =>
      (test?.sections ?? []).flatMap((sec) =>
        sec.slides.map((s) => {
          // Exam mode: strip hints so "no hints" holds even if content has them.
          const slide = { ...(s as QuizSlide) };
          delete (slide as { hint?: string }).hint;
          return { section: sec.title, slide };
        }),
      ),
    [test],
  );
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [wrong, setWrong] = useState<string[]>([]);
  const [result, setResult] = useState<{ pct: number; passed: boolean } | null>(null);

  if (!test)
    return (
      <p className="py-10 text-center">
        Test not found. <Link to="/" className="underline">Back to the path</Link>
      </p>
    );

  if (!started) {
    return (
      <div className="m-auto w-full max-w-xl py-10 text-center">
        <div className="text-5xl">🏁</div>
        <h1 className="mt-3 text-3xl font-black">{test.title}</h1>
        <p className="mt-2 text-stone-600">
          {flat.length} items · no hints · pass ≥ {test.passPct}%
        </p>
        <p className="mt-1 text-sm text-stone-500">
          Wrong answers are saved with your result, so you know what to revisit.
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="mt-6 rounded-xl bg-stone-900 px-8 py-3 text-lg font-bold text-white hover:bg-stone-700"
        >
          Start the test
        </button>
      </div>
    );
  }

  if (result) {
    return (
      <div className="m-auto w-full max-w-xl py-10 text-center">
        <div className="text-6xl">{result.passed ? "🏆" : "💪"}</div>
        <h2 className="mt-3 text-3xl font-black">{result.passed ? "Passed!" : "Almost there!"}</h2>
        <p className="mt-2 text-lg">
          Score: <strong>{result.pct}%</strong> (pass mark {test.passPct}%)
        </p>
        {!result.passed && (
          <p className="mt-2 text-stone-600">
            Suggestion: revisit this unit's lessons and try again in a day or two. You can also
            keep going — the test is here to help, not to punish.
          </p>
        )}
        <div className="mt-6 grid gap-3">
          {!result.passed && (
            <button
              type="button"
              onClick={() => {
                setI(0);
                setWrong([]);
                setResult(null);
                setStarted(false);
              }}
              className="rounded-xl border-2 border-stone-900 py-3 font-bold hover:bg-stone-100"
            >
              🔁 Try again
            </button>
          )}
          <Link to="/" className="rounded-xl bg-stone-900 py-3 font-bold text-white hover:bg-stone-700">
            Back to the path →
          </Link>
        </div>
      </div>
    );
  }

  const current = flat[i];
  const finish = async (finalWrong: string[]) => {
    const pct = Math.round(((flat.length - finalWrong.length) / flat.length) * 100);
    const passed = pct >= test.passPct;
    await db.testResults.add({
      testId: test.id,
      takenAt: new Date(),
      scorePct: pct,
      passed,
      wrongSlideIds: finalWrong,
    });
    setResult({ pct, passed });
  };

  return (
    <div className="m-auto w-full max-w-2xl py-6">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-stone-500">
        <span>🏁 {current.section}</span>
        <span>
          {i + 1}/{flat.length}
        </span>
      </div>
      <SlideRenderer
        key={`${i}-${current.slide.id}`}
        slide={current.slide}
        vocab={[]}
        onDone={(correct) => {
          const nextWrong = correct ? wrong : [...wrong, current.slide.id];
          setWrong(nextWrong);
          if (i + 1 < flat.length) setI(i + 1);
          else void finish(nextWrong);
        }}
      />
    </div>
  );
}
