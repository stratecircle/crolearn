import { useState } from "react";
import { Turtle, Volume2 } from "lucide-react";
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
  const Icon = slow ? Turtle : Volume2;
  return (
    <button
      type="button"
      aria-label={`Play: ${text}`}
      className={`inline-flex items-center gap-1.5 rounded-full border bg-white px-2.5 py-1 align-middle text-sm font-medium transition-colors duration-150 hover:bg-[#F7F4F0] disabled:opacity-50 ${className}`}
      style={{ borderColor: "rgba(15,23,42,.12)", color: playing ? "#C93434" : "#5B6472" }}
      disabled={playing}
      onClick={async () => {
        setPlaying(true);
        await speak(text, { slow });
        setPlaying(false);
      }}
    >
      <Icon size={15} />
      {label && <span>{label}</span>}
    </button>
  );
}
