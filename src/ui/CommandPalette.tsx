/**
 * ⌘K — the app's keyboard spine. Jump to any page, unit, lesson, story or note
 * without touching the mouse. Opens over whatever you're doing (including a
 * lesson), filters as you type, Enter goes.
 *
 * Matching is deliberately dumb-but-predictable: every query token must appear
 * somewhere in the item's searchable text. Rank favours prefix hits on the
 * title so typing "u17" lands on Unit 17 rather than the first lesson that
 * happens to mention it. Diacritics are folded so "cistoca" finds "čistoća".
 */
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  ClipboardCheck,
  CornerDownLeft,
  GraduationCap,
  House,
  Layers,
  MessageCircle,
  NotebookText,
  Puzzle,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { allLessons, allUnits } from "@/content";
import { BODY2, DIVIDER, INK, Kbd, MUTED, SHADOW_FLOAT } from "./kit";

interface Item {
  id: string;
  label: string;
  hint: string;
  group: string;
  icon: LucideIcon;
  to: string;
  /** Lowercased, diacritic-folded haystack. */
  hay: string;
}

function fold(s: string): string {
  // NFD splits č into c + U+030C; đ has no decomposition, so it's mapped by hand.
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[đĐ]/g, "d").toLowerCase();
}

function buildItems(): Item[] {
  const mk = (i: Omit<Item, "hay">): Item => ({ ...i, hay: fold(`${i.label} ${i.hint} ${i.group}`) });

  const pages: Item[] = [
    mk({ id: "p-home", label: "Home", hint: "Today's session", group: "Go to", icon: House, to: "/" }),
    mk({ id: "p-course", label: "Course", hint: "The whole curriculum", group: "Go to", icon: GraduationCap, to: "/course" }),
    mk({ id: "p-practice", label: "Practice", hint: "Drills, writing, reading", group: "Go to", icon: Puzzle, to: "/practice" }),
    mk({ id: "p-review", label: "Review", hint: "Flashcards due today", group: "Go to", icon: Layers, to: "/review" }),
    mk({ id: "p-stories", label: "Stories", hint: "The graded reader", group: "Go to", icon: BookOpen, to: "/stories" }),
    mk({ id: "p-notes", label: "Notes", hint: "Your grammar book", group: "Go to", icon: NotebookText, to: "/notes" }),
    mk({ id: "p-tutor", label: "Tutor", hint: "Ask Claude in Croatian", group: "Go to", icon: MessageCircle, to: "/tutor" }),
    mk({ id: "p-settings", label: "Settings", hint: "Key, theme, voice, data", group: "Go to", icon: Settings, to: "/settings" }),
  ];

  const units: Item[] = allUnits.map((u) =>
    mk({
      id: `u-${u.id}`,
      label: `Unit ${u.number} — ${u.title}`,
      hint: `${u.levelId} · ${u.titleEn}`,
      group: "Units",
      icon: GraduationCap,
      to: `/course#${u.id}`,
    }),
  );

  const lessons: Item[] = allLessons.map((l) =>
    mk({
      id: `l-${l.id}`,
      label: l.title,
      hint: `${l.unitId.toUpperCase()} · ${l.titleEn ?? "Lesson"}`,
      group: "Lessons",
      icon: GraduationCap,
      to: `/lesson/${l.id}`,
    }),
  );

  const notes: Item[] = allLessons.map((l) =>
    mk({
      id: `n-${l.id}`,
      label: `Notes — ${l.title}`,
      hint: l.unitId.toUpperCase(),
      group: "Notes",
      icon: NotebookText,
      to: `/notes/${l.id}`,
    }),
  );

  const stories: Item[] = allUnits.map((u) =>
    mk({
      id: `s-${u.story.id}`,
      label: u.story.title,
      hint: `${u.levelId} · Unit ${u.number} · ${u.story.titleEn}`,
      group: "Stories",
      icon: BookOpen,
      to: `/story/${u.story.id}`,
    }),
  );

  const tests: Item[] = allUnits.map((u) =>
    mk({
      id: `t-${u.test.id}`,
      label: `Unit ${u.number} test — ${u.title}`,
      hint: u.levelId,
      group: "Tests",
      icon: ClipboardCheck,
      to: `/test/${u.test.id}`,
    }),
  );

  return [...pages, ...units, ...lessons, ...stories, ...notes, ...tests];
}

function score(item: Item, tokens: string[]): number {
  let s = 0;
  for (const t of tokens) {
    const at = item.hay.indexOf(t);
    if (at < 0) return -1;
    s += at === 0 ? 3 : at < 12 ? 2 : 1;
  }
  return s;
}

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const items = useMemo(buildItems, []);

  // Every open starts clean — a stale query is never what you meant.
  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
    }
  }, [open]);

  const results = useMemo(() => {
    const tokens = fold(q).split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return items.filter((i) => i.group === "Go to");
    return items
      .map((i) => ({ i, s: score(i, tokens) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 40)
      .map((r) => r.i);
  }, [q, items]);

  useEffect(() => setSel(0), [q]);

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-sel="true"]')?.scrollIntoView({ block: "nearest" });
  }, [sel, results]);

  if (!open) return null;

  const go = (item: Item) => {
    onClose();
    // Unit links are a hash on /course; react-router's HashRouter owns the URL
    // hash, so scroll-to-unit is handled by CoursePage reading the state.
    if (item.to.includes("#")) {
      const [path, hash] = item.to.split("#");
      nav(path, { state: { unitId: hash } });
    } else {
      nav(item.to);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[sel];
      if (item) go(item);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center bg-black/25 px-4 pt-[12vh]"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="flex h-fit max-h-[62vh] w-full max-w-[600px] flex-col overflow-hidden rounded-xl border bg-[color:var(--card)]"
        style={{ borderColor: "rgba(var(--ink-rgb),.12)", boxShadow: SHADOW_FLOAT }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex flex-none items-center gap-3 border-b px-4" style={{ borderColor: DIVIDER }}>
          <Search size={16} color={MUTED} strokeWidth={2} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Jump to a lesson, story, unit or page…"
            aria-label="Search the course"
            className="h-12 min-w-0 flex-1 border-none bg-transparent text-[15px] outline-none"
            style={{ color: INK }}
          />
          <Kbd>esc</Kbd>
        </div>

        <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto py-1.5">
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm" style={{ color: MUTED }}>
              Nothing matches “{q}”.
            </p>
          )}
          {results.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            const on = i === sel;
            const Icon = item.icon;
            return (
              <div key={item.id}>
                {header && <div className="meta px-4 pb-1 pt-3" style={{ color: "var(--muted3)" }}>{header}</div>}
                <button
                  data-sel={on}
                  onMouseMove={() => setSel(i)}
                  onClick={() => go(item)}
                  className="flex w-full items-center gap-3 px-4 py-2 text-left"
                  style={{ background: on ? "rgba(var(--ink-rgb),.06)" : "transparent" }}
                >
                  <Icon size={15} color={on ? INK : MUTED} strokeWidth={1.9} className="flex-none" />
                  <span className="min-w-0 flex-1 truncate text-sm" style={{ color: INK, fontWeight: on ? 600 : 450 }}>
                    {item.label}
                  </span>
                  <span className="meta flex-none truncate max-[600px]:hidden" style={{ color: "var(--muted3)" }}>
                    {item.hint}
                  </span>
                  {on && <CornerDownLeft size={13} color={MUTED} className="flex-none" />}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-none items-center gap-4 border-t px-4 py-2" style={{ borderColor: DIVIDER }}>
          <span className="flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
            <Kbd>↑</Kbd><Kbd>↓</Kbd> navigate
          </span>
          <span className="flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
            <Kbd>Enter</Kbd> open
          </span>
          <span className="ml-auto text-[11px]" style={{ color: BODY2 }}>{results.length} result{results.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  );
}
