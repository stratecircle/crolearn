import { describe, it, expect } from "vitest";
import { allLessons, allUnits, courseGrounding } from "./index";

describe("courseGrounding", () => {
  it("lists every built unit by number and theme (grammar-by-unit)", () => {
    const g = courseGrounding();
    for (const u of allUnits) {
      expect(g).toContain(`Unit ${u.number}`);
      expect(g).toContain(u.theme);
    }
  });

  it("states the fixed case order and names the recurring cast", () => {
    const g = courseGrounding();
    expect(g).toContain("NOM → ACC → LOC → GEN → DAT → INS → VOC");
    expect(g).toContain("baka Marija");
  });

  it("omits the vocabulary dump by default (keeps grading cheap)", () => {
    expect(courseGrounding()).not.toContain("Vocabulary the learner has met");
  });

  it("includes the taught vocabulary only when asked", () => {
    const vocab = allLessons.flatMap((l) => l.vocab);
    expect(vocab.length).toBeGreaterThan(0);
    const g = courseGrounding({ includeVocab: true });
    expect(g).toContain("Vocabulary the learner has met");
    // A real taught word appears verbatim (grounding is built from vetted content).
    expect(g).toContain(vocab[0].hr);
  });

  it("supplies facts only — no behavioural instructions that would cage the tutor", () => {
    // The digest must not smuggle in directives; behaviour lives in the callers'
    // system prompts. Guard against an accidental 'you must only' style leak.
    const g = courseGrounding({ includeVocab: true }).toLowerCase();
    expect(g).not.toContain("you must");
    expect(g).not.toContain("never say");
    expect(g).not.toContain("only use");
  });
});
