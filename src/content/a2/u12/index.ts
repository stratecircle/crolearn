import type { Unit } from "@/types/content";
import { a2u12l1 } from "./l1";
import { a2u12l2 } from "./l2";
import { a2u12l3 } from "./l3";
import { a2u12l4 } from "./l4";
import { a2u12l5 } from "./l5";
import { a2u12story } from "./story";
import { a2u12test } from "./test";

/**
 * A2 Unit 12 — Posao (spec: curriculum/A2/unit-12.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the work/uni vocab images (currently emoji-only, same backlog
 * as A1 U3–U8 and A2 U9–U11).
 */
export const a2u12: Unit = {
  id: "a2u12",
  levelId: "A2",
  number: 12,
  title: "Posao",
  titleEn: "Work & Study",
  theme: "INS singular (s/sa + company: s kolegom, sa šeficom; bare INS of means: vlakom, računalom — no s!), raditi kao + NOM, studirati + ACC, job-interview script in Vi",
  lessons: [a2u12l1, a2u12l2, a2u12l3, a2u12l4, a2u12l5],
  story: a2u12story,
  test: a2u12test,
};
