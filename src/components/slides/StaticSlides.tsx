import type { ExampleItem, ExampleSlide, RecapSlide, SectionSlide, TeachSlide, VocabCardsSlide, VocabItem } from "@/types/content";
import ContentTable from "../ContentTable";
import DiagramView from "../DiagramView";
import Markdown from "../Markdown";
import TtsButton from "../TtsButton";
import { CASE_COLORS } from "@/ui/caseColors";
import { GENDER_COLORS } from "@/ui/caseColors";
import { speak } from "@/lib/tts";

function ContinueButton({ onClick, label = "Continue →" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      autoFocus
      onClick={onClick}
      className="mt-6 w-full rounded-xl bg-[#16243D] py-3 text-lg font-bold text-white hover:bg-[#20344F]"
    >
      {label}
    </button>
  );
}

/**
 * Section overview — the visual "what's inside" spread that opens a lesson
 * (menu) or one of its parts. Icons and short labels, never walls of text.
 */
export function SectionSlideView({
  slide,
  isLessonMenu,
  onDone,
}: {
  slide: SectionSlide;
  isLessonMenu: boolean;
  onDone: () => void;
}) {
  return (
    <div className="flex flex-col items-center pt-4 text-center">
      {slide.emoji && <div className="text-7xl">{slide.emoji}</div>}
      <h2 className="mt-4 font-display text-3xl font-bold text-[#16243D]">{slide.title}</h2>
      {slide.subtitle && <p className="mt-2 max-w-md text-lg text-stone-600">{slide.subtitle}</p>}
      <p className="mt-6 text-xs font-black uppercase tracking-widest text-stone-400">
        {isLessonMenu ? "In this lesson" : "In this part"}
      </p>
      <div className="mt-3 grid w-full max-w-md gap-2.5">
        {slide.items.map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-left shadow-sm"
          >
            <span className="text-3xl">{it.emoji}</span>
            <div>
              <p className="font-bold">{it.label}</p>
              {it.hint && <p className="text-sm text-stone-500">{it.hint}</p>}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        autoFocus
        onClick={onDone}
        className="mt-8 w-full max-w-md rounded-xl bg-[#16243D] py-3 text-lg font-bold text-white hover:bg-[#20344F]"
      >
        {isLessonMenu ? "Start the lesson →" : "Let's go →"}
      </button>
    </div>
  );
}

export function TeachSlideView({ slide, onDone }: { slide: TeachSlide; onDone: () => void }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-[#16243D]">{slide.title}</h2>
      <Markdown text={slide.body} className="mt-3 text-lg" />
      {slide.table && (
        <div className="mt-4">
          <ContentTable table={slide.table} />
        </div>
      )}
      {slide.diagram && (
        <div className="mt-4">
          <DiagramView diagram={slide.diagram} />
        </div>
      )}
      {slide.examples && slide.examples.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-black uppercase tracking-wide text-stone-400">Examples</p>
          <ExampleList items={slide.examples} compact />
        </div>
      )}
      {slide.ttsChips && slide.ttsChips.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {slide.ttsChips.map((t) => (
            <TtsButton key={t} text={t} label={t} />
          ))}
        </div>
      )}
      <ContinueButton onClick={onDone} />
    </div>
  );
}

function highlightHr(hr: string, highlight?: { text: string; caseId: keyof typeof CASE_COLORS }) {
  if (!highlight) return <>{hr}</>;
  const idx = hr.indexOf(highlight.text);
  if (idx < 0) return <>{hr}</>;
  return (
    <>
      {hr.slice(0, idx)}
      <span className={`font-black ${CASE_COLORS[highlight.caseId].text}`}>{highlight.text}</span>
      {hr.slice(idx + highlight.text.length)}
    </>
  );
}

/** Shared example rendering — used inline on teach slides and on example slides. */
export function ExampleList({ items, compact = false }: { items: ExampleItem[]; compact?: boolean }) {
  return (
    <ul className={compact ? "mt-1 space-y-2" : "mt-4 space-y-4"}>
      {items.map((it, i) => (
        <li key={i} className={`rounded-xl bg-white shadow-sm ${compact ? "p-3" : "p-4"}`}>
          <p className={`font-semibold ${compact ? "text-lg" : "text-xl"}`}>
            {highlightHr(it.hr, it.highlight)} <TtsButton text={it.hr} className="ml-1" />
            <TtsButton text={it.hr} slow className="ml-1" />
          </p>
          <p className="text-stone-500">{it.en}</p>
          {it.note && <p className="mt-1 text-sm text-amber-700">💡 {it.note}</p>}
        </li>
      ))}
    </ul>
  );
}

export function ExampleSlideView({ slide, onDone }: { slide: ExampleSlide; onDone: () => void }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-[#16243D]">{slide.title ?? "Examples"}</h2>
      <ExampleList items={slide.items} />
      <ContinueButton onClick={onDone} />
    </div>
  );
}

/**
 * Picture-power vocab spread (§4 dual coding): each new word as a card —
 * big picture (bundled photo if provided, else emoji) + HR + EN + gender.
 * Tapping a card speaks the word. Pure input — nothing is graded here.
 */
export function VocabCardsSlideView({
  slide,
  vocab,
  onDone,
}: {
  slide: VocabCardsSlide;
  vocab: VocabItem[];
  onDone: () => void;
}) {
  const cards = slide.vocabIds
    .map((id) => vocab.find((v) => v.id === id))
    .filter((v): v is VocabItem => !!v);
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-[#16243D]">🖼️ {slide.title ?? "Meet today's words"}</h2>
      <p className="mt-1 text-sm text-stone-500">
        Tap each card to hear it. Look at the picture while you listen — see it, hear it, say it.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {cards.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => void speak(v.hr)}
            className="rounded-2xl bg-white p-4 text-center shadow-sm transition hover:shadow-md hover:ring-2 hover:ring-stone-300"
          >
            {v.image ? (
              <img src={v.image} alt={v.en} className="h-28 w-full rounded-xl object-contain" />
            ) : (
              // Image not generated yet (see docs/chatgpt-paste-list.md) — neutral letter tile, never emoji.
              <div className="flex h-28 items-center justify-center rounded-xl bg-stone-100 text-5xl font-black text-stone-300">
                {v.hr.charAt(0).toUpperCase()}
              </div>
            )}
            <p className="mt-2 text-lg font-black">
              {v.hr} <span className="text-sm font-normal">🔊</span>
            </p>
            <p className="text-sm text-stone-500">{v.en}</p>
            {v.gender && (
              <p className="mt-1 flex items-center justify-center gap-1 text-xs text-stone-400">
                <span className={`inline-block h-2 w-2 rounded-full ${GENDER_COLORS[v.gender]}`} />
                {v.gender}
              </p>
            )}
          </button>
        ))}
      </div>
      <ContinueButton onClick={onDone} label="I've met them all →" />
    </div>
  );
}

export function RecapSlideView({
  slide,
  vocab,
  onDone,
}: {
  slide: RecapSlide;
  vocab: VocabItem[];
  onDone: () => void;
}) {
  const entering = vocab.filter((v) => slide.vocabIds.includes(v.id));
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-[#16243D]">🎯 Recap</h2>
      <Markdown text={slide.summary} className="mt-3 text-lg" />
      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-stone-500">
        Going into your review deck ({entering.length} words)
      </p>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {entering.map((v) => (
          <li key={v.id} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            {v.gender && (
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${GENDER_COLORS[v.gender]}`}
                title={v.gender}
              />
            )}
            <span className="font-semibold">
              {v.image && <img src={v.image} alt="" className="mr-1.5 inline-block h-7 w-7 rounded object-contain align-middle" />}
              {v.hr}
            </span>
            {v.gender && <span className="text-xs text-stone-400">({v.gender})</span>}
            <span className="ml-auto text-sm text-stone-500">{v.en}</span>
            <TtsButton text={v.hr} />
          </li>
        ))}
      </ul>
      <ContinueButton onClick={onDone} label="Finish lesson ✓" />
    </div>
  );
}
