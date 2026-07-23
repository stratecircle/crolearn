import type { Unit } from "@/types/content";
import { a2u11l1 } from "./l1";
import { a2u11l2 } from "./l2";
import { a2u11l3 } from "./l3";
import { a2u11l4 } from "./l4";
import { a2u11l5 } from "./l5";
import { a2u11story } from "./story";
import { a2u11test } from "./test";

/**
 * A2 Unit 11 — Zdravlje (spec: curriculum/A2/unit-11.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the body/health vocab images (currently emoji-only, same
 * backlog as A1 U3–U8 and A2 U9–U10).
 */
export const a2u11: Unit = {
  id: "a2u11",
  levelId: "A2",
  number: 11,
  title: "Zdravlje",
  titleEn: "Health & Body",
  theme: "boli me + NOM (body part as subject; boli/bole), modals morati/moći/smjeti/trebati + infinitive (ne moraš vs ne smiješ), DAT experiencer (loše mi je, treba mi), doctor & pharmacy",
  lessons: [a2u11l1, a2u11l2, a2u11l3, a2u11l4, a2u11l5],
  story: a2u11story,
  test: a2u11test,
};
