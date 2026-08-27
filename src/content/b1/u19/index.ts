import type { Unit } from "@/types/content";
import { b1u19l1 } from "./l1";
import { b1u19l2 } from "./l2";
import { b1u19l3 } from "./l3";
import { b1u19l4 } from "./l4";
import { b1u19l5 } from "./l5";
import { b1u19story } from "./story";
import { b1u19test } from "./test";

export const b1u19: Unit = {
  id: "b1u19",
  levelId: "B1",
  number: 19,
  title: "Mišljenja",
  titleEn: "Opinions & Debate — relative clauses with koji",
  theme:
    "The unit that lets you stop speaking in short sentences. Until now every idea has needed its own clause — Imam prijatelja. On radi u restoranu. — and the result sounds like a list, not like a person talking. koji welds the two together: Imam prijatelja koji radi u restoranu. The machinery costs almost nothing new, because koji declines exactly like the definite adjective nov from Unit 4, and you already own those endings. What has to be installed instead is one habit of mind, and the whole unit is built to install it: koji takes its GENDER and NUMBER from the noun it points back at, but its CASE from the job it does inside its own clause. Those two answers come from two different places, and nearly every mistake in this unit is the same mistake — importing the case from the antecedent. Opinions carry the unit because relative clauses are where opinions actually live: tema o kojoj svi govore, ljudi s kojima radim, razlog koji nitko ne spominje. L1 finally cards da, so Mislim da… becomes possible at all; L3 finally cards o + LOC, which U17 and U18 both had to route around; L5 teaches the four moves of a Croatian discussion, where the concession always comes before the objection. The unit ends with the family arguing about city versus village at Sunday lunch, and with a written argument paragraph of your own.",
  lessons: [b1u19l1, b1u19l2, b1u19l3, b1u19l4, b1u19l5],
  story: b1u19story,
  test: b1u19test,
};
