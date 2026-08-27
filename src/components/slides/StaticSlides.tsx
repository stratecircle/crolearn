import { Volume2 } from "lucide-react";
import type { ExampleItem, ExampleSlide, RecapSlide, SectionSlide, TeachSlide, VocabCardsSlide, VocabItem } from "@/types/content";
import ContentTable from "../ContentTable";
import DiagramView from "../DiagramView";
import Markdown from "../Markdown";
import TtsButton from "../TtsButton";
import { CASE_COLORS, GENDER_COLORS } from "@/ui/caseColors";
import { speak } from "@/lib/tts";
import { BODY2, INK, Kbd, MUTED, ORANGE } from "@/ui/kit";

const DIVIDE = "divide-y divide-[rgba(var(--ink-rgb),.08)]";

function ContinueButton({ onClick, label = "Continue →" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      autoFocus
      onClick={onClick}
      className="mt-8 flex h-11 w-full items-center justify-center rounded-lg text-[15px] font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99]"
      style={{ background: INK }}
    >
      {label}
      {/* autoFocus means Enter already advances the deck — the keycap makes
          that discoverable. Decoration: hidden from screen readers. */}
      <span className="ml-2 max-[900px]:hidden" aria-hidden="true"><Kbd>Enter</Kbd></span>
    </button>
  );
}

function SlideTitle({ children, size = 22 }: { children: React.ReactNode; size?: number }) {
  return (
    <h2
      className="font-bold"
      style={{ fontSize: `clamp(${Math.round(size * 0.85)}px, 3vw, ${size}px)`, lineHeight: 1.25, letterSpacing: "-.02em", color: INK }}
    >
      {children}
    </h2>
  );
}

function SlideEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="meta" style={{ color: MUTED }}>{children}</p>;
}

/**
 * Section overview — the "what's inside" spread that opens a lesson (menu) or
 * one of its parts. Icons and short labels, never walls of text.
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
    <div className="flex flex-col items-center pt-6 text-center">
      {slide.emoji && <div className="text-5xl">{slide.emoji}</div>}
      <div className="mt-5">
        <SlideTitle size={28}>{slide.title}</SlideTitle>
      </div>
      {slide.subtitle && <p className="mt-2 max-w-md text-[15px]" style={{ color: BODY2 }}>{slide.subtitle}</p>}
      <div className="mt-8">
        <SlideEyebrow>{isLessonMenu ? "In this lesson" : "In this part"}</SlideEyebrow>
      </div>
      <div className={`mt-2 w-full max-w-md ${DIVIDE}`}>
        {slide.items.map((it, i) => (
          <div key={i} className="flex items-center gap-3.5 py-3 text-left">
            <span className="text-2xl">{it.emoji}</span>
            <div>
              <p className="text-[15px] font-semibold" style={{ color: INK }}>{it.label}</p>
              {it.hint && <p className="text-[13px]" style={{ color: MUTED }}>{it.hint}</p>}
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
      <Markdown text={slide.body} className="mt-3 text-[16px] leading-relaxed" />
      {slide.table && (
        <div className="mt-5">
          <ContentTable table={slide.table} />
        </div>
      )}
      {slide.diagram && (
        <div className="mt-5">
          <DiagramView diagram={slide.diagram} />
        </div>
      )}
      {slide.examples && slide.examples.length > 0 && (
        <div className="mt-6">
          <SlideEyebrow>Examples</SlideEyebrow>
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
    <ul className={`${DIVIDE} ${compact ? "mt-1" : "mt-2"}`}>
      {items.map((it, i) => (
        <li key={i} className={compact ? "py-3" : "py-4"}>
          <p className={compact ? "text-[17px]" : "text-[19px]"} style={{ fontWeight: 600, letterSpacing: "-.01em", color: INK }}>
            {highlightHr(it.hr, it.highlight)} <TtsButton text={it.hr} className="ml-1" />
            <TtsButton text={it.hr} slow className="ml-1" />
          </p>
          <p className="mt-0.5 text-sm" style={{ color: BODY2 }}>{it.en}</p>
          {it.note && <p className="mt-1 text-[13px]" style={{ color: ORANGE }}>{it.note}</p>}
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
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {cards.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => void speak(v.hr)}
            className="rounded-[10px] border border-[rgba(var(--ink-rgb),.1)] bg-[color:var(--card)] p-4 text-center transition-colors duration-150 hover:border-[rgba(var(--ink-rgb),.22)]"
          >
            {v.image ? (
              <img src={v.image} alt={v.en} className="h-28 w-full rounded-lg object-contain" />
            ) : (
              // Image not generated yet (see docs/chatgpt-paste-list.md) — neutral letter tile, never emoji.
              <div className="flex h-28 items-center justify-center rounded-lg" style={{ background: "var(--tint)" }}>
                <span className="font-bold" style={{ fontSize: 40, color: "rgba(var(--ink-rgb),.18)" }}>{v.hr.charAt(0).toUpperCase()}</span>
              </div>
            )}
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[17px] font-bold" style={{ color: INK, letterSpacing: "-.01em" }}>
              {v.hr} <Volume2 size={14} color={MUTED} />
            </p>
            <p className="text-sm" style={{ color: BODY2 }}>{v.en}</p>
            {v.gender && (
              <p className="mt-1 flex items-center justify-center gap-1.5 text-xs" style={{ color: MUTED }}>
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
      <Markdown text={slide.summary} className="mt-3 text-[16px] leading-relaxed" />
      {entering.length > 0 && (
        <>
          <div className="mt-6">
            <SlideEyebrow>Going into your review deck · {entering.length} words</SlideEyebrow>
          </div>
          <ul className={`mt-1 ${DIVIDE}`}>
            {entering.map((v) => (
              <li key={v.id} className="flex items-center gap-2.5 py-2.5">
                {v.gender && (
                  <span
                    className={`inline-block h-2 w-2 flex-none rounded-full ${GENDER_COLORS[v.gender]}`}
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
