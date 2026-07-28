/**
 * Settings — one scrolling page of sections, Notion-style. Covers what actually
 * exists in a local-first single-learner app: the API key & model, theme, the
 * Croatian voice, a usage estimate, and backup + flagged mistakes. No accounts,
 * so no plan / sign-out / notification rows.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, X } from "lucide-react";
import { db, exportBackup, importBackup, type ErrorReportRow } from "@/lib/db";
import { getThemeMode, onThemeChange, setThemeMode, type ThemeMode } from "@/lib/theme";
import { getDiagnostics, speak, type TtsDiagnostics } from "@/lib/tts";
import { getUsage, resetUsage, USAGE_EVENT } from "@/lib/usage";
import { Banner, BODY2, BtnGhost, BtnPrimary, CRVENI, Divider, GREEN, INK, Meta, MUTED, PageHeader, Seg } from "@/ui/kit";

const MODELS = [
  { id: "claude-opus-4-8", label: "Claude Opus 4.8 (best — default)" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 (cheapest)" },
];

const THEME_MODES: ThemeMode[] = ["light", "dark", "system"];

const CTL =
  "h-9 w-full rounded-lg border bg-[color:var(--card)] px-3 text-sm outline-none transition-colors duration-150 focus:border-[color:var(--primary)]";
const CTL_STYLE = { borderColor: "rgba(var(--ink-rgb),.14)", color: INK };

/** A settings row: label + description on the left, control on the right. */
function Row({ label, sub, children, stacked = false }: { label: string; sub?: string; children?: React.ReactNode; stacked?: boolean }) {
  return (
    <div className={`py-5 ${stacked ? "" : "flex items-start justify-between gap-8 max-[640px]:flex-col max-[640px]:gap-3"}`}>
      <div className={stacked ? "" : "min-w-0 flex-1"}>
        <div className="text-sm font-semibold" style={{ color: INK }}>{label}</div>
        {sub && <div className="mt-1 max-w-[420px] text-[13px] leading-relaxed" style={{ color: MUTED }}>{sub}</div>}
      </div>
      {children && <div className={stacked ? "mt-3" : "w-[280px] flex-none max-[640px]:w-full"}>{children}</div>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <Meta>{title}</Meta>
      <div className="mt-1 divide-y divide-[rgba(var(--ink-rgb),.07)]">{children}</div>
    </section>
  );
}

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("crolearn.apiKey") ?? "");
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

  return (
    <div>
      <PageHeader title="Settings" sub="Everything is stored on this device." />

      <Section title="AI tutor">
        <Row
          label="Anthropic API key"
          sub="Powers the tutor, grading and extra practice. Stays in this browser only — everything else works without it."
          stacked
        >
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-ant-…"
            className={`${CTL} max-w-[420px]`}
            style={CTL_STYLE}
          />
          <div className="mt-3 flex gap-2">
            <BtnPrimary onClick={saveKey}>Save</BtnPrimary>
            <BtnGhost onClick={() => void testKey()}>Test connection</BtnGhost>
          </div>
          {keyStatus && <p className="mt-2.5 text-[13px]" style={{ color: statusColor(keyStatus.ok) }}>{keyStatus.text}</p>}
        </Row>
        <Row label="Model" sub="Used for the tutor, grading and exercise generation.">
          <select
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              localStorage.setItem("crolearn.model", e.target.value);
            }}
            className={CTL}
            style={CTL_STYLE}
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </Row>
      </Section>

      <Section title="Appearance">
        <Row label="Theme" sub={`Saved on this device. Currently showing the ${resolved} palette.`}>
          <Seg
            options={THEME_MODES}
            value={themeMode}
            onChange={(m) => {
              setMode(m);
              setResolved(setThemeMode(m));
            }}
          />
        </Row>
      </Section>

      <Section title="Voice & audio">
        <Row label="Croatian voice" sub="The best neural Croatian voice ships with Microsoft Edge." stacked>
          {diag === null ? (
            <p className="text-[13px]" style={{ color: MUTED }}>Checking voices…</p>
          ) : (
            <>
              {diag.recommendation && <Banner color="var(--orange)">{diag.recommendation}</Banner>}
              {diag.croatianVoices.length > 0 && (
                <>
                  <select
                    value={voice || (diag.best ?? "")}
                    onChange={(e) => {
                      setVoice(e.target.value);
                      localStorage.setItem("crolearn.ttsVoice", e.target.value);
                    }}
                    className={`${CTL} max-w-[420px]`}
                    style={CTL_STYLE}
                  >
                    {diag.croatianVoices.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name}{v.natural ? " — neural" : ""}
                      </option>
                    ))}
                  </select>
                  <div className="mt-3">
                    <BtnGhost icon={Play} onClick={() => void speak("Dobar dan! Ja sam tvoj hrvatski glas.")}>Try the voice</BtnGhost>
                  </div>
                </>
              )}
            </>
          )}
        </Row>
      </Section>

      <Section title="AI usage">
        <Row
          label="Estimated usage on this device"
          sub="Rough tally of tutor, grading and practice calls. Your Anthropic Console is the source of truth."
          stacked
        >
          <dl className="max-w-[420px] divide-y divide-[rgba(var(--ink-rgb),.07)] text-sm">
            {[
              ["Estimated cost", usage.costUsd < 0.005 ? "< $0.01" : `$${usage.costUsd.toFixed(2)}`],
              ["AI calls", usage.calls.toLocaleString()],
              ["Input tokens", usage.inputTokens.toLocaleString()],
              ["Output tokens", usage.outputTokens.toLocaleString()],
              ...(usage.cacheReadTokens > 0 ? [["Cache reads", usage.cacheReadTokens.toLocaleString()]] : []),
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-2">
                <dt style={{ color: MUTED }}>{k}</dt>
                <dd className="tabular-nums font-medium" style={{ color: INK }}>{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4">
            <BtnGhost
              onClick={() => {
                resetUsage();
                setUsage(getUsage());
              }}
            >
              Reset counter
            </BtnGhost>
          </div>
        </Row>
      </Section>

      <Section title="Data & privacy">
        <Row label="Backup" sub="All progress (cards, lessons, tests) in one JSON file — monthly is a good rhythm.">
          <div className="flex gap-2">
            <BtnPrimary onClick={() => void doExport()}>Export</BtnPrimary>
            <BtnGhost onClick={() => fileRef.current?.click()}>Import…</BtnGhost>
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
          {backupStatus && <p className="mt-2.5 text-[13px]" style={{ color: statusColor(backupStatus.ok) }}>{backupStatus.text}</p>}
        </Row>
        <Row
          label="Reported mistakes"
          sub="Slides you flagged while playing. Show these to Claude so the content gets fixed."
          stacked
        >
          {reports.length === 0 ? (
            <p className="text-[13px]" style={{ color: MUTED }}>Nothing flagged.</p>
          ) : (
            <div className="divide-y divide-[rgba(var(--ink-rgb),.07)]">
              {reports.map((r) => (
                <div key={r.id} className="flex items-start justify-between gap-3 py-3">
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
                    className="flex-none rounded-md p-1.5 transition-colors duration-150 hover:bg-[color:var(--tint)]"
                  >
                    <X size={14} color={MUTED} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </Row>
      </Section>

      <Divider className="mt-12" />
      <p className="py-6 text-[13px]" style={{ color: "var(--muted3)" }}>
        CroLearn — local-first. Your progress never leaves this browser unless you export it.
      </p>
    </div>
  );
}
