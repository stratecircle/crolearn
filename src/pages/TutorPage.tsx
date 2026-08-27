/**
 * Tutor — a chat pane, not a page. The View owns the window height and hands
 * it to a SplitView: conversations on the left, the thread on the right, each
 * scrolling on its own. The composer is pinned to the bottom of the *pane* as
 * an elevated bar, so the message list scrolls under a fixed input the way a
 * desktop chat app does.
 *
 * The thread keeps the two registers a chat needs: the tutor answers as plain
 * prose in the reading measure (it writes tables and lists, which a bubble
 * would crush), and your own turns stay short tinted bubbles on the right.
 *
 * Wired to the real Anthropic streaming tutor and to Dexie `tutorSessions`.
 * No key → prompt chips stay visible and send is disabled, with a pointer to
 * Settings.
 *
 * Below 900px SplitView gives the width to one pane; `mobilePane` decides which,
 * so the conversation history stays reachable on a phone.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Plus } from "lucide-react";
import Markdown from "@/components/Markdown";
import { aiErrorMessage, hasApiKey, streamTutor } from "@/lib/claude";
import { courseGrounding } from "@/content";
import { db, type TutorSessionRow } from "@/lib/db";
import { ACCENT, Banner, BODY2, Divider, INK, Kbd, Meta, MUTED, Panel, SplitView, View } from "@/ui/kit";

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

/**
 * A row's second line: the first real line of the tutor's reply, stripped of
 * markdown punctuation. Free — the messages are already loaded for the row.
 */
function sessionPreview(s: TutorSessionRow): string {
  const reply = s.messages.find((m) => m.role === "assistant")?.text ?? "";
  const line = reply
    .split("\n")
    .map((l) => l.replace(/[*_`#>|-]/g, " ").replace(/\s+/g, " ").trim())
    .find((l) => l.length > 0);
  if (!line) return "";
  return line.length > 64 ? line.slice(0, 64) + "…" : line;
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
  const [mobilePane, setMobilePane] = useState<"chat" | "list">("chat");
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
    setMobilePane("chat");
  }
  function newConversation() {
    setActiveId(null);
    setMessages([]);
    setDraft("");
    setError(null);
    setMobilePane("chat");
  }

  const conversations = (
    <div className="py-4">
      <Meta className="px-4 pb-1.5">Conversations</Meta>
      {sessions.length === 0 && <p className="px-4 py-2 text-[13px]" style={{ color: MUTED }}>No conversations yet.</p>}
      {sessions.map((s, i) => {
        const on = s.id === activeId;
        const preview = sessionPreview(s);
        const turns = s.messages.filter((m) => m.role === "user").length;
        return (
          <div key={s.id}>
            {i > 0 && <Divider />}
            <button
              onClick={() => openSession(s)}
              aria-current={on ? "true" : undefined}
              className="w-full px-4 py-2.5 text-left transition-colors duration-100 hover:bg-[color:var(--tint)]"
              style={{ background: on ? "rgba(var(--ink-rgb),.06)" : "transparent" }}
            >
              <div className="flex items-baseline gap-2">
                <span className="min-w-0 flex-1 truncate text-[13.5px]" style={{ color: on ? INK : BODY2, fontWeight: on ? 600 : 450 }}>
                  {sessionTitle(s)}
                </span>
                <span className="meta flex-none" style={{ color: "var(--muted3)" }}>{when(s.startedAt)}</span>
              </div>
              {preview && (
                <div className="mt-0.5 truncate text-[12px]" style={{ color: MUTED }}>{preview}</div>
              )}
              <div className="meta mt-1 tabular-nums" style={{ color: "var(--muted3)" }}>
                {turns} {turns === 1 ? "turn" : "turns"}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );

  return (
    <View
      title="Tutor"
      sub="Ask questions, get explanations, practice conversation."
      scroll={false}
      actions={
        <>
          {/* Only reachable below 900px, where SplitView gives the width to one pane. */}
          <button
            onClick={() => setMobilePane((p) => (p === "chat" ? "list" : "chat"))}
            className="meta -mx-1.5 -my-1.5 px-1.5 py-1.5 transition-colors duration-100 min-[900px]:hidden"
            style={{ color: "var(--muted3)" }}
          >
            {mobilePane === "chat" ? "Conversations" : "Chat"}
          </button>
          <button
            onClick={newConversation}
            /* "New" reads as a bare adjective out of context, so the label
               spells it out; the padding grows the 40x17 target to the 24px
               WCAG 2.5.8 minimum and the equal negative margin keeps the
               rendered layout pixel-identical. */
            aria-label="New conversation"
            className="meta -mx-1.5 -my-1.5 inline-flex items-center gap-1.5 px-1.5 py-1.5 transition-colors duration-100 hover:text-[color:var(--body)]"
            style={{ color: ACCENT }}
          >
            <Plus size={12} strokeWidth={2.6} aria-hidden />New
          </button>
        </>
      }
    >
      <SplitView list={conversations} listWidth={260} showList={mobilePane === "list"}>
        {/* The chat pane: a scroller that fills the height, a composer at its foot. */}
        <div className="flex h-full min-h-0 flex-col">
          <div ref={scroller} className="nativ-noscrollbar min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-[720px] space-y-6 px-8 py-8 max-[700px]:px-4">
              {!keyPresent && (
                <Banner color="var(--orange)">
                  The tutor needs your Anthropic API key to reply.{" "}
                  <Link to="/settings" className="underline">Add it in Settings</Link> — everything else in CroLearn works without it.
                </Banner>
              )}

              {messages.length === 0 && (
                <Panel className="rise rise-1" title="Your Croatian tutor">
                  <p className="text-[15px] font-semibold" style={{ color: INK }}>Bok, Noah! How can I help?</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: BODY2 }}>
                    It knows the grammar and vocabulary the course has taught you so far, so explanations,
                    drills, role-play and corrections all stay at your level. Ask in English or Croatian.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 max-[700px]:grid-cols-1">
                    {PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => void send(p)}
                        disabled={!keyPresent}
                        className="flex items-start gap-2.5 rounded-lg border px-3 py-2.5 text-left text-[13px] leading-snug transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-50"
                        style={{ borderColor: "rgba(var(--ink-rgb),.12)", color: BODY2 }}
                      >
                        <ArrowUp
                          size={13}
                          color="var(--muted3)"
                          strokeWidth={2.2}
                          className="mt-[3px] flex-none rotate-45 transition-colors duration-150"
                          aria-hidden
                        />
                        <span className="min-w-0">{p}</span>
                      </button>
                    ))}
                  </div>
                </Panel>
              )}

              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div
                      className="max-w-[80%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed"
                      style={{ background: "var(--tint)", color: INK }}
                    >
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
          </div>

          <div className="flex-none border-t px-8 pb-4 pt-3 max-[700px]:px-4" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
            <div className="mx-auto w-full max-w-[720px]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(draft);
                }}
                className="flex items-center gap-1.5 rounded-xl border py-1.5 pl-4 pr-1.5 transition-colors duration-150 focus-within:border-[color:var(--primary)]"
                style={{ borderColor: "rgba(var(--ink-rgb),.14)", background: "var(--card)", boxShadow: "var(--e1)" }}
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
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full transition-opacity duration-150 disabled:opacity-30"
                  style={{ background: ACCENT }}
                >
                  <ArrowUp size={16} color="#fff" strokeWidth={2.4} />
                </button>
              </form>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <span className="meta flex items-center gap-1.5" style={{ color: "var(--muted3)" }}>
                  <Kbd>Enter</Kbd> send
                </span>
                <span className="text-xs" style={{ color: "var(--muted3)" }}>
                  Tutor can make mistakes — double-check important grammar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </SplitView>
    </View>
  );
}
