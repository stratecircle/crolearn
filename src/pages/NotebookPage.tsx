/**
 * Notes — the index over CroLearn's lesson NotesDocs, read as the course's
 * table of contents: units as sections, lessons as rows. No user-authored
 * notes exist, so there is no "New note", starring or trash.
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { levels } from "@/content";
import { db } from "@/lib/db";
import { Divider, EmptyState, INK, Meta, MUTED, PageHeader, SearchBox } from "@/ui/kit";

interface NoteRow {
  lessonId: string;
  title: string;
  blurb: string;
  levelId: string;
  unitLabel: string;
  unitTitle: string;
  tags: string[];
  completedAt?: Date;
}

const CATS = ["All", "Studied", "Not yet"] as const;

export default function NotebookPage() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const [completed, setCompleted] = useState<Map<string, Date>>(new Map());
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");

  useEffect(() => {
    void db.lessonProgress.toArray().then((rows) => setCompleted(new Map(rows.map((r) => [r.lessonId, r.completedAt]))));
  }, []);

  const all = useMemo<NoteRow[]>(
    () =>
      levels.flatMap((level) =>
        level.units.flatMap((unit) =>
          unit.lessons.map((l) => ({
            lessonId: l.id,
            title: l.title,
            blurb: l.titleEn,
            levelId: level.id,
            unitLabel: `${level.id} · Unit ${unit.number}`,
            unitTitle: unit.title,
            tags: l.grammarTags.slice(0, 3),
            completedAt: completed.get(l.id),
          })),
        ),
      ),
    [completed],
  );

  const needle = q.trim().toLowerCase();
  const notes = all
    .filter((n) => (cat === "Studied" ? !!n.completedAt : cat === "Not yet" ? !n.completedAt : true))
    .filter((n) => !needle || `${n.title} ${n.blurb} ${n.tags.join(" ")} ${n.unitLabel}`.toLowerCase().includes(needle));

  const studied = all.filter((n) => n.completedAt).length;

  return (
    <div>
      <PageHeader
        title="Notes"
        sub={`${studied} of ${all.length} lessons studied`}
        right={
          <div className="flex gap-4">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                /*
                 * The padding/negative-margin pair grows the pointer target to
                 * the WCAG 2.5.8 24px minimum ("All" is only 22x17 of text)
                 * while the equal negative margin keeps the rendered layout
                 * pixel-identical.
                 */
                className="meta -mx-1.5 -my-1.5 px-1.5 py-1.5 transition-colors duration-100"
                style={{ color: cat === c ? INK : "var(--muted3)" }}
              >
                {c}
              </button>
            ))}
          </div>
        }
      />

      <div className="mt-8 flex">
        <SearchBox value={q} onChange={setQ} placeholder="Search notes…" />
      </div>

      {notes.length === 0 ? (
        <div className="mt-10">
          <EmptyState title="No notes found" sub="Nothing matches your search — try different keywords." />
        </div>
      ) : (
        <div className="mt-10">
          {notes.map((n, i) => {
            const newGroup = i === 0 || notes[i - 1].unitLabel !== n.unitLabel;
            return (
              <div key={n.lessonId}>
                {newGroup ? (
                  <div className={`flex items-baseline gap-3 ${i === 0 ? "mb-1" : "mb-1 mt-10"}`}>
                    <Meta>{n.unitLabel}</Meta>
                    <span className="text-[13px]" style={{ color: MUTED }}>{n.unitTitle}</span>
                  </div>
                ) : (
                  <Divider />
                )}
                <button
                  onClick={() => nav(`/notes/${n.lessonId}`)}
                  className="group flex w-full items-center gap-4 py-3.5 text-left"
                >
                  <span className="flex h-4 w-4 flex-none items-center justify-center" aria-label={n.completedAt ? "Studied" : "Not studied yet"}>
                    {n.completedAt ? (
                      <Check size={14} color="var(--green)" strokeWidth={2.6} />
                    ) : (
                      <span className="h-3.5 w-3.5 rounded-full border" style={{ borderColor: "rgba(var(--ink-rgb),.18)" }} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline gap-2.5">
                      <span className="truncate text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>{n.title}</span>
                      <span className="truncate text-[13px] max-[700px]:hidden" style={{ color: MUTED }}>{n.blurb}</span>
                    </span>
                  </span>
                  {n.tags.length > 0 && (
                    <span className="meta flex-none truncate max-[900px]:hidden" style={{ color: "var(--muted3)" }}>
                      {n.tags.join(" · ")}
                    </span>
                  )}
                  <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
