import type { Unit } from "@/types/content";
import { a2u9l1 } from "./l1";
import { a2u9l2 } from "./l2";
import { a2u9l3 } from "./l3";
import { a2u9l4 } from "./l4";
import { a2u9l5 } from "./l5";
import { a2u9story } from "./story";
import { a2u9test } from "./test";

/**
 * A2 Unit 9 — Na putu (spec: curriculum/A2/unit-9.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the travel vocab images (currently emoji-only, same backlog as
 * A1 U3–U8).
 */
export const a2u9: Unit = {
  id: "a2u9",
  levelId: "A2",
  number: 9,
  title: "Na putu",
  titleEn: "Travel",
  theme: "future I (ću/ćeš + infinitive, pisat ću spelling, hoću li questions, neću), GEN prepositions (iz, do, od, kod, bez, blizu), travel & hotel phrases",
  lessons: [a2u9l1, a2u9l2, a2u9l3, a2u9l4, a2u9l5],
  story: a2u9story,
  test: a2u9test,
};
