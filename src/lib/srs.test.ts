import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import type { Lesson } from "@/types/content";
import { db } from "./db";
import { countDue, getDueCards, rate, Rating, seedCardsForLesson } from "./srs";

const lesson = {
  id: "a1u1l1",
  unitId: "a1u1",
  vocab: [
    { id: "a1u1.kava", hr: "kava", en: "coffee", pos: "noun", gender: "f", exampleHr: "Kava i voda.", exampleEn: "Coffee and water." },
    { id: "a1u1.voda", hr: "voda", en: "water", pos: "noun", gender: "f", exampleHr: "Voda je dobra.", exampleEn: "The water is good." },
  ],
} as unknown as Lesson;

beforeEach(async () => {
  await Promise.all([db.cards.clear(), db.reviewLog.clear()]);
});

describe("seedCardsForLesson", () => {
  it("creates recognition + production per vocab item", async () => {
    const n = await seedCardsForLesson(lesson);
    expect(n).toBe(4);
    const cards = await db.cards.toArray();
    expect(cards.map((c) => c.id).sort()).toEqual([
      "a1u1.kava:production",
      "a1u1.kava:recognition",
      "a1u1.voda:production",
      "a1u1.voda:recognition",
    ]);
  });

  it("is idempotent — re-seeding adds nothing", async () => {
    await seedCardsForLesson(lesson);
    const n = await seedCardsForLesson(lesson);
    expect(n).toBe(0);
    expect(await db.cards.count()).toBe(4);
  });

  it("seeds the lesson's cloze grammar cards with stable ids", async () => {
    const withCloze = {
      ...lesson,
      srsCloze: [
        { front: "Ja ___ Tom. (biti)", answers: ["sam"], back: "Ja sam Tom.", tts: "Ja sam Tom." },
        { front: "Ti ___ Ana. (biti)", answers: ["si"], back: "Ti si Ana." },
      ],
    } as unknown as Lesson;
    const n = await seedCardsForLesson(withCloze);
    expect(n).toBe(6);
    const card = await db.cards.get("cloze:a1u1l1:0");
    expect(card?.kind).toBe("cloze");
    expect(card?.front).toBe("Ja ___ Tom. (biti)");
    expect(card?.answers).toEqual(["sam"]);
    // Idempotent for cloze too.
    expect(await seedCardsForLesson(withCloze)).toBe(0);
  });
});

describe("due + rate", () => {
  it("new cards are due immediately", async () => {
    await seedCardsForLesson(lesson);
    expect(await countDue()).toBe(4);
  });

  it("rating Good schedules the card into the future and logs the review", async () => {
    await seedCardsForLesson(lesson);
    const [card] = await getDueCards();
    const updated = await rate(card, Rating.Good);
    expect(updated.due.getTime()).toBeGreaterThan(Date.now());
    expect(updated.reps).toBe(1);
    expect(await db.reviewLog.count()).toBe(1);
  });

  it("rating Again keeps the card due very soon (relearning)", async () => {
    await seedCardsForLesson(lesson);
    const [card] = await getDueCards();
    const updated = await rate(card, Rating.Again);
    const minutesAway = (updated.due.getTime() - Date.now()) / 60000;
    expect(minutesAway).toBeLessThan(30);
  });

  it("adds a listening card after 2 successful reviews of an item", async () => {
    await seedCardsForLesson(lesson);
    const rec = (await db.cards.get("a1u1.kava:recognition"))!;
    const prod = (await db.cards.get("a1u1.kava:production"))!;
    await rate(rec, Rating.Good);
    expect(await db.cards.get("a1u1.kava:listening")).toBeUndefined();
    await rate(prod, Rating.Good);
    const listening = await db.cards.get("a1u1.kava:listening");
    expect(listening).toBeDefined();
    expect(listening!.kind).toBe("listening");
  });
});
