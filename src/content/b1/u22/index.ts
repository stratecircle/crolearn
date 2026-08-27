import type { Unit } from "@/types/content";
import { b1u22l1 } from "./l1";
import { b1u22l2 } from "./l2";
import { b1u22l3 } from "./l3";
import { b1u22l4 } from "./l4";
import { b1u22l5 } from "./l5";
import { b1u22story } from "./story";
import { b1u22test } from "./test";

export const b1u22: Unit = {
  id: "b1u22",
  levelId: "B1",
  number: 22,
  title: "Kultura i povijest",
  titleEn: "Culture & history — Futur II and time clauses",
  theme:
    "The unit that stops the learner saying the most natural thing in the world. When I arrive, I'll call you — English puts a present in the first half and a future in the second, and every learner of Croatian reaches for Futur I in the time clause because that is where the future actually is. Kad ću doći, javit ću ti is wrong, it is wrong every single time, and it is the only thing this unit is really about. In a time clause after kad, čim, dok or ako that points at the future, Croatian bans Futur I, and what goes there instead is decided by the aspect of the verb rather than by the learner: a perfective verb takes the plain present, because a perfective has no present meaning of its own and the form is therefore free — Kad dođem, javit ću ti — while an imperfective takes Futur II, budem plus the l-participle, agreeing exactly as in the perfekt — Dok budem čekao, čitat ću knjigu. The aspect chooses, not you, and that second half is what makes the unit hard. Someone who reaches for budem every time produces kad budem došao, which is not wrong at all, only heavy; someone who reaches for the present every time produces dok čekam, čitat ću, which reports something happening now. So the ban is taught first and the fork second, always, because the ban is the safety rail and the fork is the polish. L1 goes back for past narration with aspect, deliberately, because the fork the unit turns on is Unit 17's fork and it has to be automatic before it starts governing a tense the learner has never met — not one sentence in that lesson points at the future. L2 builds Futur II and puts it in kad-clauses. L3 adds čim, the dok and dok ne pair whose ne translates to nothing whatsoever, and the ako split, which is decided on certainty alone. L4 practises the whole system in biography, where a life and a plan turn out to be the same stack of clauses pointed in opposite directions, and where the line worth keeping finally lands: in the past, aspect only describes; in the future, the same aspect chooses the tense. L5 sorts it onto one card, walks a wall of ten traps of which exactly one is harmless, and then names the single licensed exception — Pitao me kad ću doći, which is correct, because that kad is Unit 21's embedded question word rather than this unit's conjunction, and the clause is not naming the time of anything but is itself the thing being asked. The test is never the word; it is what the clause is doing. That exception is taught last, after four lessons of the ban, and it only works at all because Unit 21 happened first. Croatian culture and history carry the unit because a plan is a stack of time clauses and nothing else, and a biography is the same stack pointed backwards. The story is a castle, four people, one day trip, and a plan in which every single arrangement is a time clause — including the one with a čim in it, which is the one that breaks, and which Marko quotes back at Ana word for word so the reader can confirm that nothing about the grammar was ever wrong.",
  lessons: [b1u22l1, b1u22l2, b1u22l3, b1u22l4, b1u22l5],
  story: b1u22story,
  test: b1u22test,
};
