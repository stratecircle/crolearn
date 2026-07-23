import type { Unit } from "@/types/content";
import { a2u10l1 } from "./l1";
import { a2u10l2 } from "./l2";
import { a2u10l3 } from "./l3";
import { a2u10l4 } from "./l4";
import { a2u10l5 } from "./l5";
import { a2u10story } from "./story";
import { a2u10test } from "./test";

/**
 * A2 Unit 10 — Kod kuće (spec: curriculum/A2/unit-10.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the home vocab images (currently emoji-only, same backlog as
 * A1 U3–U8 and A2 U9).
 */
export const a2u10: Unit = {
  id: "a2u10",
  levelId: "A2",
  number: 10,
  title: "Kod kuće",
  titleEn: "Home & Living",
  theme: "DAT singular (receiver: dajem mami; pomagati + DAT), sviđa mi se + NOM, DAT prepositions prema/k, ACC-vs-DAT verb valence, rooms & furniture, renting",
  lessons: [a2u10l1, a2u10l2, a2u10l3, a2u10l4, a2u10l5],
  story: a2u10story,
  test: a2u10test,
};
