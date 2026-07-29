/**
 * Stories — the graded-reader library as a list. Rows carry the level/unit,
 * length and read status; the next unread story on the path is tagged "Next".
 * CroLearn tracks whole read-throughs, not scroll position.
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { allUnits } from "@/content";
import { db, type StoryProgressRow } from "@/lib/db";
import { ACCENT, BODY2, Divider, INK, Meta, MUTED, PageHeader, StatChip, StatRow } from "@/ui/kit";

const FILTERS = ["All", "A1", "A2", "B1", "B2"] as const;

function words(paragraphs: { hr: string }[]): number {
  return paragraphs.reduce((s, p) => s + p.hr.split(/\s+/).filter(Boolean).length, 0);
}

export default function StoriesPage() {
  const nav = useNavigate();
  const [progress, setProgress] = useState<Map<string, StoryProgressRow>>(new Map());
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  useEffect(() => {
    void db.storyProgress.toArray().then((rows) => setProgress(new Map(rows.map((r) => [r.storyId, r]))));
  }, []);

  const stories = useMemo(
    () =>
      allUnits.map((u) => {
        const w = words(u.story.paragraphs);
        return {
          id: u.story.id,
          title: u.story.title,
          titleEn: u.story.titleEn,
          levelId: u.levelId,
          unitNumber: u.number,
          words: w,
          readMin: Math.max(1, Math.round(w / 110)),
          row: progress.get(u.story.id),
        };
      }),
    [progress],
  );

  const next = stories.find((s) => !s.row);
  const readCount = stories.filter((s) => s.row).length;
  const avgScore = readCount > 0 ? Math.round(stories.filter((s) => s.row).reduce((sum, s) => sum + (s.row!.scorePct || 0), 0) / readCount) : null;
  const visible = stories.filter((s) => filter === "All" || s.levelId === filter);
  const shownFilters = FILTERS.filter((f) => f === "All" || stories.some((s) => s.levelId === f));

  return (
    <div>
      <PageHeader
        title="Stories"
        sub={`${readCount} of ${stories.length} read`}
        right={
          <div className="flex gap-4">
            {shownFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                /* Padding grows the target to the 24px WCAG 2.5.8 minimum
                   ("A1" is 15x17 of text); the equal negative margin keeps the
                   rendered layout pixel-identical. */
                className="meta -mx-1.5 -my-1.5 px-1.5 py-1.5 transition-colors duration-100"
                style={{ color: filter === f ? INK : "var(--muted3)" }}
              >
                {f}
              </button>
            ))}
          </div>
        }
      />

      <div className="mt-10">
        {visible.map((s, i) => (
          <div key={s.id}>
            {i > 0 && <Divider />}
            <button
              onClick={() => nav(`/story/${s.id}`)}
              className="group flex w-full items-center gap-5 py-4 text-left"
            >
              <span className="meta w-20 flex-none tabular-nums" style={{ color: "var(--muted3)" }}>
                {s.levelId} · U{s.unitNumber}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline gap-2.5">
                  <span className="truncate text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>{s.title}</span>
                  {next?.id === s.id && <Meta className="flex-none" style={{ color: ACCENT }}>Next</Meta>}
                </span>
                <span className="mt-0.5 flex items-baseline gap-2.5">
                  <span className="truncate text-[13px]" style={{ color: MUTED }}>{s.titleEn}</span>
                  <span className="meta flex-none max-[600px]:hidden" style={{ color: "var(--muted3)" }}>
                    {s.readMin} min · {s.words} words
                  </span>
                </span>
              </span>
              <span className="flex flex-none items-center gap-2">
                {s.row ? (
                  <>
                    <Check size={14} color="var(--green)" strokeWidth={2.4} />
                    <span className="meta tabular-nums" style={{ color: "var(--green)" }}>{s.row.scorePct}%</span>
                  </>
                ) : (
                  <ArrowRight size={14} color={MUTED} className="opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                )}
              </span>
            </button>
          </div>
        ))}
      </div>

      <section className="mt-14">
        <Divider className="mb-6" />
        <StatRow>
          <StatChip value={`${readCount}/${stories.length}`} label="Stories read" />
          {avgScore !== null && <StatChip value={`${avgScore}%`} label="Avg comprehension" />}
          <StatChip value={String(stories.reduce((sum, s) => sum + s.words, 0))} label="Words available" />
        </StatRow>
      </section>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm" style={{ color: BODY2 }}>No stories at this level yet.</p>
      )}
    </div>
  );
}
