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
      <p className="text-sm font-bold text-stone-400">
        Unit {unit.number}: {unit.title} · Notes
      </p>
      <h1 className="font-display text-3xl font-bold text-[#16243D]">{lesson.title}</h1>
      <p className="text-stone-500">{lesson.titleEn}</p>

      <section className="mt-6 rounded-2xl bg-[#16243D] p-5 text-white">
        <p className="text-xs font-black uppercase tracking-wide text-stone-400">In one sentence</p>
        <p className="mt-1 text-lg font-semibold">{n.inOneSentence.en}</p>
        <p className="mt-1 text-stone-300">
          {n.inOneSentence.exampleHr} <TtsButton text={n.inOneSentence.exampleHr} className="ml-1" />
        </p>
      </section>

      {n.deepDive.map((d, i) => (
        <section key={i} className="mt-6">
          <h2 className="font-display text-xl font-bold text-[#16243D]">{d.title}</h2>
          <Markdown text={d.body} className="mt-2" />
          {d.table && <div className="mt-3"><ContentTable table={d.table} /></div>}
          {d.diagram && <div className="mt-3"><DiagramView diagram={d.diagram} /></div>}
        </section>
      ))}

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[#16243D]">📚 Lesson vocabulary</h2>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-stone-300 text-sm text-stone-500">
                <th className="px-2 py-1.5">Croatian</th>
                <th className="px-2 py-1.5">gender</th>
                <th className="px-2 py-1.5">English</th>
                <th className="px-2 py-1.5">example</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocab.map((v) => (
                <tr key={v.id} className="border-b border-stone-200 odd:bg-stone-100/60">
                  <td className="px-2 py-1.5 font-semibold">
                    {v.gender && <span className={`mr-1.5 inline-block h-2 w-2 rounded-full ${GENDER_COLORS[v.gender]}`} />}
                    {v.image && <img src={v.image} alt="" className="mr-1.5 inline-block h-6 w-6 rounded object-contain align-middle" />}
                    {v.hr} <TtsButton text={v.hr} />
                  </td>
                  <td className="px-2 py-1.5 text-stone-500">{v.gender ?? "—"}</td>
                  <td className="px-2 py-1.5">{v.en}</td>
                  <td className="px-2 py-1.5 text-sm text-stone-600">
                    {v.exampleHr} <TtsButton text={v.exampleHr} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[#16243D]">⚠️ Common mistakes</h2>
        <ul className="mt-2 space-y-2">
          {n.commonMistakes.map((m, i) => (
            <li key={i} className="rounded-xl bg-white p-3 shadow-sm">
              <p>
                <span className="font-semibold text-red-700 line-through">{m.wrong}</span>
                <span className="mx-2">→</span>
                <span className="font-semibold text-green-700">{m.right}</span>
              </p>
              <p className="mt-0.5 text-sm text-stone-600">{m.why}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="font-display text-xl font-bold text-[#16243D]">🧠 Memory hooks</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {n.memoryHooks.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      {n.connects.length > 0 && (
        <section className="mt-6">
          <h2 className="font-display text-xl font-bold text-[#16243D]">🔗 Connected notes</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {n.connects.map((c, i) => (
              <Link key={i} to={`/notes/${c.lessonId}`} className="rounded-full bg-stone-200 px-3 py-1.5 text-sm font-semibold hover:bg-stone-300">
                {c.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-6 mb-10">
        <h2 className="font-display text-xl font-bold text-[#16243D]">✅ Self-check</h2>
        <ol className="mt-2 space-y-2">
          {n.selfCheck.map((s, i) => (
            <li key={i} className="rounded-xl bg-white p-3 shadow-sm">
              <p className="font-semibold">{i + 1}. {s.q}</p>
              {openAnswers.has(i) ? (
                <p className="mt-1 text-green-700">{s.a}</p>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenAnswers(new Set([...openAnswers, i]))}
                  className="mt-1 text-sm font-semibold text-stone-500 underline"
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
