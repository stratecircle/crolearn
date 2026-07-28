import { useState } from "react";
import { Link } from "react-router-dom";
import { learnerLevelContext } from "@/content";
import { aiErrorMessage, gradeFreeForm, hasApiKey, type AiGradeResult } from "@/lib/claude";
import type { WritingTask } from "@/types/content";

/**
 * The guided writing task (teaching-method §8): used by checkpoint exams (A2+)
 * and, from B1 on, by every unit test. AI rubric-graded when a key is present,
 * plain self-check against the model text otherwise — it NEVER gates a pass.
 */
export default function WritingSection({ task, onDone }: { task: WritingTask; onDone: () => void }) {
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
      <div className="mb-4 flex items-center justify-between text-sm font-bold text-[color:var(--muted)]">
        <span>✍️ {task.title}</span>
        <span>1/1</span>
      </div>

      <div className="rounded-[10px] border border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] p-5">
        <p className="text-lg font-bold">{task.task}</p>
        {task.rubricFocus && (
          <p className="mt-1 text-xs text-[color:var(--muted)]">Graded on: {task.rubricFocus}</p>
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
          placeholder="Piši ovdje…"
          className="mt-4 w-full rounded-lg border-2 border-[rgba(var(--ink-rgb),.15)] p-3 focus:border-[color:var(--ink)] focus:outline-none"
        />
        <p className={`mt-1 text-xs ${inRange ? "text-[color:var(--muted)]" : "text-amber-700"}`}>
          {words} {words === 1 ? "word" : "words"}
          {task.minWords && task.maxWords ? ` (aim for ${task.minWords}–${task.maxWords})` : ""}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {keyPresent && !grade && (
            <button
              type="button"
              disabled={grading || !text.trim()}
              onClick={() => void gradeIt()}
              className="rounded-lg bg-[color:var(--ink)] px-4 py-2.5 font-bold text-white hover:bg-[color:var(--ink-strong)] disabled:opacity-40"
            >
              {grading ? "Grading…" : "Grade my writing"}
            </button>
          )}
          {!revealed && task.modelHr && (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="rounded-lg border-2 border-[color:var(--ink)] px-4 py-2.5 font-bold hover:bg-[rgba(var(--ink-rgb),.05)]"
            >
              💡 Show a model text
            </button>
          )}
        </div>
        {gradeError && <p className="mt-2 text-sm text-red-700">{gradeError}</p>}

        {grade && (
          <div className={`mt-3 rounded-lg p-4 ${grade.correct ? "bg-green-50" : "bg-amber-50"}`}>
            <p className="font-semibold text-[color:var(--ink)]">Score: {Math.round(grade.score)}/100</p>
            <p className="mt-1 text-sm">{grade.feedback}</p>
            {grade.corrected_text.trim() && grade.corrected_text.trim() !== text.trim() && (
              <p className="mt-2 text-sm"><span className="font-bold">Better:</span> {grade.corrected_text}</p>
            )}
          </div>
        )}

        {revealed && task.modelHr && (
          <div className="mt-3 rounded-lg bg-sky-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[.13em] text-[color:var(--blue)]">Model text</p>
            <p className="mt-1 whitespace-pre-line">{task.modelHr}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onDone}
        className="mt-4 w-full rounded-lg bg-[color:var(--ink)] py-3 font-bold text-white hover:bg-[color:var(--ink-strong)]"
      >
        Finish & see results →
      </button>
    </div>
  );
}
