/**
 * The Nativ "backend": real numbers derived from CroLearn's local data layer
 * (content registry + Dexie + FSRS). Keys we cannot honestly derive stay
 * undefined and the UI hides that card/section (handoff adjust-if-absent rule).
 */
import { levels, path, allLessons, findLesson, type PathStep } from "@/content";
import { db } from "@/lib/db";
import { countDue } from "@/lib/srs";

export interface NativStats {
  dayStreak: number;
  longestStreak: number;
  wordsLearned: number;
  /** e.g. "4h 32m" — review think-time + est. lesson minutes; undefined if no activity yet. */
  timePracticed?: string;
  minutesToday: number;
  /** Today's goal, CroLearn semantics: ① review done + ② next path step done. */
  goalDone: number;
  goalTotal: number;
  due: number;
}

export interface LevelInfo {
  code: string;
  name: string;
  color: string;
  total: number;
  done: number;
  state: "current" | "locked" | "done";
  blurb: string;
  focus: string;
  units: { id: string; number: number; title: string; titleEn: string; steps: PathStep[]; done: number; total: number }[];
}

export interface NativProgress {
  stats: NativStats;
  levels: LevelInfo[];
  currentLevel: string;
  /** First not-done step on the guided path (null = course complete). */
  next: PathStep | null;
  nextLesson: { id: string; title: string; titleEn?: string; unitLabel: string; estMinutes?: number } | null;
  completedLessons: Set<string>;
  completedStories: Set<string>;
  passedTests: Set<string>;
  passedCheckpoints: Set<string>;
  recentWords: { hr: string; en: string }[];
}

/** Real course copy per level (roadmap goals) — not fabricated marketing. */
const LEVEL_COPY: Record<string, { name: string; blurb: string; focus: string }> = {
  A1: {
    name: "Foundations",
    blurb: "Start from zero: sounds and spelling, introducing yourself, family, food, the city, daily routine, shopping, and your first past tense.",
    focus: "Core vocabulary & first cases",
  },
  A2: {
    name: "Independence",
    blurb: "Travel, home, health, work, nature, and celebrations — all seven cases, the clitic cluster, and your first feel for verb aspect.",
    focus: "All 7 cases · clitics · aspect",
  },
  B1: {
    name: "Fluency Foundations",
    blurb: "Discuss opinions and hypotheticals, read adapted texts comfortably, and write short compositions. Aspect becomes reliable.",
    focus: "Aspect mastery · conditional · koji",
  },
  B2: {
    name: "Proficiency",
    blurb: "Follow native media, argue a position, write structured essays, and handle register from formal letters to slang awareness.",
    focus: "Nuance, passive & register",
  },
};

export function stepDone(step: PathStep, p: Pick<NativProgress, "completedLessons" | "completedStories" | "passedTests" | "passedCheckpoints">): boolean {
  if (step.kind === "lesson") return p.completedLessons.has(step.id);
  if (step.kind === "test") return p.passedTests.has(step.id);
  if (step.kind === "checkpoint") return p.passedCheckpoints.has(step.id);
  return p.completedStories.has(step.id);
}

export function stepLink(step: PathStep): string {
  return step.kind === "lesson"
    ? `/lesson/${step.id}`
    : step.kind === "story"
      ? `/story/${step.id}`
      : step.kind === "checkpoint"
        ? `/checkpoint/${step.id}`
        : `/test/${step.id}`;
}

function fmtDuration(ms: number): string | undefined {
  const min = Math.round(ms / 60000);
  if (min <= 0) return undefined;
  const h = Math.floor(min / 60);
  return h > 0 ? `${h}h ${min % 60}m` : `${min}m`;
}

export async function loadNativProgress(): Promise<NativProgress> {
  const [due, lessons, stories, tests, checkpoints, log, allCards] = await Promise.all([
    countDue(),
    db.lessonProgress.toArray(),
    db.storyProgress.toArray(),
    db.testResults.toArray(),
    db.checkpointResults.toArray(),
    db.reviewLog.orderBy("reviewedAt").reverse().limit(4000).toArray(),
    // createdAt is not indexed — sort in JS (cards number in the hundreds).
    db.cards.toArray(),
  ]);
  const recentCards = allCards.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 30);

  const completedLessons = new Set(lessons.map((l) => l.lessonId));
  const completedStories = new Set(stories.map((s) => s.storyId));
  const passedTests = new Set(tests.filter((t) => t.passed).map((t) => t.testId));
  const passedCheckpoints = new Set(checkpoints.filter((c) => c.passed).map((c) => c.checkpointId));
  const done = { completedLessons, completedStories, passedTests, passedCheckpoints };

  // Streaks: days with any lesson completion or review.
  const activeDays = new Set<string>([...lessons.map((l) => l.completedAt.toDateString()), ...log.map((r) => r.reviewedAt.toDateString())]);
  let dayStreak = 0;
  const d = new Date();
  if (!activeDays.has(d.toDateString())) d.setDate(d.getDate() - 1);
  while (activeDays.has(d.toDateString())) {
    dayStreak++;
    d.setDate(d.getDate() - 1);
  }
  let longestStreak = 0;
  const sortedDays = [...activeDays].map((s) => new Date(s).getTime()).sort((a, b) => a - b);
  let run = 0;
  for (let i = 0; i < sortedDays.length; i++) {
    run = i > 0 && sortedDays[i] - sortedDays[i - 1] === 86400000 ? run + 1 : 1;
    longestStreak = Math.max(longestStreak, run);
  }

  // Words learned = vocab items with seeded cards (recognition side).
  const wordsLearned = allCards.filter((c) => c.kind === "recognition").length;

  // Time practiced = review think-time + estMinutes of completed lessons.
  const reviewMs = log.reduce((s, r) => s + Math.min(r.elapsedMs || 0, 120000), 0);
  const lessonMs = lessons.reduce((s, l) => s + (findLesson(l.lessonId)?.estMinutes ?? 15) * 60000, 0);

  const today = new Date().toDateString();
  const minutesToday = Math.round(
    (log.filter((r) => r.reviewedAt.toDateString() === today).reduce((s, r) => s + Math.min(r.elapsedMs || 0, 120000), 0) +
      lessons.filter((l) => l.completedAt.toDateString() === today).reduce((s, l) => s + (findLesson(l.lessonId)?.estMinutes ?? 15) * 60000, 0)) /
      60000,
  );

  const next = path.find((s) => !stepDone(s, done)) ?? null;
  const lessonDoneToday = lessons.some((l) => l.completedAt.toDateString() === today);
  const goalDone = (due === 0 ? 1 : 0) + (lessonDoneToday ? 1 : 0);

  const levelInfos: LevelInfo[] = levels.map((lv) => {
    const units = lv.units.map((u) => {
      const steps = path.filter((s) => s.unitId === u.id);
      return {
        id: u.id,
        number: u.number,
        title: u.title,
        titleEn: u.titleEn,
        steps,
        done: steps.filter((s) => stepDone(s, done)).length,
        total: steps.length,
      };
    });
    const total = lv.units.reduce((s, u) => s + u.lessons.length, 0);
    const doneCount = lv.units.reduce((s, u) => s + u.lessons.filter((l) => completedLessons.has(l.id)).length, 0);
    return {
      code: lv.id,
      name: LEVEL_COPY[lv.id]?.name ?? lv.title,
      color: { A1: "#C93434", A2: "#2F7D53", B1: "#E08A2B", B2: "#8B6FC9" }[lv.id] ?? "#3B6FD4",
      total,
      done: doneCount,
      state: total === 0 ? "locked" : total === doneCount ? "done" : "current",
      blurb: LEVEL_COPY[lv.id]?.blurb ?? "",
      focus: LEVEL_COPY[lv.id]?.focus ?? "",
      units,
    } as LevelInfo;
  });

  const nextUnit = next ? levelInfos.flatMap((l) => l.units).find((u) => u.id === next.unitId) : undefined;
  const nextLessonContent = next?.kind === "lesson" ? findLesson(next.id) : undefined;

  return {
    stats: {
      dayStreak,
      longestStreak,
      wordsLearned,
      timePracticed: fmtDuration(reviewMs + lessonMs),
      minutesToday,
      goalDone,
      goalTotal: 2,
      due,
    },
    levels: levelInfos,
    currentLevel: (next && levelInfos.find((l) => l.units.some((u) => u.id === next.unitId))?.code) ?? "A1",
    next,
    nextLesson: next
      ? {
          id: next.id,
          title: next.title,
          titleEn: nextLessonContent?.titleEn,
          unitLabel: nextUnit ? `${nextUnit.id.slice(0, 2).toUpperCase()} · Unit ${nextUnit.number}` : "",
          estMinutes: nextLessonContent?.estMinutes,
        }
      : null,
    ...done,
    recentWords: recentCards
      .filter((c) => c.kind === "recognition" && c.vocabId)
      .slice(0, 5)
      .map((c) => ({ hr: c.front, en: c.back })),
  };
}

/** Total vocab items in the course (for context lines). */
export const totalVocab = allLessons.reduce((s, l) => s + l.vocab.length, 0);
