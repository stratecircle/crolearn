import type { Unit } from "@/types/content";
import { a1u8l1 } from "./l1";
import { a1u8l2 } from "./l2";
import { a1u8l3 } from "./l3";
import { a1u8l4 } from "./l4";
import { a1u8l5 } from "./l5";
import { a1u8story } from "./story";
import { a1u8test } from "./test";

/**
 * A1 Unit 8 — Jučer i danas (spec: curriculum/A1/unit-8.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but NOT yet run through the native proofread
 * pass. Run the proofread pass and review the Croatian before relying on it,
 * and generate the weather/activity vocab images (currently emoji-only).
 */
export const a1u8: Unit = {
  id: "a1u8",
  levelId: "A1",
  number: 8,
  title: "Jučer i danas",
  titleEn: "Weekend, Weather & the Past",
  theme: "perfekt (past tense), l-participle, clitic se/je, weather, past narration",
  lessons: [a1u8l1, a1u8l2, a1u8l3, a1u8l4, a1u8l5],
  story: a1u8story,
  test: a1u8test,
};
