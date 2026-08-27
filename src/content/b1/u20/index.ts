import type { Unit } from "@/types/content";
import { b1u20l1 } from "./l1";
import { b1u20l2 } from "./l2";
import { b1u20l3 } from "./l3";
import { b1u20l4 } from "./l4";
import { b1u20l5 } from "./l5";
import { b1u20story } from "./story";
import { b1u20test } from "./test";

export const b1u20: Unit = {
  id: "b1u20",
  levelId: "B1",
  number: 20,
  title: "Okoliš",
  titleEn: "Environment — the se-passive & impersonal constructions",
  theme:
    "The unit that teaches you to take the person out of the sentence. Everything said in this course so far has had somebody doing it — ja radim, Ana kupuje, oni recikliraju — and that is a problem, because an enormous amount of what adults actually say has no doer in it at all. Plastic is recycled here. You can't park there. People say it's getting warmer. One should do something. English solves this three separate ways, with a passive, a generic you and an indefinite one; Croatian solves all three with a word the learner has owned since Unit 1 and has never once understood: se. The whole unit rests on a single fork, and it is a fork about whether there is a thing in the sentence. If a thing is there, the thing is the subject and the verb agrees with it — Ovdje se reciklira plastika, but Ovdje se recikliraju boce. If no thing is there, nothing is the subject, the verb freezes in the third person singular, and in the past it freezes in the neuter, which looks wrong to anyone who has spent two levels making participles agree. Nearly every error in the unit is the same error: leaving the verb singular when a plural thing is sitting right there, and L1 and L2 are deliberately two halves of one lesson, split so that the contrast has somewhere to happen. Three things make this teachable now. se has been in the learner's mouth since zovem se and has been quietly accumulating ever since — sjećati se, nadati se, sviđati se, slagati se — so the unit opens by naming the species already owned, the lexical se, welded to its verb and meaningless alone, and sets the two new ones beside it. se is also a clitic, so Unit 12's second-position rule governs it completely and nothing new has to be learned about where it goes. And U19's relative clauses give the learner somewhere to put all of it: grad u kojem se dobro živi, problem o kojem se govori. L3 adds the construction for reporting a claim without owning it — kaže se, smatra se, zna se da — which is the one honest way to say apparently before Unit 21 hands over reported speech proper, and it plants, at zero cost, the fact that Croatian never backshifts a tense. L4 goes back for trebati, which the learner has been using personally since A2 and which has an impersonal twin meaning something quite different, plus U18's conditional in its softest form, trebalo bi; it is the unit's only lesson whose grammar point contains no se at all, placed there deliberately so the reflex three lessons just installed gets caught before it hardens. The environment carries the unit because environmental language is almost entirely agentless — nobody signs their name to pollution, and every rule about rubbish is a rule about what is done, not about who does it. The story is a neighbourhood arguing about a bin: a new container appears on the pavement, the sign on its lid says one thing, the neighbours have been doing another, and the one person who asks how it is actually done here gets four different answers and understands nothing.",
  lessons: [b1u20l1, b1u20l2, b1u20l3, b1u20l4, b1u20l5],
  story: b1u20story,
  test: b1u20test,
};
