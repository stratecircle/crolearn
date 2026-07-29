/**
 * Anthropic API integration (Phase 2): free-form answer grading and dynamic
 * exercise generation. Direct browser access is intentional — single-user
 * local app (CLAUDE.md). The key lives in localStorage only; never log it.
 *
 * Structured outputs use forced tool-choice: the model must call a tool whose
 * input schema is the result shape — robust across SDK versions.
 */
// Type-only: the SDK is ~1.1 MB and only three pages ever touch it, so the
// value side is pulled in lazily by getClient() below. `import type` erases
// entirely at build time, which is what keeps it out of the main chunk.
import type Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { slideSchema } from "@/types/schemas";
import { isQuizSlide, type QuizSlide } from "@/types/content";
import { recordUsage } from "./usage";

/** Tally a non-streaming response's token usage for the Settings cost readout. */
function trackUsage(model: string, usage: Anthropic.Usage): void {
  recordUsage(model, {
    input: usage.input_tokens,
    output: usage.output_tokens,
    cacheRead: usage.cache_read_input_tokens ?? 0,
    cacheWrite: usage.cache_creation_input_tokens ?? 0,
  });
}

export function getApiKey(): string | null {
  return localStorage.getItem("crolearn.apiKey");
}

export function hasApiKey(): boolean {
  return !!getApiKey();
}

export function getModel(): string {
  return localStorage.getItem("crolearn.model") ?? "claude-opus-4-8";
}

/**
 * Async on purpose: this is the single place the Anthropic SDK is actually
 * instantiated, so making it the lazy-import boundary keeps the SDK out of the
 * initial bundle. The dynamic import is memoised by the module system, so
 * repeat calls cost nothing after the first. Every caller was already async.
 */
async function getClient(): Promise<Anthropic> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("no-api-key");
  const { default: AnthropicSdk } = await import("@anthropic-ai/sdk");
  return new AnthropicSdk({ apiKey, dangerouslyAllowBrowser: true });
}

/* ------------------------------ grading ------------------------------ */

const gradeResultSchema = z.object({
  score: z.number().min(0).max(100),
  correct: z.boolean(),
  corrected_text: z.string(),
  errors: z.array(z.object({ type: z.string(), explanation: z.string() })),
  feedback: z.string(),
});
export type AiGradeResult = z.infer<typeof gradeResultSchema>;

const GRADE_TOOL = {
  name: "record_grade",
  description: "Record the grading result for the learner's answer.",
  input_schema: {
    type: "object" as const,
    properties: {
      score: { type: "number", description: "0-100 overall quality" },
      correct: { type: "boolean", description: "true if acceptable at the learner's level" },
      corrected_text: { type: "string", description: "The learner's text with errors fixed (Croatian)" },
      errors: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string", description: "e.g. case-ending, word-order, spelling, vocabulary" },
            explanation: { type: "string", description: "One-line English explanation" },
          },
          required: ["type", "explanation"],
        },
      },
      feedback: { type: "string", description: "2-3 sentences of warm, specific English feedback" },
    },
    required: ["score", "correct", "corrected_text", "errors", "feedback"],
  },
};

/**
 * Grade a free-form Croatian answer (writing tasks, spoken transcripts).
 * levelContext example: "A1 Unit 1: greetings, biti, nominative only".
 */
export async function gradeFreeForm(opts: {
  task: string;
  learnerAnswer: string;
  levelContext: string;
}): Promise<AiGradeResult> {
  const client = await getClient();
  const msg = await client.messages.create({
    model: getModel(),
    max_tokens: 1024,
    system:
      "You grade a beginner-to-intermediate Croatian learner's free-form answers. " +
      "Standard Croatian, ijekavian. Judge ONLY against grammar/vocab at the stated level — " +
      "never penalize structures above it. Diacritic slips (c/č/ć…) are minor, not wrong. " +
      "Be encouraging but precise.",
    messages: [
      {
        role: "user",
        content:
          `Level context: ${opts.levelContext}\n\nTask given to the learner:\n${opts.task}\n\n` +
          `Learner's answer:\n${opts.learnerAnswer}\n\nGrade it via record_grade.`,
      },
    ],
    tools: [GRADE_TOOL],
    tool_choice: { type: "tool", name: "record_grade" },
  });
  trackUsage(getModel(), msg.usage);
  const block = msg.content.find((b) => b.type === "tool_use");
  if (!block || block.type !== "tool_use") throw new Error("no-structured-output");
  return gradeResultSchema.parse(block.input);
}

/* ------------------------- exercise generation ------------------------- */

const GENERATE_TOOL = {
  name: "record_exercises",
  description: "Record generated practice exercises as CroLearn quiz slides.",
  input_schema: {
    type: "object" as const,
    properties: {
      slides: {
        type: "array",
        description:
          "Quiz slides. Allowed types: mc, type, fill, reorder. Shapes: " +
          'mc {id,type:"mc",prompt,options[2-4],correctIndex,explanation}; ' +
          'type {id,type:"type",prompt,answers[string[]],explanation}; ' +
          'fill {id,type:"fill",text (with ___),blanks[[accepted]],translation,explanation}; ' +
          'reorder {id,type:"reorder",words[],answers[joined tiles],en,explanation}. ' +
          'ids: "s90","s91",… Instructions in English; Croatian only as content.',
        items: { type: "object" },
      },
    },
    required: ["slides"],
  },
};

/**
 * Generate targeted practice slides (used by "Practice more" after wrong
 * answers/leeches). Every slide is Zod-validated; invalid ones are dropped.
 */
export async function generateExercises(opts: {
  focus: string; // e.g. "biti conjugation: je vs su; vocab: kava, voda"
  levelContext: string;
  count?: number;
}): Promise<QuizSlide[]> {
  const client = await getClient();
  const msg = await client.messages.create({
    model: getModel(),
    max_tokens: 2048,
    system:
      "You author practice exercises for CroLearn, a Croatian course. Standard Croatian, " +
      "ijekavian, perfect diacritics. Use ONLY grammar/vocab within the stated level context. " +
      "Instructions/prompts in English; Croatian only as the material being practiced. " +
      "Every exercise needs a one-line explanation.",
    messages: [
      {
        role: "user",
        content:
          `Level context: ${opts.levelContext}\n\nWeak points to target:\n${opts.focus}\n\n` +
          `Create ${opts.count ?? 6} varied exercises via record_exercises.`,
      },
    ],
    tools: [GENERATE_TOOL],
    tool_choice: { type: "tool", name: "record_exercises" },
  });
  trackUsage(getModel(), msg.usage);
  const block = msg.content.find((b) => b.type === "tool_use");
  if (!block || block.type !== "tool_use") throw new Error("no-structured-output");
  const raw = (block.input as { slides?: unknown[] }).slides ?? [];
  const valid: QuizSlide[] = [];
  for (const s of raw) {
    // isQuizSlide (not just ≠section): the model could emit teach/example/recap
    // slides, which would auto-report correct=true if rendered as quizzes.
    const parsed = slideSchema.safeParse(s);
    if (parsed.success && isQuizSlide(parsed.data)) {
      valid.push(parsed.data);
    }
  }
  return valid;
}

/* ------------------------------ proofread ------------------------------ */

const proofreadSchema = z.object({
  findings: z.array(
    z.object({
      where: z.string(),
      severity: z.enum(["error", "warning", "style"]),
      issue: z.string(),
      fix: z.string(),
    }),
  ),
});
export type ProofreadFinding = z.infer<typeof proofreadSchema>["findings"][number];

const PROOFREAD_TOOL = {
  name: "record_findings",
  description: "Record every Croatian correctness/pedagogy issue found.",
  input_schema: {
    type: "object" as const,
    properties: {
      findings: {
        type: "array",
        items: {
          type: "object",
          properties: {
            where: { type: "string", description: "The item's `where` id you were given" },
            severity: { type: "string", enum: ["error", "warning", "style"] },
            issue: { type: "string", description: "What is wrong (one line)" },
            fix: { type: "string", description: "The corrected Croatian / suggested change" },
          },
          required: ["where", "severity", "issue", "fix"],
        },
      },
    },
    required: ["findings"],
  },
};

/**
 * Pedantic native-proofreader pass (teaching-method §10). Feed every Croatian
 * string from a unit; get back a list of errors/warnings. Empty findings = clean.
 * Used by scripts/proofread.ts and can be surfaced in-app for content review.
 */
export async function proofreadCroatian(opts: {
  items: { where: string; hr: string; en?: string }[];
  levelContext: string;
}): Promise<ProofreadFinding[]> {
  const client = await getClient();
  const list = opts.items
    .map((it) => `- [${it.where}] "${it.hr}"${it.en ? ` (means: ${it.en})` : ""}`)
    .join("\n");
  const msg = await client.messages.create({
    model: getModel(),
    max_tokens: 4096,
    system:
      "You are a pedantic native Croatian proofreader for a language course. Standard Croatian, " +
      "ijekavian, perfect diacritics (č ć đ š ž). Check every line for: wrong case endings, verb " +
      "forms, clitic position (2nd position; je last; se+je→se), gender agreement, spelling, and " +
      "whether the English gloss matches. Also flag grammar that is ABOVE the stated level (the " +
      "course introduces cases in the order NOM→ACC→LOC→GEN→DAT→INS→VOC). Report ONLY real issues " +
      "via record_findings; if a line is perfect, do not report it.",
    messages: [
      {
        role: "user",
        content: `Level context: ${opts.levelContext}\n\nProofread these lines:\n${list}\n\nReport via record_findings.`,
      },
    ],
    tools: [PROOFREAD_TOOL],
    tool_choice: { type: "tool", name: "record_findings" },
  });
  trackUsage(getModel(), msg.usage);
  const block = msg.content.find((b) => b.type === "tool_use");
  if (!block || block.type !== "tool_use") throw new Error("no-structured-output");
  return proofreadSchema.parse(block.input).findings;
}

/* ------------------------------ tutor ------------------------------ */

const TUTOR_SYSTEM =
  "You are the CroLearn tutor — a warm, encouraging Croatian teacher for one learner (Noah), " +
  "working through a course from zero toward B2. Standard Croatian, ijekavian, always-correct " +
  "diacritics (č ć đ š ž). You answer questions about Croatian, explain grammar simply, give " +
  "examples, run mini role-plays, and gently correct mistakes.\n\n" +
  "You are a real conversation partner, not a syllabus reader. Chat naturally, be curious, use " +
  "light humour, follow Noah's tangents, and bring in Croatian culture, food, travel, and " +
  "everyday life when it helps him connect with the language. The course context below tells you " +
  "what he has already learned — lean on it to pitch answers at his level and prefer words and " +
  "structures he knows, but treat it as helpful background, not a cage.\n\n" +
  "Rules:\n" +
  "- Explain IN ENGLISH; Croatian appears only as the language being taught (gloss it on first use).\n" +
  "- Prefer grammar/vocab Noah has met. Going beyond it is fine when it helps or he asks for it — " +
  "just flag it as a preview and keep it simple.\n" +
  "- Keep replies short and focused (a few sentences). Use small tables or bullet lists only when " +
  "they genuinely help. No walls of text.\n" +
  "- When you write a Croatian sentence, keep it natural and level-appropriate.\n" +
  "- Your world is helping Noah learn Croatian. If he asks for something clearly unrelated (writing " +
  "code, math homework, general trivia), warmly steer back to Croatian — you're his tutor, not a " +
  "general assistant — without being preachy or refusing outright.\n" +
  "- Be kind and specific. Celebrate progress; never overwhelm.";

/**
 * Stream a tutor reply token-by-token. The system prompt is marked for prompt
 * caching (cheap multi-turn). Yields text deltas; caller concatenates.
 * levelContext: what the learner has covered, e.g. "Completed A1 U1–U2: …".
 */
export async function* streamTutor(opts: {
  history: { role: "user" | "assistant"; text: string }[];
  levelContext: string;
  /** Optional focus for "Ask about this slide" — the current slide's context. */
  focus?: string;
}): AsyncGenerator<string> {
  const client = await getClient();
  // Course context is the stable, cacheable prefix; the per-slide focus (which
  // changes slide to slide) goes in its own uncached block so it never breaks
  // the course-context cache.
  const system: Anthropic.TextBlockParam[] = [
    {
      type: "text",
      text: `${TUTOR_SYSTEM}\n\n=== Course context ===\n${opts.levelContext}`,
      cache_control: { type: "ephemeral" },
    },
  ];
  if (opts.focus) {
    system.push({
      type: "text",
      text:
        `=== Right now ===\nThe learner is looking at one specific slide in a lesson and tapped ` +
        `"ask about this". Focus your help on it — explain it, give another example, or answer ` +
        `their question — but stay conversational:\n${opts.focus}`,
    });
  }
  const stream = client.messages.stream({
    model: getModel(),
    max_tokens: 1024,
    system,
    messages: opts.history.map((m) => ({ role: m.role, content: m.text })),
  });
  let uInput = 0;
  let uOutput = 0;
  let uCacheRead = 0;
  let uCacheWrite = 0;
  for await (const event of stream) {
    if (event.type === "message_start") {
      const u = event.message.usage;
      uInput = u.input_tokens ?? 0;
      uCacheRead = u.cache_read_input_tokens ?? 0;
      uCacheWrite = u.cache_creation_input_tokens ?? 0;
    } else if (event.type === "message_delta") {
      uOutput = event.usage.output_tokens ?? uOutput;
    } else if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      yield event.delta.text;
    }
  }
  recordUsage(getModel(), { input: uInput, output: uOutput, cacheRead: uCacheRead, cacheWrite: uCacheWrite });
}

/** Human-readable message for AI failures — the app stays usable without AI. */
export function aiErrorMessage(e: unknown): string {
  const msg = (e as Error)?.message ?? "";
  if (msg === "no-api-key") return "Add your Anthropic API key in Settings to use AI features.";
  if (msg.includes("401")) return "API key rejected — check it in Settings.";
  if (msg.includes("429")) return "Rate limited — try again in a moment.";
  return "AI is unavailable right now — everything else still works.";
}
