import { shuffle } from "@/lib/shuffle";

/**
 * The slide-deck state machine behind LessonPlayer (teaching-method §2/§3),
 * extracted pure so it can be unit-tested:
 * - playlist = slide indices, starting as the authored order
 * - a wrong quiz slide is queued and REPLAYED before the final (recap) slide
 *   until answered correctly (retrieval practice on misses)
 * - accuracy = FIRST-attempt accuracy over quiz slides
 * - positions behind `maxPos` are browsing back: answers never grade
 */
export interface DeckState {
  playlist: number[];
  pos: number;
  /** Furthest position reached. Behind it = browsing back; nothing re-grades. */
  maxPos: number;
  firstTry: Record<string, boolean>;
  retryQueue: number[];
  finished: boolean;
}

export function initDeck(slideCount: number): DeckState {
  return {
    playlist: Array.from({ length: slideCount }, (_, i) => i),
    pos: 0,
    maxPos: 0,
    firstTry: {},
    retryQueue: [],
    finished: false,
  };
}

export interface AdvanceEvent {
  /** Id of the slide just answered (for first-try bookkeeping). */
  slideId: string;
  isQuiz: boolean;
  correct: boolean;
  /** Index of the lesson's final authored slide (the recap). */
  lastIndex: number;
}

/**
 * Advance after a slide reports done. Pass a deterministic `shuffleFn` in tests.
 */
export function advance(
  state: DeckState,
  ev: AdvanceEvent,
  shuffleFn: <T>(items: readonly T[]) => T[] = shuffle,
): DeckState {
  if (state.finished) return state;

  // Browsing back through already-cleared slides: pure navigation.
  if (state.pos < state.maxPos) {
    return { ...state, pos: state.pos + 1 };
  }

  const slideIndex = state.playlist[state.pos];
  const firstTry =
    ev.isQuiz && !(ev.slideId in state.firstTry)
      ? { ...state.firstTry, [ev.slideId]: ev.correct }
      : state.firstTry;

  const retryQueue = ev.isQuiz && !ev.correct ? [...state.retryQueue, slideIndex] : state.retryQueue;

  const atEnd = state.pos === state.playlist.length - 1;
  const nextIsLast = !atEnd && state.playlist[state.pos + 1] === ev.lastIndex;

  // Before entering the final slide (recap), splice in pending retries, shuffled.
  if ((nextIsLast || atEnd) && retryQueue.length > 0) {
    const insertAt = atEnd ? state.playlist.length : state.pos + 1;
    const playlist = [
      ...state.playlist.slice(0, insertAt),
      ...shuffleFn(retryQueue),
      ...state.playlist.slice(insertAt),
    ];
    return { ...state, playlist, firstTry, retryQueue: [], pos: state.pos + 1, maxPos: state.pos + 1 };
  }

  if (atEnd) {
    return { ...state, firstTry, retryQueue, finished: true };
  }
  return { ...state, firstTry, retryQueue, pos: state.pos + 1, maxPos: state.pos + 1 };
}

export function goBack(state: DeckState): DeckState {
  return state.pos === 0 ? state : { ...state, pos: state.pos - 1 };
}

/** First-attempt accuracy over the lesson's quiz slides. */
export function firstTryAccuracy(state: DeckState, quizTotal: number): number {
  if (quizTotal === 0) return 1;
  return Object.values(state.firstTry).filter(Boolean).length / quizTotal;
}

/** True when the current position replays a slide already seen earlier. */
export function isRetryPosition(state: DeckState): boolean {
  return state.pos > 0 && state.playlist.slice(0, state.pos).includes(state.playlist[state.pos]);
}
