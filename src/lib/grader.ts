/**
 * Local grading for closed-answer quiz slides.
 * Free-form grading (writing, speaking content) is delegated to lib/claude.ts.
 *
 * Diacritic policy (curriculum/01-teaching-method.md §2): learner input with
 * c/č/ć, z/ž, s/š, d/đ slips is "correct with a diacritic note" — never wrong,
 * never silently corrected. Content itself always carries correct diacritics.
 */

export type GradeResult =
  | { verdict: "correct" }
  | { verdict: "diacritics"; canonical: string }
  | { verdict: "wrong"; canonical: string };

/** Lowercase, trim, collapse whitespace, strip punctuation (keeps letters incl. č ć đ š ž). */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:„“”"'’‘()«»\-–—…]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Additionally fold Croatian diacritics (č,ć→c ž→z š→s đ→d dž→dz handled by per-char fold). */
export function foldDiacritics(s: string): string {
  return s
    .replace(/[čć]/g, "c")
    .replace(/ž/g, "z")
    .replace(/š/g, "s")
    .replace(/đ/g, "d");
}

/**
 * Grade a typed answer against accepted variants.
 * Exact (normalized) match → correct.
 * Match after diacritic folding → "diacritics" (correct with a note).
 * Otherwise wrong; canonical = first accepted answer.
 */
export function gradeTyped(input: string, answers: string[]): GradeResult {
  const canonical = answers[0] ?? "";
  const nInput = normalize(input);
  for (const a of answers) {
    if (nInput === normalize(a)) return { verdict: "correct" };
  }
  const fInput = foldDiacritics(nInput);
  for (const a of answers) {
    if (fInput === foldDiacritics(normalize(a))) {
      return { verdict: "diacritics", canonical };
    }
  }
  return { verdict: "wrong", canonical };
}

/** Grade all blanks of a fill slide; result is per-blank. */
export function gradeFill(inputs: string[], blanks: string[][]): GradeResult[] {
  return blanks.map((accepted, i) => gradeTyped(inputs[i] ?? "", accepted));
}

/** Grade a reorder answer (joined tiles) against accepted orderings. */
export function gradeReorder(joined: string, answers: string[]): GradeResult {
  return gradeTyped(joined, answers);
}

/**
 * Token-level similarity in [0,1] between an STT transcript and the target,
 * diacritic-folded (STT output is often diacritic-unreliable for Croatian).
 * Used by speak slides: ≥0.75 pass, 0.5–0.75 "close, try again".
 */
export function speechSimilarity(transcript: string, target: string): number {
  const a = foldDiacritics(normalize(transcript)).split(" ").filter(Boolean);
  const b = foldDiacritics(normalize(target)).split(" ").filter(Boolean);
  if (a.length === 0 || b.length === 0) return 0;
  // token edit distance (Levenshtein over word tokens)
  const dp: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
  }
  return 1 - dp[a.length][b.length] / Math.max(a.length, b.length);
}
