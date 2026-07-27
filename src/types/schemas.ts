/**
 * Zod schemas mirroring types/content.ts, plus the "minimum content contract"
 * from curriculum/01-teaching-method.md §2. Run via `npm run validate:content`.
 */
import { z } from "zod";
import { isQuizSlide, quizInteractions, type Lesson } from "./content";

const caseId = z.enum(["NOM", "ACC", "GEN", "DAT", "LOC", "INS", "VOC"]);

const tableSpec = z.object({
  caption: z.string().optional(),
  headers: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string())).min(1),
  colCase: z.array(caseId.nullable()).optional(),
});

const hrEn = z.object({ hr: z.string().min(1), en: z.string().min(1) });

const diagramSpec = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("usage-map"),
    caseId,
    boxes: z.array(z.object({ label: z.string(), examples: z.array(hrEn).min(1) })).min(2),
  }),
  z.object({
    kind: z.literal("contrast"),
    left: z.object({ title: z.string(), emoji: z.string().optional(), caseId: caseId.optional(), lines: z.array(hrEn).min(1) }),
    right: z.object({ title: z.string(), emoji: z.string().optional(), caseId: caseId.optional(), lines: z.array(hrEn).min(1) }),
  }),
  z.object({
    kind: z.literal("flow"),
    steps: z.array(z.object({ label: z.string(), emoji: z.string().optional(), example: z.string().optional() })).min(2),
  }),
  z.object({
    kind: z.literal("train"),
    wagons: z.array(z.object({ label: z.string(), items: z.array(z.string()).min(1), note: z.string().optional() })).min(2),
  }),
  z.object({
    kind: z.literal("bracket"),
    groups: z.array(z.object({ label: z.string(), rule: z.string(), example: z.string(), caseId: caseId.optional() })).min(2),
  }),
  z.object({
    kind: z.literal("callout"),
    tone: z.enum(["warn", "info", "success"]),
    title: z.string().optional(),
    text: z.string().min(1),
  }),
]);

const slideBase = { id: z.string().regex(/^s\d{2}$/), review: z.boolean().optional() };

export const slideSchema = z.discriminatedUnion("type", [
  z.object({ ...slideBase, type: z.literal("section"), title: z.string().min(1),
    subtitle: z.string().optional(), emoji: z.string().optional(),
    items: z.array(z.object({ emoji: z.string().min(1), label: z.string().min(1), hint: z.string().optional() })).min(2).max(6) }),
  z.object({ ...slideBase, type: z.literal("teach"), title: z.string().min(1), body: z.string().min(1),
    table: tableSpec.optional(), diagram: diagramSpec.optional(),
    examples: z.array(z.object({ hr: z.string().min(1), en: z.string().min(1), note: z.string().optional(),
      highlight: z.object({ text: z.string(), caseId }).optional() })).optional(),
    ttsChips: z.array(z.string()).optional() }),
  z.object({ ...slideBase, type: z.literal("example"), title: z.string().optional(),
    items: z.array(z.object({ hr: z.string().min(1), en: z.string().min(1), note: z.string().optional(),
      highlight: z.object({ text: z.string(), caseId }).optional() })).min(2) }),
  z.object({ ...slideBase, type: z.literal("quiz-set"), title: z.string().optional(),
    items: z.array(
      z.object({ prompt: z.string().min(1), tts: z.string().optional(),
        options: z.array(z.string().min(1)).min(2).max(5), correctIndex: z.number().int().nonnegative(),
        explanation: z.string().min(1) })
        .refine((i) => i.correctIndex < i.options.length, { message: "correctIndex out of range" })
        .refine((i) => new Set(i.options).size === i.options.length, { message: "duplicate options" }),
    ).min(2).max(4) }),
  z.object({ ...slideBase, type: z.literal("mc"), prompt: z.string().min(1), tts: z.string().optional(),
    options: z.array(z.string().min(1)).min(2).max(5), correctIndex: z.number().int().nonnegative(),
    explanation: z.string().min(1) })
    .refine((s) => s.correctIndex < s.options.length, { message: "correctIndex out of range" })
    .refine((s) => new Set(s.options).size === s.options.length, { message: "duplicate options" }),
  z.object({ ...slideBase, type: z.literal("type"), prompt: z.string().min(1),
    answers: z.array(z.string().min(1)).min(1), hint: z.string().optional(), explanation: z.string().optional() }),
  z.object({ ...slideBase, type: z.literal("listen-type"), tts: z.string().min(1),
    answers: z.array(z.string().min(1)).optional(), allowSlow: z.boolean().optional(), explanation: z.string().optional() }),
  z.object({ ...slideBase, type: z.literal("speak"), targetHr: z.string().min(1), targetEn: z.string().min(1),
    phonetic: z.string().optional() }),
  z.object({ ...slideBase, type: z.literal("match"), prompt: z.string().optional(),
    pairs: z.array(z.object({ a: z.string().min(1), b: z.string().min(1) })).min(4).max(6) }),
  z.object({ ...slideBase, type: z.literal("fill"), text: z.string().min(1),
    blanks: z.array(z.array(z.string().min(1)).min(1)).min(1), translation: z.string().optional(),
    wordBank: z.array(z.string()).optional(), explanation: z.string().optional() })
    .refine((s) => (s.text.match(/___/g) ?? []).length === s.blanks.length,
      { message: "number of ___ markers must equal blanks.length" }),
  z.object({ ...slideBase, type: z.literal("reorder"), words: z.array(z.string().min(1)).min(3),
    answers: z.array(z.string().min(1)).min(1), en: z.string().min(1), explanation: z.string().optional() }),
  z.object({ ...slideBase, type: z.literal("vocab-cards"), title: z.string().optional(),
    vocabIds: z.array(z.string()).min(1) }),
  // recap vocabIds may be empty — grammar-only lessons (§2) seed no new vocab.
  z.object({ ...slideBase, type: z.literal("recap"), summary: z.string().min(1),
    vocabIds: z.array(z.string()) }),
]);

export const vocabItemSchema = z.object({
  id: z.string().regex(/^[a-z]\d+u\d+\./),
  hr: z.string().min(1),
  en: z.string().min(1),
  pos: z.enum(["noun", "verb", "adj", "adv", "pron", "num", "prep", "conj", "interj", "phrase"]),
  gender: z.enum(["m", "f", "n"]).optional(),
  icon: z.string().optional(),
  // Local bundled asset only — the app must work fully offline (no remote URLs).
  image: z.string().regex(/^\/(?!\/)/, "image must be a local /path (offline app — no remote URLs)").optional(),
  exampleHr: z.string().min(1),
  exampleEn: z.string().min(1),
  tags: z.array(z.string()).optional(),
});

export const notesDocSchema = z.object({
  inOneSentence: z.object({ en: z.string().min(1), exampleHr: z.string().min(1) }),
  deepDive: z.array(z.object({ title: z.string().min(1), body: z.string().min(1),
    table: tableSpec.optional(), diagram: diagramSpec.optional() })).min(1),
  commonMistakes: z.array(z.object({ wrong: z.string(), right: z.string(), why: z.string() })).min(3),
  memoryHooks: z.array(z.string().min(1)).min(1),
  connects: z.array(z.object({ label: z.string(), lessonId: z.string() })),
  selfCheck: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(5),
});

const clozeCardSchema = z.object({
  front: z.string().min(1).refine((s) => s.includes("___"), { message: "cloze front needs a ___ gap" }),
  answers: z.array(z.string().min(1)).min(1),
  back: z.string().min(1),
  tts: z.string().optional(),
});

export const lessonSchema = z.object({
  id: z.string().regex(/^[a-z]\d+u\d+l\d+$/),
  unitId: z.string(),
  title: z.string().min(1),
  titleEn: z.string().min(1),
  grammarTags: z.array(z.string()).min(1),
  estMinutes: z.number().int().min(10).max(30),
  vocabPolicy: z.enum(["standard", "closed-set", "grammar-only"]).optional(),
  vocab: z.array(vocabItemSchema).max(24),
  slides: z.array(slideSchema).min(18).max(34),
  srsCloze: z.array(clozeCardSchema).max(12).optional(),
  notes: notesDocSchema,
});

/** The minimum content contract (§2) — structural richness checks beyond field shapes. */
export function lessonContractIssues(lesson: Lesson, opts: { isVeryFirstLesson?: boolean } = {}): string[] {
  const issues: string[] = [];
  const slides = lesson.slides;
  const quiz = slides.filter(isQuizSlide);

  // Vocab-count contract by policy (§2 exemptions).
  const policy = lesson.vocabPolicy ?? "standard";
  const vc = lesson.vocab.length;
  if (policy === "standard" && (vc < 6 || vc > 12))
    issues.push(`${vc} vocab items (standard policy needs 6–12)`);
  if (policy === "closed-set" && (vc < 6 || vc > 24))
    issues.push(`${vc} vocab items (closed-set policy needs 6–24)`);
  if (policy === "grammar-only" && vc > 4)
    issues.push(`${vc} vocab items (grammar-only policy allows at most 4)`);

  // Sections (§2): slide 1 is the lesson menu; ≥2 more part openers.
  const sections = slides.filter((s) => s.type === "section").length;
  if (slides[0]?.type !== "section") issues.push("first slide must be the lesson-menu section slide");
  if (sections < 3) issues.push(`only ${sections} section slides (need ≥3: menu + 2 part openers)`);

  const contentSlides = slides.filter((s) => s.type !== "section");
  // Interactions, not slide counts: quiz-set items count individually.
  const interactions = slides.reduce((n, s) => n + quizInteractions(s), 0);
  if (interactions < 12) issues.push(`only ${interactions} quiz interactions (need ≥12)`);
  if (quiz.length / contentSlides.length < 0.5)
    issues.push(`quiz share ${(100 * quiz.length / contentSlides.length).toFixed(0)}% of content slides (need ≥50%)`);

  const kinds = new Set(quiz.map((s) => s.type));
  if (kinds.size < 4) issues.push(`only ${kinds.size} distinct quiz types (need ≥4)`);

  const listening = slides.reduce(
    (n, s) =>
      n +
      (s.type === "listen-type" || (s.type === "mc" && s.tts)
        ? 1
        : s.type === "quiz-set"
          ? s.items.filter((i) => i.tts).length
          : 0),
    0,
  );
  if (listening < 2) issues.push(`only ${listening} listening interactions (need ≥2)`);

  if (!slides.some((s) => s.type === "speak")) issues.push("no speak slide (need ≥1)");

  const production = quiz.filter((s) => ["type", "fill", "reorder"].includes(s.type)).length;
  if (production < 5) issues.push(`only ${production} production quizzes (need ≥5)`);

  if (!opts.isVeryFirstLesson) {
    const review = slides.filter((s) => s.review).length;
    if (review < 2) issues.push(`only ${review} interleaved review slides (need ≥2)`);
  }

  const exampleSentences = slides.reduce(
    (n, s) =>
      n + (s.type === "example" ? s.items.length : s.type === "teach" ? (s.examples?.length ?? 0) : 0),
    0,
  );
  if (exampleSentences < 6) issues.push(`only ${exampleSentences} TTS example sentences (need ≥6)`);

  const teachWithVisual = slides.filter((s) => s.type === "teach" && (s.table || s.diagram)).length;
  if (teachWithVisual < 1) issues.push("no teach slide carries a table/diagram (visuals mandate §4)");

  // Picture-power (§4): standard-policy lessons open their vocab with a visual
  // vocab-cards spread, and every referenced id must exist in lesson.vocab.
  const vocabCardSlides = slides.filter((s) => s.type === "vocab-cards");
  if (policy === "standard" && vc > 0 && vocabCardSlides.length === 0)
    issues.push("no vocab-cards picture spread (picture-power mandate §4)");
  const vocabIdSet = new Set(lesson.vocab.map((v) => v.id));
  for (const s of vocabCardSlides) {
    for (const id of s.vocabIds) {
      if (!vocabIdSet.has(id)) issues.push(`vocab-cards ${s.id}: unknown vocab id ${id}`);
    }
  }

  // Learn-before-test (§2b): the lesson's first non-section content beat must be
  // a teach/vocab/example slide — warm-up review quizzes are the one exception.
  const firstContent = slides.find((s) => s.type !== "section" && !s.review);
  if (firstContent && isQuizSlide(firstContent))
    issues.push("lesson jumps straight into a quiz — open with a teach/vocab-cards/example beat (§2b learn-before-test)");

  // Every vocab item must appear in ≥2 slides (by hr text or recap vocabIds).
  const slideTexts = slides.map((s) => JSON.stringify(s).toLowerCase());
  for (const v of lesson.vocab) {
    const needle = v.hr.toLowerCase();
    const count = slideTexts.filter((t) => t.includes(needle) || t.includes(`"${v.id}"`)).length;
    if (count < 2) issues.push(`vocab "${v.hr}" appears in only ${count} slide(s) (need ≥2)`);
  }

  // Reorder sanity: canonical answer must be a permutation of the tiles.
  for (const s of slides) {
    if (s.type === "reorder") {
      const norm = (x: string) => x.toLowerCase().replace(/[.,!?]/g, "").trim();
      const tiles = [...s.words.map(norm)].sort().join("|");
      const ans = norm(s.answers[0]).split(/\s+/).sort().join("|");
      if (tiles !== ans) issues.push(`reorder ${s.id}: tiles don't assemble into answers[0]`);
    }
  }

  return issues;
}

export const storySchema = z.object({
  id: z.string(),
  unitId: z.string(),
  title: z.string().min(1),
  titleEn: z.string().min(1),
  paragraphs: z.array(hrEn).min(2),
  glossary: z.array(z.object({ word: z.string(), gloss: z.string() })).max(5),
  questions: z
    .array(slideSchema.refine((s) => s.type === "mc", { message: "story questions must be mc slides" }))
    .min(4),
});

export const unitTestSchema = z.object({
  id: z.string(),
  unitId: z.string(),
  title: z.string().min(1),
  sections: z
    .array(
      z.object({
        title: z.string(),
        slides: z
          .array(slideSchema.refine((s) => isQuizSlide(s), { message: "test slides must be gradeable quiz slides" }))
          .min(1),
      }),
    )
    .min(3),
  passPct: z.number().min(50).max(100),
});

const speakingPromptSchema = z.object({
  id: z.string().regex(/^s\d{2}$/),
  task: z.string().min(1),
  modelHr: z.string().optional(),
  rubricFocus: z.string().optional(),
});

export const checkpointExamSchema = z.object({
  id: z.string(),
  levelId: z.enum(["A1", "A2", "B1", "B2"]),
  title: z.string().min(1),
  titleEn: z.string().min(1),
  sections: z
    .array(
      z.object({
        title: z.string(),
        slides: z
          .array(slideSchema.refine((s) => isQuizSlide(s), { message: "checkpoint slides must be gradeable quiz slides" }))
          .min(1),
      }),
    )
    .min(3),
  speaking: z
    .object({ title: z.string().min(1), prompts: z.array(speakingPromptSchema).min(1) })
    .optional(),
  passPct: z.number().min(50).max(100),
  afterUnitId: z.string(),
});
