/**
 * Settings — Nativ tabbed layout (README §Screens 8) over CroLearn's real
 * settings. Adjust-if-absent: no accounts, so plan/member-since/sign-out and
 * notification rows are hidden; tabs map to what actually exists (AI key &
 * model, Croatian voice, usage estimate, backup + flagged mistakes).
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BarChart3, Bot, Download, Flag, Play, ShieldCheck, Volume2, X, type LucideIcon } from "lucide-react";
import { db, exportBackup, importBackup, type ErrorReportRow } from "@/lib/db";
import { getDiagnostics, speak, type TtsDiagnostics } from "@/lib/tts";
import { getUsage, resetUsage, USAGE_EVENT } from "@/lib/usage";
import { BODY, BODY2, BtnGhost, BtnPrimary, Card, H, INK, MUTED, RED, tint } from "@/ui/kit";

const MODELS = [
  { id: "claude-opus-4-8", label: "Claude Opus 4.8 (best — default)" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 (cheapest)" },
];

type Tab = "AI Tutor" | "Voice & Audio" | "AI Usage" | "Data & Privacy";
const TABS: { key: Tab; icon: LucideIcon }[] = [
  { key: "AI Tutor", icon: Bot },
  { key: "Voice & Audio", icon: Volume2 },
  { key: "AI Usage", icon: BarChart3 },
  { key: "Data & Privacy", icon: ShieldCheck },
];

const inputCls = "w-full rounded-xl border bg-white px-4 py-3 text-[15px] outline-none transition-colors duration-150";
const inputStyle = { borderColor: "rgba(15,23,42,.14)", color: INK };

function RowLabel({ label, sub }: { label: string; sub?: string }) {
  return (
    <div>
      <div className="mb-[3px] text-[15px] font-semibold" style={{ color: INK }}>{label}</div>
      {sub && <div className="text-sm" style={{ color: MUTED }}>{sub}</div>}
    </div>
  );
}

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("AI Tutor");
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("crolearn.apiKey") ?? "");
  const [model, setModel] = useState(() => localStorage.getItem("crolearn.model") ?? MODELS[0].id);
  const [voice, setVoice] = useState(() => localStorage.getItem("crolearn.ttsVoice") ?? "");
  const [diag, setDiag] = useState<TtsDiagnostics | null>(null);
  const [keyStatus, setKeyStatus] = useState<string | null>(null);
  const [backupStatus, setBackupStatus] = useState<string | null>(null);
  const [reports, setReports] = useState<ErrorReportRow[]>([]);
  const [usage, setUsage] = useState(() => getUsage());
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    void getDiagnostics().then(setDiag);
    void db.errorReports.orderBy("createdAt").reverse().toArray().then(setReports);
  }, []);
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
    setKeyStatus("Saved.");
  };
  const testKey = async () => {
    setKeyStatus("Checking…");
    try {
      const { default: Anthropic } = await import("@anthropic-ai/sdk");
      const client = new Anthropic({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });
      await client.messages.create({ model, max_tokens: 16, messages: [{ role: "user", content: "Reci samo: Bok!" }] });
      setKeyStatus("✅ Key works!");
    } catch (e) {
      setKeyStatus(`❌ ${(e as Error).message}`);
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
    setBackupStatus("Backup downloaded.");
  };
  const doImport = async (file: File) => {
    try {
      await importBackup(await file.text());
      setBackupStatus("✅ Imported! Refresh the page.");
    } catch (e) {
      setBackupStatus(`❌ ${(e as Error).message}`);
    }
  };

  const divider = { borderBottom: "1px solid rgba(15,23,42,.06)" };

  return (
    <div className="grid grid-cols-[290px_minmax(0,1fr)] items-start gap-8 max-[1200px]:grid-cols-[240px_minmax(0,1fr)] max-[700px]:grid-cols-1">
      {/* Left: profile + tab nav */}
      <Card className="p-6">
        <div className="mb-5 flex items-center gap-4">
          <div
            className="flex h-[62px] w-[62px] flex-none items-center justify-center rounded-full border"
            style={{ background: "#F3EFE9", borderColor: "rgba(15,23,42,.06)", fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 24, color: BODY }}
          >
            N
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 18, color: INK }}>Noah</div>
            <div className="text-sm" style={{ color: MUTED }}>Local-first learner</div>
          </div>
        </div>
        <div className="grid gap-0.5">
          {TABS.map((t) => {
            const on = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className="flex items-center gap-3.5 rounded-xl px-4 py-3 text-left text-[15px] transition-colors duration-[180ms]"
                style={{ background: on ? "rgba(201,52,52,.07)" : "transparent", color: on ? RED : BODY, fontWeight: on ? 500 : 400 }}
              >
                <t.icon size={19} color={on ? RED : BODY2} />
                {t.key}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Right: active panel */}
      <div className="max-w-[820px]">
        <H size={26} className="mb-[18px]">Settings</H>

        {tab === "AI Tutor" && (
          <Card className="px-7 py-3">
            <div className="py-5" style={divider}>
              <RowLabel label="Anthropic API key" sub="Powers the tutor, grading and extra practice. Stays in this browser only — everything else works without it." />
              <input type="password" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="sk-ant-…" className={`${inputCls} mt-3`} style={inputStyle} />
              <div className="mt-3 flex gap-2.5">
                <BtnPrimary onClick={saveKey}>Save</BtnPrimary>
                <BtnGhost onClick={() => void testKey()}>Test connection</BtnGhost>
              </div>
              {keyStatus && <p className="mt-2.5 text-sm" style={{ color: BODY2 }}>{keyStatus}</p>}
            </div>
            <div className="py-5">
              <RowLabel label="Model" sub="Used for the tutor, grading and exercise generation." />
              <select
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                  localStorage.setItem("crolearn.model", e.target.value);
                }}
                className={`${inputCls} mt-3`}
                style={inputStyle}
              >
                {MODELS.map((m) => (
                  <option key={m.id} value={m.id}>{m.label}</option>
                ))}
              </select>
            </div>
          </Card>
        )}

        {tab === "Voice & Audio" && (
          <Card className="px-7 py-3">
            <div className="py-5">
              <RowLabel label="Croatian voice (TTS)" sub="Best neural Croatian voice ships with Microsoft Edge." />
              {diag === null ? (
                <p className="mt-3 text-sm" style={{ color: MUTED }}>Checking voices…</p>
              ) : (
                <>
                  {diag.recommendation && (
                    <p className="mt-3 rounded-xl px-4 py-3 text-sm" style={{ background: tint("#E08A2B", 0.1), color: "#7A4A12" }}>{diag.recommendation}</p>
                  )}
                  {diag.croatianVoices.length > 0 && (
                    <>
                      <select
                        value={voice || (diag.best ?? "")}
                        onChange={(e) => {
                          setVoice(e.target.value);
                          localStorage.setItem("crolearn.ttsVoice", e.target.value);
                        }}
                        className={`${inputCls} mt-3`}
                        style={inputStyle}
                      >
                        {diag.croatianVoices.map((v) => (
                          <option key={v.name} value={v.name}>
                            {v.name} {v.natural ? "⭐" : ""}
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
            </div>
          </Card>
        )}

        {tab === "AI Usage" && (
          <Card className="px-7 py-3">
            <div className="py-5" style={divider}>
              <RowLabel
                label="AI usage on this device (estimate)"
                sub="Rough tally of tutor, grading and practice calls. Your Anthropic Console is the source of truth."
              />
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt style={{ color: MUTED }}>Estimated cost</dt>
                <dd className="text-right font-semibold" style={{ color: INK }}>{usage.costUsd < 0.005 ? "< $0.01" : `$${usage.costUsd.toFixed(2)}`}</dd>
                <dt style={{ color: MUTED }}>AI calls</dt>
                <dd className="text-right" style={{ color: INK }}>{usage.calls.toLocaleString()}</dd>
                <dt style={{ color: MUTED }}>Input tokens</dt>
                <dd className="text-right" style={{ color: INK }}>{usage.inputTokens.toLocaleString()}</dd>
                <dt style={{ color: MUTED }}>Output tokens</dt>
                <dd className="text-right" style={{ color: INK }}>{usage.outputTokens.toLocaleString()}</dd>
                {usage.cacheReadTokens > 0 && (
                  <>
                    <dt style={{ color: MUTED }}>Cache reads</dt>
                    <dd className="text-right" style={{ color: INK }}>{usage.cacheReadTokens.toLocaleString()}</dd>
                  </>
                )}
              </dl>
            </div>
            <div className="py-5">
              <BtnGhost
                onClick={() => {
                  resetUsage();
                  setUsage(getUsage());
                }}
              >
                Reset counter
              </BtnGhost>
            </div>
          </Card>
        )}

        {tab === "Data & Privacy" && (
          <Card className="px-7 py-3">
            <div className="py-5" style={divider}>
              <div className="flex items-center justify-between gap-5 max-[700px]:flex-wrap">
                <div className="flex items-center gap-4">
                  <Download size={20} color={BODY2} />
                  <RowLabel label="Backup" sub="All progress (cards, lessons, tests) in one JSON file — monthly recommended." />
                </div>
                <div className="flex flex-none gap-2.5">
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
              </div>
              {backupStatus && <p className="mt-2.5 text-sm" style={{ color: BODY2 }}>{backupStatus}</p>}
            </div>
            <div className="py-5">
              <div className="mb-3 flex items-center gap-4">
                <Flag size={20} color={BODY2} />
                <RowLabel label="Reported mistakes" sub="Slides you flagged while playing. Show these to Claude so the content gets fixed." />
              </div>
              {reports.length === 0 ? (
                <p className="text-sm" style={{ color: MUTED }}>Nothing flagged — great!</p>
              ) : (
                <ul className="space-y-2">
                  {reports.map((r) => (
                    <li key={r.id} className="flex items-start justify-between gap-3 rounded-xl px-4 py-3 text-sm" style={{ background: "rgba(15,23,42,.03)" }}>
                      <div>
                        <p className="font-semibold" style={{ color: INK }}>
                          <Link to={`/lesson/${r.lessonId}`} className="underline">{r.lessonId}</Link>
                          <span style={{ color: MUTED }}> · slide {r.slideId} · {r.createdAt.toLocaleDateString()}</span>
                        </p>
                        <p className="mt-0.5" style={{ color: BODY2 }}>{r.note}</p>
                      </div>
                      <button
                        onClick={() => r.id !== undefined && void deleteReport(r.id)}
                        aria-label="Delete report"
                        className="flex-none rounded-lg p-1.5 transition-colors duration-150 hover:bg-[rgba(15,23,42,.06)]"
                      >
                        <X size={16} color={MUTED} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
