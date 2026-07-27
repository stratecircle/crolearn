import type { Unit } from "@/types/content";
import { a2u16l1 } from "./l1";
import { a2u16l2 } from "./l2";
import { a2u16l3 } from "./l3";
import { a2u16l4 } from "./l4";
import { a2u16l5 } from "./l5";
import { a2u16story } from "./story";
import { a2u16test } from "./test";

/**
 * A2 Unit 16 — Moja priča (spec: curriculum/A2/unit-16.md) — the A2 finale.
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the life-story vocab images (currently emoji-only, same
 * backlog as A1 U3–U8 and A2 U9–U15).
 */
export const a2u16: Unit = {
  id: "a2u16",
  levelId: "A2",
  number: 16,
  title: "Moja priča",
  titleEn: "Biography & Plans",
  theme: "verb aspect introduced gently — pairs as vocabulary (pisati/napisati, čitati/pročitati, kupovati/kupiti), aspect in the past (Pisao sam cijelo jutro 〰️ vs Napisao sam ✅ with context magnets) and in the future (Radit ću cijelo ljeto vs Napravit ću plan do petka); life-event verbs (rodio sam se, odrastao, upoznao, vjenčao se, preselio se) and the biography schema; capstone: the learner's own story past → present → plans",
  lessons: [a2u16l1, a2u16l2, a2u16l3, a2u16l4, a2u16l5],
  story: a2u16story,
  test: a2u16test,
};
