import type { Unit } from "@/types/content";
import { b1u18l1 } from "./l1";
import { b1u18l2 } from "./l2";
import { b1u18l3 } from "./l3";
import { b1u18l4 } from "./l4";
import { b1u18l5 } from "./l5";
import { b1u18story } from "./story";
import { b1u18test } from "./test";

export const b1u18: Unit = {
  id: "b1u18",
  levelId: "B1",
  number: 18,
  title: "Obrazovanje",
  titleEn: "Education & Learning — Conditional I",
  theme:
    "The politeness unit, disguised as a grammar unit. Conditional I is the cheapest piece of machinery left in Croatian: it is the same l-participle you have used since Unit 8, with a different clitic in front of it — sam htio becomes bih htio, and that is the whole trick. What it buys you is enormous. You can ask for something without sounding blunt (Htio bih…, Biste li mi mogli…?), say what you wish were true (Da imam vremena…), reason about what is not (Kad bih imao novca, studirao bih u Zagrebu.) and give advice in four different registers (Na tvom mjestu bih…, Trebao bi…, Trebalo bi…, Mogao bi…). School carries the unit because school is where Croatians ask, wish, hypothesize and advise most — which course to enrol in, which exam to sit, what you would study if you could start again. L3 finally cards ako, so you can feel the difference between a fork you can still take (Ako imam vremena, doći ću.) and a road with a barrier across it (Da imam vremena, došao bih.). The unit ends with Tom in Canada choosing between three courses in Zagreb while everyone he knows gives him different advice, and with a guided piece of writing about what you would study and why.",
  lessons: [b1u18l1, b1u18l2, b1u18l3, b1u18l4, b1u18l5],
  story: b1u18story,
  test: b1u18test,
};
