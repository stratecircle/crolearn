/**
 * `npm run proofread -- <id>` — pedantic native-Croatian proofread pass
 * (teaching-method §10) over every Croatian string in a unit's lessons, story
 * and test, or in a checkpoint exam. Reads the API key from ANTHROPIC_API_KEY.
 *
 *   $env:ANTHROPIC_API_KEY="sk-ant-…"; npm run proofread -- a1u3
 *   npm run proofread -- a1checkpoint   # checkpoint exam
 *
 * Exit 1 if any severity:"error" findings are returned.
 */
import Anthropic from "@anthropic-ai/sdk";
import { allUnits, checkpoints, learnerLevelContext } from "../src/content";
import type { CheckpointExam, Lesson, Slide, Story, Unit, UnitTest } from "../src/types/content";

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error("Set ANTHROPIC_API_KEY first (it is NOT read from the app's localStorage).");
  process.exit(1);
}
const model = process.env.CROLEARN_MODEL ?? "claude-opus-4-8";
const unitId = process.argv[2];

type Item = { where: string; hr: string; en?: string };

function fromSlide(lessonId: string, s: Slide, out: Item[]) {
  const at = `${lessonId}/${s.id}`;
  const push = (hr: unknown, en?: unknown) => {
    if (typeof hr === "string" && /[a-zčćđšž]/i.test(hr)) out.push({ where: at, hr, en: typeof en === "string" ? en : undefined });
  };
  switch (s.type) {
    case "teach":
      s.examples?.forEach((e) => push(e.hr, e.en));
      s.ttsChips?.forEach((c) => push(c));
      break;
    case "example":
      s.items.forEach((e) => push(e.hr, e.en));
      break;
    case "mc":
      push(s.tts);
      break;
    case "quiz-set":
      s.items.forEach((it) => push(it.tts));
      break;
    case "type":
      s.answers.forEach((a) => push(a, s.prompt));
      break;
    case "fill":
      push(s.text, s.translation);
      s.blanks.flat().forEach((b) => push(b));
      break;
    case "reorder":
      s.answers.forEach((a) => push(a, s.en));
      break;
    case "listen-type":
      push(s.tts);
      s.answers?.forEach((a) => push(a));
      break;
    case "speak":
      push(s.targetHr, s.targetEn);
      break;
    case "match":
      s.pairs.forEach((p) => push(p.a, p.b));
      break;
  }
}

function gatherUnit(unit: Unit): Item[] {
  const out: Item[] = [];
  unit.lessons.forEach((l: Lesson) => {
    l.vocab.forEach((v) => {
      out.push({ where: `${l.id}/vocab/${v.id}`, hr: v.hr, en: v.en });
      out.push({ where: `${l.id}/vocab/${v.id}/ex`, hr: v.exampleHr, en: v.exampleEn });
    });
    l.slides.forEach((s) => fromSlide(l.id, s, out));
  });
  const story: Story = unit.story;
  story.paragraphs.forEach((p, i) => out.push({ where: `${story.id}/p${i}`, hr: p.hr, en: p.en }));
  story.questions.forEach((q) => q.tts && out.push({ where: `${story.id}/${q.id}`, hr: q.tts }));
  const test: UnitTest = unit.test;
  test.sections.forEach((sec) => sec.slides.forEach((sl) => fromSlide(test.id, sl, out)));
  return out;
}

/**
 * Checkpoint exams keep a lot of Croatian in fields fromSlide() skips for units:
 * reading passages and dialogue-gap lines live in mc `prompt`s, model answers in
 * `speaking[].modelHr`, and worked examples in `explanation`s. We pull those too,
 * but never the mc `options` — distractors are wrong Croatian by design.
 */
function fromCheckpoint(cp: CheckpointExam): Item[] {
  const out: Item[] = [];
  const isHr = (v: unknown): v is string => typeof v === "string" && (/[čćđšž]/i.test(v) || /[»«]/.test(v));
  cp.sections.forEach((sec) =>
    sec.slides.forEach((sl) => {
      fromSlide(cp.id, sl, out);
      const rec = sl as { prompt?: unknown; explanation?: unknown };
      if (isHr(rec.prompt)) out.push({ where: `${cp.id}/${sl.id}/prompt`, hr: rec.prompt });
      if (isHr(rec.explanation)) out.push({ where: `${cp.id}/${sl.id}/expl`, hr: rec.explanation });
    }),
  );
  cp.speaking?.prompts.forEach((p) => {
    if (p.modelHr) out.push({ where: `${cp.id}/speaking/${p.id}`, hr: p.modelHr, en: p.task });
  });
  if (cp.writing?.modelHr)
    out.push({ where: `${cp.id}/writing/model`, hr: cp.writing.modelHr, en: cp.writing.task });
  return out;
}

async function main() {
  const unit = allUnits.find((u) => u.id === unitId);
  const cp = checkpoints.find((c) => c.id === unitId);
  if (!unit && !cp) {
    const known = [...allUnits.map((u) => u.id), ...checkpoints.map((c) => c.id)].join(", ");
    console.error(`Unknown id "${unitId}". Known: ${known}`);
    process.exit(1);
  }
  const items = unit ? gatherUnit(unit) : fromCheckpoint(cp!);
  console.log(`Proofreading ${items.length} Croatian lines from ${unitId}…`);
  const client = new Anthropic({ apiKey });
  const list = items.map((it) => `- [${it.where}] "${it.hr}"${it.en ? ` (means: ${it.en})` : ""}`).join("\n");
  const msg = await client.messages.create({
    model,
    max_tokens: 8192,
    system:
      "You are a pedantic native Croatian proofreader for a language course. Standard Croatian, " +
      "ijekavian, perfect diacritics. Check case endings, verb forms, clitic position (2nd; je last; " +
      "se+je→se), gender agreement, spelling, and gloss accuracy. Flag grammar ABOVE the level " +
      "(case order NOM→ACC→LOC→GEN→DAT→INS→VOC). Report ONLY real problems.",
    messages: [
      {
        role: "user",
        content:
          `Level context: ${learnerLevelContext()}\n\nProofread these lines and reply as a list ` +
          `"[where] SEVERITY: issue → fix" (SEVERITY = ERROR/WARNING/STYLE). If a line is perfect, skip it. ` +
          `End with a line "TOTAL ERRORS: n".\n\n${list}`,
      },
    ],
  });
  const text = msg.content.filter((b) => b.type === "text").map((b) => (b as { text: string }).text).join("\n");
  console.log("\n" + text + "\n");
  const m = /TOTAL ERRORS:\s*(\d+)/i.exec(text);
  const nErr = m ? Number(m[1]) : 0;
  // Set the code and let Node drain stdout + close the SDK's keep-alive sockets
  // on its own. A synchronous process.exit() here races the still-flushing stdout
  // pipe on Windows and trips a libuv assertion (UV_HANDLE_CLOSING), which also
  // clobbers the exit code — breaking the "exit 1 on errors" contract.
  process.exitCode = nErr > 0 ? 1 : 0;
}

void main();
