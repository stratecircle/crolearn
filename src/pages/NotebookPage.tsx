/**
 * Notes — the index over CroLearn's lesson NotesDocs, read as the course's
 * table of contents: units as sections, lessons as rows. No user-authored
 * notes exist, so there is no "New note", starring or trash.
 *
 * The screen is the same two-pane frame as /notes/:lessonId (see NotesList);
 * here the detail pane has nothing selected, so instead of an empty white
 * field it shows what the book adds up to — how much of it has been studied,
 * and the one link worth clicking: the note read most recently.
 */
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import NotesList, { useNotesIndex, type NoteRow } from "@/features/notes/NotesList";
import { ACCENT, Divider, INK, MUTED, Panel, ProgressBar, SplitView, View } from "@/ui/kit";
import { Hero } from "@/ui/charts";

export default function NotebookPage() {
  const all = useNotesIndex();
  const studied = all.filter((n) => n.completedAt).length;
  const pct = all.length > 0 ? Math.round((studied / all.length) * 100) : 0;

  // Cheap: the completion dates are already in hand from the index.
  const recent = all
    .filter((n) => n.completedAt)
    .reduce<NoteRow | undefined>(
      (best, n) => (!best || n.completedAt!.getTime() > best.completedAt!.getTime() ? n : best),
      undefined,
    );

  // The next note that has never been studied — the other half of "where was I".
  const nextUp = all.find((n) => !n.completedAt);

  return (
    <View title="Notes" sub={`${studied} of ${all.length} lessons studied`} scroll={false}>
      <SplitView list={<NotesList />} listWidth={300}>
        <div className="mx-auto w-full max-w-[560px] px-8 py-14 max-[700px]:px-4 max-[700px]:py-8">
          <Panel
            className="rise rise-1"
            title="Your grammar book"
            right={<span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{pct}%</span>}
          >
            <div className="flex items-start justify-between gap-6">
              <Hero
                value={String(studied)}
                unit={`/ ${all.length}`}
                label="Lessons studied"
                sub="One note per lesson — the point in a sentence, the deep dive, the traps and a self-check."
              />
              <div
                className="flex h-10 w-10 flex-none items-center justify-center rounded-xl"
                style={{ background: "rgba(var(--primary-rgb),.1)" }}
              >
                <BookOpen size={19} color={ACCENT} strokeWidth={1.9} />
              </div>
            </div>
            <ProgressBar pct={pct} className="mt-5" />
          </Panel>

          {(recent || nextUp) && (
            <Panel className="rise rise-2 mt-5" title="Pick up where you left off" bodyClassName="px-5 py-1">
              {recent && (
                <Link
                  to={`/notes/${recent.lessonId}`}
                  className="group flex items-center gap-4 py-3.5"
                >
                  <span className="meta w-24 flex-none" style={{ color: "var(--muted3)" }}>Last studied</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-semibold" style={{ color: INK }}>{recent.title}</span>
                    <span className="block truncate text-[12.5px]" style={{ color: MUTED }}>
                      {recent.unitLabel} · {recent.completedAt!.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  </span>
                  <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                </Link>
              )}
              {recent && nextUp && <Divider />}
              {nextUp && (
                <Link to={`/notes/${nextUp.lessonId}`} className="group flex items-center gap-4 py-3.5">
                  <span className="meta w-24 flex-none" style={{ color: "var(--muted3)" }}>Next up</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13.5px] font-semibold" style={{ color: INK }}>{nextUp.title}</span>
                    <span className="block truncate text-[12.5px]" style={{ color: MUTED }}>
                      {nextUp.unitLabel} · {nextUp.blurb}
                    </span>
                  </span>
                  <ArrowRight size={14} color={MUTED} className="flex-none opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
                </Link>
              )}
            </Panel>
          )}

          <p className="rise rise-3 mt-5 text-[13px]" style={{ color: MUTED }}>
            Pick a lesson on the left to read its notes.
          </p>
        </div>
      </SplitView>
    </View>
  );
}
