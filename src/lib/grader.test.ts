import { describe, expect, it } from "vitest";
import {
  foldDiacritics,
  gradeFill,
  gradeReorder,
  gradeTyped,
  normalize,
  speechSimilarity,
} from "./grader";

describe("normalize", () => {
  it("lowercases, trims, collapses whitespace, strips punctuation", () => {
    expect(normalize("  Dobro   jutro! ")).toBe("dobro jutro");
    expect(normalize("Kava, molim.")).toBe("kava molim");
    expect(normalize("»Doviđenja…«")).toBe("doviđenja");
  });

  it("keeps Croatian diacritics intact", () => {
    expect(normalize("Večer")).toBe("večer");
    expect(normalize("ČOVJEK")).toBe("čovjek");
  });
});

describe("foldDiacritics", () => {
  it("folds č ć ž š đ to ASCII", () => {
    expect(foldDiacritics("čćžšđ")).toBe("cczsd");
    expect(foldDiacritics("večer")).toBe("vecer");
  });
});

describe("gradeTyped", () => {
  it("accepts exact match", () => {
    expect(gradeTyped("kava", ["kava"]).verdict).toBe("correct");
  });
  it("is case/punctuation insensitive", () => {
    expect(gradeTyped("Dobro jutro!", ["dobro jutro"]).verdict).toBe("correct");
  });
  it("accepts any listed variant", () => {
    expect(gradeTyped("Da kava i voda", ["Da, kava i voda.", "Da kava i voda"]).verdict).toBe("correct");
  });
  it("flags diacritic slips as 'diacritics', not wrong", () => {
    const r = gradeTyped("vecer", ["večer"]);
    expect(r.verdict).toBe("diacritics");
    if (r.verdict === "diacritics") expect(r.canonical).toBe("večer");
  });
  it("flags wrong answers with canonical", () => {
    const r = gradeTyped("voda", ["kava"]);
    expect(r.verdict).toBe("wrong");
    if (r.verdict === "wrong") expect(r.canonical).toBe("kava");
  });
  it("does NOT give diacritic credit for genuinely different words", () => {
    expect(gradeTyped("cas", ["čaj"]).verdict).toBe("wrong");
  });
});

describe("gradeFill", () => {
  it("grades each blank independently", () => {
    const res = gradeFill(["sam", "si"], [["sam"], ["je"]]);
    expect(res[0].verdict).toBe("correct");
    expect(res[1].verdict).toBe("wrong");
  });
});

describe("gradeReorder", () => {
  it("accepts the canonical ordering ignoring punctuation", () => {
    expect(gradeReorder("Da kava i voda", ["Da, kava i voda."]).verdict).toBe("correct");
  });
  it("rejects wrong order", () => {
    expect(gradeReorder("kava Da i voda", ["Da kava i voda"]).verdict).toBe("wrong");
  });
});

describe("speechSimilarity", () => {
  it("returns 1 for identical phrases", () => {
    expect(speechSimilarity("dobro jutro", "Dobro jutro!")).toBe(1);
  });
  it("is diacritic-tolerant (STT often drops them)", () => {
    expect(speechSimilarity("dobra vecer", "Dobra večer")).toBe(1);
  });
  it("scores partial matches between 0 and 1", () => {
    const s = speechSimilarity("dobro", "dobro jutro");
    expect(s).toBeGreaterThan(0);
    expect(s).toBeLessThan(1);
  });
  it("returns 0 for empty input", () => {
    expect(speechSimilarity("", "dobro jutro")).toBe(0);
  });
});
