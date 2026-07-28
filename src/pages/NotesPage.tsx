import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findLesson, unitOfLesson } from "@/content";
import ContentTable from "@/components/ContentTable";
import DiagramView from "@/components/DiagramView";
import Markdown from "@/components/Markdown";
import TtsButton from "@/components/TtsButton";
import { GENDER_COLORS } from "@/ui/caseColors";

/** Per-lesson study notes (teaching-method §5) — the growing personal grammar book. */
export default function NotesPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? findLesson(lessonId) : undefined;
  const unit = lessonId ? unitOfLesson(lessonId) : undefined;
  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());

  if (!lesson || !unit)
    return (
      <p className="py-10 text-center">
        Notes not found. <Link to="/notes" className="underline">Back to the Notebook</Link>
      </p>
    );
  const n = lesson.notes;

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-xs font-semibold tracking-[.13em] text-[color:var(--primary)]">
        UNIT {unit.number} · NOTES
      </p>
      <h1 className="font-display text-3xl font-bold text-[color:var(--ink)]">{lesson.title}</h1>
      <p className="text-[color:var(--muted)]">{lesson.titleEn}</p>

      <section className="mt-6 rounded-2xl bg-[color:var(--ink)] p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-[.13em] text-[color:var(--muted4)]">In one sentence</p>
        <p className="mt-1 text-lg font-semibold">{n.inOneSentence.en}</p>
        <p className="mt-1 text-[color:var(--muted4)]">
          {n.inOneSentence.exampleHr} <TtsButton text={n.inOneSentence.exampleHr} className="ml-1" />
        </p>
      </section>

      {n.deepDive.map((d, i) => (
        <section key={i} className="mt-6">
          <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">{d.title}</h2>
          <Markdown text={d.body} className="mt-2" />
          {d.table && <div className="mt-3"><ContentTable table={d.table} /></div>}
          {d.diagram && <div className="mt-3"><DiagramView diagram={d.diagram} /></div>}
        </section>
      ))}

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Lesson vocabulary</h2>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-[rgba(var(--ink-rgb),.14)] text-sm text-[color:var(--muted)]">
                <th className="px-2 py-1.5">Croatian</th>
                <th className="px-2 py-1.5">gender</th>
                <th className="px-2 py-1.5">English</th>
                <th className="px-2 py-1.5">example</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocab.map((v) => (
                <tr key={v.id} className="border-b border-[rgba(var(--ink-rgb),.09)] odd:bg-[rgba(var(--ink-rgb),.025)]">
                  <td className="px-2 py-1.5 font-semibold">
                    {v.gender && <span className={`mr-1.5 inline-block h-2 w-2 rounded-full ${GENDER_COLORS[v.gender]}`} />}
                    {/* alt="" on purpose: the Croatian and English columns of this same
                        row already carry the meaning; the thumbnail is decoration. */}
                    {v.image && <img src={v.image} alt="" className="mr-1.5 inline-block h-6 w-6 rounded object-contain align-middle" />}
                    {v.hr} <TtsButton text={v.hr} />
                  </td>
                  <td className="px-2 py-1.5 text-[color:var(--muted)]">{v.gender ?? "—"}</td>
                  <td className="px-2 py-1.5">{v.en}</td>
                  <td className="px-2 py-1.5 text-sm text-[color:var(--body2)]">
                    {v.exampleHr} <TtsButton text={v.exampleHr} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Common mistakes</h2>
        <ul className="mt-2 space-y-2">
          {n.commonMistakes.map((m, i) => (
            <li key={i} className="rounded-xl border border-[rgba(var(--ink-rgb),.07)] bg-[color:var(--card)] p-3.5 shadow-[0_1px_3px_rgba(var(--shadow-rgb),.04)]">
              <p>
                <span className="font-semibold text-[color:var(--primary)] line-through">{m.wrong}</span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-[color:var(--green)]">{m.right}</span>
              </p>
              <p className="mt-0.5 text-sm text-[color:var(--body2)]">{m.why}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Memory hooks</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {n.memoryHooks.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      {n.connects.length > 0 && (
        <section className="mt-6">
          <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Connected notes</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {n.connects.map((c, i) => (
              <Link key={i} to={`/notes/${c.lessonId}`} className="rounded-full bg-[rgba(var(--ink-rgb),.09)] px-3 py-1.5 text-sm font-semibold hover:bg-[rgba(var(--ink-rgb),.14)]">
                {c.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 mb-10">
        <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Self-check</h2>
        <ol className="mt-2 space-y-2">
          {n.selfCheck.map((s, i) => (
            <li key={i} className="rounded-xl border border-[rgba(var(--ink-rgb),.07)] bg-[color:var(--card)] p-3.5 shadow-[0_1px_3px_rgba(var(--shadow-rgb),.04)]">
              <p className="font-semibold">{i + 1}. {s.q}</p>
              {openAnswers.has(i) ? (
                <p className="mt-1 text-[color:var(--green)]">{s.a}</p>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenAnswers(new Set([...openAnswers, i]))}
                  className="mt-1 text-sm font-semibold text-[color:var(--muted)] underline"
                >
                  Show answer
                </button>
              )}
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
