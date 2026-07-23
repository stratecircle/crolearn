import type { CheckpointExam } from "@/types/content";

/**
 * Pure scoring for the level checkpoint exam (teaching-method §8). The quiz
 * sections (listening/reading/cloze) are graded locally and decide pass/fail;
 * the speaking section is AI-graded elsewhere and never gates. Kept pure so the
 * scoring, weakest-area detection, and remediation are unit-tested without UI.
 */

export interface ItemResult {
  sectionTitle: string;
  itemId: string;
  correct: boolean;
}

export interface SectionScore {
  title: string;
  correct: number;
  total: number;
  pct: number;
}

export interface CheckpointScore {
  sections: SectionScore[];
  totalCorrect: number;
  totalItems: number;
  pct: number;
  passed: boolean;
  /** Section titles scoring below the pass mark, worst first (for remediation). */
  weakestSections: string[];
  wrongItemIds: string[];
}

/** Flatten a checkpoint's quiz sections into the ordered list of gradeable items. */
export function checkpointItems(exam: CheckpointExam): { sectionTitle: string; id: string }[] {
  return exam.sections.flatMap((sec) => sec.slides.map((s) => ({ sectionTitle: sec.title, id: s.id })));
}

const pctOf = (correct: number, total: number): number =>
  total === 0 ? 0 : Math.round((correct / total) * 100);

/**
 * Score a completed set of item results against the pass threshold.
 * `results` should cover every graded item exactly once; order doesn't matter.
 * `weakestLimit` caps how many weak sections remediation surfaces (spec: 2).
 */
export function scoreCheckpoint(
  results: ItemResult[],
  passPct: number,
  weakestLimit = 2,
): CheckpointScore {
  const bySection = new Map<string, { correct: number; total: number }>();
  const wrongItemIds: string[] = [];
  // Preserve first-seen section order for stable display.
  const order: string[] = [];

  for (const r of results) {
    if (!bySection.has(r.sectionTitle)) {
      bySection.set(r.sectionTitle, { correct: 0, total: 0 });
      order.push(r.sectionTitle);
    }
    const agg = bySection.get(r.sectionTitle)!;
    agg.total += 1;
    if (r.correct) agg.correct += 1;
    else wrongItemIds.push(r.itemId);
  }

  const sections: SectionScore[] = order.map((title) => {
    const { correct, total } = bySection.get(title)!;
    return { title, correct, total, pct: pctOf(correct, total) };
  });

  const totalItems = results.length;
  const totalCorrect = totalItems - wrongItemIds.length;
  const pct = pctOf(totalCorrect, totalItems);

  const weakestSections = sections
    .filter((s) => s.pct < passPct)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, weakestLimit)
    .map((s) => s.title);

  return {
    sections,
    totalCorrect,
    totalItems,
    pct,
    passed: pct >= passPct,
    weakestSections,
    wrongItemIds,
  };
}
