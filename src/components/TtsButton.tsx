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
      /*
       * min-h/min-w, not more padding: the 14px icon plus px-1.5/py-1 came to
       * 26x22, two pixels under the WCAG 2.5.8 minimum target size. Setting the
       * minimum instead of growing the padding keeps these buttons from
       * stretching the line box when they sit inline inside a sentence.
       */
      className={`inline-flex min-h-[24px] min-w-[24px] items-center justify-center gap-1.5 rounded-md px-1.5 py-1 align-middle text-[13px] font-medium transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-50 ${className}`}
      style={{ color: playing ? "var(--primary)" : "var(--muted)" }}
      disabled={playing}
      onClick={async () => {
        setPlaying(true);
        await speak(text, { slow });
        setPlaying(false);
      }}
    >
      <Icon size={14} strokeWidth={2} />
      {label && <span>{label}</span>}
    </button>
  );
}
