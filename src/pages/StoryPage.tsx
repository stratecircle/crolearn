import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookOpen, X } from "lucide-react";
import { findStory, findUnit } from "@/content";
import { db } from "@/lib/db";
import { McSlideView } from "@/components/slides/QuizSlides";
import TtsButton from "@/components/TtsButton";
import { BODY2, BtnGhost, BtnPrimary, Card, DoneCard, INK, Meta, MUTED, Panel, StageHeader } from "@/ui/kit";

/** Graded reader: paragraph TTS, EN reveal per paragraph, glossary, comprehension questions. */
export default function StoryPage() {
  const nav = useNavigate();
  const { id } = useParams<{ id: string }>();
  const story = id ? findStory(id) : undefined;
  const [shownEn, setShownEn] = useState<Set<number>>(new Set());
  const [qIndex, setQIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState<"read" | "questions" | "done">("read");

  if (!story)
    return (
      <p className="py-10 text-center" style={{ color: BODY2 }}>
        Story not found. <Link to="/stories" className="underline">All stories</Link>
      </p>
    );

  const chrome = (pos?: string, pct?: number) => (
    <StageHeader
      exitIcon={X}
      exitLabel="Leave the story"
      onExit={() => nav("/stories")}
      eyebrow="Story"
      title={story.title}
      pos={pos}
      progressPct={pct}
    />
  );

  if (phase === "questions") {
    const q = story.questions[qIndex];
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome(`${qIndex + 1}/${story.questions.length}`, (qIndex / story.questions.length) * 100)}
        <div className="flex flex-1 overflow-y-auto">
          <div className="m-auto w-full max-w-[640px] px-5 py-8">
            <Meta className="mb-4">Comprehension</Meta>
            <McSlideView
              key={q.id}
              slide={q}
              onDone={(correct) => {
                const total = correctCount + (correct ? 1 : 0);
                if (correct) setCorrectCount((c) => c + 1);
                if (qIndex + 1 < story.questions.length) setQIndex(qIndex + 1);
                else {
                  // Persist the read-through (latest wins) so the path can check it off.
                  void db.storyProgress.put({
                    storyId: story.id,
                    completedAt: new Date(),
                    scorePct: Math.round((total / story.questions.length) * 100),
                  });
                  setPhase("done");
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="flex h-dvh w-full flex-col">
        {chrome(undefined, 100)}
        <div className="flex flex-1 overflow-y-auto">
          <div className="rise m-auto w-full max-w-[640px] px-5 py-10">
            <DoneCard icon={BookOpen} title="Story finished">
              <div className="mx-auto mb-8 text-[15px]" style={{ color: BODY2 }}>
                Comprehension: <strong style={{ color: INK }}>{correctCount}/{story.questions.length}</strong>
              </div>
              <div className="flex justify-center gap-3">
                <BtnPrimary onClick={() => nav("/")}>Back home</BtnPrimary>
                <BtnGhost onClick={() => nav("/stories")}>More stories</BtnGhost>
              </div>
            </DoneCard>
          </div>
        </div>
      </div>
    );
  }

  // The title block borrows the unit's first illustrated word as cover art, so
  // the reader opens on a picture from the very vocabulary the story recycles.
  const unit = findUnit(story.unitId);
  const cover = unit?.lessons.flatMap((l) => l.vocab).find((v) => v.image)?.image;
  const wordCount = story.paragraphs.reduce((s, p) => s + p.hr.split(/\s+/).filter(Boolean).length, 0);
  const readMin = Math.max(1, Math.round(wordCount / 110));

  return (
    <div className="flex h-dvh w-full flex-col">
      {chrome()}
      <div className="flex-1 overflow-y-auto">
        <article className="mx-auto w-full max-w-[680px] px-5 pb-16 pt-10">
          {/* ── title block ─────────────────────────────────────────────── */}
          <header className="rise rise-1 flex items-center gap-5 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-4">
            <div
              className="flex h-[88px] w-[88px] flex-none items-center justify-center overflow-hidden rounded-xl"
              style={{ background: "var(--tint)" }}
            >
              {cover ? (
                <img src={cover} alt="" className="h-full w-full object-contain p-2.5" />
              ) : (
                <span className="font-bold leading-none" style={{ fontSize: 34, letterSpacing: "-.03em", color: "rgba(var(--ink-rgb),.16)" }}>
                  {story.title.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <div className="min-w-0">
              <Meta className="mb-1.5">{unit ? `${unit.levelId} · Unit ${unit.number} · Story` : "Story"}</Meta>
              <h1 className="font-bold" style={{ fontSize: "clamp(24px,3.4vw,30px)", lineHeight: 1.2, letterSpacing: "-.02em", color: INK }}>
                {story.title}
              </h1>
              <p className="mt-1 text-[15px]" style={{ color: MUTED }}>{story.titleEn}</p>
              <div className="meta mt-2 tabular-nums" style={{ color: "var(--muted3)" }}>
                {readMin} min · {wordCount} words
              </div>
            </div>
          </header>

          {story.glossary.length > 0 && (
            <Panel className="rise rise-2 mt-8" title="New words in this story" bodyClassName="px-5 py-1">
              <div className="divide-y divide-[rgba(var(--ink-rgb),.08)]">
                {story.glossary.map((g) => (
                  <div key={g.word} className="flex items-baseline gap-3 py-2.5 text-[15px]">
                    <span className="font-semibold" style={{ color: INK }}>{g.word}</span>
                    <span className="min-w-0 flex-1" style={{ color: BODY2 }}>{g.gloss}</span>
                    <TtsButton text={g.word} />
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* The text itself — a reading column on paper, nothing else on it. */}
          <Card className="rise rise-3 mt-6">
            <div className="px-9 py-10 max-[700px]:px-5 max-[700px]:py-7">
              {story.paragraphs.map((p, i) => (
                <div key={i} className={i === 0 ? "" : "mt-7"}>
                  <p className="reading text-[19px] leading-[1.75] max-[700px]:text-[17px]" style={{ color: INK }}>
                    {p.hr} <TtsButton text={p.hr} className="ml-1" /> <TtsButton text={p.hr} slow label="Slow" className="ml-1" />
                  </p>
                  {shownEn.has(i) ? (
                    <p className="reading mt-2 border-l pl-4 text-[15px] italic leading-relaxed" style={{ color: BODY2, borderColor: "rgba(var(--ink-rgb),.14)" }}>{p.en}</p>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShownEn(new Set([...shownEn, i]))}
                      /* mt-2 becomes mt-1 + py-1 so the text keeps its baseline
                         while the target clears the WCAG 2.5.8 24px minimum (it
                         was 120x17); negative margins hold the rhythm. */
                      className="meta -mx-1.5 -mb-1 mt-1 px-1.5 py-1 transition-colors duration-100 hover:text-[color:var(--body)]"
                      style={{ color: "var(--muted3)" }}
                    >
                      Show translation
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* The stagger sits on the wrapper: `.rise` fills forwards, and on the
              button itself it would pin `transform` and cancel the press. */}
          <div className="rise rise-4 mt-8">
            <button
              type="button"
              onClick={() => setPhase("questions")}
              className="flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]"
              style={{ background: INK }}
            >
              Story questions →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
