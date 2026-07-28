import { useEffect, useRef, useState } from "react";
import Markdown from "@/components/Markdown";
import { aiErrorMessage, streamTutor } from "@/lib/claude";
import { courseGrounding } from "@/content";
import { db } from "@/lib/db";

type Msg = { role: "user" | "assistant"; text: string };

const DEFAULT_STARTERS = [
  "Explain the difference between dobar and dobro.",
  "Quiz me on numbers 1–10 in Croatian.",
  "Let's role-play ordering a coffee.",
  "Why is it 'moja sestra' but 'moj brat'?",
];

/**
 * The tutor conversation UI, reusable in two places: the full Tutor page and the
 * "Ask about this slide" overlay inside a lesson. Layout-agnostic — it fills its
 * parent (flex column, scrolling message list + pinned composer). Assumes a key
 * exists; callers gate on hasApiKey(). `seedFocus` passes slide/lesson context to
 * the model; `seedPrompt` pre-fills the composer so one tap sends.
 */
export default function TutorChat({
  seedFocus,
  seedPrompt,
  starters = DEFAULT_STARTERS,
  emptyHint = "Bok! Ask me anything about Croatian.",
}: {
  seedFocus?: string;
  seedPrompt?: string;
  starters?: string[];
  emptyHint?: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState(seedPrompt ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sessionId = useRef<number | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  async function persist(next: Msg[]) {
    try {
      if (sessionId.current == null) {
        sessionId.current = (await db.tutorSessions.add({ startedAt: new Date(), messages: next })) as number;
      } else {
        await db.tutorSessions.update(sessionId.current, { messages: next });
      }
    } catch {
      /* persistence is best-effort */
    }
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setError(null);
    const withUser: Msg[] = [...messages, { role: "user", text: trimmed }];
    setMessages(withUser);
    setInput("");
    setBusy(true);
    const history = withUser.map((m) => ({ role: m.role, text: m.text }));
    let acc = "";
    setMessages([...withUser, { role: "assistant", text: "" }]);
    try {
      for await (const delta of streamTutor({
        history,
        levelContext: courseGrounding({ includeVocab: true }),
        focus: seedFocus,
      })) {
        acc += delta;
        setMessages([...withUser, { role: "assistant", text: acc }]);
      }
      const final: Msg[] = [...withUser, { role: "assistant", text: acc }];
      setMessages(final);
      void persist(final);
    } catch (e) {
      setError(aiErrorMessage(e));
      setMessages(withUser); // drop the empty assistant bubble
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto pb-4">
        {messages.length === 0 && (
          <div className="rounded-[20px] border border-[rgba(15,23,42,.07)] bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,.04)]">
            <p className="font-semibold text-[#16243D]">{emptyHint}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {starters.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void send(s)}
                  className="rounded-full border border-[rgba(15,23,42,.1)] bg-white px-3.5 py-1.5 text-left text-sm text-[#3F4A5C] transition-colors duration-[180ms] hover:bg-[#F7F4F0]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                m.role === "user"
                  ? "max-w-[85%] rounded-2xl bg-[#16243D] px-4 py-2.5 text-white"
                  : "max-w-[90%] rounded-2xl border border-[rgba(15,23,42,.07)] bg-white px-4 py-2.5 text-[#16243D] shadow-[0_1px_2px_rgba(15,23,42,.03)]"
              }
            >
              {m.role === "assistant" ? (
                m.text ? <Markdown text={m.text} /> : <span className="text-[#8B93A1]">…</span>
              ) : (
                m.text
              )}
            </div>
          </div>
        ))}
      </div>

      {error && <p className="mb-2 rounded-xl bg-[rgba(224,138,43,.1)] px-3.5 py-2 text-sm text-[#7A4A12]">{error}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the tutor…"
          disabled={busy}
          className="flex-1 rounded-xl border border-[rgba(15,23,42,.14)] bg-white px-4 py-2.5 text-[#16243D] outline-none transition-colors duration-150 focus:border-[#16243D] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="rounded-xl bg-[#C93434] px-5 py-2.5 font-semibold text-white transition-colors duration-[180ms] hover:bg-[#B32C2C] disabled:opacity-40"
        >
          {busy ? "…" : "Send"}
        </button>
      </form>
    </div>
  );
}
