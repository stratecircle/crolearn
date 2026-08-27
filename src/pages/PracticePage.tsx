/**
 * Practice — the practice hub. Four ways to strengthen what the course taught:
 * FSRS flashcards, AI targeted drills, AI-graded free writing, and story
 * re-reading. Drills and writing need an API key; flashcards and reading always
 * work.
 *
 * Desktop shape: the modes as a 2×2 grid of tiles in the main column, with
 * whatever the chosen mode opens (drill runner / writing task) docking directly
 * beneath them, and a rail of real figures — the review forecast, the standing
 * numbers, and the weak spots the AI would aim at.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Languages, Lock, PenLine, Sparkles, X } from "lucide-react";
import type { QuizSlide } from "@/types/content";
import { allUnits, findTest, courseGrounding } from "@/content";
import { aiErrorMessage, gradeFreeForm, generateExercises, hasApiKey, type AiGradeResult } from "@/lib/claude";
import { db, type SrsCard } from "@/lib/db";
import { getLeeches } from "@/lib/srs";
import { stopSpeaking } from "@/lib/tts";
import { useHotkeys } from "@/lib/hotkeys";
import SlideRenderer from "@/components/SlideRenderer";
import { advance, firstTryAccuracy, initDeck, isRetryPosition, type DeckState } from "@/features/lesson/deckMachine";
import { loadNativProgress, type NativStats } from "@/features/nativ/stats";
import { loadInsights, type Insights } from "@/features/nativ/insights";
import { ACCENT, Banner, BODY2, BtnPrimary, Card, CRVENI, DIVIDER, Divider, DoneCard, GREEN, IconBtn, INK, Kbd, MUTED, Panel, ProgressBar, View, ViewBody } from "@/ui/kit";
import { ForecastBars, Hero } from "@/ui/charts";

type WeakSpot = { label: string; focusLine: string };

/**
 * Writing prompts follow the learner: the four most recent units, newest
 * first. B1+ units contribute their real guided WritingTask; earlier units get
 * a themed free-writing prompt built from what the unit taught.
 */
function recentWritingTasks(): { label: string; task: string }[] {
  return allUnits
    .slice(-4)
    .reverse()
    .map((u) => ({
      label: `${u.levelId} · Unit ${u.number} — ${u.title}`,
      task:
        u.test.writing?.task ??
        `Write 4–6 sentences in Croatian about "${u.titleEn}". Use what Unit ${u.number} taught you — and anything from earlier units.`,
    }));
}

function describeTestSlide(testId: string, slideId: string): string | null {
  const test = findTest(testId);
  if (!test) return null;
  const slide = test.sections.flatMap((s) => s.slides).find((s) => s.id === slideId);
  if (!slide) return null;
  switch (slide.type) {
    case "mc":
      return `Missed test question: "${slide.prompt}"${"tts" in slide && slide.tts ? ` (audio: "${slide.tts}")` : ""}`;
    case "fill":
      return `Missed fill-in: "${slide.text}" (answer: ${slide.blanks.map((b) => b[0]).join(", ")})`;
    case "listen-type":
      return `Missed dictation: "${slide.tts}"`;
    case "match":
      return `Missed matching: ${slide.pairs.map((p) => p.a).join(", ")}`;
    default:
      return null;
  }
}

function leechLine(c: SrsCard): string {
  return `Leech card (${c.kind}, lesson ${c.lessonId}): "${c.front}" → "${c.back}"`;
}

/**
 * Same retry semantics as LessonPlayer; nothing persists — extra practice.
 * Lives inside a Panel so the set reads as an object docked under the modes
 * rather than loose slides on the page.
 */
function PracticeRunner({ slides, onExit }: { slides: QuizSlide[]; onExit: () => void }) {
  const [deck, setDeck] = useState<DeckState>(() => initDeck(slides.length));
  const [runId, setRunId] = useState(0);
  const { playlist, pos } = deck;
  const slide = slides[playlist[pos]];

  const onDone = useCallback(
    (correct: boolean) => {
      stopSpeaking();
      setDeck(advance(deck, { slideId: slide.id, isQuiz: true, correct, lastIndex: -1 }));
      setRunId((r) => r + 1);
    },
    [deck, slide],
  );

  useHotkeys({ escape: () => onExit() }, [onExit]);

  if (deck.finished) {
    const pct = Math.round(firstTryAccuracy(deck, slides.length) * 100);
    return (
      <Panel
        title="Practice set"
        right={<span className="meta" style={{ color: GREEN }}>Complete</span>}
        bodyClassName="px-5 pb-2 pt-0"
      >
        <DoneCard title="Practice set complete">
          <p className="mb-8 text-[15px]" style={{ color: BODY2 }}>
            First-try accuracy: <strong style={{ color: INK }}>{pct}%</strong>
          </p>
          <div className="flex justify-center">
            <BtnPrimary onClick={onExit}>Back to practice</BtnPrimary>
          </div>
        </DoneCard>
      </Panel>
    );
  }

  const isRetry = isRetryPosition(deck);
  return (
    <Panel
      title="Practice set"
      right={
        <span className="flex items-center gap-2.5">
          <span className="meta tabular-nums" style={{ color: MUTED }}>{pos + 1}/{playlist.length}</span>
          <Kbd>Esc</Kbd>
          <IconBtn icon={X} label="Exit practice set" onClick={onExit} size={28} />
        </span>
      }
      bodyClassName="px-6 pb-7 pt-5 max-[700px]:px-4"
    >
      <div className="mx-auto w-full max-w-[600px]">
        <ProgressBar pct={(pos / playlist.length) * 100} className="mb-7" />
        {isRetry && <Banner color="var(--orange)">Retry — let's get it right!</Banner>}
        <SlideRenderer key={`${slide.id}-${runId}`} slide={slide} vocab={[]} onDone={onDone} />
      </div>
    </Panel>
  );
}

export default function PracticePage() {
  const nav = useNavigate();
  const keyPresent = hasApiKey();
  const [stats, setStats] = useState<NativStats | null>(null);
  const [ins, setIns] = useState<Insights | null>(null);
  const [reviewedToday, setReviewedToday] = useState<number | null>(null);
  const [weakSpots, setWeakSpots] = useState<WeakSpot[]>([]);
  const [loadingSpots, setLoadingSpots] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [drillError, setDrillError] = useState<string | null>(null);
  const [drill, setDrill] = useState<QuizSlide[] | null>(null);

  const tasks = useMemo(recentWritingTasks, []);
  const [taskIdx, setTaskIdx] = useState(0);
  const [writing, setWriting] = useState("");
  const [grading, setGrading] = useState(false);
  const [gradeError, setGradeError] = useState<string | null>(null);
  const [grade, setGrade] = useState<AiGradeResult | null>(null);
  const [showWriting, setShowWriting] = useState(false);

  useEffect(() => {
    void loadNativProgress().then((p) => setStats(p.stats));
    void loadInsights().then(setIns);
    let cancelled = false;
    void (async () => {
      const spots: WeakSpot[] = [];
      const leeches = await getLeeches();
      for (const c of leeches.slice(0, 10)) spots.push({ label: `${c.front} → ${c.back}`, focusLine: leechLine(c) });
      const results = await db.testResults.toArray();
      const latestByTest = new Map<string, (typeof results)[number]>();
      for (const r of results) {
        const prev = latestByTest.get(r.testId);
        if (!prev || r.takenAt > prev.takenAt) latestByTest.set(r.testId, r);
      }
      for (const r of latestByTest.values()) {
        for (const sid of r.wrongSlideIds) {
          const line = describeTestSlide(r.testId, sid);
          if (line) spots.push({ label: line.replace(/^Missed /, ""), focusLine: line });
        }
      }
      if (!cancelled) {
        setWeakSpots(spots);
        setLoadingSpots(false);
      }
    })();
    // Reviewed-today count for the rail (reviewedAt is indexed).
    void (async () => {
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0);
      const n = await db.reviewLog.where("reviewedAt").aboveOrEqual(midnight).count();
      if (!cancelled) setReviewedToday(n);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const generate = useCallback(async () => {
    setGenerating(true);
    setDrillError(null);
    try {
      const latest = allUnits[allUnits.length - 1];
      const focus = weakSpots.length
        ? weakSpots.map((s) => s.focusLine).join("\n")
        : `No specific weak points recorded — build a varied mixed review of ${latest.levelId} Unit ${latest.number} "${latest.title}" (${latest.theme}), lightly sampling earlier units.`;
      const slides = await generateExercises({ focus, levelContext: courseGrounding({ includeVocab: true }), count: 8 });
      if (!slides.length) throw new Error("empty");
      setDrill(slides.map((s, i) => ({ ...s, id: `p${String(i).padStart(2, "0")}` }) as QuizSlide));
    } catch (e) {
      setDrillError((e as Error).message === "empty" ? "The model returned no usable exercises — try again." : aiErrorMessage(e));
    } finally {
      setGenerating(false);
    }
  }, [weakSpots]);

  const gradeWriting = useCallback(async () => {
    if (!writing.trim()) return;
    setGrading(true);
    setGradeError(null);
    setGrade(null);
    try {
      const result = await gradeFreeForm({
        task: tasks[taskIdx]?.task ?? tasks[0].task,
        learnerAnswer: writing.trim(),
        levelContext: courseGrounding(),
      });
      setGrade(result);
    } catch (e) {
      setGradeError(aiErrorMessage(e));
    } finally {
      setGrading(false);
    }
  }, [writing, tasks, taskIdx]);

  const kinds = [
    {
      title: "Flashcards",
      desc: "Review your due vocabulary with spaced repetition.",
      chip: stats ? (stats.due > 0 ? `${stats.due} due` : "Inbox clear") : "",
      icon: Languages,
      go: () => nav("/review"),
      disabled: false,
      locked: false,
      accent: !!stats && stats.due > 0,
    },
    {
      title: "Targeted drills",
      desc: weakSpots.length ? "AI exercises aimed at your recorded weak spots." : "AI mixed review of your latest unit.",
      chip: !keyPresent ? "Needs key" : generating ? "Generating…" : loadingSpots ? "Checking…" : weakSpots.length ? `${weakSpots.length} weak spots` : "8 exercises",
      icon: Sparkles,
      go: () => void generate(),
      disabled: !keyPresent || generating || loadingSpots,
      locked: !keyPresent,
      accent: generating,
    },
    {
      title: "Writing",
      desc: "Free writing with AI feedback and corrections.",
      chip: !keyPresent ? "Needs key" : `${tasks.length} tasks`,
      icon: PenLine,
      go: () => setShowWriting((v) => !v),
      disabled: !keyPresent,
      locked: !keyPresent,
      accent: showWriting,
    },
    {
      title: "Reading",
      desc: "Re-read graded stories at your level.",
      chip: "Library",
      icon: BookOpen,
      go: () => nav("/stories"),
      disabled: false,
      locked: false,
      accent: false,
    },
  ];

  const railStats: { k: string; v: string }[] = [
    { k: "Reviewed today", v: reviewedToday === null ? "—" : String(reviewedToday) },
    { k: "Minutes today", v: stats ? String(stats.minutesToday) : "—" },
  ];

  const nothingScheduled = !!ins && ins.forecast.every((b) => b.value === 0);

  return (
    <View
      title="Practice"
      sub={stats ? (stats.due > 0 ? `${stats.due} cards due` : "Review inbox is clear") : undefined}
    >
      <ViewBody wide>
        {!keyPresent && (
          <div className="rise rise-1 mb-6">
            <Banner color="var(--orange)">
              AI drills and writing feedback need your Anthropic API key.{" "}
              <Link to="/settings" className="underline">Add it in Settings</Link> — flashcards and reading work without it.
            </Banner>
          </div>
        )}

        <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-8 max-[1080px]:grid-cols-1 max-[1080px]:gap-10">
          {/* ─── main column: the four modes, then whatever they open ──── */}
          <div className="min-w-0">
            <section className="rise rise-2">
              <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
                {kinds.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Card key={p.title} lift={!p.disabled} className={`overflow-hidden ${p.disabled ? "opacity-60" : ""}`}>
                      <button
                        onClick={p.go}
                        disabled={p.disabled}
                        className="group flex h-full w-full flex-col text-left"
                        style={{ cursor: p.disabled ? "default" : undefined }}
                      >
                        <span className="flex flex-1 flex-col gap-3.5 p-5">
                          <span
                            className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px]"
                            style={{ background: p.disabled ? "var(--tint)" : "rgba(var(--primary-rgb),.1)" }}
                          >
                            <Icon size={19} color={p.disabled ? MUTED : ACCENT} strokeWidth={1.9} />
                          </span>
                          <span className="block min-w-0">
                            <span className="block text-[15px] font-semibold" style={{ color: p.disabled ? BODY2 : INK, letterSpacing: "-.01em" }}>
                              {p.title}
                            </span>
                            <span className="mt-1 block truncate text-[13px]" style={{ color: MUTED }}>{p.desc}</span>
                          </span>
                        </span>
                        <span className="flex items-center gap-2 border-t px-5 py-2.5" style={{ borderColor: DIVIDER }}>
                          <span
                            className="meta flex min-w-0 flex-1 items-center gap-1.5 truncate tabular-nums"
                            style={{ color: p.locked ? "var(--orange)" : p.accent ? ACCENT : "var(--muted3)" }}
                          >
                            {p.locked && <Lock size={11} />}
                            {p.chip}
                          </span>
                          <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                        </span>
                      </button>
                    </Card>
                  );
                })}
              </div>
              {drillError && <p className="mt-4 text-sm" style={{ color: CRVENI }}>{drillError}</p>}
            </section>

            {/* The drill runner opens in place, under the tiles it came from. */}
            {drill && (
              <section className="rise rise-3 mt-5">
                <PracticeRunner slides={drill} onExit={() => setDrill(null)} />
              </section>
            )}

            {(showWriting || grade || gradeError) && tasks.length > 0 && (
              <section className="rise rise-3 mt-5">
                <Panel
                  title="Free writing"
                  right={
                    <button
                      onClick={() => {
                        setTaskIdx((i) => (i + 1) % tasks.length);
                        setGrade(null);
                        setGradeError(null);
                      }}
                      className="meta transition-colors duration-100 hover:text-[color:var(--body)]"
                      style={{ color: "var(--muted3)" }}
                    >
                      Another task
                    </button>
                  }
                  bodyClassName="p-5 max-[700px]:p-4"
                >
                  <p className="meta" style={{ color: ACCENT }}>{tasks[taskIdx]?.label}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: INK }}>{tasks[taskIdx]?.task}</p>
                  <textarea
                    value={writing}
                    onChange={(e) => setWriting(e.target.value)}
                    rows={5}
                    placeholder="Write your answer in Croatian…"
                    className="mt-4 w-full rounded-[10px] border bg-[color:var(--card)] p-3.5 text-[15px] leading-relaxed outline-none transition-colors duration-150 focus:border-[color:var(--primary)]"
                    style={{ borderColor: "rgba(var(--ink-rgb),.14)", color: INK }}
                  />
                  <div className="mt-3">
                    <BtnPrimary onClick={() => void gradeWriting()} disabled={!keyPresent || grading || !writing.trim()}>
                      {grading ? "Grading…" : "Grade my writing"}
                    </BtnPrimary>
                  </div>
                  {gradeError && <p className="mt-3 text-sm" style={{ color: CRVENI }}>{gradeError}</p>}
                  {grade && (
                    <div className="mt-5 rounded-[10px] p-4" style={{ background: grade.correct ? "rgba(var(--green-rgb),.07)" : "rgba(var(--orange-rgb),.08)" }}>
                      <p className="text-sm font-semibold tabular-nums" style={{ color: grade.correct ? GREEN : "var(--orange)" }}>Score: {Math.round(grade.score)}/100</p>
                      <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: BODY2 }}>{grade.feedback}</p>
                      {grade.corrected_text.trim() && grade.corrected_text.trim() !== writing.trim() && (
                        <p className="mt-2.5 text-[15px]" style={{ color: INK }}>
                          <span className="font-semibold">Corrected:</span> {grade.corrected_text}
                        </p>
                      )}
                      {grade.errors.length > 0 && (
                        <ul className="mt-3 divide-y divide-[rgba(var(--ink-rgb),.07)] text-sm">
                          {grade.errors.map((err, i) => (
                            <li key={i} className="py-2" style={{ color: BODY2 }}>
                              <span className="meta mr-2" style={{ color: MUTED }}>{err.type}</span>
                              {err.explanation}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </Panel>
              </section>
            )}
          </div>

          {/* ─── right rail: the figures behind the modes ─────────────── */}
          <aside className="rise rise-4 min-w-0 space-y-5">
            <Panel
              title="Review forecast"
              right={
                <span className="meta tabular-nums" style={{ color: stats && stats.due > 0 ? ACCENT : "var(--muted3)" }}>
                  {stats ? `${stats.due} due` : ""}
                </span>
              }
            >
              {ins ? <ForecastBars bars={ins.forecast} height={80} /> : <div style={{ height: 106 }} />}
              {nothingScheduled && (
                <p className="mt-3 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                  Nothing scheduled this week — cards arrive as you finish lessons.
                </p>
              )}
            </Panel>

            <Panel title="Standing">
              <Hero value={stats ? String(stats.due) : "—"} label="Cards due" />
              <dl className="mt-4 border-t pt-1" style={{ borderColor: DIVIDER }}>
                {railStats.map((row, i) => (
                  <div key={row.k}>
                    {i > 0 && <Divider />}
                    <div className="flex items-baseline justify-between gap-3 py-2.5">
                      <dt className="text-[13px]" style={{ color: BODY2 }}>{row.k}</dt>
                      <dd className="text-[13px] font-semibold tabular-nums" style={{ color: INK }}>{row.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Panel>

            <Panel
              title="Weak spots"
              right={
                <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                  {loadingSpots ? "" : weakSpots.length > 0 ? String(weakSpots.length) : ""}
                </span>
              }
              bodyClassName="px-5 py-1"
            >
              {loadingSpots ? (
                <p className="py-3 text-[13px]" style={{ color: MUTED }}>Checking your deck…</p>
              ) : weakSpots.length === 0 ? (
                <p className="py-3 text-[13px] leading-relaxed" style={{ color: MUTED }}>
                  Nothing flagged. Leeches and missed test questions collect here — the drills aim at them first.
                </p>
              ) : (
                <>
                  <div className="nativ-noscrollbar max-h-64 overflow-y-auto">
                    {weakSpots.map((s, i) => (
                      <div key={i}>
                        {i > 0 && <Divider />}
                        <div className="truncate py-2.5 text-[13px]" style={{ color: BODY2 }} title={s.label}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t py-3" style={{ borderColor: DIVIDER }}>
                    <p className="meta" style={{ color: "var(--muted3)" }}>from your deck &amp; test history</p>
                    <button
                      onClick={() => void generate()}
                      disabled={!keyPresent || generating}
                      className="meta mt-2.5 text-left transition-colors duration-100 hover:text-[color:var(--body)] disabled:opacity-40"
                      style={{ color: ACCENT }}
                    >
                      {generating ? "Generating exercises…" : "Generate a practice set →"}
                    </button>
                  </div>
                </>
              )}
            </Panel>
          </aside>
        </div>
      </ViewBody>
    </View>
  );
}
