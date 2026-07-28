/**
 * Practice — CroLearn's practice modes as a list: FSRS flashcards, AI targeted
 * drills, AI-graded free writing, and story re-reading. Drills and writing need
 * an API key; flashcards and reading always work.
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
import SlideRenderer from "@/components/SlideRenderer";
import { advance, firstTryAccuracy, initDeck, isRetryPosition, type DeckState } from "@/features/lesson/deckMachine";
import { loadNativProgress, type NativStats } from "@/features/nativ/stats";
import { ACCENT, Banner, BODY2, BtnPrimary, CRVENI, Divider, DoneCard, GREEN, INK, Meta, MUTED, PageHeader, ProgressBar, Tile } from "@/ui/kit";

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
      <div className="mx-auto w-full max-w-[560px]">
        <DoneCard title="Practice set complete">
          <p className="mb-8 text-[15px]" style={{ color: BODY2 }}>
            First-try accuracy: <strong style={{ color: INK }}>{pct}%</strong>
          </p>
          <div className="flex justify-center">
            <BtnPrimary onClick={onExit}>Back to practice</BtnPrimary>
          </div>
        </DoneCard>
      </div>
    );
  }

  const isRetry = isRetryPosition(deck);
  return (
    <div className="mx-auto w-full max-w-[600px]">
      <div className="flex items-center gap-3">
        <button
          onClick={onExit}
          aria-label="Exit practice set"
          className="meta inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-[color:var(--body)]"
          style={{ color: "var(--muted3)" }}
        >
          <X size={12} strokeWidth={2.4} />Exit
        </button>
        <span className="meta ml-auto tabular-nums" style={{ color: MUTED }}>{pos + 1}/{playlist.length}</span>
      </div>
      <ProgressBar pct={(pos / playlist.length) * 100} className="mb-8 mt-3" />
      {isRetry && <Banner color="var(--orange)">Retry — let's get it right!</Banner>}
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
      chip: stats ? (stats.due > 0 ? `${stats.due} due` : "Inbox clear") : "",
      icon: Languages,
      go: () => nav("/review"),
      disabled: false,
      locked: false,
    },
    {
      title: "Targeted drills",
      desc: weakSpots.length ? "AI exercises aimed at your recorded weak spots." : "AI mixed review of your latest unit.",
      chip: !keyPresent ? "Needs key" : generating ? "Generating…" : loadingSpots ? "Checking…" : weakSpots.length ? `${weakSpots.length} weak spots` : "8 exercises",
      icon: Sparkles,
      go: () => void generate(),
      disabled: !keyPresent || generating || loadingSpots,
      locked: !keyPresent,
    },
    {
      title: "Writing",
      desc: "Free writing with AI feedback and corrections.",
      chip: !keyPresent ? "Needs key" : `${tasks.length} tasks`,
      icon: PenLine,
      go: () => setShowWriting((v) => !v),
      disabled: !keyPresent,
      locked: !keyPresent,
    },
    {
      title: "Reading",
      desc: "Re-read graded stories at your level.",
      chip: "Library",
      icon: BookOpen,
      go: () => nav("/stories"),
      disabled: false,
      locked: false,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Practice"
        sub={stats ? (stats.due > 0 ? `${stats.due} cards due today` : "Review inbox is clear") : undefined}
      />

      {!keyPresent && (
        <div className="mt-8">
          <Banner color="var(--orange)">
            AI drills and writing feedback need your Anthropic API key.{" "}
            <Link to="/settings" className="underline">Add it in Settings</Link> — flashcards and reading work without it.
          </Banner>
        </div>
      )}

      <section className="mt-10">
        {kinds.map((p, i) => (
          <div key={p.title}>
            {i > 0 && <Divider />}
            <button
              onClick={p.go}
              disabled={p.disabled}
              className="group flex w-full items-center gap-4 py-4 text-left disabled:opacity-50"
              style={{ cursor: p.disabled ? "default" : undefined }}
            >
              <Tile icon={p.icon} />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>{p.title}</span>
                <span className="block truncate text-[13px]" style={{ color: MUTED }}>{p.desc}</span>
              </span>
              <span className="meta flex flex-none items-center gap-1.5" style={{ color: p.locked ? "var(--orange)" : "var(--muted3)" }}>
                {p.locked && <Lock size={11} />}
                {p.chip}
              </span>
              <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
            </button>
          </div>
        ))}
        {drillError && <p className="mt-3 text-sm" style={{ color: CRVENI }}>{drillError}</p>}
      </section>

      {weakSpots.length > 0 && (
        <section className="mt-14">
          <div className="flex items-baseline justify-between gap-4">
            <Meta>Recommended for you</Meta>
            <Meta style={{ color: "var(--muted3)" }}>from your deck & test history</Meta>
          </div>
          <div className="mt-2 max-h-60 overflow-y-auto">
            {weakSpots.map((s, i) => (
              <div key={i} className="truncate border-b border-[rgba(var(--ink-rgb),.06)] py-2.5 text-sm" style={{ color: BODY2 }}>
                {s.label}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <BtnPrimary onClick={() => void generate()} disabled={!keyPresent || generating}>
              {generating ? "Generating exercises…" : "Generate a practice set"}
            </BtnPrimary>
          </div>
        </section>
      )}

      {(showWriting || grade || gradeError) && tasks.length > 0 && (
        <section className="mt-14">
          <div className="flex items-baseline justify-between gap-4">
            <Meta>Free writing</Meta>
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
          </div>
          <p className="meta mt-4" style={{ color: ACCENT }}>{tasks[taskIdx]?.label}</p>
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
              <p className="text-sm font-semibold" style={{ color: grade.correct ? GREEN : "var(--orange)" }}>Score: {Math.round(grade.score)}/100</p>
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
        </section>
      )}
    </div>
  );
}
