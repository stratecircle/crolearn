import { Volume2 } from "lucide-react";
import type { ExampleItem, ExampleSlide, RecapSlide, SectionSlide, TeachSlide, VocabCardsSlide, VocabItem } from "@/types/content";
import ContentTable from "../ContentTable";
import DiagramView from "../DiagramView";
import Markdown from "../Markdown";
import TtsButton from "../TtsButton";
import { CASE_COLORS, GENDER_COLORS } from "@/ui/caseColors";
import { speak } from "@/lib/tts";
import { BODY2, DISPLAY, INK, MUTED, ORANGE, SHADOW_CARD } from "@/ui/kit";

const CARD = "rounded-2xl border border-[rgba(var(--ink-rgb),.07)] bg-[color:var(--card)] shadow-[0_1px_3px_rgba(var(--shadow-rgb),.04)]";

function ContinueButton({ onClick, label = "Continue →" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      autoFocus
      onClick={onClick}
      className="mt-6 flex h-[52px] w-full items-center justify-center rounded-xl text-[16px] font-semibold text-white transition-colors duration-[180ms]"
      style={{ background: INK }}
    >
      {label}
    </button>
  );
}

function SlideTitle({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: `clamp(${Math.round(size * 0.85)}px, 3vw, ${size}px)`, lineHeight: 1.2, color: INK }}>
      {children}
    </h2>
  );
}

function SlideEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold" style={{ letterSpacing: ".13em", color: MUTED }}>
      {children}
    </p>
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
      <div className="mt-4">
        <SlideTitle size={30}>{slide.title}</SlideTitle>
      </div>
      {slide.subtitle && <p className="mt-2 max-w-md text-lg" style={{ color: BODY2 }}>{slide.subtitle}</p>}
      <div className="mt-6">
        <SlideEyebrow>{isLessonMenu ? "IN THIS LESSON" : "IN THIS PART"}</SlideEyebrow>
      </div>
      <div className="mt-3 grid w-full max-w-md gap-2.5">
        {slide.items.map((it, i) => (
          <div key={i} className={`flex items-center gap-3.5 px-4 py-3 text-left ${CARD}`}>
            <span className="text-3xl">{it.emoji}</span>
            <div>
              <p className="font-semibold" style={{ color: INK }}>{it.label}</p>
              {it.hint && <p className="text-sm" style={{ color: MUTED }}>{it.hint}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-md">
        <ContinueButton onClick={onDone} label={isLessonMenu ? "Start the lesson →" : "Let's go →"} />
      </div>
    </div>
  );
}

export function TeachSlideView({ slide, onDone }: { slide: TeachSlide; onDone: () => void }) {
  return (
    <div>
      <SlideTitle>{slide.title}</SlideTitle>
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
        <div className="mt-5">
          <SlideEyebrow>EXAMPLES</SlideEyebrow>
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
    <ul className={compact ? "mt-2 space-y-2.5" : "mt-4 space-y-4"}>
      {items.map((it, i) => (
        <li key={i} className={`${CARD} ${compact ? "p-3.5" : "p-4"}`}>
          <p className={compact ? "text-lg" : "text-xl"} style={{ fontFamily: DISPLAY, fontWeight: 600, color: INK }}>
            {highlightHr(it.hr, it.highlight)} <TtsButton text={it.hr} className="ml-1" />
            <TtsButton text={it.hr} slow className="ml-1" />
          </p>
          <p className="mt-0.5 text-[15px]" style={{ color: BODY2 }}>{it.en}</p>
          {it.note && <p className="mt-1.5 text-sm" style={{ color: ORANGE }}>{it.note}</p>}
        </li>
      ))}
    </ul>
  );
}

export function ExampleSlideView({ slide, onDone }: { slide: ExampleSlide; onDone: () => void }) {
  return (
    <div>
      <SlideTitle>{slide.title ?? "Examples"}</SlideTitle>
      <ExampleList items={slide.items} />
      <ContinueButton onClick={onDone} />
    </div>
  );
}

/**
 * Picture-power vocab spread (§4 dual coding): each new word as a card —
 * big picture (bundled photo if provided, else a letter tile) + HR + EN +
 * gender. Tapping a card speaks the word. Pure input — nothing is graded here.
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
      <SlideTitle>{slide.title ?? "Meet today's words"}</SlideTitle>
      <p className="mt-1.5 text-sm" style={{ color: MUTED }}>
        Tap each card to hear it. Look at the picture while you listen — see it, hear it, say it.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {cards.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => void speak(v.hr)}
            className={`${CARD} p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(var(--shadow-rgb),.08)]`}
          >
            {v.image ? (
              <img src={v.image} alt={v.en} className="h-28 w-full rounded-xl object-contain" />
            ) : (
              // Image not generated yet (see docs/chatgpt-paste-list.md) — neutral letter tile, never emoji.
              <div className="flex h-28 items-center justify-center rounded-xl" style={{ background: "rgba(var(--ink-rgb),.04)" }}>
                <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 44, color: "rgba(var(--ink-rgb),.18)" }}>{v.hr.charAt(0).toUpperCase()}</span>
              </div>
            )}
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-lg font-bold" style={{ fontFamily: DISPLAY, color: INK }}>
              {v.hr} <Volume2 size={14} color={MUTED} />
            </p>
            <p className="text-sm" style={{ color: BODY2 }}>{v.en}</p>
            {v.gender && (
              <p className="mt-1 flex items-center justify-center gap-1 text-xs" style={{ color: MUTED }}>
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
      <SlideTitle>Recap</SlideTitle>
      <Markdown text={slide.summary} className="mt-3 text-lg" />
      {entering.length > 0 && (
        <>
          <div className="mt-5">
            <SlideEyebrow>GOING INTO YOUR REVIEW DECK ({entering.length} WORDS)</SlideEyebrow>
          </div>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {entering.map((v) => (
              <li key={v.id} className={`flex items-center gap-2 px-3 py-2 ${CARD}`} style={{ boxShadow: SHADOW_CARD }}>
                {v.gender && (
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${GENDER_COLORS[v.gender]}`}
                    title={v.gender}
                  />
                )}
                <span className="font-semibold" style={{ color: INK }}>
                  {/* alt="" on purpose: the Croatian word and its English gloss are both
                      in this same row, so naming the picture would just triple-announce. */}
                  {v.image && <img src={v.image} alt="" className="mr-1.5 inline-block h-7 w-7 rounded object-contain align-middle" />}
                  {v.hr}
                </span>
                {v.gender && <span className="text-xs" style={{ color: MUTED }}>({v.gender})</span>}
                <span className="ml-auto text-sm" style={{ color: BODY2 }}>{v.en}</span>
                <TtsButton text={v.hr} />
              </li>
            ))}
          </ul>
        </>
      )}
      <ContinueButton onClick={onDone} label="Finish lesson ✓" />
    </div>
  );
}
