import { describe, expect, it } from "vitest";
import type { CheckpointExam } from "@/types/content";
import { checkpointItems, scoreCheckpoint, type ItemResult } from "./scoring";

const r = (sectionTitle: string, itemId: string, correct: boolean): ItemResult => ({
  sectionTitle,
  itemId,
  correct,
});

describe("scoreCheckpoint", () => {
  it("computes per-section and overall scores", () => {
    const res = [
      r("Listening", "s01", true),
      r("Listening", "s02", true),
      r("Reading", "s03", true),
      r("Reading", "s04", false),
    ];
    const score = scoreCheckpoint(res, 70);
    expect(score.totalItems).toBe(4);
    expect(score.totalCorrect).toBe(3);
    expect(score.pct).toBe(75);
    expect(score.passed).toBe(true);
    expect(score.sections).toEqual([
      { title: "Listening", correct: 2, total: 2, pct: 100 },
      { title: "Reading", correct: 1, total: 2, pct: 50 },
    ]);
  });

  it("fails when overall pct is below the pass mark", () => {
    const res = [r("A", "s01", true), r("A", "s02", false), r("A", "s03", false)];
    const score = scoreCheckpoint(res, 70);
    expect(score.pct).toBe(33);
    expect(score.passed).toBe(false);
  });

  it("passes exactly at the threshold (7/10 = 70 ≥ 70)", () => {
    const res = Array.from({ length: 10 }, (_, i) => r("A", `s${i}`, i < 7));
    const s = scoreCheckpoint(res, 70);
    expect(s.pct).toBe(70);
    expect(s.passed).toBe(true);
  });

  it("collects wrong item ids in encounter order", () => {
    const res = [r("A", "s01", false), r("A", "s02", true), r("B", "s03", false)];
    const s = scoreCheckpoint(res, 70);
    expect(s.wrongItemIds).toEqual(["s01", "s03"]);
  });

  it("surfaces the weakest sections below the pass mark, worst first, capped", () => {
    const res = [
      // Listening 100%
      r("Listening", "l1", true),
      r("Listening", "l2", true),
      // Reading 50%
      r("Reading", "r1", true),
      r("Reading", "r2", false),
      // Grammar 0%
      r("Grammar", "g1", false),
      r("Grammar", "g2", false),
      // Vocab 33%
      r("Vocab", "v1", true),
      r("Vocab", "v2", false),
      r("Vocab", "v3", false),
    ];
    const s = scoreCheckpoint(res, 70, 2);
    // Below 70: Reading 50, Grammar 0, Vocab 33 → worst two = Grammar, Vocab.
    expect(s.weakestSections).toEqual(["Grammar", "Vocab"]);
  });

  it("returns no weak sections when everything clears the mark", () => {
    const res = [r("A", "a1", true), r("A", "a2", true), r("B", "b1", true)];
    expect(scoreCheckpoint(res, 70).weakestSections).toEqual([]);
  });

  it("treats an empty result set as 0% and not passed", () => {
    const s = scoreCheckpoint([], 70);
    expect(s.pct).toBe(0);
    expect(s.passed).toBe(false);
    expect(s.sections).toEqual([]);
  });
});

describe("checkpointItems", () => {
  it("flattens quiz sections into ordered {sectionTitle, id} pairs", () => {
    const exam = {
      id: "a1checkpoint",
      levelId: "A1",
      title: "Ispit",
      titleEn: "A1 Checkpoint",
      passPct: 70,
      afterUnitId: "a1u8",
      sections: [
        { title: "Slušanje", slides: [{ id: "s01" }, { id: "s02" }] },
        { title: "Čitanje", slides: [{ id: "s03" }] },
      ],
    } as unknown as CheckpointExam;
    expect(checkpointItems(exam)).toEqual([
      { sectionTitle: "Slušanje", id: "s01" },
      { sectionTitle: "Slušanje", id: "s02" },
      { sectionTitle: "Čitanje", id: "s03" },
    ]);
  });
});
