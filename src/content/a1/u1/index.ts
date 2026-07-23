import type { Unit } from "@/types/content";
import { a1u1l1 } from "./l1";
import { a1u1l2 } from "./l2";
import { a1u1l3 } from "./l3";
import { a1u1l4 } from "./l4";
import { a1u1l5 } from "./l5";
import { a1u1story } from "./story";
import { a1u1test } from "./test";

/** A1 Unit 1 — Dobar dan! (spec: curriculum/A1/unit-1.md) */
export const a1u1: Unit = {
  id: "a1u1",
  levelId: "A1",
  number: 1,
  title: "Dobar dan!",
  titleEn: "Greetings & Introductions",
  theme: "greetings, courtesy, first conversations",
  lessons: [a1u1l1, a1u1l2, a1u1l3, a1u1l4, a1u1l5],
  story: a1u1story,
  test: a1u1test,
};
