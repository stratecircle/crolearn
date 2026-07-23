import { describe, expect, it } from "vitest";
import {
  advance,
  firstTryAccuracy,
  goBack,
  initDeck,
  isRetryPosition,
  type AdvanceEvent,
  type DeckState,
} from "./deckMachine";

/** Deterministic "shuffle" so retry order is predictable in tests. */
const identity = <T>(items: readonly T[]): T[] => [...items];

/**
 * A 5-slide deck shaped like a tiny lesson:
 * 0 section · 1 teach · 2 quiz(a) · 3 quiz(b) · 4 recap (last authored slide)
 */
const LAST = 4;
const ev = (over: Partial<AdvanceEvent> & { slideId: string }): AdvanceEvent => ({
  isQuiz: true,
  correct: true,
  lastIndex: LAST,
  ...over,
});
const step = (s: DeckState, e: AdvanceEvent) => advance(s, e, identity);

describe("deckMachine — linear play", () => {
  it("advances through the deck and finishes at the end", () => {
    let s = initDeck(5);
    s = step(s, ev({ slideId: "s01", isQuiz: false }));
    s = step(s, ev({ slideId: "s02", isQuiz: false }));
    s = step(s, ev({ slideId: "s03" }));
    s = step(s, ev({ slideId: "s04" }));
    expect(s.finished).toBe(false);
    s = step(s, ev({ slideId: "s05", isQuiz: false }));
    expect(s.finished).toBe(true);
    expect(firstTryAccuracy(s, 2)).toBe(1);
  });

  it("advancing a finished deck is a no-op", () => {
    let s = { ...initDeck(1), finished: true };
    const before = s;
    s = step(s, ev({ slideId: "s01" }));
    expect(s).toBe(before);
  });

  it("non-quiz slides never touch accuracy bookkeeping", () => {
    let s = initDeck(3);
    s = step(s, ev({ slideId: "s01", isQuiz: false, correct: false }));
    expect(s.firstTry).toEqual({});
    expect(s.retryQueue).toEqual([]);
  });
});

describe("deckMachine — retry queue", () => {
  it("queues a wrong quiz slide and replays it before the final slide", () => {
    let s = initDeck(5);
    s = step(s, ev({ slideId: "s01", isQuiz: false })); // section
    s = step(s, ev({ slideId: "s02", isQuiz: false })); // teach
    s = step(s, ev({ slideId: "s03", correct: false })); // quiz a WRONG → queued
    expect(s.retryQueue).toEqual([2]);
    s = step(s, ev({ slideId: "s04" })); // quiz b right; next authored slide is the recap
    // Retry spliced in BEFORE the recap:
    expect(s.playlist).toEqual([0, 1, 2, 3, 2, 4]);
    expect(s.retryQueue).toEqual([]);
    expect(s.playlist[s.pos]).toBe(2); // now replaying quiz a
    expect(isRetryPosition(s)).toBe(true);

    s = step(s, ev({ slideId: "s03", correct: true })); // retry correct
    expect(s.playlist[s.pos]).toBe(4); // recap
    s = step(s, ev({ slideId: "s05", isQuiz: false }));
    expect(s.finished).toBe(true);
  });

  it("a wrong retry is re-queued until answered correctly", () => {
    let s = initDeck(5);
    s = step(s, ev({ slideId: "s01", isQuiz: false }));
    s = step(s, ev({ slideId: "s02", isQuiz: false }));
    s = step(s, ev({ slideId: "s03", correct: false }));
    s = step(s, ev({ slideId: "s04" }));
    expect(s.playlist[s.pos]).toBe(2); // first replay
    s = step(s, ev({ slideId: "s03", correct: false })); // wrong AGAIN
    // Re-spliced before the recap; still not finished.
    expect(s.playlist[s.pos]).toBe(2);
    expect(isRetryPosition(s)).toBe(true);
    s = step(s, ev({ slideId: "s03", correct: true }));
    expect(s.playlist[s.pos]).toBe(4);
  });

  it("a wrong answer on the final slide splices the retry after it", () => {
    let s = initDeck(2); // 0 teach · 1 quiz (also the last authored slide)
    s = step(s, { slideId: "s01", isQuiz: false, correct: true, lastIndex: 1 });
    s = step(s, { slideId: "s02", isQuiz: true, correct: false, lastIndex: 1 });
    expect(s.finished).toBe(false);
    expect(s.playlist).toEqual([0, 1, 1]);
    s = step(s, { slideId: "s02", isQuiz: true, correct: true, lastIndex: 1 });
    expect(s.finished).toBe(true);
  });

  it("with lastIndex -1 (no recap deck) retries splice only at the very end", () => {
    let s = initDeck(3); // three quizzes, practice-set style
    s = step(s, { slideId: "p00", isQuiz: true, correct: false, lastIndex: -1 });
    // Not yet at end: no splice happens mid-deck.
    expect(s.playlist).toEqual([0, 1, 2]);
    s = step(s, { slideId: "p01", isQuiz: true, correct: true, lastIndex: -1 });
    s = step(s, { slideId: "p02", isQuiz: true, correct: true, lastIndex: -1 });
    expect(s.playlist).toEqual([0, 1, 2, 0]);
    expect(s.finished).toBe(false);
    s = step(s, { slideId: "p00", isQuiz: true, correct: true, lastIndex: -1 });
    expect(s.finished).toBe(true);
  });
});

describe("deckMachine — first-attempt accuracy", () => {
  it("only the first attempt counts, even after a correct retry", () => {
    let s = initDeck(5);
    s = step(s, ev({ slideId: "s01", isQuiz: false }));
    s = step(s, ev({ slideId: "s02", isQuiz: false }));
    s = step(s, ev({ slideId: "s03", correct: false }));
    s = step(s, ev({ slideId: "s04", correct: true }));
    s = step(s, ev({ slideId: "s03", correct: true })); // retry now correct
    s = step(s, ev({ slideId: "s05", isQuiz: false }));
    expect(s.finished).toBe(true);
    expect(firstTryAccuracy(s, 2)).toBe(0.5); // s03 missed on first try
  });

  it("a deck with no quizzes scores 100%", () => {
    expect(firstTryAccuracy(initDeck(3), 0)).toBe(1);
  });
});

describe("deckMachine — browsing back", () => {
  it("goBack steps back; answers behind maxPos never grade or queue", () => {
    let s = initDeck(5);
    s = step(s, ev({ slideId: "s01", isQuiz: false }));
    s = step(s, ev({ slideId: "s02", isQuiz: false }));
    s = step(s, ev({ slideId: "s03", correct: true }));
    expect(s.pos).toBe(3);

    s = goBack(s);
    s = goBack(s);
    expect(s.pos).toBe(1);
    expect(s.maxPos).toBe(3);

    // Re-answering a cleared quiz WRONG while browsing: pure navigation.
    s = step(s, ev({ slideId: "s02", correct: false }));
    expect(s.retryQueue).toEqual([]);
    expect(s.firstTry).toEqual({ s03: true });
    expect(s.pos).toBe(2);
  });

  it("goBack at position 0 is a no-op", () => {
    const s = initDeck(3);
    expect(goBack(s)).toBe(s);
  });
});
