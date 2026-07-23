import { describe, it, expect } from "vitest";
import { estimateCostUsd } from "./usage";

describe("estimateCostUsd", () => {
  it("prices Opus 4.8 at the $5 input / $25 output rates", () => {
    // 1M input + 1M output = $5 + $25 = $30
    expect(estimateCostUsd("claude-opus-4-8", { input: 1_000_000, output: 1_000_000 })).toBeCloseTo(30, 5);
  });

  it("orders the tiers Haiku < Sonnet < Opus", () => {
    const u = { input: 1_000_000, output: 1_000_000 };
    const haiku = estimateCostUsd("claude-haiku-4-5-20251001", u);
    const sonnet = estimateCostUsd("claude-sonnet-5", u);
    const opus = estimateCostUsd("claude-opus-4-8", u);
    expect(haiku).toBeLessThan(sonnet);
    expect(sonnet).toBeLessThan(opus);
  });

  it("charges cache reads at ~10% of the input rate", () => {
    expect(estimateCostUsd("claude-opus-4-8", { cacheRead: 1_000_000 })).toBeCloseTo(0.5, 5);
  });

  it("defaults an unknown model to Opus pricing", () => {
    const u = { input: 1_000_000 };
    expect(estimateCostUsd("some-future-model", u)).toBeCloseTo(estimateCostUsd("claude-opus-4-8", u), 5);
  });
});
