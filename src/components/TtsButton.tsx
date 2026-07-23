import { useState } from "react";
import { hasTts, speak } from "@/lib/tts";

export default function TtsButton({
  text,
  slow = false,
  label,
  className = "",
}: {
  text: string;
  slow?: boolean;
  label?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  if (!hasTts()) return null;
  return (
    <button
      type="button"
      aria-label={`Play: ${text}`}
      className={`inline-flex items-center gap-1 rounded-full bg-stone-200 px-2.5 py-1 text-sm font-medium text-stone-700 hover:bg-stone-300 disabled:opacity-50 ${className}`}
      disabled={playing}
      onClick={async () => {
        setPlaying(true);
        await speak(text, { slow });
        setPlaying(false);
      }}
    >
      {playing ? "🔉" : slow ? "🐢" : "🔊"}
      {label && <span>{label}</span>}
    </button>
  );
}
