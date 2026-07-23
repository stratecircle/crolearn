import type { Unit } from "@/types/content";
import { a1u6l1 } from "./l1";
import { a1u6l2 } from "./l2";
import { a1u6l3 } from "./l3";
import { a1u6l4 } from "./l4";
import { a1u6l5 } from "./l5";
import { a1u6story } from "./story";
import { a1u6test } from "./test";

/**
 * A1 Unit 6 — Moj dan (spec: curriculum/A1/unit-6.md)
 *
 * ⚠️ DRAFT — authored autonomously overnight. Structurally validated
 * (`npm run validate:content`), but NOT yet run through the native proofread
 * pass. Run `npm run proofread -- a1u6` and review the Croatian before relying
 * on it, and generate the routine/time/day vocab images (currently emoji-only).
 * See docs/NOAH-TODO.md.
 */
export const a1u6: Unit = {
  id: "a1u6",
  levelId: "A1",
  number: 6,
  title: "Moj dan",
  titleEn: "Daily Routine & Time",
  theme: "reflexive verbs, telling time, accusative plural, days & frequency, daily routine",
  lessons: [a1u6l1, a1u6l2, a1u6l3, a1u6l4, a1u6l5],
  story: a1u6story,
  test: a1u6test,
};
