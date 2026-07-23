import type { Unit } from "@/types/content";
import { a1u3l1 } from "./l1";
import { a1u3l2 } from "./l2";
import { a1u3l3 } from "./l3";
import { a1u3l4 } from "./l4";
import { a1u3l5 } from "./l5";
import { a1u3story } from "./story";
import { a1u3test } from "./test";

/**
 * A1 Unit 3 — Moja obitelj (spec: curriculum/A1/unit-3.md)
 *
 * ⚠️ DRAFT — authored autonomously overnight. Structurally validated
 * (`npm run validate:content`), but NOT yet run through the native proofread
 * pass. Run `npm run proofread -- a1u3` and review the Croatian before relying
 * on it, and generate the family/pet vocab images (currently emoji-only).
 * See docs/NOAH-TODO.md.
 */
export const a1u3: Unit = {
  id: "a1u3",
  levelId: "A1",
  number: 3,
  title: "Moja obitelj",
  titleEn: "Family & People",
  theme: "family, possessives, NOM plural, imati, describing people",
  lessons: [a1u3l1, a1u3l2, a1u3l3, a1u3l4, a1u3l5],
  story: a1u3story,
  test: a1u3test,
};
