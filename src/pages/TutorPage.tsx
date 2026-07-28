/**
 * Tutor — conversations list + the chat, wired to the real Anthropic streaming
 * tutor and to Dexie `tutorSessions`. No key → prompt chips stay visible and
 * send is disabled, with a pointer to Settings.
 *
 * The old right rail (progress ring / recently-learned / tool tiles) is gone:
 * progress lives on Home, and the tools were four canned prompts — they now sit
 * in the empty-state prompt row where they are actually useful.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Plus } from "lucide-react";
import Markdown from "@/components/Markdown";
import { aiErrorMessage, hasApiKey, streamTutor } from "@/lib/claude";
import { courseGrounding } from "@/content";
import { db, type TutorSessionRow } from "@/lib/db";
import { ACCENT, Banner, BODY2, Divider, INK, Meta, MUTED, PageHeader } from "@/ui/kit";

type Msg = { role: "user" | "assistant"; text: string };

const PROMPTS = [
  "Explain a grammar point I should master at my current level.",
  "Quiz me on recent vocabulary.",
  "Let's role-play a real-life conversation at my level.",
  "Give me a short writing task and correct my answer.",
];

function sessionTitle(s: TutorSessionRow): string {
  const first = s.messages.find((m) => m.role === "user")?.text ?? "Conversation";
  return first.length > 34 ? first.slice(0, 34) + "…" : first;
}

function when(d: Date): string {
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  return days === 0 ? "Today" : days === 1 ? "Yesterday" : `${days}d`;
}

export default function TutorPage() {
  const keyPresent = hasApiKey();
  const [sessions, setSessions] = useState<TutorSessionRow[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void db.tutorSessions.orderBy("startedAt").reverse().limit(12).toArray().then(setSessions);
  }, []);
  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  async function persist(next: Msg[]) {
    try {
      if (activeId == null) {
        const id = (await db.tutorSessions.add({ startedAt: new Date(), messages: next })) as number;
        setActiveId(id);
        setSessions(await db.tutorSessions.orderBy("startedAt").reverse().limit(12).toArray());
      } else {
        await db.tutorSessions.update(activeId, { messages: next });
      }
    } catch {
      /* best-effort */
    }
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy || !keyPresent) return;
    setError(null);
    const withUser: Msg[] = [...messages, { role: "user", text: trimmed }];
    setMessages(withUser);
    setDraft("");
    setBusy(true);
    let acc = "";
    setMessages([...withUser, { role: "assistant", text: "" }]);
    try {
      for await (const delta of streamTutor({
        history: withUser.map((m) => ({ role: m.role, text: m.text })),
        levelContext: courseGrounding({ includeVocab: true }),
      })) {
        acc += delta;
        setMessages([...withUser, { role: "assistant", text: acc }]);
      }
      const final: Msg[] = [...withUser, { role: "assistant", text: acc }];
      setMessages(final);
      void persist(final);
    } catch (e) {
      setError(aiErrorMessage(e));
      setMessages(withUser);
    } finally {
      setBusy(false);
    }
  }

  function openSession(s: TutorSessionRow) {
    setActiveId(s.id ?? null);
    setMessages(s.messages);
    setError(null);
  }
  function newConversation() {
    setActiveId(null);
    setMessages([]);
    setDraft("");
    setError(null);
  }

  return (
    <div className="flex h-[calc(100dvh-120px)] min-h-[520px] flex-col">
      <PageHeader
        title="Tutor"
        sub="Ask questions, get explanations, practice conversation."
        right={
          <button
            onClick={newConversation}
            className="meta inline-flex items-center gap-1.5 transition-colors duration-100 hover:text-[color:var(--body)]"
            style={{ color: ACCENT }}
          >
            <Plus size={12} strokeWidth={2.6} />New
          </button>
        }
      />

      <div className="mt-8 grid min-h-0 flex-1 grid-cols-[190px_minmax(0,1fr)] gap-10 max-[820px]:grid-cols-1 max-[820px]:gap-5">
        {/* Conversations */}
        <aside className="nativ-noscrollbar min-h-0 overflow-y-auto max-[820px]:max-h-[136px]">
          <Meta>Conversations</Meta>
          <div className="mt-2">
            {sessions.length === 0 && <p className="py-2 text-[13px]" style={{ color: MUTED }}>No conversations yet.</p>}
            {sessions.map((s, i) => {
              const on = s.id === activeId;
              return (
                <div key={s.id}>
                  {i > 0 && <Divider />}
                  <button onClick={() => openSession(s)} className="w-full py-2.5 text-left">
                    <div className="flex items-baseline gap-2">
                      <span className="min-w-0 flex-1 truncate text-[13.5px]" style={{ color: on ? INK : BODY2, fontWeight: on ? 600 : 450 }}>
                        {sessionTitle(s)}
                      </span>
                      <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{when(s.startedAt)}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Chat */}
        <section className="flex min-h-0 flex-col">
          <div ref={scroller} className="nativ-noscrollbar min-h-0 flex-1 space-y-6 overflow-y-auto pb-6">
            {!keyPresent && (
              <Banner color="var(--orange)">
                The tutor needs your Anthropic API key to reply.{" "}
                <Link to="/settings" className="underline">Add it in Settings</Link> — everything else in CroLearn works without it.
              </Banner>
            )}

            {messages.length === 0 && (
              <div>
                <p className="text-[15px] font-semibold" style={{ color: INK }}>Bok, Noah! How can I help?</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => void send(p)}
                      disabled={!keyPresent}
                      className="rounded-full border px-3 py-1.5 text-left text-[13px] transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-50"
                      style={{ borderColor: "rgba(var(--ink-rgb),.12)", color: BODY2 }}
                    >
                      {p}
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
            {error && <Banner color="var(--orange)">{error}</Banner>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(draft);
            }}
            className="flex flex-none items-center gap-1.5 rounded-xl border py-1.5 pl-4 pr-1.5 transition-colors duration-150 focus-within:border-[color:var(--primary)]"
            style={{ borderColor: "rgba(var(--ink-rgb),.14)", background: "var(--card)" }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              disabled={busy}
              placeholder="Message your tutor in Croatian or English…"
              className="min-w-0 flex-1 border-none bg-transparent py-1.5 text-[15px] outline-none disabled:opacity-60"
              style={{ color: INK }}
            />
            <button
              type="submit"
              disabled={busy || !draft.trim() || !keyPresent}
              aria-label="Send"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-lg transition-opacity duration-150 disabled:opacity-30"
              style={{ background: ACCENT }}
            >
              <ArrowUp size={16} color="#fff" strokeWidth={2.4} />
            </button>
          </form>
          <p className="mt-2 text-center text-xs" style={{ color: "var(--muted3)" }}>
            Tutor can make mistakes — double-check important grammar.
          </p>
        </section>
      </div>
    </div>
  );
}
