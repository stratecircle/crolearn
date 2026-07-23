import type { GradeResult } from "@/lib/grader";
import TtsButton from "./TtsButton";

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
  return (
    <div
      className={`mt-4 rounded-xl border-2 p-4 ${
        good
          ? "border-green-600 bg-green-50"
          : diacritics
            ? "border-amber-500 bg-amber-50"
            : "border-red-600 bg-red-50"
      }`}
    >
      <p className="font-bold">
        {good ? "✅ Correct!" : diacritics ? "🟡 Correct — mind the diacritics (č ć đ š ž)!" : "❌ Not quite."}
      </p>
      {(diacritics || verdict === "wrong") && canonical && (
        <p className="mt-1 text-lg">
          <span className="font-semibold">{canonical}</span>{" "}
          <TtsButton text={canonical} className="ml-1" />
        </p>
      )}
      {explanation && <p className="mt-1 text-sm text-stone-700">{explanation}</p>}
      <button
        type="button"
        autoFocus
        onClick={onContinue}
        className="mt-3 rounded-xl bg-stone-900 px-5 py-2 font-bold text-white hover:bg-stone-700"
      >
        {continueLabel}
      </button>
    </div>
  );
}
