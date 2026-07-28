/**
 * Stories — Nativ stories screen (README §Screens 5) over the real unit
 * stories. Adjust-if-absent: stories have no cover art, so cards use a
 * level-colored monogram tile instead of images; "Continue Reading" surfaces
 * the next unread story on the path (CroLearn tracks whole read-throughs,
 * not scroll position).
 */
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Clock, FileText, Trophy } from "lucide-react";
import { allUnits, allLessons } from "@/content";
import { db, type StoryProgressRow } from "@/lib/db";
import { BODY2, Card, CardH, Eyebrow, H, INK, LEVEL_COLORS, MUTED, ProgressBar, RED, Tile, tint } from "@/ui/kit";

const FILTERS = ["All Levels", "A1", "A2", "B1", "B2"] as const;

function words(paragraphs: { hr: string }[]): number {
  return paragraphs.reduce((s, p) => s + p.hr.split(/\s+/).filter(Boolean).length, 0);
}

export default function StoriesPage() {
  const nav = useNavigate();
  const [progress, setProgress] = useState<Map<string, StoryProgressRow>>(new Map());
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All Levels");
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
          color: LEVEL_COLORS[u.levelId] ?? RED,
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
  const visible = stories.filter((s) => filter === "All Levels" || s.levelId === filter);

  return (
    <div>
      <H size={26} className="mb-4">Stories</H>

      {next && (
        <Card className="mb-6 max-w-[660px] px-[26px] py-6" style={{ boxShadow: "0 2px 10px rgba(var(--shadow-rgb),.06)" }}>
          <Eyebrow className="mb-4">{readCount > 0 ? "NEXT STORY" : "START READING"}</Eyebrow>
          <div className="flex items-start gap-5 max-[700px]:flex-wrap">
            <div
              className="flex h-[130px] w-[150px] flex-none items-center justify-center rounded-xl"
              style={{ background: `linear-gradient(135deg, ${tint(next.color, 0.16)}, ${tint(next.color, 0.05)})` }}
            >
              <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 44, color: next.color }}>{next.title.replace(/[«»]/g, "").charAt(0)}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 23, color: INK }}>{next.title}</div>
              <div className="mb-[18px] text-sm leading-relaxed" style={{ color: BODY2 }}>{next.titleEn}</div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => nav(`/story/${next.id}`)}
                  className="inline-flex h-[46px] flex-none items-center gap-2 rounded-xl px-[22px] text-[15px] font-semibold text-white transition-colors duration-[180ms]"
                  style={{ background: RED }}
                >
                  Read<ArrowRight size={17} />
                </button>
                <div className="flex items-center gap-[18px] text-[13px]" style={{ color: MUTED }}>
                  <div className="flex items-center gap-[7px]"><BookOpen size={15} />{next.levelId} · Unit {next.unitNumber}</div>
                  <div className="flex items-center gap-[7px]"><Clock size={15} />{next.readMin} min read</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Card className="mb-7 p-[30px]">
        <CardH className="mb-5">Story Library</CardH>
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-full px-[18px] py-2.5 text-sm transition-colors duration-[180ms]"
                style={on ? { background: "#fff", border: "1px solid rgba(var(--primary-rgb),.35)", color: RED } : { border: "1px solid transparent", color: BODY2 }}
              >
                {f}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-3 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1">
          {visible.map((s) => {
            const pct = s.row ? 100 : 0;
            return (
              <button
                key={s.id}
                onClick={() => nav(`/story/${s.id}`)}
                className="overflow-hidden rounded-2xl border bg-[color:var(--card)] text-left shadow-[0_1px_2px_rgba(var(--shadow-rgb),.03)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_36px_rgba(var(--shadow-rgb),.08)]"
                style={{ borderColor: "rgba(var(--ink-rgb),.07)" }}
              >
                <div className="relative">
                  <div
                    className="flex h-[132px] w-full items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${tint(s.color, 0.16)}, ${tint(s.color, 0.05)})` }}
                  >
                    <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 40, color: s.color }}>{s.title.replace(/[«»]/g, "").charAt(0)}</span>
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-[color:var(--card)] px-3 py-1.5 text-[10px] font-bold" style={{ color: s.color, letterSpacing: ".05em" }}>
                    {s.levelId} · U{s.unitNumber}
                  </div>
                </div>
                <div className="p-[18px]">
                  <div className="mb-2" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 17, lineHeight: 1.25, color: INK }}>{s.title}</div>
                  <div className="mb-3.5 text-[13px] leading-normal" style={{ color: BODY2 }}>{s.titleEn}</div>
                  <div className="mb-3.5 flex gap-3.5 text-xs" style={{ color: MUTED }}>
                    <div className="flex items-center gap-1.5"><Clock size={14} />{s.readMin} min read</div>
                    <div className="flex items-center gap-1.5"><FileText size={14} />{s.words} words</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ProgressBar pct={pct} color={pct === 100 ? "var(--green)" : s.color} height={6} className="flex-1" />
                    <div className="text-xs" style={{ color: pct === 0 ? MUTED : "var(--green)" }}>{s.row ? `${s.row.scorePct}%` : "new"}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="mb-[18px]" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 22, color: INK }}>Your Progress</div>
      <div className="grid grid-cols-4 gap-5 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
        {[
          { value: `${readCount} / ${stories.length}`, label: "Stories read", icon: BookOpen, color: RED, pct: (readCount / Math.max(1, stories.length)) * 100 },
          ...(avgScore !== null ? [{ value: `${avgScore}%`, label: "Average comprehension", icon: Brain, color: "var(--orange)", pct: avgScore }] : []),
          { value: String(allLessons.reduce((s, l) => s + l.vocab.length, 0)), label: "Words in the course", icon: FileText, color: "var(--green)", pct: 100 },
          { value: readCount === stories.length && stories.length > 0 ? "Bookworm" : readCount >= 8 ? "Reader" : "Explorer", label: "Reading rank", icon: Trophy, color: "var(--blue)", pct: Math.min(100, (readCount / Math.max(1, stories.length)) * 100) },
        ].map((p) => (
          <Card key={p.label} className="flex items-center gap-[18px] p-[22px]">
            <Tile icon={p.icon} color={p.color} size={52} radius={14} iconSize={23} />
            <div className="min-w-0 flex-1">
              <div className="mb-[5px]" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 22, lineHeight: 1, color: INK }}>{p.value}</div>
              <div className="mb-3 text-sm" style={{ color: BODY2 }}>{p.label}</div>
              <ProgressBar pct={p.pct} color={p.color} height={6} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
