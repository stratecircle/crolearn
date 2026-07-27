import type { Unit } from "@/types/content";
import { a2u15l1 } from "./l1";
import { a2u15l2 } from "./l2";
import { a2u15l3 } from "./l3";
import { a2u15l4 } from "./l4";
import { a2u15l5 } from "./l5";
import { a2u15story } from "./story";
import { a2u15test } from "./test";

/**
 * A2 Unit 15 — Komunikacija (spec: curriculum/A2/unit-15.md)
 *
 * ⚠️ DRAFT — authored autonomously. Structurally validated
 * (`npm run validate:content`), but review the Croatian before relying on it,
 * and generate the phone/internet vocab images (currently emoji-only, same
 * backlog as A1 U3–U8 and A2 U9–U14).
 */
export const a2u15: Unit = {
  id: "a2u15",
  levelId: "A2",
  number: 15,
  title: "Komunikacija",
  titleEn: "Phone, Mail, Internet",
  theme: "object clitic pronouns: ACC (me te ga je nas vas ih — Vidim ga!) and DAT (mi ti mu joj nam vam im — Javi mi se!), the second-position cluster in fixed order li → aux → DAT → ACC → se → je (je last: Dala mu ga je; se+je → je drops: Javila se); phone-call script (Halo? Ovdje… Čujemo se!) and formal/informal e-mail frames (Poštovana gospođo, javljam Vam se zbog… — capital Vam)",
  lessons: [a2u15l1, a2u15l2, a2u15l3, a2u15l4, a2u15l5],
  story: a2u15story,
  test: a2u15test,
};
