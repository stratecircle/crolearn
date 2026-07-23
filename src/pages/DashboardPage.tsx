import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { levels, path, type PathStep } from "@/content";
import { db } from "@/lib/db";
import { countDue } from "@/lib/srs";

interface Progress {
  due: number;
  completedLessons: Set<string>;
  completedStories: Set<string>;
  passedTests: Set<string>;
  passedCheckpoints: Set<string>;
  streak: number;
}

async function loadProgress(): Promise<Progress> {
  const [due, lessons, stories, tests, checkpoints, log] = await Promise.all([
    countDue(),
    db.lessonProgress.toArray(),
    db.storyProgress.toArray(),
    db.testResults.where("takenAt").above(new Date(0)).toArray(),
    db.checkpointResults.toArray(),
    db.reviewLog.orderBy("reviewedAt").reverse().limit(2000).toArray(),
  ]);
  // Streak: consecutive days (ending today or yesterday) with any activity.
  const activeDays = new Set<string>([
    ...lessons.map((l) => l.completedAt.toDateString()),
    ...log.map((r) => r.reviewedAt.toDateString()),
  ]);
  let streak = 0;
  const day = new Date();
  if (!activeDays.has(day.toDateString())) day.setDate(day.getDate() - 1);
  while (activeDays.has(day.toDateString())) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return {
    due,
    completedLessons: new Set(lessons.map((l) => l.lessonId)),
    completedStories: new Set(stories.map((s) => s.storyId)),
    passedTests: new Set(tests.filter((t) => t.passed).map((t) => t.testId)),
    passedCheckpoints: new Set(checkpoints.filter((c) => c.passed).map((c) => c.checkpointId)),
    streak,
  };
}

function stepDone(step: PathStep, p: Progress): boolean {
  if (step.kind === "lesson") return p.completedLessons.has(step.id);
  if (step.kind === "test") return p.passedTests.has(step.id);
  if (step.kind === "checkpoint") return p.passedCheckpoints.has(step.id);
  // Stories check off after one read-through (and stay re-readable).
  return p.completedStories.has(step.id);
}

function stepLink(step: PathStep): string {
  return step.kind === "lesson"
    ? `/lesson/${step.id}`
    : step.kind === "story"
      ? `/story/${step.id}`
      : step.kind === "checkpoint"
        ? `/checkpoint/${step.id}`
        : `/test/${step.id}`;
}

const STEP_EMOJI = { lesson: "📖", story: "📜", test: "🏁", checkpoint: "🎓" } as const;

export default function DashboardPage() {
  const [p, setP] = useState<Progress | null>(null);
  useEffect(() => {
    void loadProgress().then(setP);
  }, []);
  if (!p) return <p className="py-10 text-center text-stone-400">Loading…</p>;

  // Next step = first not-done step on the path (stories count as "next" once,
  // then stay re-readable without ever blocking the path).
  const next = path.find((s) => !stepDone(s, p)) ?? null;
  const strengthenOptions = [
    { to: "/review", label: "🃏 Extra review" },
    { to: "/stories", label: "📖 Read a story" },
    { to: "/notes", label: "📓 Study your notes" },
  ];
  const strengthen = strengthenOptions[new Date().getDate() % strengthenOptions.length];

  return (
    <div>
      {/* Today's session — the guided front door (§9) */}
      <section className="rounded-2xl bg-stone-900 p-5 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-black">Today's session</h1>
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold">🔥 {p.streak}-day streak</span>
        </div>
        <ol className="mt-4 grid gap-2">
          <li>
            <Link
              to="/review"
              className={`flex items-center justify-between rounded-xl px-4 py-3 font-bold ${
                p.due > 0 ? "bg-white text-stone-900 hover:bg-stone-200" : "bg-white/10 text-white/60"
              }`}
            >
              <span>① Review</span>
              <span>{p.due > 0 ? `${p.due} cards →` : "nothing due ✓"}</span>
            </Link>
          </li>
          <li>
            {next ? (
              <Link
                to={stepLink(next)}
                className="flex items-center justify-between rounded-xl bg-green-500 px-4 py-3 font-bold text-white hover:bg-green-400"
              >
                <span>② Learn: {STEP_EMOJI[next.kind]} {next.title}</span>
                <span>→</span>
              </Link>
            ) : (
              <span className="flex rounded-xl bg-white/10 px-4 py-3 font-bold text-white/60">
                ② All available lessons complete! 🎓
              </span>
            )}
          </li>
          <li>
            <Link
              to={strengthen.to}
              className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 font-bold hover:bg-white/20"
            >
              <span>③ Strengthen: {strengthen.label}</span>
              <span>→</span>
            </Link>
          </li>
        </ol>
      </section>

      {/* The path */}
      {levels.map((level) =>
        level.units.length === 0 ? (
          <section key={level.id} className="mt-8 opacity-50">
            <h2 className="text-xl font-black">🔒 {level.title}</h2>
            <p className="text-sm text-stone-500">Coming later — the path is built in order.</p>
          </section>
        ) : (
          <section key={level.id} className="mt-8">
            <h2 className="text-xl font-black">{level.title}</h2>
            {level.units.map((unit) => {
              const steps = path.filter((s) => s.unitId === unit.id);
              return (
                <div key={unit.id} className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
                  <h3 className="font-black">
                    {unit.number}. {unit.title}{" "}
                    <span className="font-normal text-stone-400">— {unit.titleEn}</span>
                  </h3>
                  <ol className="mt-3 grid gap-1.5">
                    {steps.map((step, i) => {
                      const done = stepDone(step, p);
                      const prevDone = i === 0 || steps.slice(0, i).every((s) => s.kind === "story" || stepDone(s, p));
                      const isNext = step.id === next?.id;
                      const locked = !done && !prevDone && !isNext;
                      return (
                        <li key={step.id}>
                          <Link
                            to={stepLink(step)}
                            aria-disabled={locked}
                            onClick={(e) => locked && e.preventDefault()}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 font-semibold ${
                              done
                                ? "text-green-700"
                                : isNext
                                  ? "bg-green-50 ring-2 ring-green-500"
                                  : locked
                                    ? "text-stone-300"
                                    : "hover:bg-stone-100"
                            }`}
                          >
                            <span>{done ? "✅" : locked ? "🔒" : STEP_EMOJI[step.kind]}</span>
                            <span>{step.title}</span>
                            {isNext && <span className="ml-auto text-xs font-black text-green-600">NEXT</span>}
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
          </section>
        ),
      )}
    </div>
  );
}
