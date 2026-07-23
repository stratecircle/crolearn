import Dexie, { type EntityTable } from "dexie";
import type { Card as FsrsCard } from "ts-fsrs";

/** SRS card kinds per teaching-method §6. */
export type CardKind = "recognition" | "production" | "listening" | "cloze";

export interface SrsCard extends FsrsCard {
  id: string; // `${vocabId}:${kind}` or `cloze:${lessonId}:${n}`
  vocabId?: string;
  lessonId: string;
  kind: CardKind;
  /** Denormalized prompt/answer so review works without loading lesson files. */
  front: string;
  back: string;
  /** For listening cards: text to speak. For cloze: accepted answers. */
  tts?: string;
  answers?: string[];
  suspended?: boolean;
  createdAt: Date;
}

export interface ReviewLogRow {
  id?: number;
  cardId: string;
  rating: number; // ts-fsrs Rating (1–4)
  reviewedAt: Date;
  elapsedMs: number;
  stateBefore: number;
}

export interface LessonProgressRow {
  lessonId: string;
  completedAt: Date;
  firstAttemptAccuracy: number; // 0–1
  attempts: number;
}

export interface StoryProgressRow {
  storyId: string;
  completedAt: Date; // latest read-through
  scorePct: number; // comprehension score of that read-through
}

export interface TestResultRow {
  id?: number;
  testId: string;
  takenAt: Date;
  scorePct: number;
  passed: boolean;
  wrongSlideIds: string[];
}

export interface TutorSessionRow {
  id?: number;
  startedAt: Date;
  messages: { role: "user" | "assistant"; text: string }[];
}

export interface CheckpointResultRow {
  id?: number;
  checkpointId: string;
  takenAt: Date;
  /** Quiz-section score (the pass/fail gate); speaking is graded separately. */
  scorePct: number;
  passed: boolean;
  sectionPct: { title: string; pct: number }[];
  weakestSections: string[];
  wrongItemIds: string[];
}

export interface ErrorReportRow {
  id?: number;
  lessonId: string;
  slideId: string;
  note: string;
  createdAt: Date;
}

class CroLearnDB extends Dexie {
  cards!: EntityTable<SrsCard, "id">;
  reviewLog!: EntityTable<ReviewLogRow, "id">;
  lessonProgress!: EntityTable<LessonProgressRow, "lessonId">;
  storyProgress!: EntityTable<StoryProgressRow, "storyId">;
  testResults!: EntityTable<TestResultRow, "id">;
  tutorSessions!: EntityTable<TutorSessionRow, "id">;
  errorReports!: EntityTable<ErrorReportRow, "id">;
  checkpointResults!: EntityTable<CheckpointResultRow, "id">;

  constructor() {
    super("crolearn");
    this.version(1).stores({
      cards: "id, due, lessonId, vocabId, kind",
      reviewLog: "++id, cardId, reviewedAt",
      lessonProgress: "lessonId, completedAt",
      testResults: "++id, testId, takenAt",
      tutorSessions: "++id, startedAt",
      errorReports: "++id, lessonId, createdAt",
    });
    this.version(2).stores({
      storyProgress: "storyId, completedAt",
    });
    this.version(3).stores({
      checkpointResults: "++id, checkpointId, takenAt",
    });
  }
}

export const db = new CroLearnDB();

/** Ask the browser not to evict our storage (best effort). */
export async function requestPersistence(): Promise<boolean> {
  try {
    return (await navigator.storage?.persist?.()) ?? false;
  } catch {
    return false;
  }
}

/** Full JSON backup of learner state (settings live in localStorage, included too). */
export async function exportBackup(): Promise<string> {
  const [cards, reviewLog, lessonProgress, storyProgress, testResults, tutorSessions, errorReports, checkpointResults] =
    await Promise.all([
      db.cards.toArray(),
      db.reviewLog.toArray(),
      db.lessonProgress.toArray(),
      db.storyProgress.toArray(),
      db.testResults.toArray(),
      db.tutorSessions.toArray(),
      db.errorReports.toArray(),
      db.checkpointResults.toArray(),
    ]);
  const settings: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)!;
    if (k.startsWith("crolearn.") && k !== "crolearn.apiKey") settings[k] = localStorage.getItem(k)!;
  }
  return JSON.stringify(
    { format: "crolearn-backup", version: 1, exportedAt: new Date().toISOString(),
      cards, reviewLog, lessonProgress, storyProgress, testResults, tutorSessions, errorReports, checkpointResults, settings },
    null,
    2,
  );
}

export async function importBackup(json: string): Promise<void> {
  const data = JSON.parse(json);
  if (data.format !== "crolearn-backup") throw new Error("Not a CroLearn backup file");
  // Dexie stores Dates; revive ISO strings.
  const revive = <T extends object>(rows: T[], dateKeys: (keyof T)[]): T[] =>
    rows.map((r) => {
      const copy: T = { ...r };
      for (const k of dateKeys) {
        const v = copy[k];
        if (typeof v === "string") (copy[k] as unknown) = new Date(v);
      }
      return copy;
    });
  await db.transaction(
    "rw",
    [db.cards, db.reviewLog, db.lessonProgress, db.storyProgress, db.testResults, db.tutorSessions, db.errorReports, db.checkpointResults],
    async () => {
      await Promise.all([
        db.cards.clear(), db.reviewLog.clear(), db.lessonProgress.clear(), db.storyProgress.clear(),
        db.testResults.clear(), db.tutorSessions.clear(), db.errorReports.clear(), db.checkpointResults.clear(),
      ]);
      await db.cards.bulkAdd(revive(data.cards ?? [], ["due", "last_review", "createdAt"]));
      await db.reviewLog.bulkAdd(revive(data.reviewLog ?? [], ["reviewedAt"]));
      await db.lessonProgress.bulkAdd(revive(data.lessonProgress ?? [], ["completedAt"]));
      await db.storyProgress.bulkAdd(revive(data.storyProgress ?? [], ["completedAt"]));
      await db.testResults.bulkAdd(revive(data.testResults ?? [], ["takenAt"]));
      await db.tutorSessions.bulkAdd(revive(data.tutorSessions ?? [], ["startedAt"]));
      await db.errorReports.bulkAdd(revive(data.errorReports ?? [], ["createdAt"]));
      await db.checkpointResults.bulkAdd(revive(data.checkpointResults ?? [], ["takenAt"]));
    },
  );
  for (const [k, v] of Object.entries(data.settings ?? {})) {
    localStorage.setItem(k, v as string);
  }
}
