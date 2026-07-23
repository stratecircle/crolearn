import type { Unit } from "@/types/content";
import { a1u7l1 } from "./l1";
import { a1u7l2 } from "./l2";
import { a1u7l3 } from "./l3";
import { a1u7l4 } from "./l4";
import { a1u7l5 } from "./l5";
import { a1u7story } from "./story";
import { a1u7test } from "./test";

/**
 * A1 Unit 7 — Kupovina (spec: curriculum/A1/unit-7.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but NOT yet run through the native proofread
 * pass. Run `npm run proofread -- a1u7` and review the Croatian before relying
 * on it, and generate the shopping/clothes/number vocab images (currently
 * emoji-only). See docs/NOAH-TODO.md.
 */
export const a1u7: Unit = {
  id: "a1u7",
  levelId: "A1",
  number: 7,
  title: "Kupovina",
  titleEn: "Shopping & Money",
  theme: "genitive singular, quantities, nema, numbers & prices, shops, clothes & colours",
  lessons: [a1u7l1, a1u7l2, a1u7l3, a1u7l4, a1u7l5],
  story: a1u7story,
  test: a1u7test,
};
