import type { Unit } from "@/types/content";
import { a1u5l1 } from "./l1";
import { a1u5l2 } from "./l2";
import { a1u5l3 } from "./l3";
import { a1u5l4 } from "./l4";
import { a1u5l5 } from "./l5";
import { a1u5story } from "./story";
import { a1u5test } from "./test";

/**
 * A1 Unit 5 — U gradu (spec: curriculum/A1/unit-5.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (schema + content contract), but NOT yet run through the native proofread
 * pass. Run the proofread pass and review the Croatian before relying on it,
 * and generate the city/transport/floor vocab images (currently emoji-only).
 */
export const a1u5: Unit = {
  id: "a1u5",
  levelId: "A1",
  number: 5,
  title: "U gradu",
  titleEn: "City & Directions",
  theme: "city places, locative, direction vs location, ići, ordinals & floors, directions",
  lessons: [a1u5l1, a1u5l2, a1u5l3, a1u5l4, a1u5l5],
  story: a1u5story,
  test: a1u5test,
};
