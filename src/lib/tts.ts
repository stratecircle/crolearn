/**
 * Croatian TTS via the Web Speech API.
 * Best voice: "Microsoft Matej Online (Natural)" — available in Edge.
 * Voices load async; getVoices() may be empty until voiceschanged fires.
 */

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const list = speechSynthesis.getVoices();
    if (list.length > 0) return resolve(list);
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      speechSynthesis.removeEventListener("voiceschanged", finish);
      resolve(speechSynthesis.getVoices());
    };
    speechSynthesis.addEventListener("voiceschanged", finish);
    // Safety timeout — some browsers never fire the event.
    setTimeout(finish, 2000);
  });
}

export interface TtsDiagnostics {
  supported: boolean;
  croatianVoices: { name: string; lang: string; natural: boolean }[];
  best: string | null;
  recommendation: string | null;
}

export async function getCroatianVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!("speechSynthesis" in window)) return [];
  if (cachedVoices.length === 0) cachedVoices = await loadVoices();
  return cachedVoices.filter((v) => v.lang.toLowerCase().startsWith("hr"));
}

export async function getDiagnostics(): Promise<TtsDiagnostics> {
  if (!("speechSynthesis" in window)) {
    return { supported: false, croatianVoices: [], best: null,
      recommendation: "This browser has no speech synthesis. Use Microsoft Edge." };
  }
  const hr = await getCroatianVoices();
  const natural = hr.find((v) => /natural|online/i.test(v.name));
  const best = natural ?? hr[0] ?? null;
  return {
    supported: true,
    croatianVoices: hr.map((v) => ({ name: v.name, lang: v.lang, natural: /natural|online/i.test(v.name) })),
    best: best?.name ?? null,
    recommendation:
      hr.length === 0
        ? "No Croatian voice found. Use Microsoft Edge, or install one: Windows Settings → Time & Language → Speech → Add voices → Croatian."
        : natural
          ? null
          : "For a much more natural voice, open CroLearn in Microsoft Edge (has the neural 'Matej' Croatian voice).",
  };
}

async function pickVoice(): Promise<SpeechSynthesisVoice | null> {
  const preferred = localStorage.getItem("crolearn.ttsVoice");
  const hr = await getCroatianVoices();
  if (preferred) {
    const match = hr.find((v) => v.name === preferred);
    if (match) return match;
  }
  return hr.find((v) => /natural|online/i.test(v.name)) ?? hr[0] ?? null;
}

/** Speak Croatian text. rate 1 = normal; slow mode uses 0.72. Resolves when done. */
export async function speak(text: string, opts: { slow?: boolean } = {}): Promise<void> {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "hr-HR";
  const voice = await pickVoice();
  if (voice) u.voice = voice;
  u.rate = opts.slow ? 0.72 : 1;
  return new Promise((resolve) => {
    u.onend = () => resolve();
    u.onerror = () => resolve();
    speechSynthesis.speak(u);
  });
}

export function stopSpeaking(): void {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}

export function hasTts(): boolean {
  return "speechSynthesis" in window;
}
