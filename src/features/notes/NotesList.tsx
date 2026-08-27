/**
 * The Notes index pane — the left half of the two-pane notes browser.
 *
 * Both /notes and /notes/:lessonId mount this same component, so opening a
 * note never loses the table of contents. It owns its own search/filter state
 * and its own Dexie lookup; the only thing a page tells it is which row is
 * currently open.
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";
import { levels } from "@/content";
import { db } from "@/lib/db";
import { DIVIDER, INK, Meta, MUTED, SearchBox } from "@/ui/kit";

export interface NoteRow {
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

/**
 * Every lesson in course order, stamped with its completion date. Shared by the
 * list pane and by NotebookPage (which needs the counts for its View header).
 */
export function useNotesIndex(): NoteRow[] {
  const [completed, setCompleted] = useState<Map<string, Date>>(new Map());

  useEffect(() => {
    void db.lessonProgress.toArray().then((rows) => setCompleted(new Map(rows.map((r) => [r.lessonId, r.completedAt]))));
  }, []);

  return useMemo<NoteRow[]>(
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
}

export default function NotesList({ selectedId }: { selectedId?: string }) {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const all = useNotesIndex();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");

  const needle = q.trim().toLowerCase();
  const notes = all
    .filter((n) => (cat === "Studied" ? !!n.completedAt : cat === "Not yet" ? !n.completedAt : true))
    .filter((n) => !needle || `${n.title} ${n.blurb} ${n.tags.join(" ")} ${n.unitLabel}`.toLowerCase().includes(needle));

  // The query rides along into the detail route so the index a note was opened
  // from is still the index when you come back to it.
  const qs = q.trim() ? `?q=${encodeURIComponent(q.trim())}` : "";

  return (
    <div className="pb-10">
      <div
        className="sticky top-0 z-10 border-b bg-[color:var(--page)] px-3 py-3"
        style={{ borderColor: DIVIDER }}
      >
        <div className="flex">
          <SearchBox value={q} onChange={setQ} placeholder="Search notes…" />
        </div>
        <div className="mt-2.5 flex gap-4 pl-1.5">
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
      </div>

      {notes.length === 0 ? (
        <p className="px-4 py-10 text-center text-[13px]" style={{ color: MUTED }}>
          Nothing matches your search.
        </p>
      ) : (
        notes.map((n, i) => {
          const newGroup = i === 0 || notes[i - 1].unitLabel !== n.unitLabel;
          const selected = n.lessonId === selectedId;
          return (
            <div key={n.lessonId}>
              {newGroup && (
                <div className={`flex items-baseline gap-2.5 px-3 pb-1 ${i === 0 ? "pt-4" : "pt-7"}`}>
                  <Meta className="flex-none">{n.unitLabel}</Meta>
                  <span className="truncate text-[12px]" style={{ color: MUTED }}>{n.unitTitle}</span>
                </div>
              )}
              <button
                onClick={() => nav(`/notes/${n.lessonId}${qs}`)}
                aria-current={selected ? "true" : undefined}
                className="flex w-full items-start gap-2.5 px-3 py-2 text-left transition-colors duration-100 hover:bg-[color:var(--tint)]"
                style={selected ? { background: "rgba(var(--ink-rgb),.06)" } : undefined}
              >
                <span
                  className="mt-[3px] flex h-4 w-4 flex-none items-center justify-center"
                  aria-label={n.completedAt ? "Studied" : "Not studied yet"}
                >
                  {n.completedAt ? (
                    <Check size={14} color="var(--green)" strokeWidth={2.6} />
                  ) : (
                    <span className="h-3.5 w-3.5 rounded-full border" style={{ borderColor: "rgba(var(--ink-rgb),.18)" }} />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13.5px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>
                    {n.title}
                  </span>
                  <span className="mt-0.5 block truncate text-[12px]" style={{ color: MUTED }}>{n.blurb}</span>
                </span>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
