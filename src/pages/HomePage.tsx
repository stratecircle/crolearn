/**
 * Home — "today", nothing else. One primary action (the next step on the
 * path), a three-item session checklist, and a quiet stats line. The full
 * curriculum lives on /course.
 */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { BODY2, BtnPrimary, Divider, INK, Meta, MUTED, PageHeader, StatChip, StatRow } from "@/ui/kit";
import { loadNativProgress, stepLink, type NativProgress } from "@/features/nativ/stats";

const KIND_LABEL: Record<string, string> = {
  lesson: "Next lesson",
  story: "Next up — story",
  test: "Next up — unit test",
  checkpoint: "Next up — checkpoint exam",
};

function dateLine(): string {
  return new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
}

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
  useEffect(() => {
    void loadNativProgress().then(setP);
  }, []);
  if (!p) return null;

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
    {
      label: "Strengthen",
      sub: "A drill, a story or some writing",
      done: false,
      to: "/practice",
    },
  ];

  return (
    <div>
      <PageHeader eyebrow={dateLine()} title={`${greeting()}, Noah.`} />

      {/* The one primary action. */}
      <section className="mt-12">
        {p.next ? (
          <div className="flex items-end justify-between gap-6 max-[600px]:flex-col max-[600px]:items-start">
            <div className="min-w-0">
              <Meta className="mb-2">{KIND_LABEL[p.next.kind]}</Meta>
              <div className="text-xl font-bold" style={{ color: INK, letterSpacing: "-.02em" }}>{p.next.title}</div>
              <div className="mt-1 text-sm" style={{ color: BODY2 }}>
                {p.nextLesson?.unitLabel}
                {p.nextLesson?.titleEn && <> · {p.nextLesson.titleEn}</>}
                {p.nextLesson?.estMinutes && <> · about {p.nextLesson.estMinutes} min</>}
              </div>
            </div>
            <BtnPrimary icon={ArrowRight} onClick={() => nav(stepLink(p.next!))}>
              {p.next.kind === "lesson" ? "Continue" : p.next.kind === "story" ? "Read" : "Start"}
            </BtnPrimary>
          </div>
        ) : (
          <div className="flex items-end justify-between gap-6">
            <div>
              <Meta className="mb-2">Course</Meta>
              <div className="text-xl font-bold" style={{ color: INK, letterSpacing: "-.02em" }}>Everything built so far is done.</div>
              <div className="mt-1 text-sm" style={{ color: BODY2 }}>Review keeps it fresh while the course grows.</div>
            </div>
            <BtnPrimary icon={ArrowRight} onClick={() => nav("/review")}>Review</BtnPrimary>
          </div>
        )}
      </section>

      {/* Today's session — a checklist, not a widget. */}
      <section className="mt-14">
        <div className="flex items-baseline justify-between">
          <Meta>Today's session</Meta>
          <Meta style={{ color: "var(--muted3)" }}>{s.minutesToday} min today</Meta>
        </div>
        <div className="mt-3">
          {steps.map((st, i) => (
            <div key={st.label}>
              {i > 0 && <Divider />}
              <button
                onClick={() => nav(st.to)}
                className="group flex w-full items-center gap-4 py-3.5 text-left transition-colors duration-100"
              >
                <span
                  className="flex h-5 w-5 flex-none items-center justify-center rounded-full border"
                  style={st.done ? { background: "var(--green)", borderColor: "var(--green)" } : { borderColor: "rgba(var(--ink-rgb),.22)" }}
                >
                  {st.done && <Check size={12} color="#fff" strokeWidth={3} />}
                </span>
                <span className="w-28 flex-none text-sm font-semibold" style={{ color: INK }}>{st.label}</span>
                <span className="min-w-0 flex-1 truncate text-sm" style={{ color: st.done ? MUTED : BODY2 }}>{st.sub}</span>
                <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
              </button>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
          A day counts toward your streak once Review and Learn are done.
        </p>
      </section>

      {/* The numbers, quietly. */}
      <section className="mt-16">
        <Divider className="mb-6" />
        <StatRow>
          <StatChip value={String(s.dayStreak)} label="Day streak" />
          <StatChip value={String(s.longestStreak)} label="Longest" />
          <StatChip value={String(s.wordsLearned)} label="Words" />
          {s.timePracticed && <StatChip value={s.timePracticed} label="Studied" />}
        </StatRow>
      </section>
    </div>
  );
}
