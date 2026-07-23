/**
 * Croatian speech recognition via the Web Speech API (Chrome/Edge only).
 * Speak slides never block progress on STT (teaching-method: practice, not gate);
 * a self-assess override is always offered by the UI.
 */

interface SpeechRecognitionResultEvent {
  results: { 0: { transcript: string; confidence: number } }[];
}

type SpeechRecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
};

function getCtor(): SpeechRecognitionCtor | null {
  const w = window as unknown as Record<string, unknown>;
  return (w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null) as SpeechRecognitionCtor | null;
}

export function hasStt(): boolean {
  return getCtor() !== null;
}

export interface SttResult {
  transcript: string;
  confidence: number;
}

let active: InstanceType<SpeechRecognitionCtor> | null = null;

/** Listen for one utterance in Croatian. Rejects with "unsupported" | "denied" | "no-speech" | "error". */
export function listenOnce(): Promise<SttResult> {
  const Ctor = getCtor();
  if (!Ctor) return Promise.reject(new Error("unsupported"));
  return new Promise((resolve, reject) => {
    const rec = new Ctor();
    active = rec;
    rec.lang = "hr-HR";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    let settled = false;
    rec.onresult = (e) => {
      settled = true;
      const r = e.results[e.results.length - 1][0];
      resolve({ transcript: r.transcript, confidence: r.confidence });
    };
    rec.onerror = (e) => {
      settled = true;
      reject(new Error(e.error === "not-allowed" ? "denied" : e.error === "no-speech" ? "no-speech" : "error"));
    };
    rec.onend = () => {
      active = null;
      if (!settled) reject(new Error("no-speech"));
    };
    rec.start();
  });
}

export function stopListening(): void {
  active?.abort();
  active = null;
}
