import type { GradeResult } from "@/lib/grader";
import TtsButton from "./TtsButton";
import { CRVENI, GREEN, INK, Kbd, ORANGE, tint } from "@/ui/kit";

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
  const color = good ? GREEN : diacritics ? ORANGE : CRVENI;
  return (
    <div className="mt-5 rounded-[10px] p-4" style={{ background: tint(color, 0.06) }}>
      <p className="text-sm font-semibold" style={{ color }}>
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
        className="mt-4 inline-flex h-9 items-center rounded-lg px-4 text-sm font-semibold text-white transition-[background,transform] duration-150 active:scale-[.98]"
        style={{ background: INK }}
      >
        {continueLabel}
        {/* This button autofocuses, so Enter already continues — the keycap
            just makes that visible. Decoration: hidden from screen readers. */}
        <span className="ml-2 max-[900px]:hidden" aria-hidden="true"><Kbd>Enter</Kbd></span>
      </button>
    </div>
  );
}
