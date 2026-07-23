import { describe, expect, it } from "vitest";
import { isQuizSlide, type Lesson, type Slide } from "./content";
import { lessonContractIssues } from "./schemas";
import { allLessons, findLesson } from "@/content";

/** Deep-copy a real lesson so mutations can't leak into other tests. */
function cloneLesson(id: string): Lesson {
  const lesson = findLesson(id);
  if (!lesson) throw new Error(`fixture lesson ${id} missing`);
  return structuredClone(lesson);
}

describe("lessonContractIssues — shipped content is the golden fixture", () => {
  it("every registered lesson meets the §2 content contract", () => {
    for (const lesson of allLessons) {
      const issues = lessonContractIssues(lesson, { isVeryFirstLesson: lesson.id === "a1u1l1" });
      expect(issues, `${lesson.id} should be contract-clean`).toEqual([]);
    }
  });
});

describe("lessonContractIssues — violations are detected", () => {
  it("flags a lesson whose first content beat is a scored quiz (§2b rule 9)", () => {
    const lesson = cloneLesson("a1u2l1");
    const quiz = structuredClone(lesson.slides.find((s) => isQuizSlide(s) && !s.review));
    if (!quiz) throw new Error("fixture needs a non-review quiz slide");
    lesson.slides.splice(1, 0, quiz as Slide);
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/learn-before-test/);
  });

  it("does NOT flag a review warm-up quiz before the first teach beat", () => {
    const lesson = cloneLesson("a1u2l1");
    const quiz = structuredClone(lesson.slides.find((s) => isQuizSlide(s) && !s.review));
    if (!quiz) throw new Error("fixture needs a non-review quiz slide");
    (quiz as Slide).review = true;
    lesson.slides.splice(1, 0, quiz as Slide);
    expect(lessonContractIssues(lesson).join("\n")).not.toMatch(/learn-before-test/);
  });

  it("flags missing interleaved review slides (§2b rule 3)", () => {
    const lesson = cloneLesson("a1u2l1");
    for (const s of lesson.slides) delete s.review;
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/interleaved review/);
  });

  it("…but not for the very first lesson of the course", () => {
    const lesson = cloneLesson("a1u2l1");
    for (const s of lesson.slides) delete s.review;
    expect(lessonContractIssues(lesson, { isVeryFirstLesson: true }).join("\n")).not.toMatch(
      /interleaved review/,
    );
  });

  it("flags a standard lesson without a vocab-cards picture spread (§4)", () => {
    const lesson = cloneLesson("a1u2l1");
    lesson.slides = lesson.slides.filter((s) => s.type !== "vocab-cards");
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/vocab-cards picture spread/);
  });

  it("flags vocab-cards referencing an unknown vocab id", () => {
    const lesson = cloneLesson("a1u2l1");
    const cards = lesson.slides.find((s) => s.type === "vocab-cards");
    if (cards?.type !== "vocab-cards") throw new Error("fixture needs vocab-cards");
    cards.vocabIds.push("a1u9.ghost");
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/unknown vocab id a1u9\.ghost/);
  });

  it("flags a lesson not opening with the lesson-menu section slide", () => {
    const lesson = cloneLesson("a1u2l1");
    lesson.slides = lesson.slides.filter((s) => s.type !== "section");
    const issues = lessonContractIssues(lesson).join("\n");
    expect(issues).toMatch(/first slide must be the lesson-menu/);
    expect(issues).toMatch(/section slides/);
  });

  it("flags vocab items that appear in fewer than 2 slides", () => {
    const lesson = cloneLesson("a1u2l1");
    lesson.vocab.push({
      id: "a1u2.fantom",
      hr: "fantomskariječ",
      en: "phantom word",
      pos: "noun",
      exampleHr: "Nema je nigdje.",
      exampleEn: "It is nowhere.",
    });
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/"fantomskariječ" appears in only 0/);
  });

  it("flags a reorder slide whose tiles cannot assemble its answer", () => {
    const lesson = cloneLesson("a1u3l5");
    const reorder = lesson.slides.find((s) => s.type === "reorder");
    if (reorder?.type !== "reorder") throw new Error("fixture needs a reorder slide");
    reorder.words.push("uljez");
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/tiles don't assemble/);
  });

  it("flags too few quiz interactions when quizzes are stripped", () => {
    const lesson = cloneLesson("a1u2l1");
    lesson.slides = lesson.slides.filter((s) => s.type !== "quiz-set" && s.type !== "mc");
    const issues = lessonContractIssues(lesson).join("\n");
    expect(issues).toMatch(/quiz interactions/);
  });

  it("flags out-of-range vocab counts per policy", () => {
    const lesson = cloneLesson("a1u2l1");
    lesson.vocab = lesson.vocab.slice(0, 3);
    expect(lessonContractIssues(lesson).join("\n")).toMatch(/vocab items \(standard policy/);
  });
});
