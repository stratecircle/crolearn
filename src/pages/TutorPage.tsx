/**
 * Tutor — Nativ 3-column screen (README §Screens 7): conversations sidebar
 * (real tutorSessions from Dexie), chat card wired to the real Anthropic
 * streaming tutor (replacing the handoff's stubbed tutorReplies), right rail
 * with real progress + recently-learned words. Mic/translate dead-end controls
 * from the prototype are removed per the handoff's "wire or remove" note.
 * No key → prompt chips stay visible, send is disabled (handoff table row).
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Info, Languages, MessageCircle, MessageSquare, PenLine, Plus, Sparkles } from "lucide-react";
import Markdown from "@/components/Markdown";
import { aiErrorMessage, hasApiKey, streamTutor } from "@/lib/claude";
import { courseGrounding } from "@/content";
import { db, type TutorSessionRow } from "@/lib/db";
import { loadNativProgress, type NativProgress } from "@/features/nativ/stats";
import { BODY2, Card, CardH, GREEN, INK, MUTED, ProgressBar, RED, Ring, Tile, tint } from "@/ui/kit";

type Msg = { role: "user" | "assistant"; text: string };

const PROMPTS = ["Explain a grammar rule", "Quiz me on recent vocabulary", "Let's role-play a conversation", "Help me write something"];

const TOOLS = [
  { title: "Grammar explanations", sub: "Get clear grammar breakdowns", icon: Info, color: "var(--blue)", prompt: "Explain a grammar point I should master at my current level." },
  { title: "Word explanations", sub: "Understand any word in context", icon: Languages, color: "var(--violet)", prompt: "Pick a tricky word I've learned and explain it in context." },
  { title: "Conversation practice", sub: "Practice real conversations", icon: MessageCircle, color: "var(--green)", prompt: "Let's role-play a real-life conversation at my level." },
  { title: "Writing help", sub: "Improve your writing", icon: PenLine, color: "var(--blue)", prompt: "Give me a short writing task and correct my answer." },
];

function sessionTitle(s: TutorSessionRow): string {
  const first = s.messages.find((m) => m.role === "user")?.text ?? "Conversation";
  return first.length > 34 ? first.slice(0, 34) + "…" : first;
}

function when(d: Date): string {
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  return days === 0 ? "Today" : days === 1 ? "Yesterday" : `${days}d ago`;
}

export default function TutorPage() {
  const keyPresent = hasApiKey();
  const [sessions, setSessions] = useState<TutorSessionRow[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<NativProgress | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void db.tutorSessions.orderBy("startedAt").reverse().limit(12).toArray().then(setSessions);
    void loadNativProgress().then(setProgress);
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

  const goalPct = progress ? Math.round((progress.stats.goalDone / progress.stats.goalTotal) * 100) : 0;

  return (
    <div className="nativ-noscrollbar grid h-[calc(100dvh-92px)] grid-cols-[260px_minmax(0,1fr)_300px] gap-[18px] overflow-hidden py-1 max-[1100px]:h-auto max-[1100px]:grid-cols-1 max-[1100px]:overflow-visible">
      {/* Left: conversations (drops below the chat on tablet/phone) */}
      <div className="nativ-noscrollbar min-h-0 max-h-full overflow-y-auto max-[1100px]:order-2 max-[1100px]:max-h-none">
        <h1 className="mb-1.5" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 30, lineHeight: 1.1, letterSpacing: "-.015em", color: INK }}>Tutor</h1>
        <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--body)" }}>Ask questions, get explanations, practice conversation.</p>
        <Card className="mb-3.5 p-3.5">
          <button
            onClick={newConversation}
            className="mb-3.5 flex h-12 w-full items-center gap-[11px] rounded-lg px-4 text-[15px] font-medium transition-colors duration-[180ms] hover:bg-[rgba(var(--primary-rgb),.06)]"
            style={{ color: RED }}
          >
            <Plus size={18} />New conversation
          </button>
          <div className="mb-2.5 px-4 text-[11px] font-semibold" style={{ letterSpacing: ".13em", color: MUTED }}>CONVERSATIONS</div>
          <div className="grid gap-0.5">
            {sessions.length === 0 && <div className="px-4 pb-2 text-[13px]" style={{ color: MUTED }}>No conversations yet.</div>}
            {sessions.map((s) => {
              const on = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => openSession(s)}
                  className="flex items-center gap-[13px] rounded-lg px-4 py-3 text-left transition-colors duration-[180ms]"
                  style={{ background: on ? "rgba(var(--primary-rgb),.06)" : "transparent" }}
                >
                  <Tile icon={MessageSquare} color={on ? RED : "var(--blue)"} size={34} radius={10} iconSize={16} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[15px] font-semibold" style={{ color: on ? RED : INK }}>{sessionTitle(s)}</div>
                    <div className="truncate text-[13px]" style={{ color: MUTED }}>{s.messages.length} messages</div>
                  </div>
                  <div className="flex-none text-xs" style={{ color: on ? RED : MUTED }}>{when(s.startedAt)}</div>
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Center: chat (first on tablet/phone) */}
      <Card className="flex min-h-0 flex-col max-[1100px]:order-1 max-[1100px]:min-h-[70dvh]" style={{ height: "100%" }}>
        <div className="px-[22px] pt-[18px]">
          <div className="mb-3.5 flex items-center gap-3.5">
            <div className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-lg" style={{ background: INK }}>
              <Sparkles size={19} color="#fff" />
            </div>
            <div>
              <div className="mb-[3px]" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 19, color: INK }}>Bok, Noah!</div>
              <div className="text-sm" style={{ color: BODY2 }}>How can I help you today?</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 border-b pb-4" style={{ borderColor: "rgba(var(--ink-rgb),.12)" }}>
            {PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => void send(p)}
                className="rounded-full border bg-[color:var(--card)] px-3.5 py-2 text-sm transition-colors duration-[180ms] hover:bg-[color:var(--tint)]"
                style={{ borderColor: "rgba(var(--ink-rgb),.18)", color: "var(--body)" }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div ref={scroller} className="nativ-noscrollbar flex min-h-0 flex-1 flex-col gap-[18px] overflow-y-auto px-6 py-5">
          {!keyPresent && (
            <div className="rounded-[10px] border bg-[color:var(--card)] p-6 text-[15px] leading-relaxed" style={{ borderColor: "rgba(var(--ink-rgb),.14)", color: BODY2 }}>
              The tutor needs your Anthropic API key to reply.{" "}
              <Link to="/settings" className="font-semibold" style={{ color: RED }}>Add it in Settings →</Link>{" "}
              Everything else in CroLearn works without it.
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className="flex flex-col gap-[7px]" style={{ alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
              {m.role === "user" ? (
                <div className="max-w-[70%] rounded-[10px] px-[22px] py-4 text-[16px] leading-normal text-white" style={{ background: INK }}>{m.text}</div>
              ) : (
                <div className="max-w-[82%] rounded-[10px] border bg-[color:var(--card)] px-[26px] py-5 text-[16px] leading-relaxed" style={{ borderColor: "rgba(var(--ink-rgb),.14)", boxShadow: "0 1px 2px rgba(var(--shadow-rgb),.03)", color: INK }}>
                  {m.text ? <Markdown text={m.text} /> : <span style={{ color: MUTED }}>…</span>}
                </div>
              )}
            </div>
          ))}
          {error && <div className="rounded-lg px-4 py-3 text-sm" style={{ background: tint("var(--orange)", 0.1), color: "var(--brown)" }}>{error}</div>}
        </div>

        <div className="rounded-b-[20px] border-t px-[22px] pb-[22px] pt-[18px]" style={{ borderColor: "rgba(var(--ink-rgb),.12)", background: "var(--card)" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(draft);
            }}
            className="flex min-h-14 items-center gap-1.5 rounded-full border bg-[color:var(--card)] py-1.5 pl-4 pr-1.5"
            style={{ borderColor: "rgba(var(--ink-rgb),.18)", boxShadow: "0 2px 10px rgba(var(--shadow-rgb),.05)" }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              disabled={busy}
              placeholder="Message your tutor in Croatian or English…"
              className="min-w-0 flex-1 border-none bg-transparent text-[16px] outline-none disabled:opacity-60"
              style={{ color: INK }}
            />
            <button
              type="submit"
              disabled={busy || !draft.trim() || !keyPresent}
              aria-label="Send"
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full transition-colors duration-[180ms] disabled:opacity-40"
              style={{ background: RED }}
            >
              <ArrowUp size={20} color="#fff" />
            </button>
          </form>
          <div className="mt-2.5 text-center text-xs" style={{ color: "var(--muted2)" }}>Tutor can make mistakes — double-check important grammar.</div>
        </div>
      </Card>

      {/* Right rail (last on tablet/phone) */}
      <div className="nativ-noscrollbar grid min-h-0 max-h-full content-start gap-3.5 overflow-y-auto max-[1100px]:order-3 max-[1100px]:max-h-none">
        {progress && (
          <Card className="px-5 py-[18px]">
            <CardH className="mb-5">Today's progress</CardH>
            <div className="mb-5 flex items-center gap-[18px]">
              <Ring pct={goalPct} color={GREEN} size={88} hole={70}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 24, lineHeight: 1, color: INK }}>{progress.stats.goalDone}</div>
                <div className="mt-0.5 text-[11px]" style={{ color: MUTED }}>/ {progress.stats.goalTotal} steps</div>
              </Ring>
              <div className="text-sm leading-normal" style={{ color: BODY2 }}>
                {progress.stats.due > 0 ? `${progress.stats.due} cards still due today.` : progress.stats.goalDone >= progress.stats.goalTotal ? "Daily goal complete!" : "Review is clear — one lesson to go."}
              </div>
            </div>
            <div className="mb-[18px] h-px" style={{ background: "rgba(var(--ink-rgb),.12)" }} />
            <div className="flex items-center gap-3">
              <ProgressBar pct={goalPct} color={GREEN} height={7} className="flex-1" />
              <div className="text-[13px]" style={{ color: BODY2 }}>{goalPct}%</div>
            </div>
          </Card>
        )}

        {progress && progress.recentWords.length > 0 && (
          <Card className="px-5 py-[18px]">
            <CardH className="mb-3.5">Recently learned</CardH>
            <div className="grid">
              {progress.recentWords.map((w) => (
                <div key={w.hr} className="flex items-center gap-3.5 border-t py-[11px]" style={{ borderColor: "rgba(var(--ink-rgb),.12)" }}>
                  <Tile icon={PenLine} color="var(--blue)" size={32} radius={9} iconSize={15} />
                  <div className="min-w-0 flex-1">
                    <div className="text-[15px] font-semibold" style={{ color: INK }}>{w.hr}</div>
                    <div className="text-[13px]" style={{ color: MUTED }}>{w.en}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <Card className="px-5 py-[18px]">
          <CardH className="mb-3.5">Tutor tools</CardH>
          <div className="grid gap-0.5">
            {TOOLS.map((t) => (
              <button
                key={t.title}
                onClick={() => void send(t.prompt)}
                className="flex items-center gap-3.5 rounded-lg px-2.5 py-3 text-left transition-colors duration-[180ms] hover:bg-[rgba(var(--ink-rgb),.03)]"
              >
                <Tile icon={t.icon} color={t.color} size={34} radius={10} iconSize={16} />
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] font-semibold" style={{ color: INK }}>{t.title}</div>
                  <div className="text-[13px]" style={{ color: MUTED }}>{t.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
