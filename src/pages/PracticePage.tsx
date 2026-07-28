/**
 * Practice — Nativ practice screen (README §Screens 6) over CroLearn's real
 * practice modes: FSRS flashcards, AI targeted drills, AI-graded free writing,
 * and story re-reading. Design's Listening/Mixed tiles have no separate
 * backend mode → hidden (adjust-if-absent); their skills live inside drills.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Flame, Languages, Lock, PenLine, Sparkles, Star, Target, X } from "lucide-react";
import type { QuizSlide } from "@/types/content";
import { allUnits, findTest, courseGrounding } from "@/content";
import { aiErrorMessage, gradeFreeForm, generateExercises, hasApiKey, type AiGradeResult } from "@/lib/claude";
import { db, type SrsCard } from "@/lib/db";
import { getLeeches } from "@/lib/srs";
import { stopSpeaking } from "@/lib/tts";
import SlideRenderer from "@/components/SlideRenderer";
import { advance, firstTryAccuracy, initDeck, isRetryPosition, type DeckState } from "@/features/lesson/deckMachine";
import { loadNativProgress, type NativStats } from "@/features/nativ/stats";
import { BODY2, BtnPrimary, Card, CardH, Chip, GREEN, H, INK, MUTED, ProgressBar, RED, SectionTitle, StatChip, StatRow, Tile, tint } from "@/ui/kit";

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

/** Same retry semantics as LessonPlayer; nothing persists — extra practice. */
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

  if (deck.finished) {
    const pct = Math.round(firstTryAccuracy(deck, slides.length) * 100);
    return (
      <div className="mx-auto max-w-[780px] rounded-[10px] border bg-[color:var(--card)] px-12 py-14 text-center" style={{ borderColor: "rgba(var(--ink-rgb),.14)", boxShadow: "none" }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 38, color: INK }}>Practice set complete</div>
        <p className="mt-3 text-[17px]" style={{ color: BODY2 }}>
          First-try accuracy: <strong style={{ color: INK }}>{pct}%</strong>
        </p>
        <div className="mt-8 flex justify-center">
          <BtnPrimary onClick={onExit}>Back to practice</BtnPrimary>
        </div>
      </div>
    );
  }

  const isRetry = isRetryPosition(deck);
  return (
    <div className="mx-auto max-w-[840px]">
      <div className="mb-3 flex items-center gap-4">
        <button
          onClick={onExit}
          aria-label="Exit practice set"
          className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border bg-[color:var(--card)] transition-colors duration-[180ms] hover:bg-[color:var(--tint)]"
          style={{ borderColor: "rgba(var(--ink-rgb),.18)" }}
        >
          <X size={18} color={BODY2} />
        </button>
        <ProgressBar pct={(pos / playlist.length) * 100} color={RED} height={8} className="flex-1" />
        <span className="text-sm" style={{ color: BODY2 }}>{pos + 1}/{playlist.length}</span>
      </div>
      {isRetry && (
        <p className="mb-3 rounded-lg px-3.5 py-2 text-sm font-semibold" style={{ background: tint("var(--orange)", 0.12), color: "var(--brown2)" }}>
          Retry — let's get it right!
        </p>
      )}
      <SlideRenderer key={`${slide.id}-${runId}`} slide={slide} vocab={[]} onDone={onDone} />
    </div>
  );
}

export default function PracticePage() {
  const nav = useNavigate();
  const keyPresent = hasApiKey();
  const [stats, setStats] = useState<NativStats | null>(null);
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

  if (drill) {
    return <PracticeRunner slides={drill} onExit={() => setDrill(null)} />;
  }

  const kinds = [
    {
      title: "Flashcards",
      desc: "Review your due vocabulary with spaced repetition.",
      chip: stats ? (stats.due > 0 ? `${stats.due} cards due` : "Inbox clear") : "Counting…",
      icon: Languages,
      color: "var(--blue)",
      go: () => nav("/review"),
      disabled: false,
      locked: false,
    },
    {
      title: "Targeted drills",
      desc: weakSpots.length ? "AI exercises aimed at your recorded weak spots." : "AI mixed review of your latest unit.",
      chip: !keyPresent ? "Needs API key" : loadingSpots ? "Checking history…" : weakSpots.length ? `${weakSpots.length} weak spots` : "8 exercises",
      icon: Sparkles,
      color: "var(--orange)",
      go: () => void generate(),
      disabled: !keyPresent || generating || loadingSpots,
      locked: !keyPresent,
    },
    {
      title: "Writing",
      desc: "Free writing with AI feedback and corrections.",
      chip: !keyPresent ? "Needs API key" : `${tasks.length} tasks`,
      icon: PenLine,
      color: "var(--violet)",
      go: () => setShowWriting((v) => !v),
      disabled: !keyPresent,
      locked: !keyPresent,
    },
    {
      title: "Reading",
      desc: "Re-read graded stories at your level.",
      chip: "Story library",
      icon: BookOpen,
      color: "var(--green)",
      go: () => nav("/stories"),
      disabled: false,
      locked: false,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <H size={26} className="mb-5">Practice</H>
        {stats && (
          <StatRow className="gap-[34px]">
            <StatChip big icon={Target} color={INK} value={String(stats.dayStreak)} label="Day streak" />
            <StatChip big icon={Flame} color={RED} value={String(stats.longestStreak)} label="Longest streak" />
            <StatChip big icon={Star} color="var(--blue)" value={String(stats.wordsLearned)} label="Words learned" />
            {stats.timePracticed && <StatChip big icon={Clock} color={GREEN} value={stats.timePracticed} label="Time practiced" />}
          </StatRow>
        )}
      </div>

      {!keyPresent && (
        <div className="mb-6 rounded-lg px-4 py-3.5 text-sm" style={{ background: tint("var(--orange)", 0.1), color: "var(--brown)" }}>
          AI drills and writing feedback need your Anthropic API key.{" "}
          <Link to="/settings" className="font-semibold underline" style={{ color: "var(--brown)" }}>Add it in Settings →</Link>{" "}
          Flashcards and reading work without it.
        </div>
      )}

      <Card className="mb-7 p-[30px]">
        <CardH className="mb-[22px]">Choose your practice</CardH>
        <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
          {kinds.map((p) => (
            <button
              key={p.title}
              onClick={p.go}
              disabled={p.disabled}
              className="flex flex-col rounded-[10px] border bg-[color:var(--card)] p-6 text-left transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_6px_16px_rgba(var(--shadow-rgb),.08)] disabled:hover:translate-y-0 disabled:hover:shadow-none"
              style={{ borderColor: "rgba(var(--ink-rgb),.14)", cursor: p.disabled ? "default" : undefined }}
            >
              <Tile icon={p.icon} color={p.color} size={54} radius={14} iconSize={24} />
              <div className="mb-2 mt-[18px]" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 18, color: INK }}>{p.title}</div>
              <div className="mb-[18px] text-sm leading-normal" style={{ color: BODY2 }}>{p.desc}</div>
              {p.locked ? (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: tint("var(--orange)", 0.12), color: "var(--brown)" }}>
                  <Lock size={12} />{p.chip}
                </span>
              ) : (
                <Chip color={p.color}>{p.title === "Targeted drills" && generating ? "Generating…" : p.chip}</Chip>
              )}
              <div className="mt-[18px] flex w-full justify-end">
                <ArrowRight size={18} color={p.disabled ? "var(--muted3)" : MUTED} />
              </div>
            </button>
          ))}
        </div>
        {drillError && <p className="mt-4 text-sm font-semibold" style={{ color: RED }}>{drillError}</p>}
      </Card>

      {weakSpots.length > 0 && (
        <>
          <SectionTitle className="mb-[18px]" right="from your review deck and test history">Recommended for you</SectionTitle>
          <Card className="mb-7 p-6">
            <div className="grid max-h-56 gap-1.5 overflow-y-auto">
              {weakSpots.map((s, i) => (
                <div key={i} className="truncate rounded-lg px-3.5 py-2 text-sm" style={{ background: "rgba(var(--ink-rgb),.03)", color: BODY2 }}>
                  {s.label}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <BtnPrimary onClick={() => void generate()} disabled={!keyPresent || generating}>
                {generating ? "Generating exercises…" : "Generate a practice set (8 exercises)"}
              </BtnPrimary>
            </div>
          </Card>
        </>
      )}

      {(showWriting || grade || gradeError) && tasks.length > 0 && (
        <Card className="p-[30px]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <CardH>Free writing</CardH>
            <button
              onClick={() => {
                setTaskIdx((i) => (i + 1) % tasks.length);
                setGrade(null);
                setGradeError(null);
              }}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-[180ms] hover:bg-[rgba(var(--ink-rgb),.04)]"
              style={{ color: BODY2 }}
            >
              Another task
            </button>
          </div>
          <div className="mb-3.5 rounded-lg px-4 py-3" style={{ background: "rgba(var(--ink-rgb),.03)" }}>
            <p className="mb-1 text-xs font-semibold" style={{ color: MUTED, letterSpacing: ".08em" }}>{tasks[taskIdx]?.label.toUpperCase()}</p>
            <p className="text-sm" style={{ color: INK }}>{tasks[taskIdx]?.task}</p>
          </div>
          <textarea
            value={writing}
            onChange={(e) => setWriting(e.target.value)}
            rows={4}
            placeholder="Write your answer in Croatian…"
            className="w-full rounded-lg border bg-[color:var(--card)] p-4 text-[15px] outline-none transition-colors duration-150"
            style={{ borderColor: "rgba(var(--ink-rgb),.14)", color: INK }}
          />
          <div className="mt-3">
            <BtnPrimary onClick={() => void gradeWriting()} disabled={!keyPresent || grading || !writing.trim()}>
              {grading ? "Grading…" : "Grade my writing"}
            </BtnPrimary>
          </div>
          {gradeError && <p className="mt-3 text-sm font-semibold" style={{ color: RED }}>{gradeError}</p>}
          {grade && (
            <div className="mt-5 rounded-lg p-5" style={{ background: grade.correct ? tint(GREEN, 0.07) : tint("var(--orange)", 0.08) }}>
              <p className="font-semibold" style={{ color: INK }}>Score: {Math.round(grade.score)}/100</p>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: BODY2 }}>{grade.feedback}</p>
              {grade.corrected_text.trim() && grade.corrected_text.trim() !== writing.trim() && (
                <p className="mt-2.5 text-sm" style={{ color: INK }}>
                  <span className="font-semibold">Corrected:</span> {grade.corrected_text}
                </p>
              )}
              {grade.errors.length > 0 && (
                <ul className="mt-2.5 space-y-1.5 text-sm" style={{ color: BODY2 }}>
                  {grade.errors.map((err, i) => (
                    <li key={i}>
                      <span className="rounded bg-[color:var(--card)] px-1.5 py-0.5 text-xs font-semibold" style={{ color: INK }}>{err.type}</span>{" "}
                      {err.explanation}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
