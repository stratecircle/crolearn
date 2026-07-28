import { useEffect, useState } from "react";
import type {
  FillSlide,
  ListenTypeSlide,
  MatchSlide,
  McSlide,
  QuizSetSlide,
  ReorderSlide,
  SpeakSlide,
  TypeSlide,
} from "@/types/content";
import { gradeFill, gradeReorder, gradeTyped, speechSimilarity, type GradeResult } from "@/lib/grader";
import { shuffle } from "@/lib/shuffle";
import { hasStt, listenOnce, stopListening } from "@/lib/stt";
import AnswerInput from "../AnswerInput";
import FeedbackPanel from "../FeedbackPanel";
import TtsButton from "../TtsButton";

/** Every quiz component reports once: correct=false means "goes to retry queue". */
export interface QuizProps<S> {
  slide: S;
  onDone: (correct: boolean) => void;
}

function QuizTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[color:var(--ink)]" style={{ letterSpacing: "-.02em", lineHeight: 1.3 }}>
      {children}
    </h2>
  );
}

/** Option-button state classes. Wrong is genuinely red (crveni), never the accent. */
const OPT_IDLE = "border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] hover:border-[rgba(var(--ink-rgb),.45)]";
const OPT_SELECTED = "border-[color:var(--ink)] bg-[color:var(--ink)] text-white";
const OPT_CORRECT = "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)]";
const OPT_WRONG = "border-[color:var(--crveni)] bg-[rgba(var(--crveni-rgb),.07)]";
const OPT_DIM = "border-[rgba(var(--ink-rgb),.07)] bg-[color:var(--card)] opacity-55";

const CHECK_BTN =
  "mt-5 h-10 rounded-lg bg-[color:var(--ink)] px-5 text-sm font-semibold text-white transition-[background,transform] duration-150 active:scale-[.99] disabled:opacity-40";

/**
 * Quick-check battery: several short questions on one slide, answered together
 * then checked together — like a worksheet section. Whole slide retries if any
 * item was wrong.
 */
export function QuizSetSlideView({ slide, onDone }: QuizProps<QuizSetSlide>) {
  // Shuffled once per mount (players remount per slide via key).
  const [orders] = useState(() => slide.items.map((it) => shuffle(it.options.map((_, i) => i))));
  const [picked, setPicked] = useState<(number | null)[]>(() => slide.items.map(() => null));
  const [checked, setChecked] = useState(false);
  const allAnswered = picked.every((p) => p !== null);
  const allCorrect = slide.items.every((it, i) => picked[i] === it.correctIndex);

  return (
    <div>
      <QuizTitle>{slide.title ?? "Quick check"}</QuizTitle>
      <ol className="mt-5 divide-y divide-[rgba(var(--ink-rgb),.08)]">
        {slide.items.map((item, qi) => {
          const verdictKnown = checked;
          const isRight = picked[qi] === item.correctIndex;
          return (
            <li key={qi} className="py-4 first:pt-0">
              <p className="text-[15px] font-semibold text-[color:var(--ink)]">
                {qi + 1}. {item.prompt}{" "}
                {item.tts && <TtsButton text={item.tts} className="ml-1 align-middle" />}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {orders[qi].map((oi) => (
                  <button
                    key={oi}
                    type="button"
                    disabled={checked}
                    onClick={() => {
                      const next = [...picked];
                      next[qi] = oi;
                      setPicked(next);
                    }}
                    className={`rounded-lg border px-3 py-1.5 text-[15px] font-semibold transition-colors duration-100 ${
                      !verdictKnown
                        ? picked[qi] === oi
                          ? OPT_SELECTED
                          : OPT_IDLE
                        : oi === item.correctIndex
                          ? OPT_CORRECT
                          : oi === picked[qi]
                            ? OPT_WRONG
                            : OPT_DIM
                    }`}
                  >
                    {item.options[oi]}
                  </button>
                ))}
              </div>
              {verdictKnown && (
                <p className={`mt-2 text-sm ${isRight ? "text-[color:var(--green)]" : "text-[color:var(--crveni)]"}`}>
                  {isRight ? "Correct — " : "Not quite — "}{item.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {!checked ? (
        <button
          type="button"
          disabled={!allAnswered}
          onClick={() => setChecked(true)}
          className={`${CHECK_BTN} w-full`}
        >
          Check all
        </button>
      ) : (
        <FeedbackPanel
          verdict={allCorrect ? "correct" : "wrong"}
          explanation={
            allCorrect
              ? "All correct — nice!"
              : `${slide.items.filter((it, i) => picked[i] === it.correctIndex).length}/${slide.items.length} right — this set will come back around.`
          }
          onContinue={() => onDone(allCorrect)}
        />
      )}
    </div>
  );
}

export function McSlideView({ slide, onDone }: QuizProps<McSlide>) {
  // Content authors put the correct option first; the player shuffles display order.
  const [order] = useState(() => shuffle(slide.options.map((_, i) => i)));
  const [picked, setPicked] = useState<number | null>(null); // original index
  const answered = picked !== null;
  const correct = picked === slide.correctIndex;
  return (
    <div>
      <QuizTitle>
        {slide.prompt} {slide.tts && <TtsButton text={slide.tts} className="ml-1 align-middle" />}
      </QuizTitle>
      <div className="mt-5 grid gap-2">
        {order.map((i) => (
          <button
            key={i}
            type="button"
            disabled={answered}
            onClick={() => setPicked(i)}
            className={`rounded-lg border px-4 py-3 text-left text-[17px] font-semibold transition-colors duration-100 ${
              !answered
                ? OPT_IDLE
                : i === slide.correctIndex
                  ? OPT_CORRECT
                  : i === picked
                    ? OPT_WRONG
                    : OPT_DIM
            }`}
          >
            {slide.options[i]}
          </button>
        ))}
      </div>
      {answered && (
        <FeedbackPanel
          verdict={correct ? "correct" : "wrong"}
          canonical={slide.options[slide.correctIndex]}
          explanation={slide.explanation}
          onContinue={() => onDone(correct)}
        />
      )}
    </div>
  );
}

export function TypeSlideView({ slide, onDone }: QuizProps<TypeSlide>) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<GradeResult | null>(null);
  return (
    <div>
      <QuizTitle>{slide.prompt}</QuizTitle>
      {slide.hint && <p className="mt-1 text-sm text-[color:var(--muted)]">Hint: {slide.hint}</p>}
      <div className="mt-5">
        <AnswerInput
          value={value}
          onChange={setValue}
          disabled={result !== null}
          autoFocus
          onSubmit={() => setResult(gradeTyped(value, slide.answers))}
        />
      </div>
      {result === null ? (
        <button
          type="button"
          disabled={!value.trim()}
          onClick={() => setResult(gradeTyped(value, slide.answers))}
          className={CHECK_BTN}
        >
          Check
        </button>
      ) : (
        <FeedbackPanel
          verdict={result.verdict}
          canonical={slide.answers[0]}
          explanation={slide.explanation}
          onContinue={() => onDone(result.verdict !== "wrong")}
        />
      )}
    </div>
  );
}

export function ListenTypeSlideView({ slide, onDone }: QuizProps<ListenTypeSlide>) {
  const answers = slide.answers ?? [slide.tts];
  const [value, setValue] = useState("");
  const [result, setResult] = useState<GradeResult | null>(null);
  return (
    <div>
      <QuizTitle>Listen and type</QuizTitle>
      <div className="mt-4 flex gap-2">
        <TtsButton text={slide.tts} label="Listen" className="!px-4 !py-2 !text-sm" />
        {(slide.allowSlow ?? true) && (
          <TtsButton text={slide.tts} slow label="Slower" className="!px-4 !py-2 !text-sm" />
        )}
      </div>
      <div className="mt-4">
        <AnswerInput
          value={value}
          onChange={setValue}
          disabled={result !== null}
          placeholder="Type what you hear…"
          onSubmit={() => setResult(gradeTyped(value, answers))}
        />
      </div>
      {result === null ? (
        <button
          type="button"
          disabled={!value.trim()}
          onClick={() => setResult(gradeTyped(value, answers))}
          className={CHECK_BTN}
        >
          Check
        </button>
      ) : (
        <FeedbackPanel
          verdict={result.verdict}
          canonical={answers[0]}
          explanation={slide.explanation}
          onContinue={() => onDone(result.verdict !== "wrong")}
        />
      )}
    </div>
  );
}

export function SpeakSlideView({ slide, onDone }: QuizProps<SpeakSlide>) {
  const supported = hasStt();
  const [state, setState] = useState<"idle" | "listening" | "done">("idle");
  const [transcript, setTranscript] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Release the microphone if the learner navigates away mid-recording.
  useEffect(() => () => stopListening(), []);

  const record = async () => {
    setError(null);
    setState("listening");
    try {
      const r = await listenOnce();
      setTranscript(r.transcript);
      setScore(speechSimilarity(r.transcript, slide.targetHr));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setState("done");
    }
  };

  const verdictText =
    score === null ? null : score >= 0.75 ? "Excellent!" : score >= 0.5 ? "Close — try again!" : "Give it another go.";

  return (
    <div>
      <QuizTitle>Say it out loud</QuizTitle>
      <div className="mt-5 rounded-[10px] border border-[rgba(var(--ink-rgb),.1)] bg-[color:var(--card)] p-4">
        <p className="text-[22px] font-bold text-[color:var(--ink)]" style={{ letterSpacing: "-.01em" }}>
          {slide.targetHr} <TtsButton text={slide.targetHr} className="ml-1" />
          <TtsButton text={slide.targetHr} slow className="ml-1" />
        </p>
        <p className="text-[15px] text-[color:var(--muted)]">{slide.targetEn}</p>
        {slide.phonetic && <p className="mt-1 text-sm text-[color:var(--muted)]">[{slide.phonetic}]</p>}
      </div>

      {supported ? (
        <button
          type="button"
          onClick={record}
          disabled={state === "listening"}
          className="mt-4 h-11 w-full rounded-lg border border-[rgba(var(--ink-rgb),.2)] text-[15px] font-semibold text-[color:var(--ink)] transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-50"
        >
          {state === "listening" ? "Listening…" : "Record yourself"}
        </button>
      ) : (
        <p className="mt-4 rounded-[10px] p-3 text-sm" style={{ background: "rgba(var(--orange-rgb),.08)", color: "var(--orange)" }}>
          Speech recognition isn't available in this browser (use Edge or Chrome). Say it out
          loud along with the audio, then rate yourself below.
        </p>
      )}

      {transcript !== null && (
        <p className="mt-3 text-sm text-[color:var(--body2)]">
          I heard: <em>„{transcript}"</em> {verdictText && <strong className="ml-1">{verdictText}</strong>}
        </p>
      )}
      {error === "denied" && (
        <p className="mt-3 text-sm text-[color:var(--crveni)]">Microphone is blocked — allow access, or rate yourself below.</p>
      )}
      {error === "no-speech" && <p className="mt-3 text-sm text-[color:var(--body2)]">I didn't hear anything — try again.</p>}

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => onDone(true)}
          className="h-10 flex-1 rounded-lg bg-[color:var(--green)] text-sm font-semibold text-white transition-colors duration-150 hover:bg-[color:var(--green-strong)]"
        >
          {score !== null && score >= 0.75 ? "Continue →" : "I said it correctly"}
        </button>
        <button
          type="button"
          onClick={() => onDone(false)}
          className="h-10 flex-1 rounded-lg border border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] text-sm font-semibold text-[color:var(--body)] transition-colors duration-150 hover:bg-[color:var(--tint)]"
        >
          I need more practice
        </button>
      </div>
    </div>
  );
}

/**
 * Match tiles may carry an image path ("/img/…") instead of text — picture↔word
 * matching. The image IS the whole tile, so `alt=""` would leave the button
 * unlabelled for screen readers; but naming the picture would hand over the
 * answer. A positional label identifies the tile without solving it.
 */
function MatchLabel({ value, index }: { value: string; index: number }) {
  if (value.startsWith("/img/")) {
    return <img src={value} alt={`Picture ${index + 1}`} className="mx-auto h-16 object-contain" />;
  }
  return <>{value}</>;
}

export function MatchSlideView({ slide, onDone }: QuizProps<MatchSlide>) {
  const [right] = useState(() => shuffle(slide.pairs.map((p) => p.b)));
  const [selectedA, setSelectedA] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [mistakes, setMistakes] = useState(0);
  const [flash, setFlash] = useState<string | null>(null);
  const complete = matched.size === slide.pairs.length;

  const tryMatch = (b: string) => {
    if (!selectedA) return;
    const pair = slide.pairs.find((p) => p.a === selectedA);
    if (pair && pair.b === b) {
      setMatched(new Set([...matched, selectedA]));
    } else {
      setMistakes((m) => m + 1);
      setFlash(b);
      setTimeout(() => setFlash(null), 500);
    }
    setSelectedA(null);
  };

  return (
    <div>
      <QuizTitle>{slide.prompt ?? "Match the pairs"}</QuizTitle>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          {slide.pairs.map((p, i) => (
            <button
              key={p.a}
              type="button"
              disabled={matched.has(p.a)}
              onClick={() => setSelectedA(p.a)}
              className={`rounded-lg border px-3 py-2.5 text-[15px] font-semibold transition-colors duration-100 ${
                matched.has(p.a)
                  ? `${OPT_CORRECT} opacity-60`
                  : selectedA === p.a
                    ? OPT_SELECTED
                    : OPT_IDLE
              }`}
            >
              <MatchLabel value={p.a} index={i} />
            </button>
          ))}
        </div>
        <div className="grid gap-2">
          {right.map((b, i) => {
            const isMatched = slide.pairs.some((p) => p.b === b && matched.has(p.a));
            return (
              <button
                key={b}
                type="button"
                disabled={isMatched || !selectedA}
                onClick={() => tryMatch(b)}
                className={`rounded-lg border px-3 py-2.5 text-[15px] font-semibold transition-colors duration-100 ${
                  isMatched
                    ? `${OPT_CORRECT} opacity-60`
                    : flash === b
                      ? OPT_WRONG
                      : `${OPT_IDLE} disabled:opacity-60`
                }`}
              >
                <MatchLabel value={b} index={i} />
              </button>
            );
          })}
        </div>
      </div>
      {complete && (
        <FeedbackPanel
          verdict={mistakes === 0 ? "correct" : "wrong"}
          explanation={mistakes === 0 ? "All matched, first try!" : `Matched — with ${mistakes} miss${mistakes === 1 ? "" : "es"}. This one will come back around.`}
          onContinue={() => onDone(mistakes === 0)}
        />
      )}
    </div>
  );
}

export function FillSlideView({ slide, onDone }: QuizProps<FillSlide>) {
  const parts = slide.text.split("___");
  const [values, setValues] = useState<string[]>(slide.blanks.map(() => ""));
  const [results, setResults] = useState<GradeResult[] | null>(null);
  const allFilled = values.every((v) => v.trim());
  const submit = () => setResults(gradeFill(values, slide.blanks));
  const overall: GradeResult["verdict"] | null = results
    ? results.some((r) => r.verdict === "wrong")
      ? "wrong"
      : results.some((r) => r.verdict === "diacritics")
        ? "diacritics"
        : "correct"
    : null;

  return (
    <div>
      <QuizTitle>Complete the sentence</QuizTitle>
      <p className="mt-5 flex flex-wrap items-baseline gap-1 text-xl leading-relaxed text-[color:var(--ink)]">
        {parts.map((part, i) => (
          <span key={i} className="flex items-baseline gap-1">
            <span>{part}</span>
            {i < slide.blanks.length && (
              <input
                type="text"
                value={values[i]}
                disabled={results !== null}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                onChange={(e) => {
                  const next = [...values];
                  next[i] = e.target.value;
                  setValues(next);
                }}
                onKeyDown={(e) => e.key === "Enter" && allFilled && submit()}
                className={`w-28 border-b-2 bg-transparent px-2 py-1 text-center text-lg font-semibold outline-none transition-colors duration-150 ${
                  results === null
                    ? "border-[rgba(var(--ink-rgb),.25)] focus:border-[color:var(--primary)]"
                    : results[i].verdict === "wrong"
                      ? "border-[color:var(--crveni)] bg-[rgba(var(--crveni-rgb),.05)]"
                      : results[i].verdict === "diacritics"
                        ? "border-[color:var(--orange)] bg-[rgba(var(--orange-rgb),.06)]"
                        : "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.05)]"
                }`}
              />
            )}
          </span>
        ))}
      </p>
      {slide.translation && <p className="mt-2 text-[15px] text-[color:var(--muted)]">{slide.translation}</p>}
      {slide.wordBank && results === null && (
        <div className="mt-3 flex flex-wrap gap-2">
          {slide.wordBank.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => {
                const idx = values.findIndex((v) => !v.trim());
                if (idx >= 0) {
                  const next = [...values];
                  next[idx] = w;
                  setValues(next);
                }
              }}
              className="rounded-lg border border-[rgba(var(--ink-rgb),.12)] bg-[color:var(--card)] px-3 py-1.5 text-[15px] font-semibold text-[color:var(--ink)] transition-colors duration-100 hover:bg-[color:var(--tint)]"
            >
              {w}
            </button>
          ))}
        </div>
      )}
      {results === null ? (
        <button
          type="button"
          disabled={!allFilled}
          onClick={submit}
          className={CHECK_BTN}
        >
          Check
        </button>
      ) : (
        <FeedbackPanel
          verdict={overall!}
          canonical={slide.blanks.map((b) => b[0]).join(", ")}
          explanation={slide.explanation}
          onContinue={() => onDone(overall !== "wrong")}
        />
      )}
    </div>
  );
}

export function ReorderSlideView({ slide, onDone }: QuizProps<ReorderSlide>) {
  const [pool, setPool] = useState<string[]>(() => shuffle(slide.words));
  const [chosen, setChosen] = useState<string[]>([]);
  const [result, setResult] = useState<GradeResult | null>(null);

  return (
    <div>
      <QuizTitle>Build the sentence</QuizTitle>
      <p className="mt-1 text-[15px] text-[color:var(--muted)]">{slide.en}</p>
      <div className="mt-5 min-h-14 rounded-[10px] border border-dashed border-[rgba(var(--ink-rgb),.2)] p-3">
        <div className="flex flex-wrap gap-2">
          {chosen.map((w, i) => (
            <button
              key={`${w}-${i}`}
              type="button"
              disabled={result !== null}
              onClick={() => {
                setChosen(chosen.filter((_, j) => j !== i));
                setPool([...pool, w]);
              }}
              className="rounded-lg bg-[color:var(--ink)] px-3 py-1.5 text-[15px] font-semibold text-white"
            >
              {w}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {pool.map((w, i) => (
          <button
            key={`${w}-${i}`}
            type="button"
            disabled={result !== null}
            onClick={() => {
              setPool(pool.filter((_, j) => j !== i));
              setChosen([...chosen, w]);
            }}
            className={`rounded-lg border px-3 py-1.5 text-[15px] font-semibold transition-colors duration-100 ${OPT_IDLE}`}
          >
            {w}
          </button>
        ))}
      </div>
      {result === null ? (
        <button
          type="button"
          disabled={pool.length > 0}
          onClick={() => setResult(gradeReorder(chosen.join(" "), slide.answers))}
          className={CHECK_BTN}
        >
          Check
        </button>
      ) : (
        <FeedbackPanel
          verdict={result.verdict}
          canonical={slide.answers[0]}
          explanation={slide.explanation}
          onContinue={() => onDone(result.verdict !== "wrong")}
        />
      )}
    </div>
  );
}
