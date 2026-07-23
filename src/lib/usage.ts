/**
 * Best-effort local tally of Anthropic API usage + estimated cost, shown in
 * Settings so Noah can see roughly what the AI features are spending. Estimates
 * only — the Anthropic Console is authoritative. Persisted in localStorage and
 * guarded so importing this module is safe outside the browser (tests, scripts).
 *
 * Cost is computed per call at the model used *at that time*, so switching models
 * in Settings prices each call correctly.
 */

export type UsageTotals = {
  calls: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  costUsd: number;
};

export type CallUsage = {
  input?: number;
  output?: number;
  cacheRead?: number;
  cacheWrite?: number;
};

const KEY = "crolearn.usage";
export const USAGE_EVENT = "crolearn:usage";

const ZERO: UsageTotals = {
  calls: 0,
  inputTokens: 0,
  outputTokens: 0,
  cacheReadTokens: 0,
  cacheWriteTokens: 0,
  costUsd: 0,
};

/** USD per 1M tokens by model family. Cache read ≈ 0.1× input; 5-min write ≈ 1.25× input. */
function pricePerMTok(model: string): { in: number; out: number } {
  const m = model.toLowerCase();
  if (m.includes("haiku")) return { in: 1, out: 5 };
  if (m.includes("sonnet")) return { in: 3, out: 15 };
  return { in: 5, out: 25 }; // opus / unknown → default to Opus pricing
}

export function estimateCostUsd(model: string, u: CallUsage): number {
  const p = pricePerMTok(model);
  const input = u.input ?? 0;
  const output = u.output ?? 0;
  const cacheRead = u.cacheRead ?? 0;
  const cacheWrite = u.cacheWrite ?? 0;
  return (
    (input * p.in + output * p.out + cacheRead * p.in * 0.1 + cacheWrite * p.in * 1.25) / 1_000_000
  );
}

function hasStorage(): boolean {
  try {
    return typeof localStorage !== "undefined";
  } catch {
    return false;
  }
}

function emit(): void {
  if (typeof window !== "undefined") window.dispatchEvent(new Event(USAGE_EVENT));
}

export function getUsage(): UsageTotals {
  if (!hasStorage()) return { ...ZERO };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...ZERO };
    return { ...ZERO, ...(JSON.parse(raw) as Partial<UsageTotals>) };
  } catch {
    return { ...ZERO };
  }
}

export function recordUsage(model: string, u: CallUsage): void {
  if (!hasStorage()) return;
  try {
    const t = getUsage();
    t.calls += 1;
    t.inputTokens += u.input ?? 0;
    t.outputTokens += u.output ?? 0;
    t.cacheReadTokens += u.cacheRead ?? 0;
    t.cacheWriteTokens += u.cacheWrite ?? 0;
    t.costUsd += estimateCostUsd(model, u);
    localStorage.setItem(KEY, JSON.stringify(t));
    emit();
  } catch {
    /* best-effort — usage tracking must never break a real request */
  }
}

export function resetUsage(): void {
  if (!hasStorage()) return;
  try {
    localStorage.removeItem(KEY);
    emit();
  } catch {
    /* best-effort */
  }
}
