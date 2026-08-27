import type { Unit } from "@/types/content";
import { b1u21l1 } from "./l1";
import { b1u21l2 } from "./l2";
import { b1u21l3 } from "./l3";
import { b1u21l4 } from "./l4";
import { b1u21l5 } from "./l5";
import { b1u21story } from "./story";
import { b1u21test } from "./test";

export const b1u21: Unit = {
  id: "b1u21",
  levelId: "B1",
  number: 21,
  title: "Tehnologija",
  titleEn: "Technology — indirect speech",
  theme:
    "The unit that teaches you to carry somebody else's words. Every reported utterance in this course so far has been a direct quote, and that was deliberate: U18, U19 and U20 each shipped an explicit story guard banning Rekla je da… by name, so that indirect speech would arrive here as genuine first contact, with the one fact that decides everything. Croatian does not backshift. English relays «Dolazim» as she said she was coming, moving the tense one step back so automatically that English speakers do not know they are doing it — Croatian moves nothing at all. «Dolazim.» → Rekla je da dolazi. The learner's whole job in L1 is to stop doing something, which is a strange kind of grammar lesson and is taught as one; and the rule was already planted, because Unit 20's kaže se da… frames carried exactly this fact in a construction with nothing else to think about. From there the unit walks the three sentence types, because each one changes something different. Statements take da plus the original tense, and only the person moves. Commands lose the imperative and take da plus the present, person-matched to whoever must act — «Dođi!» → Rekla mi je da dođem — with the person told in the dative, and neka plus the third person for when the one who must act is not in the room. Questions split in two: a wh-question keeps its question word and simply stops being a question, no inversion and no question mark, while a yes/no question takes li clipped onto the verb — and the English speaker's instinct to reach for ako here is the most durable error in Croatian indirect speech, because ako is the conditional conjunction and a Croatian listener hears it and waits for a consequence that never comes. It is killed on sight in L3, with six separate contacts in that lesson alone. L4 opens the network of verbs that take a da-clause — obećati, priznati, spomenuti, predložiti, obavijestiti, primijetiti beside the already-owned reći, misliti, znati, čuti, objasniti — and names the two that refuse to join it, odbiti and pristati, because a learner who meets a pattern without ever meeting an exception applies it to everything. L5 sorts all three types back together and finally delivers the one piece the earlier lessons postponed: tenses never move, but deictics always do. Technology carries the unit because relaying is what a phone is for — every message, every screenshot, every group chat is somebody's words in somebody else's mouth — and the story is a message that survives four relays and arrives wrong: two people at the wrong time, one in the wrong café, and nobody said anything untrue at any point.",
  lessons: [b1u21l1, b1u21l2, b1u21l3, b1u21l4, b1u21l5],
  story: b1u21story,
  test: b1u21test,
};
