import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Flag, Trophy, X } from "lucide-react";
import { findTest } from "@/content";
import { db } from "@/lib/db";
import SlideRenderer from "@/components/SlideRenderer";
import WritingSection from "@/features/checkpoint/WritingSection";
import type { QuizSlide } from "@/types/content";
import { BODY2, BtnGhost, BtnPrimary, DoneCard, INK, Meta, MUTED, StageHeader } from "@/ui/kit";

/**
 * Unit test (§8): no hints, no retry queue, first-attempt scoring.
 * Soft gate — a fail warns but never blocks (the course still allows moving on).
 * B1+ tests carry a guided writing task after the quiz sections (AI-graded,
 * never counted toward the pass).
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
  // Quiz done, writing task pending: holds the final wrong list until writing finishes.
  const [pendingWrong, setPendingWrong] = useState<string[] | null>(null);
  const [result, setResult] = useState<{ pct: number; passed: boolean } | null>(null);

  if (!test)
    return (
      <p className="py-10 text-center" style={{ color: BODY2 }}>
        Test not found. <Link to="/" className="underline">Back home</Link>
      </p>
    );

  const chrome = (eyebrow: string, pos?: string, pct?: number) => (
    <StageHeader
      exitIcon={X}
      exitLabel="Leave the test"
      onExit={() => nav("/course")}
      eyebrow={eyebrow}
      title={test.title}
      pos={pos}
      progressPct={pct}
    />
  );

  const stage = (children: React.ReactNode, wide = false) => (
    <div className="flex flex-1 overflow-y-auto">
      <div className={`m-auto w-full ${wide ? "max-w-[680px]" : "max-w-[640px]"} px-5 py-8`}>{children}</div>
    </div>
  );

  if (!started) {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome("Unit test")}
        {stage(
          <DoneCard icon={Flag} title={test.title}>
            <div className="mb-1.5 text-[15px]" style={{ color: BODY2 }}>
              {flat.length} items · no hints · pass ≥ {test.passPct}%
              {test.writing ? " · + a writing task (feedback only, doesn't count)" : ""}
            </div>
            <div className="mb-8 text-sm" style={{ color: MUTED }}>
              Wrong answers are saved with your result, so you know what to revisit.
            </div>
            <div className="flex justify-center">
              <BtnPrimary onClick={() => setStarted(true)}>Start the test</BtnPrimary>
            </div>
          </DoneCard>,
        )}
      </div>
    );
  }

  if (result) {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome("Result", undefined, 100)}
        {stage(
          <DoneCard icon={Trophy} title={result.passed ? "Passed!" : "Almost there!"}>
            <div className="mb-2 text-[15px]" style={{ color: BODY2 }}>
              Score: <strong style={{ color: INK }}>{result.pct}%</strong> (pass mark {test.passPct}%)
            </div>
            {!result.passed && (
              <div className="mx-auto mb-6 max-w-[440px] text-sm leading-relaxed" style={{ color: BODY2 }}>
                Suggestion: revisit this unit's lessons and try again in a day or two. You can also
                keep going — the test is here to help, not to punish.
              </div>
            )}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {!result.passed && (
                <BtnGhost
                  onClick={() => {
                    setI(0);
                    setWrong([]);
                    setPendingWrong(null);
                    setResult(null);
                    setStarted(false);
                  }}
                >
                  Try again
                </BtnGhost>
              )}
              <BtnPrimary onClick={() => nav("/")}>Back home</BtnPrimary>
            </div>
          </DoneCard>,
        )}
      </div>
    );
  }

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

  // B1+ writing task: shown after the last quiz item, before results.
  if (pendingWrong && test.writing) {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome("Writing task", undefined, 100)}
        {stage(<WritingSection task={test.writing} onDone={() => void finish(pendingWrong)} />, true)}
      </div>
    );
  }

  const current = flat[i];
  return (
    <div className="flex h-dvh w-full flex-col">
      {chrome(current.section, `${i + 1}/${flat.length}`, (i / flat.length) * 100)}
      {stage(
        <>
          <Meta className="mb-5">{current.section}</Meta>
          <SlideRenderer
            key={`${i}-${current.slide.id}`}
            slide={current.slide}
            vocab={[]}
            onDone={(correct) => {
              const nextWrong = correct ? wrong : [...wrong, current.slide.id];
              setWrong(nextWrong);
              if (i + 1 < flat.length) setI(i + 1);
              else if (test.writing) setPendingWrong(nextWrong);
              else void finish(nextWrong);
            }}
          />
        </>,
      )}
    </div>
  );
}
