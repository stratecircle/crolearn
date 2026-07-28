import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findCheckpoint, learnerLevelContext } from "@/content";
import { db } from "@/lib/db";
import SlideRenderer from "@/components/SlideRenderer";
import { aiErrorMessage, gradeFreeForm, hasApiKey, type AiGradeResult } from "@/lib/claude";
import { hasStt, listenOnce, stopListening } from "@/lib/stt";
import { speak } from "@/lib/tts";
import { scoreCheckpoint, type CheckpointScore, type ItemResult } from "@/features/checkpoint/scoring";
import type { QuizSlide, SpeakingPrompt, WritingTask } from "@/types/content";

type Phase = "intro" | "quiz" | "speaking" | "writing" | "results";

/**
 * Level checkpoint exam (§8): quiz sections graded locally (the pass/fail gate),
 * then an optional AI-graded speaking section that never blocks. No hints, no
 * retry queue, first-attempt scoring. Soft gate — a fail warns, never locks.
 */
export default function CheckpointPage() {
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
      <p className="py-10 text-center">
        Checkpoint not found. <Link to="/" className="underline">Back to the path</Link>
      </p>
    );

  const totalQuiz = quizItems.length;

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
      <div className="m-auto w-full max-w-xl py-10 text-center">
        <h1 className="font-display text-3xl font-bold text-[#16243D]" style={{ fontSize: "clamp(26px,3.6vw,34px)" }}>{exam.title}</h1>
        <p className="text-[#8B93A1]">{exam.titleEn}</p>
        <div className="mt-5 rounded-[20px] border border-[rgba(15,23,42,.07)] bg-white p-6 text-left shadow-[0_1px_3px_rgba(15,23,42,.04)]">
          <p className="text-sm text-[#5B6472]">
            {totalQuiz} graded questions across {exam.sections.length} sections
            {exam.speaking ? `, plus ${exam.speaking.prompts.length} speaking prompts` : ""}
            {exam.writing ? " and a guided writing task" : ""}. No hints,
            first-attempt scoring. Pass ≥ {exam.passPct}% on the written sections — a soft gate, so you
            can always continue.
          </p>
          <ul className="mt-3 grid gap-1 text-sm font-semibold">
            {exam.sections.map((s) => (
              <li key={s.title}>{s.title} — {s.slides.length} items</li>
            ))}
            {exam.speaking && <li>{exam.speaking.title} — {exam.speaking.prompts.length} prompts (AI-graded)</li>}
            {exam.writing && <li>{exam.writing.title} — 1 task (AI-graded)</li>}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setPhase("quiz")}
          className="mt-6 rounded-xl bg-[#C93434] px-8 py-3 text-lg font-semibold text-white transition-colors duration-[180ms] hover:bg-[#B32C2C]"
        >
          Start the exam
        </button>
      </div>
    );
  }

  /* ------------------------------- quiz -------------------------------- */
  if (phase === "quiz") {
    const current = quizItems[qi];
    return (
      <div className="m-auto w-full max-w-2xl py-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[.13em] text-[#C93434]">{current.section.toUpperCase()}</span>
          <span className="text-sm text-[#5B6472]">{qi + 1} / {totalQuiz}</span>
        </div>
        <div className="mb-6 h-2 overflow-hidden rounded-full bg-[rgba(15,23,42,.09)]">
          <div className="h-full rounded-full bg-[#C93434]" style={{ width: `${(qi / totalQuiz) * 100}%` }} />
        </div>
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
      </div>
    );
  }

  /* ----------------------------- speaking ------------------------------ */
  if (phase === "speaking" && exam.speaking) {
    return (
      <SpeakingSection
        title={exam.speaking.title}
        prompts={exam.speaking.prompts}
        onDone={() => (exam.writing ? setPhase("writing") : void finishExam(results))}
      />
    );
  }

  /* ------------------------------ writing ------------------------------ */
  if (phase === "writing" && exam.writing) {
    return <WritingSection task={exam.writing} onDone={() => void finishExam(results)} />;
  }

  /* ------------------------------ results ------------------------------ */
  if (phase === "results" && score) {
    return <ResultsScreen exam={exam} score={score} onRetake={() => {
      setQi(0);
      setResults([]);
      setScore(null);
      setPhase("intro");
    }} />;
  }

  return null;
}

/* ======================= speaking sub-component ======================= */

function SpeakingSection({
  title,
  prompts,
  onDone,
}: {
  title: string;
  prompts: SpeakingPrompt[];
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
    <div className="m-auto w-full max-w-2xl py-6">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#8B93A1]">
        <span>🎤 {title}</span>
        <span>{i + 1}/{prompts.length}</span>
      </div>

      <div className="rounded-[20px] border border-[rgba(15,23,42,.07)] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
        <p className="text-lg font-bold">{prompt.task}</p>
        {prompt.rubricFocus && (
          <p className="mt-1 text-xs text-[#8B93A1]">Graded on: {prompt.rubricFocus}</p>
        )}

        {!keyPresent && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            No API key — record and self-assess against the model answer.{" "}
            <Link to="/settings" className="font-bold underline">Add a key</Link> for AI feedback.
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!sttOk || listening}
            onClick={() => void record()}
            className="rounded-xl bg-[#16243D] px-4 py-2.5 font-bold text-white hover:bg-[#20344F] disabled:opacity-40"
          >
            {listening ? "🎙️ Listening…" : transcript ? "🎙️ Record again" : "🎙️ Record answer"}
          </button>
          {!revealed && (
            <button
              type="button"
              onClick={() => {
                setRevealed(true);
                if (prompt.modelHr) void speak(prompt.modelHr);
              }}
              className="rounded-xl border-2 border-[#16243D] px-4 py-2.5 font-bold hover:bg-[rgba(15,23,42,.05)]"
            >
              💡 Show model answer
            </button>
          )}
        </div>
        {!sttOk && (
          <p className="mt-2 text-xs text-[#8B93A1]">
            (Voice capture needs Chrome/Edge — use the model answer to self-assess.)
          </p>
        )}
        {sttError && <p className="mt-2 text-sm text-amber-700">{sttError}</p>}

        {transcript && (
          <div className="mt-4 rounded-xl bg-[rgba(15,23,42,.03)] p-3">
            <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#8B93A1]">WHAT WE HEARD</p>
            <p className="mt-1">{transcript}</p>
            {keyPresent && !grade && (
              <button
                type="button"
                disabled={grading}
                onClick={() => void grade1()}
                className="mt-3 rounded-lg bg-[#16243D] px-4 py-2 text-sm font-bold text-white disabled:opacity-40"
              >
                {grading ? "Grading…" : "Grade my answer"}
              </button>
            )}
            {gradeError && <p className="mt-2 text-sm text-red-700">{gradeError}</p>}
          </div>
        )}

        {grade && (
          <div className={`mt-3 rounded-xl p-4 ${grade.correct ? "bg-green-50" : "bg-amber-50"}`}>
            <p className="font-semibold text-[#16243D]">Score: {Math.round(grade.score)}/100</p>
            <p className="mt-1 text-sm">{grade.feedback}</p>
            {grade.corrected_text.trim() && grade.corrected_text.trim() !== transcript.trim() && (
              <p className="mt-2 text-sm"><span className="font-bold">Better:</span> {grade.corrected_text}</p>
            )}
          </div>
        )}

        {revealed && prompt.modelHr && (
          <div className="mt-3 rounded-xl bg-sky-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#3B6FD4]">Model answer</p>
            <p className="mt-1">{prompt.modelHr}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={advance}
        className="mt-4 w-full rounded-xl bg-[#16243D] py-3 font-bold text-white hover:bg-[#20344F]"
      >
        {i + 1 < prompts.length ? "Next prompt →" : "Finish & see results →"}
      </button>
    </div>
  );
}

/* ======================== writing sub-component ======================= */

function WritingSection({ task, onDone }: { task: WritingTask; onDone: () => void }) {
  const keyPresent = hasApiKey();
  const [text, setText] = useState("");
  const [grading, setGrading] = useState(false);
  const [grade, setGrade] = useState<AiGradeResult | null>(null);
  const [gradeError, setGradeError] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const inRange =
    (!task.minWords || words >= task.minWords) && (!task.maxWords || words <= task.maxWords);

  const gradeIt = async () => {
    if (!text.trim()) return;
    setGrading(true);
    setGradeError(null);
    try {
      const g = await gradeFreeForm({
        task: task.task + (task.rubricFocus ? `\n(Focus: ${task.rubricFocus})` : ""),
        learnerAnswer: text.trim(),
        levelContext: learnerLevelContext(),
      });
      setGrade(g);
    } catch (e) {
      setGradeError(aiErrorMessage(e));
    } finally {
      setGrading(false);
    }
  };

  return (
    <div className="m-auto w-full max-w-2xl py-6">
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[#8B93A1]">
        <span>✍️ {task.title}</span>
        <span>1/1</span>
      </div>

      <div className="rounded-[20px] border border-[rgba(15,23,42,.07)] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
        <p className="text-lg font-bold">{task.task}</p>
        {task.rubricFocus && (
          <p className="mt-1 text-xs text-[#8B93A1]">Graded on: {task.rubricFocus}</p>
        )}

        {!keyPresent && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            No API key — write your text and self-assess against the model.{" "}
            <Link to="/settings" className="font-bold underline">Add a key</Link> for AI feedback.
          </p>
        )}

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          placeholder="Draga Ana, …"
          className="mt-4 w-full rounded-xl border-2 border-[rgba(15,23,42,.09)] p-3 focus:border-[#16243D] focus:outline-none"
        />
        <p className={`mt-1 text-xs ${inRange ? "text-[#8B93A1]" : "text-amber-700"}`}>
          {words} {words === 1 ? "word" : "words"}
          {task.minWords && task.maxWords ? ` (aim for ${task.minWords}–${task.maxWords})` : ""}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {keyPresent && !grade && (
            <button
              type="button"
              disabled={grading || !text.trim()}
              onClick={() => void gradeIt()}
              className="rounded-xl bg-[#16243D] px-4 py-2.5 font-bold text-white hover:bg-[#20344F] disabled:opacity-40"
            >
              {grading ? "Grading…" : "Grade my e-mail"}
            </button>
          )}
          {!revealed && task.modelHr && (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="rounded-xl border-2 border-[#16243D] px-4 py-2.5 font-bold hover:bg-[rgba(15,23,42,.05)]"
            >
              💡 Show a model text
            </button>
          )}
        </div>
        {gradeError && <p className="mt-2 text-sm text-red-700">{gradeError}</p>}

        {grade && (
          <div className={`mt-3 rounded-xl p-4 ${grade.correct ? "bg-green-50" : "bg-amber-50"}`}>
            <p className="font-semibold text-[#16243D]">Score: {Math.round(grade.score)}/100</p>
            <p className="mt-1 text-sm">{grade.feedback}</p>
            {grade.corrected_text.trim() && grade.corrected_text.trim() !== text.trim() && (
              <p className="mt-2 text-sm"><span className="font-bold">Better:</span> {grade.corrected_text}</p>
            )}
          </div>
        )}

        {revealed && task.modelHr && (
          <div className="mt-3 rounded-xl bg-sky-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#3B6FD4]">Model text</p>
            <p className="mt-1 whitespace-pre-line">{task.modelHr}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onDone}
        className="mt-4 w-full rounded-xl bg-[#16243D] py-3 font-bold text-white hover:bg-[#20344F]"
      >
        Finish & see results →
      </button>
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
    <div className="m-auto w-full max-w-xl py-10">
      <div className="text-center">
        <h2 className="font-display font-bold text-[#16243D]" style={{ fontSize: "clamp(28px,4vw,38px)" }}>
          {score.passed ? "Čestitamo!" : "Almost there!"}
        </h2>
        <p className="mt-1 text-[#5B6472]">
          {score.passed
            ? `Govorite hrvatski na razini ${exam.levelId}. (You speak Croatian at the ${exam.levelId} level.)`
            : "A soft gate — review your weakest areas and retake when ready. You can still move on."}
        </p>
        <p className="mt-3 text-lg">
          Written score: <strong>{score.pct}%</strong> (pass {exam.passPct}%)
        </p>
      </div>

      <div className="mt-6 rounded-[20px] border border-[rgba(15,23,42,.07)] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
        <p className="text-xs font-semibold uppercase tracking-[.13em] text-[#8B93A1]">BY SECTION</p>
        <ul className="mt-2 grid gap-2">
          {score.sections.map((s) => (
            <li key={s.title}>
              <div className="flex justify-between text-sm font-semibold">
                <span>{s.title}</span>
                <span>{s.correct}/{s.total} · {s.pct}%</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-[rgba(15,23,42,.09)]">
                <div
                  className={`h-full rounded-full ${s.pct >= exam.passPct ? "bg-[#2F7D53]" : "bg-[#E08A2B]"}`}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {score.weakestSections.length > 0 && (
        <div className="mt-4 rounded-2xl border border-[rgba(224,138,43,.25)] bg-[rgba(224,138,43,.08)] p-4 text-[#7A4A12]">
          <p className="font-semibold">Worth revisiting</p>
          <p className="mt-1 text-sm">
            Your weakest {score.weakestSections.length === 1 ? "area" : "areas"}:{" "}
            <strong>{score.weakestSections.join(", ")}</strong>. Replay the related units' lessons and
            use Practice to drill them, then retake.
          </p>
          <Link to="/practice" className="mt-2 inline-block text-sm font-bold underline">
            Go to Practice →
          </Link>
        </div>
      )}

      <div className="mt-6 grid gap-3">
        <button
          type="button"
          onClick={onRetake}
          className="rounded-xl border border-[rgba(15,23,42,.12)] bg-white py-3 font-semibold text-[#3F4A5C] transition-colors duration-[180ms] hover:bg-[#F7F4F0]"
        >
          Retake the exam
        </button>
        <Link to="/" className="rounded-xl bg-[#C93434] py-3 text-center font-semibold text-white transition-colors duration-[180ms] hover:bg-[#B32C2C]">
          Back to path
        </Link>
      </div>
    </div>
  );
}
