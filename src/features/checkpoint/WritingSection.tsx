import { useState } from "react";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import { learnerLevelContext } from "@/content";
import { aiErrorMessage, gradeFreeForm, hasApiKey, type AiGradeResult } from "@/lib/claude";
import type { WritingTask } from "@/types/content";
import { Banner, BtnGhost, BtnPrimary, INK, Meta } from "@/ui/kit";

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
    <div>
      <Meta className="mb-2">{task.title}</Meta>
      <p className="text-lg font-bold" style={{ color: INK, letterSpacing: "-.01em" }}>{task.task}</p>
      {task.rubricFocus && (
        <p className="mt-1.5 text-[13px] text-[color:var(--muted)]">Graded on: {task.rubricFocus}</p>
      )}

      {!keyPresent && (
        <div className="mt-4">
          <Banner color="var(--orange)">
            No API key — write your text and self-assess against the model.{" "}
            <Link to="/settings" className="underline">Add a key</Link> for AI feedback.
          </Banner>
        </div>
      )}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Piši ovdje…"
        className="mt-5 w-full rounded-[10px] border border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] p-3.5 text-[15px] leading-relaxed text-[color:var(--ink)] outline-none transition-colors duration-150 focus:border-[color:var(--primary)]"
      />
      <p className="meta mt-1.5" style={{ color: inRange ? "var(--muted)" : "var(--crveni)" }}>
        {words} {words === 1 ? "word" : "words"}
        {task.minWords && task.maxWords ? ` · aim for ${task.minWords}–${task.maxWords}` : ""}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {keyPresent && !grade && (
          <BtnPrimary disabled={grading || !text.trim()} onClick={() => void gradeIt()}>
            {grading ? "Grading…" : "Grade my writing"}
          </BtnPrimary>
        )}
        {!revealed && task.modelHr && (
          <BtnGhost icon={Lightbulb} onClick={() => setRevealed(true)}>Show a model text</BtnGhost>
        )}
      </div>
      {gradeError && <p className="mt-2 text-sm text-[color:var(--crveni)]">{gradeError}</p>}

      {grade && (
        <div
          className="mt-4 rounded-[10px] p-4"
          style={{ background: grade.correct ? "rgba(var(--green-rgb),.07)" : "rgba(var(--orange-rgb),.08)" }}
        >
          <p className="text-sm font-semibold" style={{ color: grade.correct ? "var(--green)" : "var(--orange)" }}>
            Score: {Math.round(grade.score)}/100
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--body)]">{grade.feedback}</p>
          {grade.corrected_text.trim() && grade.corrected_text.trim() !== text.trim() && (
            <p className="mt-2.5 text-[15px] text-[color:var(--body)]">
              <span className="font-semibold text-[color:var(--ink)]">Better:</span> {grade.corrected_text}
            </p>
          )}
        </div>
      )}

      {revealed && task.modelHr && (
        <div className="mt-4">
          <Meta style={{ color: "var(--blue)" }}>Model text</Meta>
          <p className="reading mt-1.5 whitespace-pre-line text-[16px] leading-relaxed text-[color:var(--ink)]">{task.modelHr}</p>
        </div>
      )}

      <button
        type="button"
        onClick={onDone}
        className="mt-8 flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]"
        style={{ background: INK }}
      >
        Finish & see results →
      </button>
    </div>
  );
}
