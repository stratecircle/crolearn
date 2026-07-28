/**
 * Notes — Nativ notes screen (README §Screens 4) over CroLearn's lesson
 * NotesDocs. Adjust-if-absent: no user-authored notes exist, so "New Note",
 * stars and "Recently Deleted" are hidden; categories map to real study state
 * and notebooks map to levels.
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpenCheck, Check, FileText, Folder, LayoutGrid, List, Repeat, Search, SquarePen } from "lucide-react";
import { levels } from "@/content";
import { db } from "@/lib/db";
import { BODY, BODY2, Card, H, INK, LEVEL_COLORS, MUTED, RED, tint } from "@/ui/kit";

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

/** One note row/card: level-colored monogram, calm tags, check when studied. */
function NoteCard({ n, grid = false, onOpen }: { n: NoteRow; grid?: boolean; onOpen: () => void }) {
  const color = LEVEL_COLORS[n.levelId] ?? RED;
  return (
    <button
      onClick={onOpen}
      className={`flex w-full gap-4 rounded-2xl border bg-[color:var(--card)] p-4 text-left shadow-[0_1px_2px_rgba(var(--shadow-rgb),.03)] transition-all duration-[180ms] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(var(--shadow-rgb),.07)] ${grid ? "flex-col p-5" : "items-center"}`}
      style={{ borderColor: "rgba(var(--ink-rgb),.06)" }}
    >
      <div
        className="flex h-11 w-11 flex-none items-center justify-center rounded-xl"
        style={{ background: `linear-gradient(135deg, ${tint(color, 0.14)}, ${tint(color, 0.05)})` }}
      >
        <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 19, color }}>{n.title.charAt(0)}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2.5">
          <span className="truncate text-[15px] font-semibold" style={{ color: "var(--ink)", letterSpacing: "-.01em" }}>{n.title}</span>
          <span className={`truncate text-[13px] ${grid ? "hidden" : "max-[900px]:hidden"}`} style={{ color: MUTED }}>{n.blurb}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1.5">
          {grid && <span className="mr-1 text-xs" style={{ color: MUTED }}>{n.unitLabel}</span>}
          {n.tags.map((t) => (
            <span key={t} className="rounded-md px-2 py-[3px] text-[11px]" style={{ background: "rgba(var(--ink-rgb),.045)", color: "var(--body2)" }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-none items-center" aria-label={n.completedAt ? "Studied" : "Not studied yet"}>
        {n.completedAt ? (
          <span className="flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "rgba(var(--green-rgb),.12)" }}>
            <Check size={13} color="var(--green)" />
          </span>
        ) : (
          <span className="h-6 w-6 rounded-full" style={{ border: "2px solid rgba(var(--ink-rgb),.1)" }} />
        )}
      </div>
    </button>
  );
}

export default function NotebookPage() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const [completed, setCompleted] = useState<Map<string, Date>>(new Map());
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState<"All Notes" | "Studied" | "Not yet studied">("All Notes");
  const [book, setBook] = useState<string | null>(null);
  const [view, setView] = useState<"list" | "grid">("list");

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
    .filter((n) => (cat === "Studied" ? !!n.completedAt : cat === "Not yet studied" ? !n.completedAt : true))
    .filter((n) => !book || n.levelId === book)
    .filter((n) => !needle || `${n.title} ${n.blurb} ${n.tags.join(" ")} ${n.unitLabel}`.toLowerCase().includes(needle));

  const cats = [
    { label: "All Notes" as const, icon: FileText, count: all.length },
    { label: "Studied" as const, icon: BookOpenCheck, count: all.filter((n) => n.completedAt).length },
    { label: "Not yet studied" as const, icon: SquarePen, count: all.filter((n) => !n.completedAt).length },
  ];

  return (
    <div>
      <H size={26} className="mb-5">My Notes</H>
      <div className="grid grid-cols-[300px_minmax(0,1fr)] items-start gap-6 max-[1200px]:grid-cols-[240px_minmax(0,1fr)] max-[700px]:grid-cols-1">
        {/* Sidebar */}
        <Card className="p-5">
          <div className="mb-5 grid gap-0.5">
            {cats.map((c) => {
              const on = cat === c.label;
              return (
                <button
                  key={c.label}
                  onClick={() => setCat(c.label)}
                  className="flex items-center gap-3 rounded-xl px-3.5 py-[11px] text-left text-sm transition-colors duration-[180ms]"
                  style={{ background: on ? "rgba(var(--primary-rgb),.07)" : "transparent", color: on ? RED : BODY, fontWeight: on ? 500 : 400 }}
                >
                  <c.icon size={17} color={on ? RED : MUTED} />
                  <div className="min-w-0 flex-1">{c.label}</div>
                  <div className="text-[13px]" style={{ color: on ? RED : MUTED }}>{c.count}</div>
                </button>
              );
            })}
          </div>
          <div className="mb-[18px] h-px" style={{ background: "rgba(var(--ink-rgb),.06)" }} />
          <div className="mb-2.5 px-3.5 text-sm font-semibold" style={{ color: INK }}>Notebooks</div>
          <div className="mb-[22px] grid gap-0.5">
            {levels
              .filter((l) => l.units.length > 0)
              .map((l) => {
                const count = all.filter((n) => n.levelId === l.id).length;
                const on = book === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => setBook(on ? null : l.id)}
                    className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors duration-[180ms] hover:bg-[rgba(var(--ink-rgb),.03)]"
                    style={{ color: on ? RED : BODY, fontWeight: on ? 500 : 400 }}
                  >
                    <Folder size={17} color={on ? RED : MUTED} />
                    <div className="min-w-0 flex-1">{l.title}</div>
                    <div className="text-[13px]" style={{ color: MUTED }}>{count}</div>
                  </button>
                );
              })}
          </div>
          <div className="rounded-2xl border p-5" style={{ background: "var(--tint2)", borderColor: "rgba(var(--green-rgb),.12)" }}>
            <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(var(--green-rgb),.11)" }}>
              <Repeat size={20} color="var(--green)" />
            </div>
            <div className="mb-1.5 text-base font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>Review smarter</div>
            <div className="mb-4 text-sm leading-relaxed" style={{ color: BODY2 }}>Revisit your notes with spaced repetition.</div>
            <button
              onClick={() => nav("/review")}
              className="inline-flex h-[42px] items-center gap-2 rounded-xl border bg-[color:var(--card)] px-[18px] text-sm font-medium transition-colors duration-[180ms] hover:bg-[color:var(--tint)]"
              style={{ borderColor: "rgba(var(--ink-rgb),.1)", color: INK }}
            >
              Start review<ArrowRight size={16} color={MUTED} />
            </button>
          </div>
        </Card>

        {/* Main */}
        <Card className="p-[26px]">
          <div className="mb-[22px] flex items-center gap-3.5 max-[700px]:flex-wrap">
            <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border bg-[color:var(--card)] px-[18px]" style={{ borderColor: "rgba(var(--ink-rgb),.09)" }}>
              <Search size={18} color={MUTED} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search notes…"
                className="min-w-0 flex-1 border-none bg-transparent text-[15px] outline-none"
                style={{ color: INK }}
              />
            </div>
            <div className="flex flex-none rounded-xl p-1" style={{ background: "var(--tint3)" }}>
              {(["list", "grid"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  aria-label={`${v} view`}
                  className="flex h-9 w-[38px] items-center justify-center rounded-[9px]"
                  style={view === v ? { background: "var(--card)", color: INK, boxShadow: "0 1px 3px rgba(var(--shadow-rgb),.1)" } : { color: MUTED }}
                >
                  {v === "list" ? <List size={17} /> : <LayoutGrid size={17} />}
                </button>
              ))}
            </div>
          </div>

          {notes.length === 0 ? (
            <div className="rounded-2xl border border-dashed px-6 py-14 text-center" style={{ borderColor: "rgba(var(--ink-rgb),.12)" }}>
              <div className="mb-1.5 text-base font-semibold" style={{ color: INK }}>No notes found</div>
              <div className="text-sm" style={{ color: MUTED }}>Nothing matches your search or this category — try different keywords.</div>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {notes.map((n) => (
                <NoteCard key={n.lessonId} n={n} grid onOpen={() => nav(`/notes/${n.lessonId}`)} />
              ))}
            </div>
          ) : (
            // List view groups by unit — the notebook reads like the course's table of contents.
            <div className="grid gap-2">
              {notes.map((n, i) => {
                const newGroup = i === 0 || notes[i - 1].unitLabel !== n.unitLabel;
                const color = LEVEL_COLORS[n.levelId] ?? RED;
                const groupCount = notes.filter((x) => x.unitLabel === n.unitLabel).length;
                return (
                  <div key={n.lessonId}>
                    {newGroup && (
                      <div className={`flex items-baseline gap-3 px-1 ${i === 0 ? "mb-2" : "mb-2 mt-5"}`}>
                        <span className="rounded-md px-2 py-0.5 text-[11px] font-bold" style={{ background: tint(color, 0.1), color, letterSpacing: ".05em" }}>{n.unitLabel.toUpperCase()}</span>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 16, color: INK }}>{n.unitTitle}</span>
                        <span className="text-xs" style={{ color: MUTED }}>{groupCount} {groupCount === 1 ? "note" : "notes"}</span>
                      </div>
                    )}
                    <NoteCard n={n} onOpen={() => nav(`/notes/${n.lessonId}`)} />
                  </div>
                );
              })}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
