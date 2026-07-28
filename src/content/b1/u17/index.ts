import type { Unit } from "@/types/content";
import { b1u17l1 } from "./l1";
import { b1u17l2 } from "./l2";
import { b1u17l3 } from "./l3";
import { b1u17l4 } from "./l4";
import { b1u17l5 } from "./l5";
import { b1u17story } from "./story";
import { b1u17test } from "./test";

export const b1u17: Unit = {
  id: "b1u17",
  levelId: "B1",
  number: 17,
  title: "Mediji",
  titleEn: "Media & News — Aspect Mastery I",
  theme:
    "The first B1 unit, and the one where aspect stops being a rule you look up and becomes something you hear. You already know that Croatian verbs come in pairs; here you learn the four machines that build those pairs — prefixes (čitati/pročitati), suffixes (davati/dati), the -nu- shortcut (dizati/dignuti) and the four suppletive pairs that share no root at all (govoriti/reći, dolaziti/doći). Then you put the pairs to work on real language: news sites publishing, radios broadcasting, a journalist doing an interview. The vocabulary is media — vijesti, novine, portal, emisija, časopis, intervju, reklama, društvene mreže — because news is where Croatian narration lives. By the last two lessons you are telling a story with aspect rather than conjugating one: the imperfective paints the background, »dok« holds the frame open, and each perfective verb is an event that moves the plot. The unit closes with a storm on the square in Split, and with your first piece of guided B1 writing.",
  lessons: [b1u17l1, b1u17l2, b1u17l3, b1u17l4, b1u17l5],
  story: b1u17story,
  test: b1u17test,
};
