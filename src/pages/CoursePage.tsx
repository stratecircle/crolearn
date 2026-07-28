/**
 * Course — the full curriculum as a list. Levels are sections, units are rows;
 * clicking a unit jumps to its first unfinished step. Progress is a thin
 * segmented line per unit (one segment per path step), not a card grid.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Lock } from "lucide-react";
import { ACCENT, BODY2, Divider, INK, Meta, MUTED, PageHeader } from "@/ui/kit";
import { loadNativProgress, stepDone, stepLink, type NativProgress } from "@/features/nativ/stats";

export default function CoursePage() {
  const nav = useNavigate();
  const [p, setP] = useState<NativProgress | null>(null);
  useEffect(() => {
    void loadNativProgress().then(setP);
  }, []);
  if (!p) return null;

  const totalLessons = p.levels.reduce((s, l) => s + l.total, 0);
  const doneLessons = p.levels.reduce((s, l) => s + l.done, 0);

  return (
    <div>
      <PageHeader
        eyebrow="Croatian · 0 → B2"
        title="Course"
        sub={`${doneLessons} of ${totalLessons} lessons complete`}
      />

      <div className="mt-12 flex flex-col gap-14">
        {p.levels.map((lv) => {
          const locked = lv.total === 0;
          return (
            <section key={lv.code}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-bold tabular-nums" style={{ color: locked ? MUTED : INK, letterSpacing: "-.01em" }}>{lv.code}</span>
                  <span className="text-sm" style={{ color: BODY2 }}>{lv.name}</span>
                </div>
                <Meta style={{ color: "var(--muted3)" }}>
                  {locked ? "Locked" : `${lv.done}/${lv.total} lessons`}
                </Meta>
              </div>
              {!locked && <p className="mt-1.5 max-w-[560px] text-[13px] leading-relaxed" style={{ color: MUTED }}>{lv.blurb}</p>}

              {locked ? (
                <div className="mt-4 flex items-center gap-2.5 text-sm" style={{ color: MUTED }}>
                  <Lock size={14} />
                  Not built yet — the course grows strictly in order.
                </div>
              ) : (
                <div className="mt-5">
                  {lv.units.map((u, i) => {
                    const complete = u.total > 0 && u.done === u.total;
                    const isCurrent = p.next?.unitId === u.id;
                    const target = u.steps.find((st) => !stepDone(st, p)) ?? u.steps[0];
                    return (
                      <div key={u.id}>
                        {i > 0 && <Divider />}
                        <button
                          onClick={() => target && nav(stepLink(target))}
                          className="group flex w-full items-center gap-5 py-4 text-left"
                        >
                          <span className="meta w-7 flex-none tabular-nums" style={{ color: isCurrent ? ACCENT : "var(--muted3)" }}>
                            {String(u.number).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-baseline gap-2.5">
                              <span className="flex-none text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>{u.title}</span>
                              <span className="min-w-0 truncate text-[13px] max-[600px]:hidden" style={{ color: MUTED }}>{u.titleEn}</span>
                              {isCurrent && <Meta className="flex-none" style={{ color: ACCENT }}>Current</Meta>}
                            </span>
                            {/* one segment per path step */}
                            <span className="mt-2.5 flex max-w-[320px] gap-[3px]">
                              {u.steps.map((st) => (
                                <span
                                  key={st.id}
                                  className="h-[3px] flex-1 rounded-full"
                                  style={{ background: stepDone(st, p) ? ACCENT : "rgba(var(--ink-rgb),.1)" }}
                                />
                              ))}
                            </span>
                          </span>
                          <span className="flex flex-none items-center gap-3">
                            <Meta className="tabular-nums" style={{ color: complete ? "var(--green)" : "var(--muted3)" }}>
                              {u.done}/{u.total}
                            </Meta>
                            {complete && <Check size={15} color="var(--green)" strokeWidth={2.4} />}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
