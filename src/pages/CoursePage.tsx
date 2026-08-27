/**
 * Course — the curriculum as a desktop master/detail view.
 *
 * Left: the whole index (levels as sections, units as rows) in its own scroller.
 * Right: the selected unit as a real page — a hero with the pictures the unit
 * teaches, progress as a figure, the path as a titled panel, and the unit's
 * vocabulary shown with the images it was authored with. The one action that
 * matters (continue where you left off) is bound to ⏎.
 *
 * Clicking a unit selects it; only step rows navigate. The ⌘K palette hands us
 * a unit through `location.state`, so "unit 12" from anywhere lands here focused.
 */
import { Fragment, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Check, ClipboardCheck, GraduationCap } from "lucide-react";
import { findLesson, findUnit, type PathStep } from "@/content";
import { useHotkeys } from "@/lib/hotkeys";
import { ACCENT, BODY2, BtnPrimary, Divider, GREEN, INK, Kbd, Meta, MUTED, Panel, Ring, Sahovnica, View, SplitView } from "@/ui/kit";
import { loadNativProgress, stepDone, stepLink, type NativProgress } from "@/features/nativ/stats";

type UnitInfo = NativProgress["levels"][number]["units"][number];

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

/** Column labels for the progress figure. */
const KIND_GROUP: Record<PathStep["kind"], string> = {
  lesson: "Lessons",
  story: "Story",
  test: "Unit test",
  checkpoint: "Checkpoint",
};

const KIND_ORDER: PathStep["kind"][] = ["lesson", "story", "test", "checkpoint"];

/** How many words the vocabulary panel shows before it counts the rest. */
const VOCAB_SHOWN = 15;

const HAIRLINE = "rgba(var(--ink-rgb),.08)";

/** The unit the learner is in, else the first unit of the current level. */
function defaultUnitId(p: NativProgress): string | null {
  if (p.next) return p.next.unitId;
  const level = p.levels.find((l) => l.code === p.currentLevel) ?? p.levels.find((l) => l.total > 0);
  return level?.units[0]?.id ?? null;
}

export default function CoursePage() {
  const nav = useNavigate();
  const loc = useLocation();
  const [p, setP] = useState<NativProgress | null>(null);
  /** null = nothing picked (the list owns the screen on narrow windows). */
  const [selId, setSelId] = useState<string | null>(null);

  useEffect(() => {
    void loadNativProgress().then(setP);
  }, []);

  // ⌘K → "Unit 12" navigates here carrying the unit in router state.
  useEffect(() => {
    const wanted = (loc.state as { unitId?: string } | null)?.unitId;
    if (wanted) setSelId(wanted);
  }, [loc.key, loc.state]);

  // Once the data lands, fall back to where the learner actually is.
  useEffect(() => {
    if (p) setSelId((cur) => cur ?? defaultUnitId(p));
  }, [p]);

  const selected: UnitInfo | null = useMemo(
    () => p?.levels.flatMap((l) => l.units).find((u) => u.id === selId) ?? null,
    [p, selId],
  );
  const selectedLevel = useMemo(
    () => p?.levels.find((l) => l.units.some((u) => u.id === selId)) ?? null,
    [p, selId],
  );
  /** First unfinished step of the selected unit — what Continue/⏎ opens. */
  const target: PathStep | null = useMemo(() => {
    if (!p || !selected) return null;
    return selected.steps.find((st) => !stepDone(st, p)) ?? selected.steps[0] ?? null;
  }, [p, selected]);

  useHotkeys(
    {
      enter: () => {
        if (target) nav(stepLink(target));
      },
    },
    [target, nav],
  );

  if (!p) return <View title="Course"><span /></View>;

  const totalLessons = p.levels.reduce((s, l) => s + l.total, 0);
  const doneLessons = p.levels.reduce((s, l) => s + l.done, 0);
  const builtUnits = p.levels.reduce((s, l) => s + l.units.length, 0);

  const list = (
    <nav className="pb-10" aria-label="Curriculum">
      {p.levels.map((lv) => {
        const locked = lv.total === 0;
        return (
          <section key={lv.code} className="pt-6 first:pt-4">
            <div className="flex items-baseline justify-between gap-3 px-4 pb-1.5">
              <Meta>{lv.code} · {lv.name}</Meta>
              <Meta className="tabular-nums" style={{ color: "var(--muted3)" }}>
                {locked ? "—" : `${lv.done}/${lv.total}`}
              </Meta>
            </div>

            {locked ? (
              <div className="px-4 py-2 text-[13px]" style={{ color: "var(--muted3)" }}>
                Not built yet — the course grows strictly in order.
              </div>
            ) : (
              lv.units.map((u) => {
                const isSel = u.id === selId;
                const isCurrent = p.next?.unitId === u.id;
                const complete = u.total > 0 && u.done === u.total;
                return (
                  <button
                    key={u.id}
                    onClick={() => setSelId(u.id)}
                    aria-current={isSel ? "true" : undefined}
                    className="flex w-full items-center gap-3 px-4 py-2 text-left transition-colors duration-100 hover:bg-[color:var(--tint)]"
                    style={isSel ? { background: "rgba(var(--ink-rgb),.06)" } : undefined}
                  >
                    <span
                      className="meta w-5 flex-none tabular-nums"
                      style={{ color: isCurrent ? ACCENT : "var(--muted3)" }}
                    >
                      {String(u.number).padStart(2, "0")}
                    </span>
                    <span
                      className="min-w-0 flex-1 truncate text-[13.5px] font-semibold"
                      style={{ color: isSel ? INK : BODY2, letterSpacing: "-.01em" }}
                    >
                      {u.title}
                    </span>
                    <span
                      className="meta flex-none tabular-nums"
                      style={{ color: complete ? GREEN : "var(--muted3)" }}
                    >
                      {u.done}/{u.total}
                    </span>
                  </button>
                );
              })
            )}
          </section>
        );
      })}
    </nav>
  );

  const unit = selected ? findUnit(selected.id) : undefined;
  const firstLesson = unit?.lessons[0];
  const hasStoryStep = selected?.steps.some((st) => st.kind === "story") ?? false;
  const hasTestStep = selected?.steps.some((st) => st.kind === "test") ?? false;
  const pct = selected && selected.total > 0 ? Math.round((selected.done / selected.total) * 100) : 0;

  /* ── the unit's own substance: its words, its pictures, its size ───────── */
  const unitVocab = unit ? unit.lessons.flatMap((l) => l.vocab) : [];
  const withImage = unitVocab.filter((v) => v.image);
  // Four pictures spread across the unit rather than four from lesson one.
  const strip =
    withImage.length <= 4
      ? withImage
      : [0, 1, 2, 3].map((i) => withImage[Math.floor((i * withImage.length) / 4)]);
  // Words that were drawn lead; the rest fill the grid behind them.
  const vocabShown = [...withImage, ...unitVocab.filter((v) => !v.image)].slice(0, VOCAB_SHOWN);
  const vocabRest = unitVocab.length - vocabShown.length;
  const unitMinutes = unit ? unit.lessons.reduce((s, l) => s + l.estMinutes, 0) : 0;

  /** Steps of the selected unit grouped by kind, for the progress figure. */
  const groups = selected
    ? KIND_ORDER.map((kind) => {
        const steps = selected.steps.filter((st) => st.kind === kind);
        return { kind, total: steps.length, done: steps.filter((st) => stepDone(st, p)).length };
      }).filter((g) => g.total > 0)
    : [];

  return (
    <View title="Course" sub={`${doneLessons} of ${totalLessons} lessons`} scroll={false}>
      <SplitView list={list} listWidth={300} showList={selId === null}>
        <div className="mx-auto max-w-[780px] px-8 py-9 max-[700px]:px-4 max-[700px]:py-6">
          {selected && selectedLevel ? (
            /* Keyed on the unit so the entrance stagger replays when you switch. */
            <Fragment key={selected.id}>
              <button
                onClick={() => setSelId(null)}
                className="mb-5 inline-flex items-center gap-1.5 text-[13px] min-[901px]:hidden"
                style={{ color: BODY2 }}
              >
                <ArrowLeft size={14} strokeWidth={2} />
                All units
              </button>

              {/* ── hero: what this unit is, with what it teaches ─────────── */}
              <header className="rise rise-1 flex items-start justify-between gap-8">
                <div className="min-w-0">
                  <Meta className="mb-2">{selectedLevel.code} · Unit {selected.number}</Meta>
                  <h2 className="text-[24px] font-bold leading-tight" style={{ color: INK, letterSpacing: "-.025em" }}>
                    {selected.title}
                  </h2>
                  <p className="mt-1 text-[15px]" style={{ color: BODY2 }}>{selected.titleEn}</p>
                  {unit?.theme && (
                    <p className="mt-3 max-w-[520px] text-[13px] leading-relaxed" style={{ color: MUTED }}>
                      {unit.theme}
                    </p>
                  )}
                  {unit && (
                    <Meta className="mt-3 tabular-nums" style={{ color: "var(--muted3)" }}>
                      {unit.lessons.length} lessons · {unitVocab.length} words
                      {unitMinutes > 0 && <> · about {unitMinutes} min</>}
                    </Meta>
                  )}
                </div>

                {strip.length > 0 && (
                  <div className="flex flex-none gap-2 pt-1 max-[640px]:hidden" aria-hidden="true">
                    {strip.map((v) => (
                      <div
                        key={v.id}
                        className="flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-xl"
                        style={{ background: "var(--tint)" }}
                      >
                        <img src={v.image} alt="" className="h-full w-full object-contain p-1.5" />
                      </div>
                    ))}
                  </div>
                )}
              </header>

              {target && (
                <div className="rise rise-1 mt-6 flex items-center gap-2.5">
                  <BtnPrimary icon={ArrowRight} onClick={() => nav(stepLink(target))}>
                    {selected.done === 0 ? "Start" : "Continue"}
                  </BtnPrimary>
                  <span className="max-[600px]:hidden"><Kbd>Enter</Kbd></span>
                </div>
              )}

              {/* ── progress as a figure ──────────────────────────────────── */}
              <section className="rise rise-2 mt-8 flex items-center gap-8 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-5">
                <Ring pct={pct} size={104} hole={92}>
                  <span
                    className="tabular-nums font-bold leading-none"
                    style={{ fontSize: 20, color: INK, letterSpacing: "-.03em" }}
                  >
                    {selected.done}/{selected.total}
                  </span>
                  <div className="meta mt-1" style={{ color: MUTED }}>steps</div>
                </Ring>

                <div className="flex min-w-0 flex-1 items-start">
                  {groups.map((g, i) => (
                    <div
                      key={g.kind}
                      className={`min-w-0 flex-1 ${i > 0 ? "pl-5" : ""}`}
                      style={i > 0 ? { borderLeft: `1px solid ${HAIRLINE}` } : undefined}
                    >
                      <div
                        className="tabular-nums font-bold leading-none"
                        style={{ fontSize: 26, color: g.done === g.total ? GREEN : INK, letterSpacing: "-.03em" }}
                      >
                        {g.done}
                        <span className="font-semibold" style={{ fontSize: 15, color: MUTED }}>/{g.total}</span>
                      </div>
                      <Meta className="mt-1.5 truncate">{KIND_GROUP[g.kind]}</Meta>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── the path through the unit ─────────────────────────────── */}
              <Panel
                className="rise rise-3 mt-8"
                title="Unit path"
                right={
                  <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                    {pct}% complete
                  </span>
                }
                bodyClassName="px-5 py-1"
              >
                {selected.steps.map((st, i) => {
                  const Icon = KIND_ICON[st.kind];
                  const done = stepDone(st, p);
                  const lesson = st.kind === "lesson" ? findLesson(st.id) : undefined;
                  const titleEn = lesson?.titleEn;
                  const isTarget = !done && target !== null && target.id === st.id && target.kind === st.kind;
                  return (
                    <div key={st.id}>
                      {i > 0 && <Divider />}
                      <button
                        onClick={() => nav(stepLink(st))}
                        className="group flex w-full items-center gap-4 py-3 text-left"
                      >
                        <Icon
                          size={15}
                          color={isTarget ? ACCENT : "var(--muted3)"}
                          strokeWidth={1.9}
                          className="flex-none"
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium" style={{ color: done ? BODY2 : INK }}>
                            {st.title}
                          </span>
                          {(titleEn || lesson?.estMinutes) && (
                            <span className="mt-0.5 block truncate text-[13px]" style={{ color: MUTED }}>
                              {titleEn}
                              {titleEn && lesson?.estMinutes ? " · " : ""}
                              {lesson?.estMinutes ? `${lesson.estMinutes} min` : ""}
                            </span>
                          )}
                        </span>
                        <span
                          className="meta flex-none max-[600px]:hidden"
                          style={{ color: isTarget ? ACCENT : "var(--muted3)" }}
                        >
                          {isTarget ? "Next" : KIND_NOUN[st.kind]}
                        </span>
                        {done ? (
                          <Check size={15} color={GREEN} strokeWidth={2.4} className="flex-none" />
                        ) : (
                          <span
                            className="h-[15px] w-[15px] flex-none rounded-full border"
                            style={{ borderColor: isTarget ? ACCENT : "rgba(var(--ink-rgb),.22)" }}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </Panel>

              {/* ── the words, with the pictures they're taught with ───────── */}
              {vocabShown.length > 0 && (
                <Panel
                  className="rise rise-4 mt-5"
                  title="Vocabulary in this unit"
                  right={
                    <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                      {unitVocab.length} words
                    </span>
                  }
                >
                  <div className="grid grid-cols-5 gap-3 max-[880px]:grid-cols-4 max-[560px]:grid-cols-3">
                    {vocabShown.map((v) => (
                      <div key={v.id} className="min-w-0">
                        <div
                          className="flex aspect-square items-center justify-center overflow-hidden rounded-lg"
                          style={{ background: "var(--tint)" }}
                        >
                          {v.image ? (
                            <img src={v.image} alt="" className="h-full w-full object-contain p-2" />
                          ) : v.icon ? (
                            <span className="text-[22px]" aria-hidden="true">{v.icon}</span>
                          ) : (
                            <span className="text-lg font-bold" style={{ color: "rgba(var(--ink-rgb),.2)" }}>
                              {v.hr.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="mt-1.5 truncate text-[13px] font-semibold" style={{ color: INK }}>{v.hr}</div>
                        <div className="truncate text-[12px]" style={{ color: MUTED }}>{v.en}</div>
                      </div>
                    ))}
                  </div>
                  {vocabRest > 0 && (
                    <Meta className="mt-4 tabular-nums" style={{ color: "var(--muted3)" }}>
                      +{vocabRest} more {vocabRest === 1 ? "word" : "words"} in this unit
                    </Meta>
                  )}
                </Panel>
              )}

              <div className="rise rise-5 mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                {unit && !hasTestStep && (
                  <button onClick={() => nav(`/test/${unit.test.id}`)} className="meta transition-colors duration-100 hover:text-[color:var(--body)]" style={{ color: "var(--muted3)" }}>
                    Unit test →
                  </button>
                )}
                {unit && !hasStoryStep && (
                  <button onClick={() => nav(`/story/${unit.story.id}`)} className="meta transition-colors duration-100 hover:text-[color:var(--body)]" style={{ color: "var(--muted3)" }}>
                    Story →
                  </button>
                )}
                {firstLesson && (
                  <button onClick={() => nav(`/notes/${firstLesson.id}`)} className="meta transition-colors duration-100 hover:text-[color:var(--body)]" style={{ color: "var(--muted3)" }}>
                    Unit notes →
                  </button>
                )}
              </div>
            </Fragment>
          ) : (
            /* ── nothing picked (or a level with nothing built yet) ───────── */
            <div className="rise rise-1 flex min-h-[62vh] flex-col items-center justify-center px-6 text-center">
              <Sahovnica size={26} />
              <h2 className="mt-6 text-[19px] font-bold" style={{ color: INK, letterSpacing: "-.02em" }}>
                Pick a unit
              </h2>
              <p className="mt-2 max-w-[360px] text-sm leading-relaxed" style={{ color: MUTED }}>
                Every unit opens with its lessons, then its story, then its test — and shows the
                words it teaches. Choose one from the index on the left.
              </p>
              <div className="mt-8 flex items-start gap-8">
                <div>
                  <div className="tabular-nums font-bold leading-none" style={{ fontSize: 26, color: INK, letterSpacing: "-.03em" }}>
                    {doneLessons}
                    <span className="font-semibold" style={{ fontSize: 15, color: MUTED }}>/{totalLessons}</span>
                  </div>
                  <Meta className="mt-1.5">Lessons done</Meta>
                </div>
                <div className="pl-8" style={{ borderLeft: `1px solid ${HAIRLINE}` }}>
                  <div className="tabular-nums font-bold leading-none" style={{ fontSize: 26, color: INK, letterSpacing: "-.03em" }}>
                    {builtUnits}
                  </div>
                  <Meta className="mt-1.5">Units built</Meta>
                </div>
              </div>
            </div>
          )}
        </div>
      </SplitView>
    </View>
  );
}
