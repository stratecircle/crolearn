import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findStory } from "@/content";
import { db } from "@/lib/db";
import { McSlideView } from "@/components/slides/QuizSlides";
import TtsButton from "@/components/TtsButton";

/** Graded reader: paragraph TTS, EN reveal per paragraph, glossary, comprehension questions. */
export default function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const story = id ? findStory(id) : undefined;
  const [shownEn, setShownEn] = useState<Set<number>>(new Set());
  const [qIndex, setQIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState<"read" | "questions" | "done">("read");

  if (!story)
    return (
      <p className="py-10 text-center">
        Story not found. <Link to="/stories" className="underline">All stories</Link>
      </p>
    );

  if (phase === "questions") {
    const q = story.questions[qIndex];
    return (
      <div className="m-auto w-full max-w-2xl py-6">
        <p className="mb-4 text-sm font-bold text-stone-500">
          Comprehension · {qIndex + 1}/{story.questions.length}
        </p>
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
      <div className="m-auto w-full py-16 text-center">
        <div className="text-6xl">📖</div>
        <h2 className="mt-3 text-2xl font-black">Story finished!</h2>
        <p className="mt-1 text-stone-600">
          Comprehension: {correctCount}/{story.questions.length}
        </p>
        <Link to="/" className="mt-6 inline-block rounded-xl bg-stone-900 px-6 py-3 font-bold text-white">
          Back to the path →
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto w-full max-w-2xl py-6">
      <h1 className="text-3xl font-black">{story.title}</h1>
      <p className="text-stone-500">{story.titleEn}</p>

      {story.glossary.length > 0 && (
        <div className="mt-4 rounded-xl bg-amber-50 p-3">
          <p className="text-xs font-black uppercase tracking-wide text-amber-700">New words in this story</p>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {story.glossary.map((g) => (
              <span key={g.word}>
                <strong>{g.word}</strong> — {g.gloss} <TtsButton text={g.word} />
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 space-y-4">
        {story.paragraphs.map((p, i) => (
          <div key={i} className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-lg leading-relaxed">
              {p.hr} <TtsButton text={p.hr} className="ml-1" /> <TtsButton text={p.hr} slow className="ml-1" />
            </p>
            {shownEn.has(i) ? (
              <p className="mt-2 text-stone-500">{p.en}</p>
            ) : (
              <button
                type="button"
                onClick={() => setShownEn(new Set([...shownEn, i]))}
                className="mt-2 text-sm font-semibold text-stone-400 underline"
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
        className="mt-6 mb-10 w-full rounded-xl bg-stone-900 py-3 text-lg font-bold text-white hover:bg-stone-700"
      >
        Story questions →
      </button>
    </article>
  );
}
