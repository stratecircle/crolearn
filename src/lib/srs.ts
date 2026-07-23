import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  Rating,
  State,
  type Grade,
} from "ts-fsrs";
import { db, type CardKind, type SrsCard } from "./db";
import type { Lesson } from "@/types/content";

/** FSRS per teaching-method §6: 4-button, target retention 0.90, full log kept. */
const engine = fsrs(generatorParameters({ request_retention: 0.9, enable_fuzz: true }));

export { Rating, State };

type CardMeta = Pick<SrsCard, "id" | "lessonId" | "kind" | "front" | "back"> &
  Partial<Pick<SrsCard, "vocabId" | "tts" | "answers" | "suspended">>;

function makeCard(base: CardMeta, now: Date): SrsCard {
  return { ...createEmptyCard(now), ...base, createdAt: now };
}

/**
 * Seed SRS cards for a completed lesson (idempotent — existing ids are kept).
 * Recognition + production immediately, plus the lesson's cloze grammar cards
 * (§6); listening is added later by `rate()` once an item has 2 successful
 * reviews (§6 staggered introduction).
 */
export async function seedCardsForLesson(lesson: Lesson, now = new Date()): Promise<number> {
  const cards: SrsCard[] = [];
  for (const v of lesson.vocab) {
    cards.push(
      makeCard(
        { id: `${v.id}:recognition`, vocabId: v.id, lessonId: lesson.id, kind: "recognition",
          front: v.hr, back: v.en, tts: v.hr },
        now,
      ),
      makeCard(
        { id: `${v.id}:production`, vocabId: v.id, lessonId: lesson.id, kind: "production",
          front: v.en, back: v.hr, answers: [v.hr] },
        now,
      ),
    );
  }
  (lesson.srsCloze ?? []).forEach((c, i) => {
    cards.push(
      makeCard(
        { id: `cloze:${lesson.id}:${i}`, lessonId: lesson.id, kind: "cloze",
          front: c.front, back: c.back, answers: c.answers, tts: c.tts },
        now,
      ),
    );
  });
  const existing = new Set(await db.cards.where("lessonId").equals(lesson.id).primaryKeys());
  const fresh = cards.filter((c) => !existing.has(c.id));
  await db.cards.bulkAdd(fresh);
  return fresh.length;
}

/** Cards due now (or earlier), ordered oldest-due first. */
export async function getDueCards(now = new Date(), limit = 200): Promise<SrsCard[]> {
  return db.cards
    .where("due")
    .belowOrEqual(now)
    .and((c) => !c.suspended)
    .limit(limit)
    .sortBy("due");
}

export async function countDue(now = new Date()): Promise<number> {
  return db.cards.where("due").belowOrEqual(now).and((c) => !c.suspended).count();
}

/**
 * Apply a rating; persists the updated card + review log.
 * Also handles staggered listening-card introduction (§6).
 * `elapsedMs` is the learner's think time, measured by the caller from the
 * moment the card was shown (0 when unknown, e.g. in tests).
 */
export async function rate(card: SrsCard, rating: Grade, now = new Date(), elapsedMs = 0): Promise<SrsCard> {
  const before = card.state;
  const { card: next } = engine.next(card, now, rating);
  const updated: SrsCard = { ...card, ...next };
  await db.transaction("rw", [db.cards, db.reviewLog], async () => {
    await db.cards.put(updated);
    await db.reviewLog.add({
      cardId: card.id,
      rating,
      reviewedAt: now,
      elapsedMs: Math.max(0, Math.round(elapsedMs)),
      stateBefore: before,
    });
  });
  if (rating !== Rating.Again && updated.vocabId) {
    await maybeAddListeningCard(updated, now);
  }
  return updated;
}

async function maybeAddListeningCard(card: SrsCard, now: Date): Promise<void> {
  const vocabId = card.vocabId!;
  const listeningId = `${vocabId}:listening`;
  // Check + add inside one transaction so concurrent rate() calls can't race
  // the existence check into a ConstraintError.
  await db.transaction("rw", db.cards, async () => {
    if (await db.cards.get(listeningId)) return;
    const siblings = await db.cards.where("vocabId").equals(vocabId).toArray();
    const successfulReps = siblings.reduce((n, c) => n + Math.max(0, c.reps - c.lapses), 0);
    if (successfulReps < 2) return;
    const recognition = siblings.find((c) => c.kind === "recognition");
    if (!recognition) return;
    await db.cards.add(
      makeCard(
        { id: listeningId, vocabId, lessonId: card.lessonId, kind: "listening",
          front: "🔊", back: recognition.front, tts: recognition.front,
          answers: [recognition.front] },
        now,
      ),
    );
  });
}

/** Leeches (§6): 8+ lapses → surfaced in stats / practice generation. */
export async function getLeeches(): Promise<SrsCard[]> {
  return db.cards.filter((c) => c.lapses >= 8).toArray();
}

/** Kind-appropriate check: does this card auto-grade by typing? */
export function isTypedCard(kind: CardKind): boolean {
  return kind === "production" || kind === "listening" || kind === "cloze";
}
