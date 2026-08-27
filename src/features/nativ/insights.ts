/**
 * Dashboard insights — derived entirely from what's already in Dexie. Nothing
 * here is estimated or padded: if the learner has no history, the series are
 * genuinely empty and the UI says so rather than drawing a plausible shape.
 */
import { db } from "@/lib/db";
import { allLessons } from "@/content";
import type { DayCell } from "@/ui/charts";

export interface Insights {
  /** Trailing weeks of daily activity, Monday-aligned, ascending. */
  activity: DayCell[];
  /** Cards due today … +6 days. */
  forecast: { label: string; value: number; emphasis?: boolean }[];
  /** First-try accuracy of the last 12 completed lessons, oldest → newest. */
  accuracy: number[];
  /** Mean of `accuracy`, or null when nothing has been completed. */
  accuracyAvg: number | null;
  /** Total reviews ever logged. */
  totalReviews: number;
  /** Reviews logged today. */
  reviewsToday: number;
  /** Vocabulary images for the most recently seeded words. */
  recentWords: { hr: string; en: string; image?: string }[];
}

/** Local `YYYY-MM-DD` — never `toISOString`, which would shift across midnight. */
function dayKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function startOfDay(d: Date): Date {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

export async function loadInsights(weeks = 18): Promise<Insights> {
  const [log, lessons, cards] = await Promise.all([
    db.reviewLog.orderBy("reviewedAt").reverse().limit(8000).toArray(),
    db.lessonProgress.toArray(),
    db.cards.toArray(),
  ]);

  /* ── activity ─────────────────────────────────────────────────────────── */
  const perDay = new Map<string, number>();
  for (const r of log) perDay.set(dayKey(r.reviewedAt), (perDay.get(dayKey(r.reviewedAt)) ?? 0) + 1);
  // A completed lesson counts as activity too, so a lesson-only day isn't blank.
  for (const l of lessons) perDay.set(dayKey(l.completedAt), (perDay.get(dayKey(l.completedAt)) ?? 0) + 3);

  const today = startOfDay(new Date());
  // Walk back to the Monday on or before "this week", then forward week by week
  // so every column is a full Mon–Sun and the rows read as weekdays.
  const end = new Date(today);
  end.setDate(end.getDate() + (7 - ((end.getDay() + 6) % 7) - 1)); // → Sunday of this week
  const start = new Date(end);
  start.setDate(start.getDate() - (weeks * 7 - 1));

  const activity: DayCell[] = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const date = new Date(d);
    const key = dayKey(date);
    // Days that haven't happened yet stay at zero rather than being dropped —
    // the grid keeps its shape to the end of the current week.
    activity.push({ key, date, count: date > today ? 0 : (perDay.get(key) ?? 0) });
  }

  /* ── forecast ─────────────────────────────────────────────────────────── */
  const forecast = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(today);
    day.setDate(day.getDate() + i);
    const next = new Date(day);
    next.setDate(next.getDate() + 1);
    // "Due today" includes everything overdue, which is how the review queue behaves.
    const value = cards.filter((c) => (i === 0 ? c.due < next : c.due >= day && c.due < next)).length;
    return {
      label: i === 0 ? "Today" : day.toLocaleDateString("en-GB", { weekday: "short" }),
      value,
      emphasis: i === 0,
    };
  });

  /* ── accuracy ─────────────────────────────────────────────────────────── */
  const byDate = [...lessons].sort((a, b) => a.completedAt.getTime() - b.completedAt.getTime());
  const accuracy = byDate
    .slice(-12)
    .map((l) => Math.round((l.firstAttemptAccuracy ?? 0) * 100))
    .filter((n) => Number.isFinite(n));
  const accuracyAvg = accuracy.length > 0 ? Math.round(accuracy.reduce((s, n) => s + n, 0) / accuracy.length) : null;

  /* ── recent words ─────────────────────────────────────────────────────── */
  const vocabById = new Map(allLessons.flatMap((l) => l.vocab.map((v) => [v.id, v] as const)));
  const recentWords = [...cards]
    .filter((c) => c.kind === "recognition" && c.vocabId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 8)
    .map((c) => {
      const v = c.vocabId ? vocabById.get(c.vocabId) : undefined;
      return { hr: v?.hr ?? c.front, en: v?.en ?? c.back, image: v?.image };
    });

  const todayKey = dayKey(today);

  return {
    activity,
    forecast,
    accuracy,
    accuracyAvg,
    totalReviews: log.length,
    reviewsToday: log.filter((r) => dayKey(r.reviewedAt) === todayKey).length,
    recentWords,
  };
}
