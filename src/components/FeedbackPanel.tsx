import type { GradeResult } from "@/lib/grader";
import TtsButton from "./TtsButton";
import { GREEN, INK, ORANGE, RED, tint } from "@/ui/kit";

/**
 * Immediate corrective feedback (§1): verdict + the correct answer + one-line why.
 * Rendered under a quiz slide after answering; the Continue button lives here.
 */
export default function FeedbackPanel({
  verdict,
  canonical,
  explanation,
  onContinue,
  continueLabel = "Continue →",
}: {
  verdict: GradeResult["verdict"] | "correct-selfassessed";
  canonical?: string;
  explanation?: string;
  onContinue: () => void;
  continueLabel?: string;
}) {
  const good = verdict === "correct" || verdict === "correct-selfassessed";
  const diacritics = verdict === "diacritics";
  const color = good ? GREEN : diacritics ? ORANGE : RED;
  return (
    <div className="mt-4 rounded-lg border p-4" style={{ borderColor: tint(color, 0.4), background: tint(color, 0.07) }}>
      <p className="font-semibold" style={{ color }}>
        {good ? "Točno — correct!" : diacritics ? "Correct — mind the diacritics (č ć đ š ž)!" : "Not quite."}
      </p>
      {(diacritics || verdict === "wrong") && canonical && (
        <p className="mt-1.5 text-lg" style={{ color: INK }}>
          <span className="font-semibold">{canonical}</span> <TtsButton text={canonical} className="ml-1" />
        </p>
      )}
      {explanation && <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--body2)" }}>{explanation}</p>}
      <button
        type="button"
        autoFocus
        onClick={onContinue}
        className="mt-3.5 inline-flex h-11 items-center rounded-lg px-6 text-[15px] font-semibold text-white transition-colors duration-[180ms]"
        style={{ background: INK }}
      >
        {continueLabel}
      </button>
    </div>
  );
}
