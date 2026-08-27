/**
 * Stories — the graded-reader library, as a library rather than a list.
 *
 * The next unread story takes a full-width hero card at the top (⏎ opens it);
 * everything else is a grid of cover tiles. Cover art is not decoration bought
 * from stock: each story borrows the first picture from its own unit's
 * vocabulary, so the image on a story is literally a word it teaches. Units
 * whose vocab has no pictures fall back to a large muted initial — never an
 * empty box.
 *
 * CroLearn tracks whole read-throughs, not scroll position, so a tile shows
 * either a green comprehension score or "New".
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { allUnits } from "@/content";
import { db, type StoryProgressRow } from "@/lib/db";
import { useHotkeys } from "@/lib/hotkeys";
import { ACCENT, BODY2, BtnPrimary, Card, Divider, GREEN, INK, Kbd, Meta, MUTED, StatChip, StatRow, View, ViewBody } from "@/ui/kit";

const FILTERS = ["All", "A1", "A2", "B1", "B2"] as const;

/** Entrance stagger, one step per grid row. */
const ROW_RISE = ["rise-2", "rise-3", "rise-4", "rise-5"] as const;

function words(paragraphs: { hr: string }[]): number {
  return paragraphs.reduce((s, p) => s + p.hr.split(/\s+/).filter(Boolean).length, 0);
}

/**
 * A story's cover: the picture on a tint tile, or the title's initial when the
 * unit's vocabulary is still picture-less.
 */
function Cover({ src, title, className = "", initialSize = 34 }: { src?: string; title: string; className?: string; initialSize?: number }) {
  return (
    <div className={`flex flex-none items-center justify-center overflow-hidden ${className}`} style={{ background: "var(--tint)" }}>
      {src ? (
        <img src={src} alt="" className="h-full w-full object-contain p-3" />
      ) : (
        <span
          className="font-bold leading-none"
          style={{ fontSize: initialSize, letterSpacing: "-.03em", color: "rgba(var(--ink-rgb),.16)" }}
        >
          {title.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
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
          // The story's own unit teaches these words — take the first that came
          // with a picture as the cover.
          cover: u.lessons.flatMap((l) => l.vocab).find((v) => v.image)?.image,
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
  const totalWords = stories.reduce((sum, s) => sum + s.words, 0);

  // The hero only leads the page when the current filter actually shows it.
  const hero = next && visible.some((s) => s.id === next.id) ? next : null;
  const tiles = visible.filter((s) => s.id !== hero?.id);

  useHotkeys(
    {
      enter: () => {
        if (hero) nav(`/story/${hero.id}`);
      },
    },
    [hero, nav],
  );

  return (
    <View
      title="Stories"
      sub={`${readCount} of ${stories.length} read`}
      actions={
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
    >
      <ViewBody wide>
        {/* ── the next unread story, as a real object ─────────────────────── */}
        {hero && (
          <Card className="rise rise-1 overflow-hidden">
            <div className="flex items-center gap-6 p-6 max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-4">
              <Cover src={hero.cover} title={hero.title} className="h-[104px] w-[104px] rounded-lg" initialSize={40} />
              <div className="min-w-0 flex-1">
                <Meta className="mb-1.5">Next story</Meta>
                <div className="text-[20px] font-bold leading-tight" style={{ color: INK, letterSpacing: "-.02em" }}>
                  {hero.title}
                </div>
                <div className="mt-1 text-[13.5px]" style={{ color: BODY2 }}>{hero.titleEn}</div>
                <div className="meta mt-2.5 tabular-nums" style={{ color: "var(--muted3)" }}>
                  {hero.levelId} · Unit {hero.unitNumber} · {hero.readMin} min · {hero.words} words
                </div>
              </div>
              <div className="flex flex-none items-center gap-2.5">
                <BtnPrimary icon={ArrowRight} onClick={() => nav(`/story/${hero.id}`)}>Read</BtnPrimary>
                <span className="max-[700px]:hidden"><Kbd>Enter</Kbd></span>
              </div>
            </div>
          </Card>
        )}

        {/* ── the shelf ──────────────────────────────────────────────────── */}
        {tiles.length > 0 && (
          <div className={`grid grid-cols-3 gap-5 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1 ${hero ? "mt-5" : ""}`}>
            {tiles.map((s, i) => (
              /* The stagger lives on a wrapper: `.rise` fills forwards, so on
                 the card itself it would pin `transform` and cancel `.lift`. */
              <div key={s.id} className={`rise ${ROW_RISE[Math.min(ROW_RISE.length - 1, Math.floor(i / 3))]}`}>
                <Card lift className="overflow-hidden">
                  <button onClick={() => nav(`/story/${s.id}`)} className="block w-full text-left">
                    <Cover src={s.cover} title={s.title} className="aspect-[16/10] w-full" />
                    <div className="border-t p-4" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
                      <div className="truncate text-[15px] font-semibold" style={{ color: INK, letterSpacing: "-.01em" }}>{s.title}</div>
                      <div className="mt-0.5 truncate text-[13px]" style={{ color: MUTED }}>{s.titleEn}</div>
                      <div className="mt-3 flex items-baseline justify-between gap-3">
                        <span className="meta min-w-0 truncate tabular-nums" style={{ color: "var(--muted3)" }}>
                          {s.levelId} · U{s.unitNumber} · {s.readMin} min
                        </span>
                        {s.row ? (
                          <span className="flex flex-none items-center gap-1.5 self-center">
                            <Check size={13} color={GREEN} strokeWidth={2.6} />
                            <span className="meta tabular-nums" style={{ color: GREEN }}>{s.row.scorePct}%</span>
                          </span>
                        ) : (
                          <span className="meta flex-none" style={{ color: ACCENT }}>New</span>
                        )}
                      </div>
                    </div>
                  </button>
                </Card>
              </div>
            ))}
          </div>
        )}

        {visible.length === 0 && (
          <p className="mt-10 text-center text-sm" style={{ color: BODY2 }}>No stories at this level yet.</p>
        )}

        {/* ── the library's standing numbers ─────────────────────────────── */}
        {stories.length > 0 && (
          <div className="rise rise-5 mt-10">
            <Divider />
            <StatRow className="pt-5">
              <StatChip value={`${readCount}/${stories.length}`} label="Stories read" />
              <StatChip value={avgScore !== null ? `${avgScore}%` : "—"} label="Avg comprehension" />
              <StatChip value={totalWords.toLocaleString()} label="Words available" />
            </StatRow>
          </div>
        )}
      </ViewBody>
    </View>
  );
}
