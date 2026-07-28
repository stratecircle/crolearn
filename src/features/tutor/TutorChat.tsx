import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import Markdown from "@/components/Markdown";
import { aiErrorMessage, streamTutor } from "@/lib/claude";
import { courseGrounding } from "@/content";
import { db } from "@/lib/db";
import { ACCENT, Banner, INK, Meta, MUTED } from "@/ui/kit";

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
      <div ref={scroller} className="nativ-noscrollbar flex-1 space-y-6 overflow-y-auto pb-6">
        {messages.length === 0 && (
          <div>
            <p className="text-[15px] font-semibold" style={{ color: INK }}>{emptyHint}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {starters.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void send(s)}
                  className="rounded-full border px-3 py-1.5 text-left text-[13px] transition-colors duration-150 hover:bg-[color:var(--tint)]"
                  style={{ borderColor: "rgba(var(--ink-rgb),.12)", color: "var(--body2)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed" style={{ background: "var(--tint)", color: INK }}>
                {m.text}
              </div>
            </div>
          ) : (
            <div key={i}>
              <Meta className="mb-1.5">Tutor</Meta>
              <div className="text-[15px] leading-relaxed" style={{ color: INK }}>
                {m.text ? <Markdown text={m.text} /> : <span style={{ color: MUTED }}>…</span>}
              </div>
            </div>
          ),
        )}
      </div>

      {error && <Banner color="var(--orange)">{error}</Banner>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
        className="flex items-center gap-1.5 rounded-xl border py-1.5 pl-4 pr-1.5 transition-colors duration-150 focus-within:border-[color:var(--primary)]"
        style={{ borderColor: "rgba(var(--ink-rgb),.14)", background: "var(--card)" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask the tutor…"
          disabled={busy}
          className="min-w-0 flex-1 border-none bg-transparent py-1.5 text-[15px] outline-none disabled:opacity-60"
          style={{ color: INK }}
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send"
          className="flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-opacity duration-150 disabled:opacity-30"
          style={{ background: ACCENT }}
        >
          <ArrowUp size={16} color="#fff" strokeWidth={2.4} />
        </button>
      </form>
    </div>
  );
}
