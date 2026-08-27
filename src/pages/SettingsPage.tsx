/**
 * Settings — one scrolling page of sections, Notion-style. Covers what actually
 * exists in a local-first single-learner app: the API key & model, theme, the
 * Croatian voice, a usage estimate, and backup + flagged mistakes. No accounts,
 * so no plan / sign-out / notification rows.
 *
 * Desktop shape: each section is a titled panel, and every setting inside it is
 * a two-column row — name + description on the left, the control right-aligned
 * on the right. Things that are lists rather than settings (the usage tally, the
 * flagged-slide reports, the TTS diagnostics notice) take a full-width block row
 * under the setting they belong to.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Play } from "lucide-react";
import { db, exportBackup, importBackup, type ErrorReportRow } from "@/lib/db";
import { getThemeMode, onThemeChange, setThemeMode, type ThemeMode } from "@/lib/theme";
import { getDiagnostics, speak, type TtsDiagnostics } from "@/lib/tts";
import { getUsage, resetUsage, USAGE_EVENT } from "@/lib/usage";
import { Banner, BODY2, BtnGhost, BtnPrimary, CRVENI, Divider, GREEN, INK, MUTED, Panel, Seg, View, ViewBody } from "@/ui/kit";
import { Hero } from "@/ui/charts";

const MODELS = [
  { id: "claude-opus-4-8", label: "Claude Opus 4.8 (best — default)" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 (cheapest)" },
];

const THEME_MODES: ThemeMode[] = ["light", "dark", "system"];

/** Desktop control: hairline box on the card surface, 36px tall. */
const CTL =
  "h-9 rounded-lg border bg-[color:var(--card)] px-3 text-sm outline-none transition-colors duration-150 focus:border-[color:var(--primary)]";
const CTL_STYLE = { borderColor: "rgba(var(--ink-rgb),.14)", color: INK };

/** Six figures wide is unreadable at a glance; the figure block wants 12.4k. */
function compact(n: number): string {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${(n / 1000).toFixed(n < 10_000 ? 1 : 0)}k`;
  return `${(n / 1_000_000).toFixed(1)}M`;
}

/** A settings row: label + description left, control right-aligned right. */
function Row({ label, sub, children }: { label: string; sub?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-8 py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-3">
      <div className="min-w-0 flex-1">
        <div className="text-[13.5px] font-semibold" style={{ color: INK }}>{label}</div>
        {sub && <div className="mt-0.5 max-w-[420px] text-[13px] leading-relaxed" style={{ color: MUTED }}>{sub}</div>}
      </div>
      {children && (
        <div className="flex flex-none flex-col items-end gap-2 max-[640px]:w-full max-[640px]:items-stretch">
          {children}
        </div>
      )}
    </div>
  );
}

/** Full-width row for the things that are lists, not controls. */
function BlockRow({ children }: { children: React.ReactNode }) {
  return <div className="py-3.5">{children}</div>;
}

function Section({
  title,
  right,
  className = "",
  children,
}: {
  title: string;
  right?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Panel title={title} right={right} className={`mt-5 first:mt-0 ${className}`} bodyClassName="px-5 py-1">
      <div className="divide-y divide-[rgba(var(--ink-rgb),.07)]">{children}</div>
    </Panel>
  );
}

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("crolearn.apiKey") ?? "");
  const [showKey, setShowKey] = useState(false);
  const [model, setModel] = useState(() => localStorage.getItem("crolearn.model") ?? MODELS[0].id);
  const [voice, setVoice] = useState(() => localStorage.getItem("crolearn.ttsVoice") ?? "");
  const [themeMode, setMode] = useState<ThemeMode>(() => getThemeMode());
  const [resolved, setResolved] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [diag, setDiag] = useState<TtsDiagnostics | null>(null);
  const [keyStatus, setKeyStatus] = useState<{ text: string; ok: boolean | null } | null>(null);
  const [backupStatus, setBackupStatus] = useState<{ text: string; ok: boolean | null } | null>(null);
  const [reports, setReports] = useState<ErrorReportRow[]>([]);
  const [usage, setUsage] = useState(() => getUsage());
  // Written by doExport since long before this panel existed — surfacing it
  // costs nothing and answers the only question the section raises.
  const [lastBackup, setLastBackup] = useState<Date | null>(() => {
    const raw = localStorage.getItem("crolearn.lastBackup");
    if (!raw) return null;
    const d = new Date(raw);
    return Number.isNaN(d.getTime()) ? null : d;
  });
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void getDiagnostics().then(setDiag);
    void db.errorReports.orderBy("createdAt").reverse().toArray().then(setReports);
  }, []);
  // Keeps the control in sync when "System" is active and the OS flips at dusk.
  useEffect(() => onThemeChange((r, m) => {
    setResolved(r);
    setMode(m);
  }), []);
  useEffect(() => {
    const refresh = () => setUsage(getUsage());
    window.addEventListener(USAGE_EVENT, refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.removeEventListener(USAGE_EVENT, refresh);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  const deleteReport = async (id: number) => {
    await db.errorReports.delete(id);
    setReports((r) => r.filter((x) => x.id !== id));
  };
  const saveKey = () => {
    if (apiKey.trim()) localStorage.setItem("crolearn.apiKey", apiKey.trim());
    else localStorage.removeItem("crolearn.apiKey");
    setKeyStatus({ text: "Saved.", ok: null });
  };
  const testKey = async () => {
    setKeyStatus({ text: "Checking…", ok: null });
    try {
      const { default: Anthropic } = await import("@anthropic-ai/sdk");
      const client = new Anthropic({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
      await client.messages.create({ model, max_tokens: 16, messages: [{ role: "user", content: "Reci samo: Bok!" }] });
      setKeyStatus({ text: "Key works.", ok: true });
    } catch (e) {
      setKeyStatus({ text: (e as Error).message, ok: false });
    }
  };
  const doExport = async () => {
    const json = await exportBackup();
    const blob = new Blob([json], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `crolearn-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    localStorage.setItem("crolearn.lastBackup", new Date().toISOString());
    setLastBackup(new Date());
    setBackupStatus({ text: "Backup downloaded.", ok: null });
  };
  const doImport = async (file: File) => {
    try {
      await importBackup(await file.text());
      setBackupStatus({ text: "Imported — refresh the page.", ok: true });
    } catch (e) {
      setBackupStatus({ text: (e as Error).message, ok: false });
    }
  };

  const statusColor = (ok: boolean | null) => (ok === true ? GREEN : ok === false ? CRVENI : BODY2);

  const costLabel = usage.costUsd < 0.005 ? "< $0.01" : `$${usage.costUsd.toFixed(2)}`;
  const totalTokens = usage.inputTokens + usage.outputTokens;
  const usageRows: [string, string][] = [
    ["AI calls", usage.calls.toLocaleString()],
    ["Input tokens", usage.inputTokens.toLocaleString()],
    ["Output tokens", usage.outputTokens.toLocaleString()],
    ...(usage.cacheReadTokens > 0 ? ([["Cache reads", usage.cacheReadTokens.toLocaleString()]] as [string, string][]) : []),
  ];

  return (
    <View title="Settings" sub="Everything is stored on this device.">
      <ViewBody>
        <Section
          className="rise rise-1"
          title="AI tutor"
          right={
            <span className="meta" style={{ color: apiKey.trim() ? GREEN : "var(--muted3)" }}>
              {apiKey.trim() ? "Key set" : "No key"}
            </span>
          }
        >
          <Row
            label="Anthropic API key"
            sub="Powers the tutor, grading and extra practice. Stays in this browser only — everything else works without it."
          >
            <div className="flex items-center gap-2 max-[640px]:w-full">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-…"
                className={`${CTL} w-[240px] max-[640px]:w-full`}
                style={CTL_STYLE}
              />
              <button
                onClick={() => setShowKey((v) => !v)}
                aria-label={showKey ? "Hide API key" : "Show API key"}
                title={showKey ? "Hide API key" : "Show API key"}
                className="flex h-9 w-9 flex-none items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[color:var(--tint)]"
              >
                {showKey ? <EyeOff size={15} color={MUTED} strokeWidth={1.9} /> : <Eye size={15} color={MUTED} strokeWidth={1.9} />}
              </button>
            </div>
            <div className="flex gap-2">
              <BtnGhost onClick={() => void testKey()}>Test connection</BtnGhost>
              <BtnPrimary onClick={saveKey}>Save</BtnPrimary>
            </div>
            {keyStatus && (
              <p className="max-w-[320px] text-right text-[13px] max-[640px]:text-left" style={{ color: statusColor(keyStatus.ok) }}>
                {keyStatus.text}
              </p>
            )}
          </Row>
          <Row label="Model" sub="Used for the tutor, grading and exercise generation.">
            <select
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                localStorage.setItem("crolearn.model", e.target.value);
              }}
              className={`${CTL} w-[280px] max-[640px]:w-full`}
              style={CTL_STYLE}
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </Row>
        </Section>

        <Section
          className="rise rise-2"
          title="Appearance"
          right={<span className="meta" style={{ color: "var(--muted3)" }}>{resolved}</span>}
        >
          <Row label="Theme" sub={`Saved on this device. Currently showing the ${resolved} palette.`}>
            <div className="w-[240px] max-[640px]:w-full">
              <Seg
                options={THEME_MODES}
                value={themeMode}
                onChange={(m) => {
                  setMode(m);
                  setResolved(setThemeMode(m));
                }}
              />
            </div>
          </Row>
        </Section>

        <Section
          className="rise rise-3"
          title="Voice & audio"
          right={
            diag && (
              <span className="meta tabular-nums" style={{ color: diag.croatianVoices.length > 0 ? "var(--muted3)" : "var(--orange)" }}>
                {diag.croatianVoices.length === 0
                  ? "No Croatian voice"
                  : `${diag.croatianVoices.length} Croatian ${diag.croatianVoices.length === 1 ? "voice" : "voices"}`}
              </span>
            )
          }
        >
          <Row label="Croatian voice" sub="The best neural Croatian voice ships with Microsoft Edge.">
            {diag === null ? (
              <p className="text-[13px]" style={{ color: MUTED }}>Checking voices…</p>
            ) : diag.croatianVoices.length > 0 ? (
              <>
                <select
                  value={voice || (diag.best ?? "")}
                  onChange={(e) => {
                    setVoice(e.target.value);
                    localStorage.setItem("crolearn.ttsVoice", e.target.value);
                  }}
                  className={`${CTL} w-[280px] max-[640px]:w-full`}
                  style={CTL_STYLE}
                >
                  {diag.croatianVoices.map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name}{v.natural ? " — neural" : ""}
                    </option>
                  ))}
                </select>
                <BtnGhost icon={Play} onClick={() => void speak("Dobar dan! Ja sam tvoj hrvatski glas.")}>Try the voice</BtnGhost>
              </>
            ) : null}
          </Row>
          {diag?.recommendation && (
            <BlockRow>
              <Banner color="var(--orange)">{diag.recommendation}</Banner>
            </BlockRow>
          )}
        </Section>

        <Section
          className="rise rise-4"
          title="AI usage"
          right={<span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>{costLabel}</span>}
        >
          <Row
            label="Estimated usage on this device"
            sub="Rough tally of tutor, grading and practice calls. Your Anthropic Console is the source of truth."
          >
            <BtnGhost
              onClick={() => {
                resetUsage();
                setUsage(getUsage());
              }}
            >
              Reset counter
            </BtnGhost>
          </Row>
          <BlockRow>
            <div className="flex items-start gap-12 max-[640px]:gap-8">
              <Hero
                value={costLabel}
                label="Estimated cost"
                sub={usage.calls === 0 ? "No AI calls yet on this device." : `${usage.calls.toLocaleString()} call${usage.calls === 1 ? "" : "s"} so far`}
              />
              <Hero
                value={compact(totalTokens)}
                label="Tokens"
                sub={totalTokens === 0 ? "Input + output, once you start." : "Input + output"}
              />
            </div>
            <dl className="mt-5">
              {usageRows.map(([k, v], i) => (
                <div key={k}>
                  {i > 0 && <Divider />}
                  <div className="flex items-baseline justify-between gap-4 py-2">
                    <dt className="meta" style={{ color: MUTED }}>{k}</dt>
                    <dd className="font-mono text-[13px] font-medium tabular-nums" style={{ color: INK }}>{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </BlockRow>
        </Section>

        <Section
          className="rise rise-5"
          title="Data & privacy"
          right={
            <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
              {lastBackup ? `Backed up ${lastBackup.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}` : "Never backed up"}
            </span>
          }
        >
          <Row label="Backup" sub="All progress (cards, lessons, tests) in one JSON file — monthly is a good rhythm.">
            <div className="flex gap-2">
              <BtnGhost onClick={() => fileRef.current?.click()}>Import…</BtnGhost>
              <BtnPrimary onClick={() => void doExport()}>Export</BtnPrimary>
              <input
                ref={fileRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void doImport(f);
                }}
              />
            </div>
            {backupStatus && (
              <p className="max-w-[320px] text-right text-[13px] max-[640px]:text-left" style={{ color: statusColor(backupStatus.ok) }}>
                {backupStatus.text}
              </p>
            )}
          </Row>
          <Row
            label="Reported mistakes"
            sub="Slides you flagged while playing. Show these to Claude so the content gets fixed."
          >
            <span className="meta tabular-nums" style={{ color: "var(--muted3)" }}>
              {reports.length === 0 ? "Nothing flagged" : `${reports.length} flagged`}
            </span>
          </Row>
          {reports.length > 0 && (
            <BlockRow>
              {reports.map((r, i) => (
                <div key={r.id}>
                  {i > 0 && <Divider />}
                  <div className="flex items-start justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="meta">
                        <Link to={`/lesson/${r.lessonId}`} className="underline">{r.lessonId}</Link>
                        <span style={{ color: "var(--muted3)" }}> · slide {r.slideId} · {r.createdAt.toLocaleDateString()}</span>
                      </p>
                      <p className="mt-1 text-sm" style={{ color: BODY2 }}>{r.note}</p>
                    </div>
                    <button
                      onClick={() => r.id !== undefined && void deleteReport(r.id)}
                      aria-label="Delete report"
                      /* Padding grows the target to the 24px WCAG 2.5.8 minimum;
                         the equal negative margin keeps the layout unchanged. */
                      className="meta -mx-1.5 -my-1.5 flex-none px-1.5 py-1.5 transition-opacity duration-100 hover:opacity-70"
                      style={{ color: CRVENI }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </BlockRow>
          )}
        </Section>

        <Divider className="mt-12" />
        <p className="py-6 text-[13px]" style={{ color: "var(--muted3)" }}>
          CroLearn — local-first. Your progress never leaves this browser unless you export it.
        </p>
      </ViewBody>
    </View>
  );
}
