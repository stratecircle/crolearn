import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db, exportBackup, importBackup, type ErrorReportRow } from "@/lib/db";
import { getDiagnostics, speak, type TtsDiagnostics } from "@/lib/tts";
import { getUsage, resetUsage, USAGE_EVENT } from "@/lib/usage";

const MODELS = [
  { id: "claude-opus-4-8", label: "Claude Opus 4.8 (best — default)" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
  { id: "claude-haiku-4-5-20251001", label: "Claude Haiku 4.5 (cheapest)" },
];

export default function SettingsPage() {
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
      await client.messages.create({
        model,
        max_tokens: 16,
        messages: [{ role: "user", content: "Reci samo: Bok!" }],
      });
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

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-black">⚙️ Settings</h1>

      <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="font-black">🤖 AI (Anthropic API key)</h2>
        <p className="mt-1 text-sm text-stone-600">
          Powers the AI tutor, answer grading, and extra practice. The key stays in this browser
          only (localStorage) — never in project files. Everything else works without a key.
        </p>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-ant-…"
          className="mt-3 w-full rounded-xl border-2 border-stone-300 px-4 py-2.5 outline-none focus:border-stone-900"
        />
        <label className="mt-3 block text-sm font-semibold text-stone-600">
          Model
          <select
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
              localStorage.setItem("crolearn.model", e.target.value);
            }}
            className="mt-1 w-full rounded-xl border-2 border-stone-300 bg-white px-3 py-2.5"
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </label>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={saveKey} className="rounded-xl bg-stone-900 px-4 py-2 font-bold text-white">
            Save
          </button>
          <button
            type="button"
            onClick={() => void testKey()}
            disabled={!apiKey.trim()}
            className="rounded-xl border-2 border-stone-900 px-4 py-2 font-bold disabled:opacity-40"
          >
            Test connection
          </button>
        </div>
        {keyStatus && <p className="mt-2 text-sm">{keyStatus}</p>}
      </section>

      <section className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="font-black">🧮 AI usage (estimate)</h2>
        <p className="mt-1 text-sm text-stone-600">
          A rough tally of what the AI features (tutor, grading, extra practice) have used on this
          device. Estimate only — your{" "}
          <a
            href="https://console.anthropic.com/settings/usage"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Anthropic Console
          </a>{" "}
          is the source of truth.
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <dt className="text-stone-500">Estimated cost</dt>
          <dd className="text-right font-bold">
            {usage.costUsd < 0.005 ? "< $0.01" : `$${usage.costUsd.toFixed(2)}`}
          </dd>
          <dt className="text-stone-500">AI calls</dt>
          <dd className="text-right">{usage.calls.toLocaleString()}</dd>
          <dt className="text-stone-500">Input tokens</dt>
          <dd className="text-right">{usage.inputTokens.toLocaleString()}</dd>
          <dt className="text-stone-500">Output tokens</dt>
          <dd className="text-right">{usage.outputTokens.toLocaleString()}</dd>
          {usage.cacheReadTokens > 0 && (
            <>
              <dt className="text-stone-500">Cache reads</dt>
              <dd className="text-right">{usage.cacheReadTokens.toLocaleString()}</dd>
            </>
          )}
        </dl>
        <button
          type="button"
          onClick={() => {
            resetUsage();
            setUsage(getUsage());
          }}
          className="mt-3 rounded-xl border-2 border-stone-300 px-3 py-1.5 text-sm font-bold text-stone-600 hover:border-stone-900"
        >
          Reset counter
        </button>
      </section>

      <section className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="font-black">🔊 Croatian voice (TTS)</h2>
        {diag === null ? (
          <p className="mt-2 text-sm text-stone-500">Checking voices…</p>
        ) : (
          <>
            {diag.recommendation && (
              <p className="mt-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">💡 {diag.recommendation}</p>
            )}
            {diag.croatianVoices.length > 0 && (
              <>
                <label className="mt-3 block text-sm font-semibold text-stone-600">
                  Croatian voice
                  <select
                    value={voice || (diag.best ?? "")}
                    onChange={(e) => {
                      setVoice(e.target.value);
                      localStorage.setItem("crolearn.ttsVoice", e.target.value);
                    }}
                    className="mt-1 w-full rounded-xl border-2 border-stone-300 bg-white px-3 py-2.5"
                  >
                    {diag.croatianVoices.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name} {v.natural ? "⭐" : ""}
                      </option>
                    ))}
                  </select>
                </label>
                <button
                  type="button"
                  onClick={() => void speak("Dobar dan! Ja sam tvoj hrvatski glas.")}
                  className="mt-3 rounded-xl border-2 border-stone-900 px-4 py-2 font-bold"
                >
                  ▶ Try the voice
                </button>
              </>
            )}
          </>
        )}
      </section>

      <section className="mt-4 mb-10 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="font-black">💾 Backup</h2>
        <p className="mt-1 text-sm text-stone-600">
          All your progress (cards, lessons, tests) in one JSON file. Save it into your OneDrive
          folder — recommended once a month.
        </p>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => void doExport()} className="rounded-xl bg-stone-900 px-4 py-2 font-bold text-white">
            Export
          </button>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-xl border-2 border-stone-900 px-4 py-2 font-bold"
          >
            Import…
          </button>
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
        {backupStatus && <p className="mt-2 text-sm">{backupStatus}</p>}
      </section>

      <section className="mt-4 mb-10 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="font-black">🚩 Reported mistakes</h2>
        <p className="mt-1 text-sm text-stone-600">
          Slides you flagged with 🚩 while playing. Show these to Claude so the content gets fixed;
          delete them once handled.
        </p>
        {reports.length === 0 ? (
          <p className="mt-3 text-sm text-stone-500">Nothing flagged — great!</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {reports.map((r) => (
              <li key={r.id} className="flex items-start justify-between gap-3 rounded-xl bg-stone-50 p-3 text-sm">
                <div>
                  <p className="font-bold">
                    <Link to={`/lesson/${r.lessonId}`} className="underline">{r.lessonId}</Link>
                    <span className="text-stone-400"> · slide {r.slideId} · {r.createdAt.toLocaleDateString()}</span>
                  </p>
                  <p className="mt-0.5">{r.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => r.id !== undefined && void deleteReport(r.id)}
                  aria-label="Delete report"
                  className="shrink-0 rounded-lg px-2 py-1 font-bold text-stone-400 hover:bg-stone-200 hover:text-stone-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
