import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { findStory } from "@/content";
import { db } from "@/lib/db";
import { McSlideView } from "@/components/slides/QuizSlides";
import TtsButton from "@/components/TtsButton";
import { BODY2, BtnGhost, BtnPrimary, DISPLAY, DoneCard, Eyebrow, INK, MUTED, ORANGE, tint } from "@/ui/kit";

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

  if (phase === "questions") {
    const q = story.questions[qIndex];
    return (
      <div className="m-auto w-full max-w-2xl py-6">
        <Eyebrow className="mb-4">COMPREHENSION · {qIndex + 1}/{story.questions.length}</Eyebrow>
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
    );
  }

  if (phase === "done") {
    return (
      <div className="m-auto w-full max-w-[720px] py-10">
        <DoneCard icon={BookOpen} title="Story finished">
          <div className="mx-auto mb-8 text-[17px]" style={{ color: BODY2 }}>
            Comprehension: <strong style={{ color: INK }}>{correctCount}/{story.questions.length}</strong>
          </div>
          <div className="flex justify-center gap-3.5">
            <BtnPrimary onClick={() => nav("/")}>Back to path</BtnPrimary>
            <BtnGhost onClick={() => nav("/stories")}>More stories</BtnGhost>
          </div>
        </DoneCard>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-2xl py-6">
      <Eyebrow className="mb-2">STORY</Eyebrow>
      <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", lineHeight: 1.15, color: INK }}>{story.title}</h1>
      <p className="mt-1 text-[15px]" style={{ color: MUTED }}>{story.titleEn}</p>

      {story.glossary.length > 0 && (
        <div className="mt-5 rounded-[10px] border p-4" style={{ background: tint(ORANGE, 0.07), borderColor: tint(ORANGE, 0.25) }}>
          <p className="text-xs font-semibold" style={{ letterSpacing: ".13em", color: "var(--brown2)" }}>NEW WORDS IN THIS STORY</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm" style={{ color: INK }}>
            {story.glossary.map((g) => (
              <span key={g.word}>
                <strong>{g.word}</strong> — {g.gloss} <TtsButton text={g.word} />
              </span>
            ))}
          </div>
        </div>
      )}

      {/* One continuous page, like the book it wants to be. */}
      <div className="mt-5 rounded-[10px] border bg-[color:var(--card)] px-8 py-7 max-[700px]:px-5" style={{ borderColor: "rgba(var(--ink-rgb),.16)" }}>
        {story.paragraphs.map((p, i) => (
          <div key={i} className={i === 0 ? "" : "mt-6"}>
            <p className={`reading text-[18px] leading-[1.85] max-[700px]:text-[16.5px] ${i === 0 ? "dropcap" : ""}`} style={{ color: INK }}>
              {p.hr} <TtsButton text={p.hr} className="ml-1" /> <TtsButton text={p.hr} slow label="Slow" className="ml-1" />
            </p>
            {shownEn.has(i) ? (
              <p className="reading mt-2 border-l-2 pl-3.5 text-[14.5px] italic leading-relaxed" style={{ color: BODY2, borderColor: "rgba(var(--ink-rgb),.16)" }}>{p.en}</p>
            ) : (
              <button
                type="button"
                onClick={() => setShownEn(new Set([...shownEn, i]))}
                className="mt-1.5 text-[13px] font-medium underline decoration-dotted underline-offset-4"
                style={{ color: MUTED }}
              >
                Show translation
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setPhase("questions")}
        className="mb-10 mt-6 flex h-[52px] w-full items-center justify-center rounded-lg text-[16px] font-semibold text-white transition-colors duration-[180ms]"
        style={{ background: INK }}
      >
        Story questions →
      </button>
    </article>
  );
}
