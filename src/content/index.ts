import type { CheckpointExam, Lesson, Level, Story, Unit, UnitTest } from "@/types/content";
import { a1checkpoint } from "./a1/checkpoint";
import { a2checkpoint } from "./a2/checkpoint";
import { a1u1 } from "./a1/u1";
import { a1u2 } from "./a1/u2";
import { a1u3 } from "./a1/u3";
import { a1u4 } from "./a1/u4";
import { a1u5 } from "./a1/u5";
import { a1u6 } from "./a1/u6";
import { a1u7 } from "./a1/u7";
import { a1u8 } from "./a1/u8";
import { a2u9 } from "./a2/u9";
import { a2u10 } from "./a2/u10";
import { a2u11 } from "./a2/u11";
import { a2u12 } from "./a2/u12";
import { a2u13 } from "./a2/u13";
import { a2u14 } from "./a2/u14";
import { a2u15 } from "./a2/u15";
import { a2u16 } from "./a2/u16";
import { b1u17 } from "./b1/u17";
import { b1u18 } from "./b1/u18";
import { b1u19 } from "./b1/u19";

/**
 * The content registry. Add units here as they are authored (strictly in course
 * order — CLAUDE.md). The app renders whatever exists; the path ends at the
 * last built unit.
 */
export const levels: Level[] = [
  { id: "A1", title: "A1 — Foundations", units: [a1u1, a1u2, a1u3, a1u4, a1u5, a1u6, a1u7, a1u8] },
  { id: "A2", title: "A2 — Independence", units: [a2u9, a2u10, a2u11, a2u12, a2u13, a2u14, a2u15, a2u16] },
  { id: "B1", title: "B1 — Fluency", units: [b1u17, b1u18, b1u19] },
  { id: "B2", title: "B2 — Proficiency", units: [] },
];

export const allUnits: Unit[] = levels.flatMap((l) => l.units);
export const allLessons: Lesson[] = allUnits.flatMap((u) => u.lessons);

export function findLesson(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function findUnit(id: string): Unit | undefined {
  return allUnits.find((u) => u.id === id);
}

export function unitOfLesson(lessonId: string): Unit | undefined {
  return allUnits.find((u) => u.lessons.some((l) => l.id === lessonId));
}

export function findStory(id: string): Story | undefined {
  return allUnits.map((u) => u.story).find((s) => s.id === id);
}

export function findTest(id: string): UnitTest | undefined {
  return allUnits.map((u) => u.test).find((t) => t.id === id);
}

/** Level checkpoint exams, keyed by the unit they follow. */
export const checkpoints: CheckpointExam[] = [a1checkpoint, a2checkpoint];

export function findCheckpoint(id: string): CheckpointExam | undefined {
  return checkpoints.find((c) => c.id === id);
}

/**
 * The guided path as a flat ordered list of steps (teaching-method §9):
 * lessons → story → unit test, unit by unit.
 */
export type PathStep =
  | { kind: "lesson"; id: string; title: string; unitId: string }
  | { kind: "story"; id: string; title: string; unitId: string }
  | { kind: "test"; id: string; title: string; unitId: string }
  | { kind: "checkpoint"; id: string; title: string; unitId: string };

/**
 * A short description of what the course currently teaches, for grounding the
 * AI tutor/grader (so it prefers structures the learner has actually met).
 */
export function learnerLevelContext(): string {
  if (!allUnits.length) return "The learner is just starting — no units built yet.";
  const parts = allUnits.map(
    (u) => `${u.levelId} Unit ${u.number} "${u.title}" — ${u.theme}`,
  );
  return (
    "CroLearn currently covers, in order: " +
    parts.join("; ") +
    ". Case introduction order is strictly NOM→ACC→LOC→GEN→DAT→INS→VOC; " +
    "prefer grammar and vocabulary from these units and flag anything beyond them as a preview."
  );
}

/**
 * A fuller grounding digest for the in-app AI features (tutor, grader, exercise
 * generator). It lists the grammar each unit introduced — straight from the
 * vetted unit `theme`s — and, when asked, the exact vocabulary the learner has
 * met. Everything here is derived from already-validated content, so the Croatian
 * is correct by construction. This function supplies FACTS ONLY (never behaviour):
 * each caller wraps it with its own instructions, so grounding sharpens the AI's
 * level-awareness without turning the tutor into a rigid lookup bot.
 */
export function courseGrounding(opts: { includeVocab?: boolean } = {}): string {
  if (!allUnits.length) return "The learner is just starting — no units built yet.";
  const grammar = allUnits
    .map((u) => `- ${u.levelId} Unit ${u.number} "${u.title}": ${u.theme}`)
    .join("\n");
  const parts = [
    "The course so far (the learner is working through it in order):",
    grammar,
    "Cases are introduced in this fixed order: NOM → ACC → LOC → GEN → DAT → INS → VOC. " +
      "Only cases named in the unit themes above have been taught — anything further is a preview.",
    "Recurring story characters you can reuse in examples and role-plays: Tom, Ana, Marko, and baka Marija.",
  ];
  if (opts.includeVocab) {
    const vocab = allLessons
      .flatMap((l) => l.vocab)
      .map((v) => `${v.hr} – ${v.en}`)
      .join("; ");
    parts.push(`Vocabulary the learner has met (Croatian – English): ${vocab}`);
  }
  return parts.join("\n\n");
}

export const path: PathStep[] = allUnits.flatMap((u): PathStep[] => {
  const steps: PathStep[] = [
    ...u.lessons.map((l): PathStep => ({ kind: "lesson", id: l.id, title: l.title, unitId: u.id })),
    { kind: "story", id: u.story.id, title: u.story.title, unitId: u.id },
    { kind: "test", id: u.test.id, title: u.test.title, unitId: u.id },
  ];
  // A checkpoint exam follows the unit named by its afterUnitId.
  const cp = checkpoints.find((c) => c.afterUnitId === u.id);
  if (cp) steps.push({ kind: "checkpoint", id: cp.id, title: cp.title, unitId: u.id });
  return steps;
});
