import type { Unit } from "@/types/content";
import { a2u13l1 } from "./l1";
import { a2u13l2 } from "./l2";
import { a2u13l3 } from "./l3";
import { a2u13l4 } from "./l4";
import { a2u13l5 } from "./l5";
import { a2u13story } from "./story";
import { a2u13test } from "./test";

/**
 * A2 Unit 13 — Priroda (spec: curriculum/A2/unit-13.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the nature/animal vocab images (currently emoji-only, same
 * backlog as A1 U3–U8 and A2 U9–U12).
 */
export const a2u13: Unit = {
  id: "a2u13",
  levelId: "A2",
  number: 13,
  title: "Priroda",
  titleEn: "Nature & Seasons",
  theme: "GEN plural (-a with fleeting a: pasa, mačaka; ljudi) + the full counting bracket (1 → NOM sg, 2–4 → GEN sg, 5+ → GEN pl) with puno/malo/nekoliko/koliko; comparatives (-iji, mutations, irregular bolji/gori/veći/manji) and superlatives (naj-) with od + GEN / nego + NOM; seasons + ljeti/zimi; describing places",
  lessons: [a2u13l1, a2u13l2, a2u13l3, a2u13l4, a2u13l5],
  story: a2u13story,
  test: a2u13test,
};
