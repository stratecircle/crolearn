import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { findLesson, unitOfLesson } from "@/content";
import ContentTable from "@/components/ContentTable";
import DiagramView from "@/components/DiagramView";
import Markdown from "@/components/Markdown";
import TtsButton from "@/components/TtsButton";
import { GENDER_COLORS } from "@/ui/caseColors";
import { BODY2, CRVENI, Divider, GREEN, INK, Meta, MUTED, PageHeader } from "@/ui/kit";

function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[17px] font-bold" style={{ color: INK, letterSpacing: "-.02em" }}>
      {children}
    </h2>
  );
}

/** Per-lesson study notes (teaching-method §5) — the growing personal grammar book. */
export default function NotesPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const lesson = lessonId ? findLesson(lessonId) : undefined;
  const unit = lessonId ? unitOfLesson(lessonId) : undefined;
  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());

  if (!lesson || !unit)
    return (
      <p className="py-10 text-center" style={{ color: BODY2 }}>
        Notes not found. <Link to="/notes" className="underline">Back to Notes</Link>
      </p>
    );
  const n = lesson.notes;

  return (
    <article>
      <PageHeader
        eyebrow={`Unit ${unit.number} · Notes`}
        title={lesson.title}
        sub={lesson.titleEn}
      />

      {/* The one statement block in the app: the lesson in a sentence. Inverted,
          so its text colours are mixed off --page (which flips with the theme). */}
      <section className="mt-8 rounded-[10px] bg-[color:var(--ink)] p-5">
        <p className="meta" style={{ color: "color-mix(in srgb, var(--page) 55%, var(--ink))" }}>In one sentence</p>
        <p className="mt-1.5 text-[17px] font-medium" style={{ color: "var(--page)" }}>{n.inOneSentence.en}</p>
        <p className="mt-1.5 text-[15px]" style={{ color: "color-mix(in srgb, var(--page) 70%, var(--ink))" }}>
          {n.inOneSentence.exampleHr} <TtsButton text={n.inOneSentence.exampleHr} className="ml-1" />
        </p>
      </section>

      {n.deepDive.map((d, i) => (
        <section key={i} className="mt-10">
          <SectionH>{d.title}</SectionH>
          <Markdown text={d.body} className="reading mt-2.5 text-[16px] leading-[1.75]" />
          {d.table && <div className="mt-4"><ContentTable table={d.table} /></div>}
          {d.diagram && <div className="mt-4"><DiagramView diagram={d.diagram} /></div>}
        </section>
      ))}

      <section className="mt-12">
        <SectionH>Lesson vocabulary</SectionH>
        <div className="mt-3 divide-y divide-[rgba(var(--ink-rgb),.07)]">
          {lesson.vocab.map((v) => (
            <div key={v.id} className="flex items-baseline gap-4 py-3">
              <span className="flex min-w-0 flex-[1.1] items-baseline gap-2">
                {v.gender && <span className={`inline-block h-2 w-2 flex-none translate-y-[-1px] rounded-full ${GENDER_COLORS[v.gender]}`} title={v.gender} />}
                {/* alt="" on purpose: the Croatian and English columns of this same
                    row already carry the meaning; the thumbnail is decoration. */}
                {v.image && <img src={v.image} alt="" className="h-6 w-6 flex-none rounded object-contain" />}
                <span className="truncate font-semibold" style={{ color: INK }}>{v.hr}</span>
                {v.gender && <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{v.gender}</span>}
                <TtsButton text={v.hr} />
              </span>
              <span className="min-w-0 flex-1 truncate text-[15px]" style={{ color: BODY2 }}>{v.en}</span>
              <span className="min-w-0 flex-[1.3] truncate text-[13px] max-[700px]:hidden" style={{ color: MUTED }}>
                {v.exampleHr} <TtsButton text={v.exampleHr} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionH>Common mistakes</SectionH>
        <div className="mt-3 divide-y divide-[rgba(var(--ink-rgb),.07)]">
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
      </section>

      <section className="mt-12">
        <SectionH>Memory hooks</SectionH>
        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed" style={{ color: BODY2 }}>
          {n.memoryHooks.map((h, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-none" style={{ color: "var(--muted3)" }}>—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {n.connects.length > 0 && (
        <section className="mt-12">
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

      <section className="mb-10 mt-12">
        <SectionH>Self-check</SectionH>
        <div className="mt-3">
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
        </div>
      </section>
    </article>
  );
}
