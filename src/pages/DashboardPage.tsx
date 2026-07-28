/**
 * Path — the Nativ home screen (design_handoff_nativ_app README §Screens 1),
 * wired to real CroLearn data. Absent-data rule: sections we can't honestly
 * feed (milestone carousel beyond derived ones, marketing imagery) are hidden.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Bookmark, Check, Clock, Flag, Flame, Layers, Lock, Star, Target } from "lucide-react";
import { BODY2, BtnPrimary, Card, CardH, Eyebrow, H, INK, MUTED, ProgressBar, Ring, StatChip, StatRow, Tile, tint } from "@/ui/kit";
import { loadNativProgress, stepDone, stepLink, type NativProgress } from "@/features/nativ/stats";

export default function DashboardPage() {
  const nav = useNavigate();
  const [p, setP] = useState<NativProgress | null>(null);
  const [sel, setSel] = useState<string | null>(null);
  useEffect(() => {
    void loadNativProgress().then(setP);
  }, []);
  if (!p) return <p className="py-10 text-center" style={{ color: MUTED }}>Loading…</p>;

  const s = p.stats;
  const selCode = sel ?? p.currentLevel;
  const lv = p.levels.find((l) => l.code === selCode) ?? p.levels[0];
  const lvPct = lv.total > 0 ? Math.round((lv.done / lv.total) * 100) : 0;

  // Derived milestones — real targets on the actual course path.
  const curLevel = p.levels.find((l) => l.code === p.currentLevel);
  const curUnit = curLevel?.units.find((u) => u.done < u.total);
  const milestones = [
    curUnit && { title: `Unit ${curUnit.number} — ${curUnit.title}`, sub: "Finish every step of the unit", icon: BookOpen, color: "#C93434", pct: (curUnit.done / curUnit.total) * 100, count: `${curUnit.done} / ${curUnit.total}` },
    curLevel && curLevel.total > 0 && { title: `${curLevel.code} completed`, sub: `Finish the ${curLevel.code} level`, icon: Flag, color: "#8B6FC9", pct: (curLevel.done / curLevel.total) * 100, count: `${curLevel.done} / ${curLevel.total}` },
    { title: "7-day streak", sub: "Keep studying every day", icon: Star, color: "#3B6FD4", pct: Math.min(100, (s.dayStreak / 7) * 100), count: `${Math.min(s.dayStreak, 7)} / 7` },
    { title: "Review inbox zero", sub: "Clear today's due cards", icon: Layers, color: "#2F7D53", pct: s.due === 0 ? 100 : 0, count: s.due === 0 ? "done" : `${s.due} due` },
  ].filter(Boolean) as { title: string; sub: string; icon: typeof Flag; color: string; pct: number; count: string }[];

  return (
    <div>
      {/* Greeting + stat chips */}
      <div className="mb-5 flex items-start justify-between gap-7 max-[700px]:flex-wrap">
        <div>
          <H size={26} className="mb-1">Dobro došli, Noah.</H>
          <p className="text-sm" style={{ color: MUTED }}>Let's continue your Croatian journey.</p>
        </div>
        <StatRow className="pt-1 max-[700px]:w-full max-[700px]:pt-0">
          <StatChip icon={Target} color={INK} value={String(s.dayStreak)} label="Day streak" />
          <StatChip icon={Flame} color="#C93434" value={String(s.longestStreak)} label="Longest streak" />
          <StatChip icon={Star} color="#3B6FD4" value={String(s.wordsLearned)} label="Words learned" />
          {s.timePracticed && <StatChip icon={Clock} color="#2F7D53" value={s.timePracticed} label="Time practiced" />}
        </StatRow>
      </div>

      {/* Current lesson + Today's goal */}
      <div className="mb-6 grid grid-cols-[minmax(0,1fr)_420px] gap-6 max-[1100px]:grid-cols-1">
        <Card className="px-[30px] py-7">
          <Eyebrow className="mb-2.5">{p.next ? { lesson: "CURRENT LESSON", story: "NEXT UP — STORY", test: "NEXT UP — UNIT TEST", checkpoint: "NEXT UP — CHECKPOINT EXAM" }[p.next.kind] : "COURSE"}</Eyebrow>
          {p.next ? (
            <>
              <H size={26} className="mb-1.5">{p.next.title}</H>
              <div className="mb-4 text-sm" style={{ color: BODY2 }}>{p.nextLesson?.unitLabel}{p.nextLesson?.titleEn ? <> &nbsp;·&nbsp; {p.nextLesson.titleEn}</> : null}</div>
              <div className="mb-5 flex items-center gap-[18px]">
                {p.nextLesson?.estMinutes && (
                  <div className="flex items-center gap-2 text-sm" style={{ color: BODY2 }}>
                    <Clock size={16} color={MUTED} />About {p.nextLesson.estMinutes} min
                  </div>
                )}
                <div className="h-4 w-px" style={{ background: "rgba(15,23,42,.14)" }} />
                <div className="flex items-center gap-2 text-sm" style={{ color: BODY2 }}>
                  <Bookmark size={16} color="#C93434" />Next on your path
                </div>
              </div>
              <BtnPrimary icon={ArrowRight} onClick={() => nav(stepLink(p.next!))}>
                {p.next.kind === "lesson" ? "Continue Lesson" : p.next.kind === "story" ? "Read the story" : "Start"}
              </BtnPrimary>
            </>
          ) : (
            <>
              <H size={26} className="mb-1.5">Course complete</H>
              <div className="mb-4 text-sm" style={{ color: BODY2 }}>Everything built so far is done — review keeps it fresh.</div>
              <BtnPrimary icon={ArrowRight} onClick={() => nav("/review")}>Review flashcards</BtnPrimary>
            </>
          )}
        </Card>
        <Card className="px-[26px] py-6">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Target size={17} color={INK} />
              <div className="text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>Today's goal</div>
            </div>
            <div className="whitespace-nowrap text-sm" style={{ color: BODY2 }}>{s.goalDone} of {s.goalTotal} steps</div>
          </div>
          <ProgressBar pct={(s.goalDone / s.goalTotal) * 100} color="#2F7D53" height={8} className="mb-4" />
          <div className="flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-2 text-sm" style={{ color: BODY2 }}>
              <Flame size={16} color="#C93434" />{s.dayStreak}-day streak
            </div>
            <div className="text-sm" style={{ color: BODY2 }}>
              {s.due > 0 ? `${s.due} cards due · ` : "review clear · "}
              {s.minutesToday} min today
            </div>
          </div>
        </Card>
      </div>

      {/* Learning Path level cards */}
      <CardH className="mb-3.5 mt-6">Learning Path</CardH>
      <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
        {p.levels.map((l) => {
          const isSel = l.code === selCode;
          const locked = l.total === 0;
          const pct = l.total > 0 ? Math.round((l.done / l.total) * 100) : 0;
          return (
            <button
              key={l.code}
              onClick={() => setSel(l.code)}
              className="rounded-2xl bg-white p-5 text-left shadow-[0_1px_2px_rgba(15,23,42,.03)] transition-all duration-200"
              style={{ border: isSel ? `1.5px solid ${l.color}` : "1px solid rgba(15,23,42,.07)", boxShadow: isSel ? "0 12px 30px rgba(15,23,42,.07)" : undefined }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 34, lineHeight: 1, color: l.color }}>{l.code}</div>
                  <div className="mt-[5px] text-[13px] leading-tight" style={{ color: l.color }}>{l.name}</div>
                </div>
                {l.state === "current" && l.done > 0 && (
                  <div className="flex-none whitespace-nowrap rounded-[7px] px-2.5 py-[5px] text-[9.5px] font-bold text-white" style={{ background: l.color, letterSpacing: ".05em" }}>CURRENT</div>
                )}
                {locked && <Lock size={17} color="#A9B0BA" />}
              </div>
              <div className="mb-2.5 mt-4 text-[13px]" style={{ color: BODY2 }}>
                {locked ? "Not built yet — the course grows in order" : `${l.done} of ${l.total} lessons`}
              </div>
              <ProgressBar pct={pct} color={l.color} height={6} />
            </button>
          );
        })}
      </div>

      {/* Level detail: About / Curriculum / Progress */}
      <div className="mb-8 mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_minmax(0,1fr)] items-start gap-6 max-[1200px]:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-[700px]:grid-cols-1">
        <Card className="p-7">
          <div className="mb-3.5 flex items-baseline gap-3">
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, lineHeight: 1, color: lv.color }}>{lv.code}</div>
            <CardH>{lv.name}</CardH>
          </div>
          <div className="mb-5 text-[15px] leading-relaxed" style={{ color: BODY2 }}>{lv.blurb}</div>
          {lv.total === 0 && (
            <div className="mb-5 flex flex-wrap items-center gap-2 rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(15,23,42,.04)", color: BODY2 }}>
              <Lock size={15} color={MUTED} />This level isn't authored yet — CroLearn builds strictly in course order.
            </div>
          )}
          <div className="flex flex-wrap gap-[18px]">
            <div className="flex items-center gap-2 text-sm" style={{ color: BODY2 }}><Clock size={16} color={MUTED} />{lv.total} lessons</div>
            <div className="flex items-center gap-2 text-sm" style={{ color: BODY2 }}><BookOpen size={16} color={MUTED} />{lv.units.length} units</div>
          </div>
          {lv.focus && <div className="mt-4 text-sm font-medium" style={{ color: lv.color }}>{lv.focus}</div>}
        </Card>

        <Card className="p-7">
          <CardH className="mb-4">{lv.code} Curriculum</CardH>
          {lv.units.length === 0 ? (
            <div className="rounded-xl border border-dashed px-5 py-10 text-center text-sm" style={{ borderColor: "rgba(15,23,42,.12)", color: MUTED }}>
              No units yet — finish the levels before it and they'll appear here.
            </div>
          ) : (
            <div className="grid gap-0.5">
              {lv.units.map((u) => {
                const complete = u.done === u.total;
                const isCurrentUnit = p.next?.unitId === u.id;
                const target = u.steps.find((st) => !stepDone(st, p)) ?? u.steps[0];
                return (
                  <button
                    key={u.id}
                    onClick={() => target && nav(stepLink(target))}
                    className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-colors duration-[180ms] hover:bg-[rgba(15,23,42,.03)]"
                    style={{ background: isCurrentUnit ? tint(lv.color, 0.05) : undefined }}
                  >
                    <div
                      className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full text-[13px] font-semibold"
                      style={isCurrentUnit ? { background: lv.color, color: "#fff" } : { background: "rgba(15,23,42,.06)", color: BODY2 }}
                    >
                      {u.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 truncate" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 16, color: INK }}>{u.title}</div>
                      <div className="truncate text-[13px]" style={{ color: MUTED }}>{u.titleEn} · {u.done}/{u.total} steps</div>
                    </div>
                    {complete ? (
                      <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full" style={{ background: "#2F7D53" }}>
                        <Check size={14} color="#fff" />
                      </div>
                    ) : (
                      <div className="h-6 w-6 flex-none rounded-full" style={{ border: "2px solid rgba(15,23,42,.14)" }} />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </Card>

        <Card className="p-7">
          <CardH className="mb-[18px]">Your Progress</CardH>
          <div className="mb-5 flex flex-col items-center">
            <Ring pct={lvPct} color={lv.color}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, lineHeight: 1, color: INK }}>{lv.done}/{lv.total}</div>
              <div className="mt-1 text-[11px]" style={{ color: MUTED }}>lessons</div>
            </Ring>
            <div className="mt-3.5 text-sm font-semibold" style={{ color: lv.color }}>{lvPct}% complete</div>
          </div>
          <div className="grid gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[11px] text-sm" style={{ color: BODY2 }}><Flame size={17} color={MUTED} />Study streak</div>
              <div className="text-sm" style={{ color: INK }}>{s.dayStreak} days</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[11px] text-sm" style={{ color: BODY2 }}><Layers size={17} color={MUTED} />Vocabulary learned</div>
              <div className="text-sm" style={{ color: INK }}>{s.wordsLearned} words</div>
            </div>
            {s.timePracticed && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[11px] text-sm" style={{ color: BODY2 }}><Clock size={17} color={MUTED} />Time spent</div>
                <div className="text-sm" style={{ color: INK }}>{s.timePracticed}</div>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Upcoming milestones (derived from real path state) */}
      <div className="mb-[18px] flex items-center justify-between">
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 22, color: INK }}>Upcoming Milestones</div>
      </div>
      <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
        {milestones.map((m) => (
          <Card key={m.title} className="flex items-start gap-4 p-[22px]">
            <Tile icon={m.icon} color={m.color} size={48} radius={13} iconSize={21} />
            <div className="min-w-0 flex-1">
              <div className="mb-[3px] text-[15px] font-semibold" style={{ color: INK }}>{m.title}</div>
              <div className="mb-3.5 text-[13px]" style={{ color: MUTED }}>{m.sub}</div>
              <div className="flex items-center gap-3">
                <ProgressBar pct={m.pct} color={m.color} height={6} className="flex-1" />
                <div className="whitespace-nowrap text-[13px]" style={{ color: MUTED }}>{m.count}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
