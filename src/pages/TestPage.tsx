import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Flag, Trophy } from "lucide-react";
import { findTest } from "@/content";
import { db } from "@/lib/db";
import SlideRenderer from "@/components/SlideRenderer";
import type { QuizSlide } from "@/types/content";
import { BODY2, BtnGhost, BtnPrimary, DoneCard, Eyebrow, INK, MUTED, ProgressBar, RED } from "@/ui/kit";

/**
 * Unit test (§8): no hints, no retry queue, first-attempt scoring.
 * Soft gate — a fail warns but never blocks (the dashboard still allows moving on).
 */
export default function TestPage() {
  const nav = useNavigate();
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
      <p className="py-10 text-center" style={{ color: BODY2 }}>
        Test not found. <Link to="/" className="underline">Back to the path</Link>
      </p>
    );

  if (!started) {
    return (
      <div className="m-auto w-full max-w-[720px] py-10">
        <DoneCard icon={Flag} title={test.title}>
          <div className="mb-1.5 text-[17px]" style={{ color: BODY2 }}>
            {flat.length} items · no hints · pass ≥ {test.passPct}%
          </div>
          <div className="mb-8 text-sm" style={{ color: MUTED }}>
            Wrong answers are saved with your result, so you know what to revisit.
          </div>
          <div className="flex justify-center">
            <BtnPrimary onClick={() => setStarted(true)}>Start the test</BtnPrimary>
          </div>
        </DoneCard>
      </div>
    );
  }

  if (result) {
    return (
      <div className="m-auto w-full max-w-[720px] py-10">
        <DoneCard icon={Trophy} title={result.passed ? "Passed!" : "Almost there!"}>
          <div className="mb-2 text-[17px]" style={{ color: BODY2 }}>
            Score: <strong style={{ color: INK }}>{result.pct}%</strong> (pass mark {test.passPct}%)
          </div>
          {!result.passed && (
            <div className="mx-auto mb-6 max-w-[460px] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
              Suggestion: revisit this unit's lessons and try again in a day or two. You can also
              keep going — the test is here to help, not to punish.
            </div>
          )}
          <div className="mt-2 flex flex-wrap justify-center gap-3.5">
            {!result.passed && (
              <BtnGhost
                onClick={() => {
                  setI(0);
                  setWrong([]);
                  setResult(null);
                  setStarted(false);
                }}
              >
                Try again
              </BtnGhost>
            )}
            <BtnPrimary onClick={() => nav("/")}>Back to path</BtnPrimary>
          </div>
        </DoneCard>
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
      <div className="mb-2 flex items-center justify-between">
        <Eyebrow>{current.section.toUpperCase()}</Eyebrow>
        <span className="text-sm" style={{ color: BODY2 }}>
          {i + 1} / {flat.length}
        </span>
      </div>
      <ProgressBar pct={(i / flat.length) * 100} color={RED} height={8} className="mb-6" />
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
