/**
 * The CroLearn content contract.
 *
 * Everything renderable in the course — slides, lessons, notes, stories, tests —
 * is data conforming to these types. The lesson player, graders, Zod validation
 * (src/types/schemas.ts) and the AI content pipeline all depend on this file.
 * Curriculum rules live in curriculum/01-teaching-method.md.
 */

export type LevelId = "A1" | "A2" | "B1" | "B2";

/** Croatian cases — fixed course-wide color coding (see ui/caseColors.ts). */
export type CaseId = "NOM" | "ACC" | "GEN" | "DAT" | "LOC" | "INS" | "VOC";

export type Gender = "m" | "f" | "n";

export interface VocabItem {
  /** Globally unique, e.g. "a1u1.kava" */
  id: string;
  hr: string;
  en: string;
  pos:
    | "noun"
    | "verb"
    | "adj"
    | "adv"
    | "pron"
    | "num"
    | "prep"
    | "conj"
    | "interj"
    | "phrase";
  gender?: Gender;
  /** Emoji/icon shown on vocab cards where sensible */
  icon?: string;
  /**
   * Optional picture: path to a BUNDLED asset under /public (e.g. "/img/kava.png").
   * Never a remote URL — the app must work fully offline. When set, vocab cards
   * render the photo with the emoji as fallback.
   */
  image?: string;
  exampleHr: string;
  exampleEn: string;
  /** e.g. ["greeting", "chunk"] — "chunk" marks not-yet-analyzed fixed phrases */
  tags?: string[];
}

/* ---------------------------------- visuals ---------------------------------- */

export interface TableSpec {
  caption?: string;
  headers: string[];
  rows: string[][];
  /** Per-column case color; null for uncolored columns. Length matches headers. */
  colCase?: (CaseId | null)[];
}

/** Case-usage map: "when do I use this case?" boxes with examples. */
export interface UsageMapDiagram {
  kind: "usage-map";
  caseId: CaseId;
  boxes: { label: string; examples: { hr: string; en: string }[] }[];
}

/** Two-panel contrast (e.g. direction ACC vs location LOC, s+INS vs bare INS). */
export interface ContrastDiagram {
  kind: "contrast";
  left: { title: string; emoji?: string; caseId?: CaseId; lines: { hr: string; en: string }[] };
  right: { title: string; emoji?: string; caseId?: CaseId; lines: { hr: string; en: string }[] };
}

/** Ordered steps with optional examples (dialogue flows, day arcs, sequencers). */
export interface FlowDiagram {
  kind: "flow";
  steps: { label: string; emoji?: string; example?: string }[];
}

/** Clitic-order train: fixed slots rendered as coupled wagons. */
export interface TrainDiagram {
  kind: "train";
  wagons: { label: string; items: string[]; note?: string }[];
}

/** Number→case bracket: 1 | 2–4 | 5+ etc. */
export interface BracketDiagram {
  kind: "bracket";
  groups: { label: string; rule: string; example: string; caseId?: CaseId }[];
}

/** Warning/info callout card. */
export interface CalloutDiagram {
  kind: "callout";
  tone: "warn" | "info" | "success";
  title?: string;
  text: string;
}

export type DiagramSpec =
  | UsageMapDiagram
  | ContrastDiagram
  | FlowDiagram
  | TrainDiagram
  | BracketDiagram
  | CalloutDiagram;

/* ---------------------------------- slides ---------------------------------- */

interface SlideBase {
  /** Unique within the lesson, e.g. "s04" */
  id: string;
  /** True when this slide recycles material from an earlier unit (interleaving). */
  review?: boolean;
}

/**
 * Section overview slide — a visual "what's inside" divider, like a book
 * chapter's opening spread. The FIRST slide of every lesson is a section slide
 * acting as the whole-lesson menu; each later part opens with its own.
 * Visual-first: icons + short labels, never paragraphs.
 */
export interface SectionSlide extends SlideBase {
  type: "section";
  /** e.g. "Part 2 · Train your ear" (menu slide: the lesson title) */
  title: string;
  /** One motivating line, e.g. "Four sounds English doesn't have — tamed in 10 slides." */
  subtitle?: string;
  /** Big visual anchor for the section. */
  emoji?: string;
  /** The appendix entries: what's coming, shown as icon chips. 2–6 items. */
  items: { emoji: string; label: string; hint?: string }[];
}

export interface ExampleItem {
  hr: string;
  en: string;
  note?: string;
  /** Substring of hr to highlight, with its case color. */
  highlight?: { text: string; caseId: CaseId };
}

/**
 * A classroom slide: rule + table/diagram + worked examples together.
 * Prefer packing a point's whole presentation onto ONE teach slide over
 * splitting it into teach + example slides.
 */
export interface TeachSlide extends SlideBase {
  type: "teach";
  title: string;
  /** Markdown. Keep prose minimal — tables/diagrams/examples carry the load. */
  body: string;
  table?: TableSpec;
  diagram?: DiagramSpec;
  /** Worked examples shown on the same slide, each with TTS. */
  examples?: ExampleItem[];
  /** Croatian snippets rendered as tappable TTS chips. */
  ttsChips?: string[];
}

export interface ExampleSlide extends SlideBase {
  type: "example";
  title?: string;
  items: ExampleItem[];
}

/**
 * A "quick check" battery — several short questions on ONE slide, like a
 * worksheet section. Answer them all, then check together. Counts as one
 * slide but items.length quiz interactions.
 */
export interface QuizSetSlide extends SlideBase {
  type: "quiz-set";
  /** Defaults to "Quick check" in the UI. */
  title?: string;
  items: {
    prompt: string;
    /** Optional Croatian audio for the item. */
    tts?: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface McSlide extends SlideBase {
  type: "mc";
  /** Question text (may be English or Croatian). */
  prompt: string;
  /** Optional Croatian audio played with the prompt. */
  tts?: string;
  options: string[];
  correctIndex: number;
  /** One-line why, shown in the feedback panel. */
  explanation: string;
}

export interface TypeSlide extends SlideBase {
  type: "type";
  prompt: string;
  /** Accepted answers; first is canonical (shown as "the" answer). */
  answers: string[];
  hint?: string;
  explanation?: string;
}

export interface ListenTypeSlide extends SlideBase {
  type: "listen-type";
  /** Croatian text spoken by TTS; also the canonical answer unless answers given. */
  tts: string;
  answers?: string[];
  allowSlow?: boolean;
  explanation?: string;
}

export interface SpeakSlide extends SlideBase {
  type: "speak";
  targetHr: string;
  targetEn: string;
  /** Optional pronunciation respelling shown as a hint. */
  phonetic?: string;
}

export interface MatchSlide extends SlideBase {
  type: "match";
  prompt?: string;
  /** 4–6 pairs; a = left column (usually HR), b = right (usually EN). */
  pairs: { a: string; b: string }[];
}

export interface FillSlide extends SlideBase {
  type: "fill";
  /** Sentence with one ___ per blank, e.g. "Ja ___ iz Kanade." */
  text: string;
  /** Accepted answers per blank, in order of the ___ markers. */
  blanks: string[][];
  translation?: string;
  wordBank?: string[];
  explanation?: string;
}

export interface ReorderSlide extends SlideBase {
  type: "reorder";
  /** Shuffled word tiles. */
  words: string[];
  /** Accepted full-sentence orderings; first is canonical. */
  answers: string[];
  en: string;
  explanation?: string;
}

export interface RecapSlide extends SlideBase {
  type: "recap";
  /** Markdown summary of the lesson's point. */
  summary: string;
  /** Vocab entering SRS tonight (ids from lesson.vocab). */
  vocabIds: string[];
}

/**
 * Visual vocab spread (dual coding, teaching-method §4): every new word as a
 * picture card — big image/emoji + Croatian + English + TTS, gender-colored.
 * Placed early in the lesson, before the words are ever quizzed.
 */
export interface VocabCardsSlide extends SlideBase {
  type: "vocab-cards";
  /** Defaults to "Meet today's words" in the UI. */
  title?: string;
  /** ids from lesson.vocab, in display order. */
  vocabIds: string[];
}

export type Slide =
  | SectionSlide
  | TeachSlide
  | ExampleSlide
  | VocabCardsSlide
  | QuizSetSlide
  | McSlide
  | TypeSlide
  | ListenTypeSlide
  | SpeakSlide
  | MatchSlide
  | FillSlide
  | ReorderSlide
  | RecapSlide;

export type QuizSlide =
  | QuizSetSlide
  | McSlide
  | TypeSlide
  | ListenTypeSlide
  | SpeakSlide
  | MatchSlide
  | FillSlide
  | ReorderSlide;

export const QUIZ_SLIDE_TYPES = [
  "quiz-set",
  "mc",
  "type",
  "listen-type",
  "speak",
  "match",
  "fill",
  "reorder",
] as const;

/** Interactions a slide contributes: quiz-set items count individually. */
export function quizInteractions(s: Slide): number {
  if (s.type === "quiz-set") return s.items.length;
  return isQuizSlide(s) ? 1 : 0;
}

export function isQuizSlide(s: Slide): s is QuizSlide {
  return (QUIZ_SLIDE_TYPES as readonly string[]).includes(s.type);
}

/* ---------------------------------- notes ---------------------------------- */

export interface NotesDoc {
  /** §5.1 — the point in one sentence. */
  inOneSentence: { en: string; exampleHr: string };
  /** §5.2 — deep dive sections with all relevant tables/diagrams. */
  deepDive: {
    title: string;
    body: string; // markdown
    table?: TableSpec;
    diagram?: DiagramSpec;
  }[];
  /** §5.4 — ❌→✅ with a one-line why. ≥3 entries. */
  commonMistakes: { wrong: string; right: string; why: string }[];
  /** §5.5 — mnemonics, patterns, cognates. */
  memoryHooks: string[];
  /** §5.6 — links to related lessons' notes. */
  connects: { label: string; lessonId: string }[];
  /** §5.7 — 5 self-check questions with hidden answers. */
  selfCheck: { q: string; a: string }[];
}

/* ------------------------------- lesson & unit ------------------------------- */

export interface Lesson {
  /** e.g. "a1u1l3" */
  id: string;
  unitId: string;
  /** Croatian title, e.g. "Ja sam…" */
  title: string;
  titleEn: string;
  /** Which grammar micro-point (for stats/weakness tracking), e.g. "biti-present" */
  grammarTags: string[];
  estMinutes: number;
  /**
   * Vocab-count contract (teaching-method §2): "standard" 6–12 (default) ·
   * "closed-set" up to 24 for number/day/ordinal series · "grammar-only" 0 allowed.
   */
  vocabPolicy?: "standard" | "closed-set" | "grammar-only";
  vocab: VocabItem[];
  slides: Slide[];
  /**
   * Cloze grammar cards seeded into SRS on lesson completion (teaching-method
   * §6: "cloze cards for grammar patterns flagged in the unit spec"). Card id
   * = `cloze:${lessonId}:${index}`, so keep the list append-only once shipped.
   */
  srsCloze?: ClozeCardSpec[];
  notes: NotesDoc;
}

/** One SRS cloze card: a gap-fill front, typed-graded answers, revealed back. */
export interface ClozeCardSpec {
  /** Prompt with a ___ gap, e.g. "Ja ___ Tom. (biti)". English hints allowed. */
  front: string;
  /** Accepted typed answers; first one is canonical. */
  answers: string[];
  /** The resolved sentence/fact shown after answering. */
  back: string;
  /** Optional Croatian to speak when the answer is revealed. */
  tts?: string;
}

export interface Story {
  /** e.g. "a1u1s" */
  id: string;
  unitId: string;
  title: string;
  titleEn: string;
  paragraphs: { hr: string; en: string }[];
  /** ≤5 new glossed words. */
  glossary: { word: string; gloss: string }[];
  questions: McSlide[];
}

export interface UnitTest {
  /** e.g. "a1u1t" */
  id: string;
  unitId: string;
  title: string;
  sections: { title: string; slides: QuizSlide[] }[];
  passPct: number; // e.g. 70
}

/** One AI-graded speaking prompt in a checkpoint's Govor section (§8). */
export interface SpeakingPrompt {
  /** e.g. "s01" */
  id: string;
  /** English task instruction shown to the learner. */
  task: string;
  /** Optional Croatian model answer / hint, revealed after recording. */
  modelHr?: string;
  /** What the AI grader should weight most for this prompt. */
  rubricFocus?: string;
}

/** The guided writing task in an A2+ checkpoint (§8 — AI-graded, never gates). */
export interface WritingTask {
  title: string;
  /** English task instruction (may embed the Croatian prompt). */
  task: string;
  /** Soft word-count guidance shown with a counter. */
  minWords?: number;
  maxWords?: number;
  /** Optional model text, revealable for self-assessment. */
  modelHr?: string;
  /** What the AI grader should weight most. */
  rubricFocus?: string;
}

/**
 * Level checkpoint exam (teaching-method §8) — taken after the level's last
 * unit test; soft gate that unlocks the next level. Quiz sections (listening,
 * reading, cloze) are graded locally and set the pass/fail; the optional
 * speaking and writing sections are AI-graded when a key is present and
 * never block.
 */
export interface CheckpointExam {
  /** e.g. "a1checkpoint" */
  id: string;
  levelId: LevelId;
  title: string;
  titleEn: string;
  /** Locally-graded quiz sections (Slušanje, Čitanje, Gramatika). */
  sections: { title: string; slides: QuizSlide[] }[];
  /** Optional AI-graded speaking section (Govor). */
  speaking?: { title: string; prompts: SpeakingPrompt[] };
  /** Optional AI-graded guided writing task (Pisanje — A2+, §8). */
  writing?: WritingTask;
  /** Pass threshold as a % of the quiz sections (e.g. 70). */
  passPct: number;
  /** Unit id after which this unlocks (gates the dashboard entry), e.g. "a1u8". */
  afterUnitId: string;
}

export interface Unit {
  /** e.g. "a1u1" */
  id: string;
  levelId: LevelId;
  /** Global unit number 1–32. */
  number: number;
  title: string;
  titleEn: string;
  theme: string;
  lessons: Lesson[];
  story: Story;
  test: UnitTest;
}

export interface Level {
  id: LevelId;
  title: string;
  units: Unit[];
}
