/**
 * `npm run validate:content` — validates every content file against the Zod
 * schemas AND the minimum content contract (teaching-method §2). Exit 1 on any error.
 */
import { checkpoints, levels } from "../src/content";
import { checkpointExamSchema, lessonContractIssues, lessonSchema, storySchema, unitTestSchema } from "../src/types/schemas";

let errors = 0;
let checkedLessons = 0;

function report(scope: string, problems: string[]) {
  if (problems.length === 0) return;
  errors += problems.length;
  console.error(`\n✗ ${scope}`);
  for (const p of problems) console.error(`   - ${p}`);
}

function zodProblems(result: { success: boolean; error?: { issues: { path: PropertyKey[]; message: string }[] } }): string[] {
  if (result.success) return [];
  return (result.error?.issues ?? []).map((i) => `${i.path.join(".")}: ${i.message}`);
}

const seenVocabIds = new Set<string>();

for (const level of levels) {
  for (const unit of level.units) {
    for (const lesson of unit.lessons) {
      checkedLessons++;
      report(`lesson ${lesson.id} (${lesson.title})`, zodProblems(lessonSchema.safeParse(lesson)));
      report(
        `lesson ${lesson.id} content contract`,
        lessonContractIssues(lesson, { isVeryFirstLesson: lesson.id === "a1u1l1" }),
      );
      for (const v of lesson.vocab) {
        if (seenVocabIds.has(v.id)) report(`lesson ${lesson.id}`, [`duplicate vocab id ${v.id}`]);
        seenVocabIds.add(v.id);
      }
      const dupSlides = lesson.slides.map((s) => s.id).filter((id, i, a) => a.indexOf(id) !== i);
      if (dupSlides.length) report(`lesson ${lesson.id}`, [`duplicate slide ids: ${dupSlides.join(", ")}`]);
    }
    report(`story ${unit.story.id}`, zodProblems(storySchema.safeParse(unit.story)));
    report(`test ${unit.test.id}`, zodProblems(unitTestSchema.safeParse(unit.test)));
    // Slide/question ids must be unique across the whole test/story — TestPage
    // and StoryPage key React components by them.
    const testIds = unit.test.sections.flatMap((s) => s.slides.map((sl) => sl.id));
    const dupTestIds = [...new Set(testIds.filter((tid, i, a) => a.indexOf(tid) !== i))];
    if (dupTestIds.length) report(`test ${unit.test.id}`, [`duplicate slide ids: ${dupTestIds.join(", ")}`]);
    const qIds = unit.story.questions.map((q) => q.id);
    const dupQIds = [...new Set(qIds.filter((qid, i, a) => a.indexOf(qid) !== i))];
    if (dupQIds.length) report(`story ${unit.story.id}`, [`duplicate question ids: ${dupQIds.join(", ")}`]);
  }
}

for (const cp of checkpoints) {
  report(`checkpoint ${cp.id}`, zodProblems(checkpointExamSchema.safeParse(cp)));
  // Quiz-slide ids must be unique across the whole exam (React keys + scoring).
  const cpIds = cp.sections.flatMap((s) => s.slides.map((sl) => sl.id));
  const dupCpIds = [...new Set(cpIds.filter((cid, i, a) => a.indexOf(cid) !== i))];
  if (dupCpIds.length) report(`checkpoint ${cp.id}`, [`duplicate slide ids: ${dupCpIds.join(", ")}`]);
}

if (errors > 0) {
  console.error(`\ncontent validation FAILED: ${errors} problem(s) across ${checkedLessons} lesson(s)`);
  process.exit(1);
} else {
  console.log(`content validation passed: ${checkedLessons} lessons, ${checkpoints.length} checkpoint(s), all stories and tests OK`);
}
