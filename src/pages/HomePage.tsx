/**
 * Home — the dashboard. Everything on it is derived from real local data: the
 * heatmap from the review log, the forecast from card due dates, the accuracy
 * trend from first-try lesson scores, the word strip from the actual images
 * bundled with the vocabulary. Nothing is padding.
 *
 * ⏎ starts the next step, so the common case never needs the mouse.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Check, ClipboardCheck, Flame, GraduationCap } from "lucide-react";
import { path } from "@/content";
import { useHotkeys } from "@/lib/hotkeys";
import { ACCENT, BODY2, BtnPrimary, Card, Divider, GREEN, INK, Kbd, Meta, MUTED, Panel, View, ViewBody } from "@/ui/kit";
import { ActivityHeatmap, ForecastBars, Hero, Sparkline } from "@/ui/charts";
import { loadNativProgress, stepDone, stepLink, type NativProgress } from "@/features/nativ/stats";
import { loadInsights, type Insights } from "@/features/nativ/insights";
import type { PathStep } from "@/content";

const KIND_LABEL: Record<PathStep["kind"], string> = {
  lesson: "Next lesson",
  story: "Next up — story",
  test: "Next up — unit test",
  checkpoint: "Next up — checkpoint exam",
};

const KIND_ICON = {
  lesson: GraduationCap,
  story: BookOpen,
  test: ClipboardCheck,
  checkpoint: ClipboardCheck,
} as const;

const KIND_NOUN: Record<PathStep["kind"], string> = {
  lesson: "Lesson",
  story: "Story",
  test: "Unit test",
  checkpoint: "Checkpoint",
};

function greeting(): string {
  const h = new Date().getHours();
  if (h < 5) return "Bok";
  if (h < 12) return "Dobro jutro";
  if (h < 18) return "Dobar dan";
  return "Dobra večer";
}

export default function HomePage() {
  const nav = useNavigate();
  const [p, setP] = useState<NativProgress | null>(null);
  const [ins, setIns] = useState<Insights | null>(null);

  useEffect(() => {
    void loadNativProgress().then(setP);
    void loadInsights().then(setIns);
  }, []);

  useHotkeys(
    {
      enter: () => {
        if (p?.next) nav(stepLink(p.next));
      },
    },
    [p, nav],
  );

  if (!p) return <View title="Home"><ViewBody wide><span /></ViewBody></View>;

  const s = p.stats;
  const steps = [
    {
      label: "Review",
      sub: s.due > 0 ? `${s.due} card${s.due === 1 ? "" : "s"} due` : "Nothing due — inbox clear",
      done: s.due === 0,
      to: "/review",
    },
    {
      label: "Learn",
      sub: p.next ? p.next.title : "Course complete",
      done: !p.next,
      to: p.next ? stepLink(p.next) : "/stories",
    },
    { label: "Strengthen", sub: "A drill, a story or some writing", done: false, to: "/practice" },
  ];

  const upcoming = p.next ? path.filter((st) => !stepDone(st, p)).slice(1, 5) : [];
  const level = p.levels.find((l) => l.code === p.currentLevel);
  const levelPct = level && level.total > 0 ? Math.round((level.done / level.total) * 100) : 0;
  const NextIcon = p.next ? KIND_ICON[p.next.kind] : GraduationCap;

  return (
    <View title="Home" sub={new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}>
      <ViewBody wide>
        <h2 className="rise rise-1 text-[28px] font-bold" style={{ color: INK, letterSpacing: "-.03em" }}>
          {greeting()}, Noah.
        </h2>

        {/* ── the one primary action, as a real object ───────────────────── */}
        <Card className="rise rise-2 mt-6 overflow-hidden">
          <div className="flex items-center gap-5 p-6 max-[700px]:flex-col max-[700px]:items-start">
            <div
              className="flex h-12 w-12 flex-none items-center justify-center rounded-xl"
              style={{ background: "rgba(var(--primary-rgb),.1)" }}
            >
              <NextIcon size={22} color={ACCENT} strokeWidth={1.9} />
            </div>
            <div className="min-w-0 flex-1">
              <Meta className="mb-1.5">{p.next ? KIND_LABEL[p.next.kind] : "Course"}</Meta>
              <div className="text-[19px] font-bold leading-tight" style={{ color: INK, letterSpacing: "-.02em" }}>
                {p.next ? p.next.title : "Everything built so far is done."}
              </div>
              <div className="mt-1 text-[13.5px]" style={{ color: BODY2 }}>
                {p.next ? (
                  <>
                    {p.nextLesson?.unitLabel}
                    {p.nextLesson?.titleEn && <> · {p.nextLesson.titleEn}</>}
                    {p.nextLesson?.estMinutes && <> · about {p.nextLesson.estMinutes} min</>}
                  </>
                ) : (
                  "Review keeps it fresh while the course grows."
                )}
              </div>
            </div>
            <div className="flex flex-none items-center gap-2.5">
              <BtnPrimary icon={ArrowRight} onClick={() => nav(p.next ? stepLink(p.next) : "/review")}>
                {!p.next ? "Review" : p.next.kind === "lesson" ? "Continue" : p.next.kind === "story" ? "Read" : "Start"}
              </BtnPrimary>
              <span className="max-[700px]:hidden"><Kbd>Enter</Kbd></span>
            </div>
          </div>
          {level && level.total > 0 && (
            <div className="flex items-center gap-3 border-t px-6 py-3" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
              <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{level.code}</span>
              <span className="h-[3px] min-w-0 flex-1 overflow-hidden rounded-full" style={{ background: "rgba(var(--ink-rgb),.08)" }}>
                <span className="block h-full rounded-full" style={{ width: `${levelPct}%`, background: ACCENT, transition: "width 600ms cubic-bezier(.22,.68,.3,1)" }} />
              </span>
              <span className="meta flex-none tabular-nums" style={{ color: MUTED }}>{level.done}/{level.total} lessons</span>
            </div>
          )}
        </Card>

        {/* ── figures ────────────────────────────────────────────────────── */}
        <div className="rise rise-3 mt-5 grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-5 max-[1000px]:grid-cols-1">
          <Panel title="Study activity" right={<span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{ins ? `${ins.totalReviews} reviews` : ""}</span>}>
            <div className="flex items-start gap-8 max-[1240px]:flex-col max-[1240px]:gap-5">
              <div className="flex-none">
                <Hero
                  value={String(s.dayStreak)}
                  unit={s.dayStreak === 1 ? "day" : "days"}
                  label="Current streak"
                  sub={<span className="flex items-center gap-1.5"><Flame size={13} color={s.dayStreak > 0 ? ACCENT : MUTED} />Longest {s.longestStreak}</span>}
                />
              </div>
              <div className="nativ-noscrollbar min-w-0 overflow-x-auto">
                {ins ? <ActivityHeatmap days={ins.activity} /> : <div style={{ height: 116 }} />}
              </div>
            </div>
          </Panel>

          <Panel title="Review forecast" right={<span className="meta tabular-nums" style={{ color: s.due > 0 ? ACCENT : "var(--muted3)" }}>{s.due} due</span>}>
            {ins ? <ForecastBars bars={ins.forecast} /> : <div style={{ height: 118 }} />}
          </Panel>
        </div>

        {/* ── session + accuracy ─────────────────────────────────────────── */}
        <div className="rise rise-4 mt-5 grid grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-5 max-[1000px]:grid-cols-1">
          <Panel title="Today's session" right={<span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{s.minutesToday} min</span>} bodyClassName="px-5 py-1">
            {steps.map((st, i) => (
              <div key={st.label}>
                {i > 0 && <Divider />}
                <button onClick={() => nav(st.to)} className="group flex w-full items-center gap-4 py-3.5 text-left">
                  <span
                    className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border transition-colors duration-150"
                    style={st.done ? { background: GREEN, borderColor: GREEN } : { borderColor: "rgba(var(--ink-rgb),.22)" }}
                  >
                    {st.done && <Check size={11} color="#fff" strokeWidth={3} />}
                  </span>
                  <span className="w-24 flex-none text-sm font-semibold" style={{ color: INK }}>{st.label}</span>
                  <span className="min-w-0 flex-1 truncate text-sm" style={{ color: st.done ? MUTED : BODY2 }}>{st.sub}</span>
                  <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                </button>
              </div>
            ))}
          </Panel>

          <Panel title="First-try accuracy">
            {ins && ins.accuracyAvg !== null ? (
              <div className="flex items-end justify-between gap-4">
                <Hero value={`${ins.accuracyAvg}%`} label="Last 12 lessons" sub={`${s.wordsLearned} words in your deck`} />
                <div className="flex-none pb-1"><Sparkline points={ins.accuracy} /></div>
              </div>
            ) : (
              <div className="py-2">
                <Hero value={String(s.wordsLearned)} label="Words in your deck" sub="Accuracy appears once you've finished a lesson." />
              </div>
            )}
          </Panel>
        </div>

        {/* ── recently learned, with the pictures they were taught with ──── */}
        {ins && ins.recentWords.length > 0 && (
          <Panel className="rise rise-5 mt-5" title="Recently learned" right={<button onClick={() => nav("/review")} className="meta transition-colors duration-100 hover:text-[color:var(--body)]" style={{ color: "var(--muted3)" }}>Review →</button>}>
            <div className="grid grid-cols-8 gap-3 max-[1100px]:grid-cols-6 max-[800px]:grid-cols-4">
              {ins.recentWords.map((w) => (
                <div key={w.hr} className="min-w-0">
                  <div
                    className="flex aspect-square items-center justify-center overflow-hidden rounded-lg"
                    style={{ background: "var(--tint)" }}
                  >
                    {w.image ? (
                      <img src={w.image} alt="" className="h-full w-full object-contain p-1.5" />
                    ) : (
                      <span className="text-lg font-bold" style={{ color: "rgba(var(--ink-rgb),.2)" }}>{w.hr.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="mt-1.5 truncate text-[13px] font-semibold" style={{ color: INK }}>{w.hr}</div>
                  <div className="truncate text-[12px]" style={{ color: MUTED }}>{w.en}</div>
                </div>
              ))}
            </div>
          </Panel>
        )}

        {/* ── what follows ───────────────────────────────────────────────── */}
        {upcoming.length > 0 && (
          <Panel className="rise rise-5 mt-5" title="Then" bodyClassName="px-5 py-1">
            {upcoming.map((st, i) => {
              const Icon = KIND_ICON[st.kind];
              return (
                <div key={st.id}>
                  {i > 0 && <Divider />}
                  <button onClick={() => nav(stepLink(st))} className="group flex w-full items-center gap-4 py-3 text-left">
                    <Icon size={14} color="var(--muted3)" strokeWidth={1.9} className="flex-none" />
                    <span className="min-w-0 flex-1 truncate text-sm" style={{ color: BODY2 }}>{st.title}</span>
                    <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{KIND_NOUN[st.kind]}</span>
                  </button>
                </div>
              );
            })}
          </Panel>
        )}
      </ViewBody>
    </View>
  );
}
