import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import { db } from "@/lib/db";
import { allLessons, path } from "@/content";
import { seedCardsForLesson } from "@/lib/srs";
import { loadNativProgress } from "./stats";

beforeEach(async () => {
  await Promise.all([db.cards.clear(), db.reviewLog.clear(), db.lessonProgress.clear(), db.storyProgress.clear()]);
});

describe("loadNativProgress", () => {
  it("resolves on an empty database with sane zero-state", async () => {
    const p = await loadNativProgress();
    expect(p.stats.dayStreak).toBe(0);
    expect(p.stats.wordsLearned).toBe(0);
    expect(p.stats.timePracticed).toBeUndefined();
    expect(p.next?.id).toBe(path[0].id);
    expect(p.levels.map((l) => l.code)).toEqual(["A1", "A2", "B1", "B2"]);
    // Only built levels carry lessons; unbuilt levels read as locked. B1 is
    // partially built (unit 17 only), so it counts its five authored lessons.
    expect(p.levels.find((l) => l.code === "A1")!.total).toBe(40);
    expect(p.levels.find((l) => l.code === "B1")!.total).toBe(5);
    expect(p.levels.find((l) => l.code === "B2")!.state).toBe("locked");
  });

  it("reflects completed lessons, seeded cards and recent words", async () => {
    const lesson = allLessons[0];
    await seedCardsForLesson(lesson);
    await db.lessonProgress.put({ lessonId: lesson.id, completedAt: new Date(), firstAttemptAccuracy: 1, attempts: 1 });
    const p = await loadNativProgress();
    expect(p.stats.wordsLearned).toBe(lesson.vocab.length);
    expect(p.stats.dayStreak).toBe(1);
    expect(p.completedLessons.has(lesson.id)).toBe(true);
    expect(p.next?.id).not.toBe(lesson.id);
    expect(p.recentWords.length).toBeGreaterThan(0);
    expect(p.recentWords[0]).toHaveProperty("hr");
    // Level counter moved.
    expect(p.levels.find((l) => l.code === "A1")!.done).toBe(1);
  });
});
