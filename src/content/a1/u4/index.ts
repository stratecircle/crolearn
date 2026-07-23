import type { Unit } from "@/types/content";
import { a1u4l1 } from "./l1";
import { a1u4l2 } from "./l2";
import { a1u4l3 } from "./l3";
import { a1u4l4 } from "./l4";
import { a1u4l5 } from "./l5";
import { a1u4story } from "./story";
import { a1u4test } from "./test";

/**
 * A1 Unit 4 — Hrana i kafić (spec: curriculum/A1/unit-4.md)
 *
 * The first real case: the accusative. l1–l3 were drafted by the parallel
 * session; l4–l5 + story + test + this index authored to finish the unit,
 * with the §2b progression audit applied. NOT yet run through the native
 * proofread pass — run `npm run proofread -- a1u4` before relying on it, and
 * generate the food/café vocab images.
 */
export const a1u4: Unit = {
  id: "a1u4",
  levelId: "A1",
  number: 4,
  title: "Hrana i kafić",
  titleEn: "Food & the Café",
  theme: "the accusative case, the three verb classes, htjeti, ordering at a café",
  lessons: [a1u4l1, a1u4l2, a1u4l3, a1u4l4, a1u4l5],
  story: a1u4story,
  test: a1u4test,
};
