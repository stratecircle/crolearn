import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { findLesson, levels, unitOfLesson } from "@/content";
import ContentTable from "@/components/ContentTable";
import DiagramView from "@/components/DiagramView";
import Markdown from "@/components/Markdown";
import TtsButton from "@/components/TtsButton";
import NotesList from "@/features/notes/NotesList";
import { GENDER_COLORS } from "@/ui/caseColors";
import { BODY2, CRVENI, Divider, GREEN, INK, Meta, MUTED, Panel, SplitView, View, ViewBody } from "@/ui/kit";

function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[17px] font-bold" style={{ color: INK, letterSpacing: "-.02em" }}>
      {children}
    </h2>
  );
}

/**
 * Per-lesson study notes (teaching-method §5) — the growing personal grammar
 * book. Rendered as the detail pane of the two-pane notes browser, so the
 * index stays on screen beside it on desktop.
 *
 * The document has two registers: the deep dives are prose in the reading
 * measure, and everything that is really a *reference* (the words, the traps,
 * the hooks, the self-check) lives in a titled panel so it can be found again
 * at a glance three units later.
 */
export default function NotesPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? findLesson(lessonId) : undefined;
  const unit = lessonId ? unitOfLesson(lessonId) : undefined;
  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());

  if (!lesson || !unit)
    return (
      <View title="Notes">
        <ViewBody>
          <p className="py-10 text-center" style={{ color: BODY2 }}>
            Notes not found. <Link to="/notes" className="underline">Back to Notes</Link>
          </p>
        </ViewBody>
      </View>
    );
  const n = lesson.notes;
  const levelId = levels.find((l) => l.units.some((u) => u.id === unit.id))?.id;
  const withImages = lesson.vocab.filter((v) => v.image).length;

  return (
    <View
      title={lesson.title}
      sub={`${levelId ? `${levelId} · ` : ""}Unit ${unit.number} · ${unit.title}`}
      scroll={false}
    >
      <SplitView list={<NotesList selectedId={lesson.id} />} listWidth={300} showList={false}>
        <div className="mx-auto max-w-[720px] px-8 py-9 max-[700px]:px-4 max-[700px]:py-6">
          {/* The list pane is gone below 900px, so the detail pane carries its
              own way back to the index. */}
          <Link
            to="/notes"
            className="mb-5 inline-flex items-center gap-1.5 text-[13px] min-[901px]:hidden"
            style={{ color: BODY2 }}
          >
            <ArrowLeft size={14} strokeWidth={2} />
            All notes
          </Link>

          <article>
            <div className="rise rise-1">
              <p className="text-[15px]" style={{ color: BODY2 }}>{lesson.titleEn}</p>

              {/* The one statement block in the app: the lesson in a sentence. Inverted,
                  so its text colours are mixed off --page (which flips with the theme). */}
              <section className="mt-6 rounded-[10px] bg-[color:var(--ink)] p-5">
                <p className="meta" style={{ color: "color-mix(in srgb, var(--page) 55%, var(--ink))" }}>In one sentence</p>
                <p className="mt-1.5 text-[17px] font-medium" style={{ color: "var(--page)" }}>{n.inOneSentence.en}</p>
                <p className="mt-1.5 text-[15px]" style={{ color: "color-mix(in srgb, var(--page) 70%, var(--ink))" }}>
                  {n.inOneSentence.exampleHr} <TtsButton text={n.inOneSentence.exampleHr} className="ml-1" />
                </p>
              </section>
            </div>

            <div className="rise rise-2">
              {n.deepDive.map((d, i) => (
                <section key={i} className="mt-10">
                  <SectionH>{d.title}</SectionH>
                  <Markdown text={d.body} className="reading mt-2.5 text-[16px] leading-[1.75]" />
                  {d.table && <div className="mt-4"><ContentTable table={d.table} /></div>}
                  {d.diagram && <div className="mt-4"><DiagramView diagram={d.diagram} /></div>}
                </section>
              ))}
            </div>

            {/* The words, with the pictures they were taught with — the notes page
                is where you come back to look one up, so it should look like the
                deck it feeds. */}
            <Panel
              className="rise rise-3 mt-12"
              title="Lesson vocabulary"
              right={
                <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                  {lesson.vocab.length} {lesson.vocab.length === 1 ? "word" : "words"}
                  {withImages > 0 && ` · ${withImages} illustrated`}
                </span>
              }
            >
              <div className="grid grid-cols-4 gap-x-4 gap-y-5 max-[900px]:grid-cols-3 max-[560px]:grid-cols-2">
                {lesson.vocab.map((v) => (
                  <div key={v.id} className="min-w-0">
                    {/* alt="" on purpose: the Croatian and English lines below this
                        same tile already carry the meaning; the picture is dual
                        coding, not information of its own. */}
                    <div
                      className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg"
                      style={{ background: "var(--tint)" }}
                    >
                      {v.image ? (
                        <img src={v.image} alt="" className="h-full w-full object-contain p-2" />
                      ) : (
                        <span className="text-2xl font-bold" style={{ color: "rgba(var(--ink-rgb),.16)" }}>
                          {v.hr.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex min-w-0 items-baseline gap-1.5">
                      {v.gender && <span className={`inline-block h-2 w-2 flex-none translate-y-[-1px] rounded-full ${GENDER_COLORS[v.gender]}`} title={v.gender} />}
                      <span className="truncate text-[14px] font-semibold" style={{ color: INK }}>{v.hr}</span>
                      {v.gender && <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{v.gender}</span>}
                      <TtsButton text={v.hr} className="-my-1 flex-none" />
                    </div>
                    <div className="truncate text-[13px]" style={{ color: MUTED }}>{v.en}</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="line-clamp-2 min-w-0 flex-1 text-[12.5px] leading-snug" style={{ color: "var(--muted3)" }}>
                        {v.exampleHr}
                      </span>
                      <TtsButton text={v.exampleHr} className="-my-1 flex-none" />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <div className="rise rise-4">
              <Panel
                className="mt-5"
                title="Common mistakes"
                right={<span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{n.commonMistakes.length}</span>}
                bodyClassName="px-5 py-1"
              >
                <div className="divide-y divide-[rgba(var(--ink-rgb),.07)]">
                  {n.commonMistakes.map((m, i) => (
                    <div key={i} className="py-3.5">
                      <p className="flex flex-wrap items-baseline gap-2 text-[15px]">
                        <span className="font-semibold line-through" style={{ color: CRVENI }}>{m.wrong}</span>
                        <ArrowRight size={13} color={MUTED} className="self-center" />
                        <span className="font-semibold" style={{ color: GREEN }}>{m.right}</span>
                      </p>
                      <p className="mt-1 text-sm" style={{ color: BODY2 }}>{m.why}</p>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel className="mt-5" title="Memory hooks" bodyClassName="px-5 py-1">
                <ul className="divide-y divide-[rgba(var(--ink-rgb),.07)] text-[15px] leading-relaxed" style={{ color: BODY2 }}>
                  {n.memoryHooks.map((h, i) => (
                    <li key={i} className="flex gap-3 py-3">
                      <span className="flex-none" style={{ color: "var(--muted3)" }}>—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <div className="rise rise-5">
              {n.connects.length > 0 && (
                <section className="mt-10">
                  <Meta>Connected notes</Meta>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {n.connects.map((c, i) => (
                      <Link
                        key={i}
                        to={`/notes/${c.lessonId}`}
                        className="rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 hover:bg-[color:var(--tint)]"
                        style={{ borderColor: "rgba(var(--ink-rgb),.12)", color: BODY2 }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <Panel
                className="mb-10 mt-5"
                title="Self-check"
                right={
                  <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
                    {openAnswers.size}/{n.selfCheck.length} revealed
                  </span>
                }
                bodyClassName="px-5 py-1"
              >
                {n.selfCheck.map((s, i) => (
                  <div key={i}>
                    {i > 0 && <Divider />}
                    <div className="py-3.5">
                      <p className="text-[15px] font-semibold" style={{ color: INK }}>{i + 1}. {s.q}</p>
                      {openAnswers.has(i) ? (
                        <p className="mt-1.5 text-[15px]" style={{ color: GREEN }}>{s.a}</p>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setOpenAnswers(new Set([...openAnswers, i]))}
                          /* mt-1.5 becomes mt-0.5 + py-1 so the text lands on the
                             same baseline while the target clears the WCAG 2.5.8
                             24px minimum (it was 82x17); the negative margins keep
                             the surrounding rhythm unchanged. */
                          className="meta -mx-1.5 -mb-1 mt-0.5 px-1.5 py-1 transition-colors duration-100 hover:text-[color:var(--body)]"
                          style={{ color: "var(--muted3)" }}
                        >
                          Show answer
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </Panel>
            </div>
          </article>
        </div>
      </SplitView>
    </View>
  );
}
