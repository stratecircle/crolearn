import type { Unit } from "@/types/content";
import { a2u14l1 } from "./l1";
import { a2u14l2 } from "./l2";
import { a2u14l3 } from "./l3";
import { a2u14l4 } from "./l4";
import { a2u14l5 } from "./l5";
import { a2u14story } from "./story";
import { a2u14test } from "./test";

/**
 * A2 Unit 14 — Proslave (spec: curriculum/A2/unit-14.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the party/holiday vocab images (currently emoji-only, same
 * backlog as A1 U3–U8 and A2 U9–U13).
 */
export const a2u14: Unit = {
  id: "a2u14",
  levelId: "A2",
  number: 14,
  title: "Proslave",
  titleEn: "Celebrations & Food Culture",
  theme: "VOCATIVE — case 7 of 7 (Ivane! bako! momče!; names mostly unchanged) + imperative (steal the stem from oni: pjevaj!/otvori!/dođi!; nemoj + infinitive for DON'T); the 12 months (first taught here) + dates in bare GEN (dvadeset petog prosinca); recipes; wish formulas with agreement (Sretan Božić / Sretna Nova godina) and čestitati/željeti + DAT ti/Vam chunks",
  lessons: [a2u14l1, a2u14l2, a2u14l3, a2u14l4, a2u14l5],
  story: a2u14story,
  test: a2u14test,
};
