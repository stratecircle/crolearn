import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lightbulb, Mic, X } from "lucide-react";
import { findCheckpoint, learnerLevelContext } from "@/content";
import { db } from "@/lib/db";
import SlideRenderer from "@/components/SlideRenderer";
import { aiErrorMessage, gradeFreeForm, hasApiKey, type AiGradeResult } from "@/lib/claude";
import { hasStt, listenOnce, stopListening } from "@/lib/stt";
import { speak } from "@/lib/tts";
import { scoreCheckpoint, type CheckpointScore, type ItemResult } from "@/features/checkpoint/scoring";
import WritingSection from "@/features/checkpoint/WritingSection";
import type { QuizSlide, SpeakingPrompt } from "@/types/content";
import { Banner, BODY2, BtnGhost, BtnPrimary, CRVENI, Divider, GREEN, INK, Meta, MUTED, ProgressBar, StageHeader } from "@/ui/kit";

type Phase = "intro" | "quiz" | "speaking" | "writing" | "results";

/** The chrome-free stage every phase renders into. */
function Stage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 overflow-y-auto">
      <div className="m-auto w-full max-w-[640px] px-5 py-8">{children}</div>
    </div>
  );
}

/**
 * Level checkpoint exam (§8): quiz sections graded locally (the pass/fail gate),
 * then an optional AI-graded speaking section that never blocks. No hints, no
 * retry queue, first-attempt scoring. Soft gate — a fail warns, never locks.
 */
export default function CheckpointPage() {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const exam = id ? findCheckpoint(id) : undefined;

  // Flatten the quiz sections into one ordered list, remembering each item's section.
  const quizItems = useMemo(
    () =>
      (exam?.sections ?? []).flatMap((sec) =>
        sec.slides.map((s) => {
          const slide = { ...(s as QuizSlide) };
          delete (slide as { hint?: string }).hint; // exam mode: no hints
          return { section: sec.title, slide };
        }),
      ),
    [exam],
  );

  const [phase, setPhase] = useState<Phase>("intro");
  const [qi, setQi] = useState(0);
  const [results, setResults] = useState<ItemResult[]>([]);
  const [score, setScore] = useState<CheckpointScore | null>(null);

  if (!exam)
    return (
      <p className="py-10 text-center" style={{ color: BODY2 }}>
        Checkpoint not found. <Link to="/" className="underline">Back home</Link>
      </p>
    );

  const totalQuiz = quizItems.length;

  const chrome = (eyebrow: string, pos?: string, pct?: number) => (
    <StageHeader
      exitIcon={X}
      exitLabel="Leave the exam"
      onExit={() => nav("/course")}
      eyebrow={eyebrow}
      title={exam.title}
      pos={pos}
      progressPct={pct}
    />
  );

  const finishExam = async (finalResults: ItemResult[]) => {
    const s = scoreCheckpoint(finalResults, exam.passPct);
    await db.checkpointResults.add({
      checkpointId: exam.id,
      takenAt: new Date(),
      scorePct: s.pct,
      passed: s.passed,
      sectionPct: s.sections.map((sec) => ({ title: sec.title, pct: sec.pct })),
      weakestSections: s.weakestSections,
      wrongItemIds: s.wrongItemIds,
    });
    setScore(s);
    setPhase("results");
  };

  /* ------------------------------- intro ------------------------------- */
  if (phase === "intro") {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome(`${exam.levelId} · Checkpoint`)}
        <Stage>
          <div className="text-center">
            <h1 className="font-bold" style={{ fontSize: "clamp(26px,3.6vw,32px)", lineHeight: 1.2, letterSpacing: "-.02em", color: INK }}>{exam.title}</h1>
            <p className="mt-1.5 text-[15px]" style={{ color: MUTED }}>{exam.titleEn}</p>
          </div>
          <p className="mt-8 text-[15px] leading-relaxed" style={{ color: BODY2 }}>
            {totalQuiz} graded questions across {exam.sections.length} sections
            {exam.speaking ? `, plus ${exam.speaking.prompts.length} speaking prompts` : ""}
            {exam.writing ? " and a guided writing task" : ""}. No hints,
            first-attempt scoring. Pass ≥ {exam.passPct}% on the written sections — a soft gate, so you
            can always continue.
          </p>
          <div className="mt-8">
            <Meta>What's in it</Meta>
            <div className="mt-1 divide-y divide-[rgba(var(--ink-rgb),.07)]">
              {exam.sections.map((s) => (
                <div key={s.title} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-[15px] font-semibold" style={{ color: INK }}>{s.title}</span>
                  <span className="meta" style={{ color: "var(--muted3)" }}>{s.slides.length} items</span>
                </div>
              ))}
              {exam.speaking && (
                <div className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-[15px] font-semibold" style={{ color: INK }}>{exam.speaking.title}</span>
                  <span className="meta" style={{ color: "var(--muted3)" }}>{exam.speaking.prompts.length} prompts · AI-graded</span>
                </div>
              )}
              {exam.writing && (
                <div className="flex items-baseline justify-between gap-4 py-2.5">
                  <span className="text-[15px] font-semibold" style={{ color: INK }}>{exam.writing.title}</span>
                  <span className="meta" style={{ color: "var(--muted3)" }}>1 task · AI-graded</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <BtnPrimary onClick={() => setPhase("quiz")}>Start the exam</BtnPrimary>
          </div>
        </Stage>
      </div>
    );
  }

  /* ------------------------------- quiz -------------------------------- */
  if (phase === "quiz") {
    const current = quizItems[qi];
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome(current.section, `${qi + 1}/${totalQuiz}`, (qi / totalQuiz) * 100)}
        <Stage>
          <Meta className="mb-5">{current.section}</Meta>
          <SlideRenderer
            key={`${qi}-${current.slide.id}`}
            slide={current.slide}
            vocab={[]}
            onDone={(correct) => {
              const next = [...results, { sectionTitle: current.section, itemId: current.slide.id, correct }];
              setResults(next);
              if (qi + 1 < totalQuiz) {
                setQi(qi + 1);
              } else if (exam.speaking) {
                setPhase("speaking");
              } else if (exam.writing) {
                setPhase("writing");
              } else {
                void finishExam(next);
              }
            }}
          />
        </Stage>
      </div>
    );
  }

  /* ----------------------------- speaking ------------------------------ */
  if (phase === "speaking" && exam.speaking) {
    return (
      <SpeakingSection
        title={exam.speaking.title}
        prompts={exam.speaking.prompts}
        chrome={chrome}
        onDone={() => (exam.writing ? setPhase("writing") : void finishExam(results))}
      />
    );
  }

  /* ------------------------------ writing ------------------------------ */
  if (phase === "writing" && exam.writing) {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome("Writing task", undefined, 100)}
        <Stage>
          <WritingSection task={exam.writing} onDone={() => void finishExam(results)} />
        </Stage>
      </div>
    );
  }

  /* ------------------------------ results ------------------------------ */
  if (phase === "results" && score) {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome("Result", undefined, 100)}
        <Stage>
          <ResultsScreen
            exam={exam}
            score={score}
            onRetake={() => {
              setQi(0);
              setResults([]);
              setScore(null);
              setPhase("intro");
            }}
          />
        </Stage>
      </div>
    );
  }

  return null;
}

/* ======================= speaking sub-component ======================= */

function SpeakingSection({
  title,
  prompts,
  chrome,
  onDone,
}: {
  title: string;
  prompts: SpeakingPrompt[];
  chrome: (eyebrow: string, pos?: string, pct?: number) => React.ReactNode;
  onDone: () => void;
}) {
  const [i, setI] = useState(0);
  const keyPresent = hasApiKey();
  const sttOk = hasStt();
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [sttError, setSttError] = useState<string | null>(null);
  const [grading, setGrading] = useState(false);
  const [grade, setGrade] = useState<AiGradeResult | null>(null);
  const [gradeError, setGradeError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const prompt = prompts[i];

  const reset = () => {
    setTranscript("");
    setSttError(null);
    setGrade(null);
    setGradeError(null);
    setRevealed(false);
    setListening(false);
  };

  const record = async () => {
    setSttError(null);
    setListening(true);
    try {
      const r = await listenOnce();
      setTranscript(r.transcript);
    } catch (e) {
      const m = (e as Error).message;
      setSttError(
        m === "unsupported"
          ? "Speech recognition needs Chrome or Edge. You can self-assess with the model answer instead."
          : m === "denied"
            ? "Microphone blocked — allow it in the browser, or self-assess below."
            : "Didn't catch that — try again, or self-assess below.",
      );
    } finally {
      setListening(false);
    }
  };

  const grade1 = async () => {
    if (!transcript.trim()) return;
    setGrading(true);
    setGradeError(null);
    try {
      const g = await gradeFreeForm({
        task: prompt.task + (prompt.rubricFocus ? `\n(Focus: ${prompt.rubricFocus})` : ""),
        learnerAnswer: transcript.trim(),
        levelContext: learnerLevelContext(),
      });
      setGrade(g);
    } catch (e) {
      setGradeError(aiErrorMessage(e));
    } finally {
      setGrading(false);
    }
  };

  const advance = () => {
    stopListening();
    if (i + 1 < prompts.length) {
      setI(i + 1);
      reset();
    } else {
      onDone();
    }
  };

  return (
    <div className="flex h-dvh w-full flex-col">
      {chrome(title, `${i + 1}/${prompts.length}`, 100)}
      <Stage>
        <p className="text-lg font-bold" style={{ color: INK, letterSpacing: "-.01em" }}>{prompt.task}</p>
        {prompt.rubricFocus && (
          <p className="mt-1.5 text-[13px]" style={{ color: MUTED }}>Graded on: {prompt.rubricFocus}</p>
        )}

        {!keyPresent && (
          <div className="mt-4">
            <Banner color="var(--orange)">
              No API key — record and self-assess against the model answer.{" "}
              <Link to="/settings" className="underline">Add a key</Link> for AI feedback.
            </Banner>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!sttOk || listening}
            onClick={() => void record()}
            className="inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-[15px] font-semibold transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-40"
            style={{ borderColor: "rgba(var(--ink-rgb),.2)", color: INK }}
          >
            <Mic size={16} strokeWidth={2} />
            {listening ? "Listening…" : transcript ? "Record again" : "Record answer"}
          </button>
          {!revealed && (
            <BtnGhost
              icon={Lightbulb}
              onClick={() => {
                setRevealed(true);
                if (prompt.modelHr) void speak(prompt.modelHr);
              }}
              className="!h-11"
            >
              Show model answer
            </BtnGhost>
          )}
        </div>
        {!sttOk && (
          <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
            Voice capture needs Chrome or Edge — use the model answer to self-assess.
          </p>
        )}
        {sttError && <p className="mt-2 text-sm" style={{ color: "var(--orange)" }}>{sttError}</p>}

        {transcript && (
          <div className="mt-6 rounded-[10px] p-4" style={{ background: "var(--tint)" }}>
            <Meta>What we heard</Meta>
            <p className="mt-1.5 text-[15px]" style={{ color: INK }}>{transcript}</p>
            {keyPresent && !grade && (
              <div className="mt-3">
                <BtnPrimary disabled={grading} onClick={() => void grade1()}>
                  {grading ? "Grading…" : "Grade my answer"}
                </BtnPrimary>
              </div>
            )}
            {gradeError && <p className="mt-2 text-sm" style={{ color: CRVENI }}>{gradeError}</p>}
          </div>
        )}

        {grade && (
          <div
            className="mt-4 rounded-[10px] p-4"
            style={{ background: grade.correct ? "rgba(var(--green-rgb),.07)" : "rgba(var(--orange-rgb),.08)" }}
          >
            <p className="text-sm font-semibold" style={{ color: grade.correct ? GREEN : "var(--orange)" }}>
              Score: {Math.round(grade.score)}/100
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: BODY2 }}>{grade.feedback}</p>
            {grade.corrected_text.trim() && grade.corrected_text.trim() !== transcript.trim() && (
              <p className="mt-2.5 text-[15px]" style={{ color: INK }}>
                <span className="font-semibold">Better:</span> {grade.corrected_text}
              </p>
            )}
          </div>
        )}

        {revealed && prompt.modelHr && (
          <div className="mt-4">
            <Meta style={{ color: "var(--blue)" }}>Model answer</Meta>
            <p className="reading mt-1.5 text-[16px] leading-relaxed" style={{ color: INK }}>{prompt.modelHr}</p>
          </div>
        )}

        <button
          type="button"
          onClick={advance}
          className="mt-10 flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]"
          style={{ background: INK }}
        >
          {i + 1 < prompts.length ? "Next prompt →" : "Finish & see results →"}
        </button>
      </Stage>
    </div>
  );
}

/* ======================== results sub-component ======================= */

function ResultsScreen({
  exam,
  score,
  onRetake,
}: {
  exam: { title: string; passPct: number; levelId: string };
  score: CheckpointScore;
  onRetake: () => void;
}) {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold" style={{ fontSize: "clamp(26px,3.8vw,34px)", lineHeight: 1.15, letterSpacing: "-.02em", color: INK }}>
          {score.passed ? "Čestitamo!" : "Almost there!"}
        </h2>
        <p className="mx-auto mt-2 max-w-[440px] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
          {score.passed
            ? `Govorite hrvatski na razini ${exam.levelId}. (You speak Croatian at the ${exam.levelId} level.)`
            : "A soft gate — review your weakest areas and retake when ready. You can still move on."}
        </p>
        <p className="mt-4 text-[15px]" style={{ color: BODY2 }}>
          Written score: <strong style={{ color: INK }}>{score.pct}%</strong> (pass {exam.passPct}%)
        </p>
      </div>

      <div className="mt-10">
        <Meta>By section</Meta>
        <div className="mt-3 divide-y divide-[rgba(var(--ink-rgb),.07)]">
          {score.sections.map((s) => (
            <div key={s.title} className="py-3">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[15px] font-semibold" style={{ color: INK }}>{s.title}</span>
                <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{s.correct}/{s.total} · {s.pct}%</span>
              </div>
              <ProgressBar
                pct={s.pct}
                color={s.pct >= exam.passPct ? GREEN : "var(--orange)"}
                className="mt-2"
              />
            </div>
          ))}
        </div>
      </div>

      {score.weakestSections.length > 0 && (
        <div className="mt-10">
          <Meta style={{ color: "var(--orange)" }}>Worth revisiting</Meta>
          <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: BODY2 }}>
            Your weakest {score.weakestSections.length === 1 ? "area" : "areas"}:{" "}
            <strong style={{ color: INK }}>{score.weakestSections.join(", ")}</strong>. Replay the related units'
            lessons and use Practice to drill them, then retake.
          </p>
          <Link to="/practice" className="meta mt-2 inline-block underline" style={{ color: "var(--orange)" }}>
            Go to Practice
          </Link>
        </div>
      )}

      <Divider className="mt-10" />
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <BtnGhost onClick={onRetake}>Retake the exam</BtnGhost>
        <Link to="/">
          <BtnPrimary>Back home</BtnPrimary>
        </Link>
      </div>
    </div>
  );
}
