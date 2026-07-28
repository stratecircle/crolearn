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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">{slide.title ?? "Quick check"}</h2>
      <ol className="mt-4 space-y-4">
        {slide.items.map((item, qi) => {
          const verdictKnown = checked;
          const isRight = picked[qi] === item.correctIndex;
          return (
            <li key={qi} className="rounded-lg border border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] p-4">
              <p className="font-bold">
                {qi + 1}. {item.prompt}{" "}
                {item.tts && <TtsButton text={item.tts} className="ml-1 align-middle" />}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
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
                    className={`rounded-lg border-2 px-3 py-1.5 font-semibold transition ${
                      !verdictKnown
                        ? picked[qi] === oi
                          ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                          : "border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] hover:border-[color:var(--ink)]"
                        : oi === item.correctIndex
                          ? "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)]"
                          : oi === picked[qi]
                            ? "border-[color:var(--primary)] bg-[rgba(var(--primary-rgb),.06)]"
                            : "border-[rgba(var(--ink-rgb),.08)] opacity-60"
                    }`}
                  >
                    {item.options[oi]}
                  </button>
                ))}
              </div>
              {verdictKnown && (
                <p className={`mt-2 text-sm ${isRight ? "text-[color:var(--green)]" : "text-[color:var(--primary)]"}`}>
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
          className="mt-4 w-full rounded-lg bg-[color:var(--ink)] py-2.5 font-bold text-white disabled:opacity-40"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">
        {slide.prompt} {slide.tts && <TtsButton text={slide.tts} className="ml-1 align-middle" />}
      </h2>
      <div className="mt-4 grid gap-2">
        {order.map((i) => (
          <button
            key={i}
            type="button"
            disabled={answered}
            onClick={() => setPicked(i)}
            className={`rounded-lg border-2 px-4 py-3 text-left text-lg font-semibold transition ${
              !answered
                ? "border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] hover:border-[color:var(--ink)]"
                : i === slide.correctIndex
                  ? "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)]"
                  : i === picked
                    ? "border-[color:var(--primary)] bg-[rgba(var(--primary-rgb),.06)]"
                    : "border-[rgba(var(--ink-rgb),.08)] bg-[color:var(--card)] opacity-60"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">{slide.prompt}</h2>
      {slide.hint && <p className="mt-1 text-sm text-[color:var(--muted)]">Hint: {slide.hint}</p>}
      <div className="mt-4">
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
          className="mt-4 rounded-lg bg-[color:var(--ink)] px-5 py-2 font-bold text-white disabled:opacity-40"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Listen and type</h2>
      <div className="mt-4 flex gap-2">
        <TtsButton text={slide.tts} label="Listen" className="!px-4 !py-2 !text-base" />
        {(slide.allowSlow ?? true) && (
          <TtsButton text={slide.tts} slow label="Slower" className="!px-4 !py-2 !text-base" />
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
          className="mt-4 rounded-lg bg-[color:var(--ink)] px-5 py-2 font-bold text-white disabled:opacity-40"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Say it out loud</h2>
      <div className="mt-4 rounded-lg border border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] p-4">
        <p className="text-2xl font-bold">
          {slide.targetHr} <TtsButton text={slide.targetHr} className="ml-1" />
          <TtsButton text={slide.targetHr} slow className="ml-1" />
        </p>
        <p className="text-[color:var(--muted)]">{slide.targetEn}</p>
        {slide.phonetic && <p className="mt-1 text-sm text-[color:var(--muted)]">[{slide.phonetic}]</p>}
      </div>

      {supported ? (
        <button
          type="button"
          onClick={record}
          disabled={state === "listening"}
          className="mt-4 w-full rounded-lg border border-[color:var(--ink)] py-3 text-lg font-semibold hover:bg-[color:var(--tint)] disabled:opacity-50"
        >
          {state === "listening" ? "Listening…" : "Record yourself"}
        </button>
      ) : (
        <p className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
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
        <p className="mt-3 text-sm text-[color:var(--primary)]">Microphone is blocked — allow access, or rate yourself below.</p>
      )}
      {error === "no-speech" && <p className="mt-3 text-sm text-[color:var(--body2)]">I didn't hear anything — try again.</p>}

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={() => onDone(true)}
          className="flex-1 rounded-lg bg-[color:var(--green)] py-2.5 font-semibold text-white hover:bg-[color:var(--green-strong)]"
        >
          {score !== null && score >= 0.75 ? "Continue →" : "I said it correctly"}
        </button>
        <button
          type="button"
          onClick={() => onDone(false)}
          className="flex-1 rounded-lg border border-[rgba(var(--ink-rgb),.12)] bg-[color:var(--card)] py-2.5 font-semibold text-[color:var(--body)] hover:bg-[color:var(--tint)]"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">{slide.prompt ?? "Match the pairs"}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          {slide.pairs.map((p, i) => (
            <button
              key={p.a}
              type="button"
              disabled={matched.has(p.a)}
              onClick={() => setSelectedA(p.a)}
              className={`rounded-lg border-2 px-3 py-2.5 font-semibold transition ${
                matched.has(p.a)
                  ? "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)] opacity-60"
                  : selectedA === p.a
                    ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                    : "border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] hover:border-[color:var(--ink)]"
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
                className={`rounded-lg border-2 px-3 py-2.5 font-semibold transition ${
                  isMatched
                    ? "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)] opacity-60"
                    : flash === b
                      ? "border-[color:var(--primary)] bg-[rgba(var(--primary-rgb),.06)]"
                      : "border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] enabled:hover:border-[color:var(--ink)] disabled:opacity-60"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Complete the sentence</h2>
      <p className="mt-4 flex flex-wrap items-baseline gap-1 text-xl leading-relaxed">
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
                className={`w-28 rounded-lg border-b-4 px-2 py-1 text-center text-lg font-semibold outline-none ${
                  results === null
                    ? "border-[rgba(var(--ink-rgb),.25)] bg-[color:var(--card)] focus:border-[color:var(--ink)]"
                    : results[i].verdict === "wrong"
                      ? "border-[color:var(--primary)] bg-[rgba(var(--primary-rgb),.06)]"
                      : results[i].verdict === "diacritics"
                        ? "border-[color:var(--orange)] bg-[rgba(var(--orange-rgb),.08)]"
                        : "border-[color:var(--green)] bg-[rgba(var(--green-rgb),.07)]"
                }`}
              />
            )}
          </span>
        ))}
      </p>
      {slide.translation && <p className="mt-2 text-[color:var(--muted)]">{slide.translation}</p>}
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
              className="rounded-lg border border-[rgba(var(--ink-rgb),.12)] bg-[color:var(--card)] px-3 py-1.5 font-semibold hover:bg-[color:var(--tint)]"
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
          className="mt-4 rounded-lg bg-[color:var(--ink)] px-5 py-2 font-bold text-white disabled:opacity-40"
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
      <h2 className="font-display text-xl font-bold text-[color:var(--ink)]">Build the sentence</h2>
      <p className="mt-1 text-[color:var(--muted)]">{slide.en}</p>
      <div className="mt-4 min-h-14 rounded-lg border-2 border-dashed border-[rgba(var(--ink-rgb),.16)] bg-[color:var(--card)] p-3">
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
              className="rounded-lg bg-[color:var(--ink)] px-3 py-1.5 font-semibold text-white"
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
            className="rounded-lg border-2 border-[rgba(var(--ink-rgb),.14)] bg-[color:var(--card)] px-3 py-1.5 font-semibold hover:border-[color:var(--ink)]"
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
          className="mt-4 rounded-lg bg-[color:var(--ink)] px-5 py-2 font-bold text-white disabled:opacity-40"
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
