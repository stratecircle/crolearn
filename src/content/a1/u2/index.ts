import type { Unit } from "@/types/content";
import { a1u2l1 } from "./l1";
import { a1u2l2 } from "./l2";
import { a1u2l3 } from "./l3";
import { a1u2l4 } from "./l4";
import { a1u2l5 } from "./l5";
import { a1u2story } from "./story";
import { a1u2test } from "./test";

/** A1 Unit 2 — Ja sam iz… (spec: curriculum/A1/unit-2.md) */
export const a1u2: Unit = {
  id: "a1u2",
  levelId: "A1",
  number: 2,
  title: "Ja sam iz…",
  titleEn: "Origins & Professions",
  theme: "origins, nationalities, professions, numbers, languages",
  lessons: [a1u2l1, a1u2l2, a1u2l3, a1u2l4, a1u2l5],
  story: a1u2story,
  test: a1u2test,
};
