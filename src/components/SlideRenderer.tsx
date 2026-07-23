import type { Slide, VocabItem } from "@/types/content";
import { ExampleSlideView, RecapSlideView, SectionSlideView, TeachSlideView, VocabCardsSlideView } from "./slides/StaticSlides";
import {
  FillSlideView,
  ListenTypeSlideView,
  MatchSlideView,
  McSlideView,
  QuizSetSlideView,
  ReorderSlideView,
  SpeakSlideView,
  TypeSlideView,
} from "./slides/QuizSlides";

/**
 * The single switch on slide.type (CLAUDE.md convention).
 * Adding a slide type = one type variant + one component + one grader.
 */
export default function SlideRenderer({
  slide,
  vocab,
  isLessonMenu = false,
  onDone,
}: {
  slide: Slide;
  vocab: VocabItem[];
  /** True when this section slide is the lesson-opening menu. */
  isLessonMenu?: boolean;
  /** Static slides report correct=true; quiz slides report the real verdict. */
  onDone: (correct: boolean) => void;
}) {
  switch (slide.type) {
    case "section":
      return <SectionSlideView slide={slide} isLessonMenu={isLessonMenu} onDone={() => onDone(true)} />;
    case "teach":
      return <TeachSlideView slide={slide} onDone={() => onDone(true)} />;
    case "example":
      return <ExampleSlideView slide={slide} onDone={() => onDone(true)} />;
    case "vocab-cards":
      return <VocabCardsSlideView slide={slide} vocab={vocab} onDone={() => onDone(true)} />;
    case "recap":
      return <RecapSlideView slide={slide} vocab={vocab} onDone={() => onDone(true)} />;
    case "quiz-set":
      return <QuizSetSlideView slide={slide} onDone={onDone} />;
    case "mc":
      return <McSlideView slide={slide} onDone={onDone} />;
    case "type":
      return <TypeSlideView slide={slide} onDone={onDone} />;
    case "listen-type":
      return <ListenTypeSlideView slide={slide} onDone={onDone} />;
    case "speak":
      return <SpeakSlideView slide={slide} onDone={onDone} />;
    case "match":
      return <MatchSlideView slide={slide} onDone={onDone} />;
    case "fill":
      return <FillSlideView slide={slide} onDone={onDone} />;
    case "reorder":
      return <ReorderSlideView slide={slide} onDone={onDone} />;
  }
}
