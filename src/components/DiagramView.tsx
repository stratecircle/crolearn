import type { DiagramSpec } from "@/types/content";
import { CASE_COLORS } from "@/ui/caseColors";
import TtsButton from "./TtsButton";

/** Renders every diagram kind from the visuals mandate (§4). */
export default function DiagramView({ diagram }: { diagram: DiagramSpec }) {
  switch (diagram.kind) {
    case "callout": {
      const tones = {
        warn: "border-amber-500 bg-amber-50",
        info: "border-sky-500 bg-sky-50",
        success: "border-green-600 bg-green-50",
      };
      const icons = { warn: "⚠️", info: "💡", success: "🎉" };
      return (
        <div className={`rounded-xl border-2 p-4 ${tones[diagram.tone]}`}>
          <p className="font-bold">
            {icons[diagram.tone]} {diagram.title ?? ""}
          </p>
          <p className="mt-1">{diagram.text}</p>
        </div>
      );
    }

    case "usage-map": {
      const cc = CASE_COLORS[diagram.caseId];
      return (
        <div>
          <p className={`mb-2 text-sm font-semibold uppercase tracking-[.13em] ${cc.text}`}>
            When do I use the {cc.name.toLowerCase()}?
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {diagram.boxes.map((box, i) => (
              <div key={i} className={`rounded-xl border-2 p-3 ${cc.border} ${cc.bg}`}>
                <p className="font-bold">{box.label}</p>
                {box.examples.map((ex, j) => (
                  <p key={j} className="mt-1 text-sm">
                    <span className={`font-semibold ${cc.text}`}>{ex.hr}</span>{" "}
                    <span className="text-[#8B93A1]">— {ex.en}</span>{" "}
                    <TtsButton text={ex.hr} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "contrast": {
      const side = (s: typeof diagram.left) => {
        const cc = s.caseId ? CASE_COLORS[s.caseId] : null;
        return (
          <div className={`flex-1 rounded-xl border-2 p-4 ${cc ? `${cc.border} ${cc.bg}` : "border-[rgba(15,23,42,.14)] bg-white"}`}>
            <p className={`font-bold ${cc?.text ?? ""}`}>
              {s.emoji && <span className="mr-1 text-xl">{s.emoji}</span>}
              {s.title}
            </p>
            {s.lines.map((l, i) => (
              <p key={i} className="mt-1.5">
                <span className={`font-semibold ${cc?.text ?? ""}`}>{l.hr}</span>{" "}
                <span className="text-sm text-[#8B93A1]">— {l.en}</span>{" "}
                <TtsButton text={l.hr} />
              </p>
            ))}
          </div>
        );
      };
      return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
          {side(diagram.left)}
          <div className="self-center font-display text-2xl font-bold text-[#16243D] text-[#8B93A1]">vs</div>
          {side(diagram.right)}
        </div>
      );
    }

    case "flow":
      return (
        <div className="flex flex-wrap items-center gap-2">
          {diagram.steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="rounded-xl border-2 border-[rgba(15,23,42,.14)] bg-white px-3 py-2 text-center">
                {s.emoji && <div className="text-xl">{s.emoji}</div>}
                <div className="text-sm font-bold">{s.label}</div>
                {s.example && <div className="text-xs text-[#8B93A1]">{s.example}</div>}
              </div>
              {i < diagram.steps.length - 1 && <span className="text-xl text-[#8B93A1]">→</span>}
            </div>
          ))}
        </div>
      );

    case "train":
      return (
        <div className="overflow-x-auto">
          <div className="flex items-end gap-1 pb-1">
            {diagram.wagons.map((w, i) => (
              <div key={i} className="flex items-center">
                <div className="min-w-24 rounded-t-xl rounded-b-md border-2 border-[#3F4A5C] bg-[rgba(15,23,42,.05)] px-3 py-2 text-center">
                  <div className="text-xs font-semibold uppercase text-[#8B93A1]">{w.label}</div>
                  <div className="text-sm font-semibold">{w.items.join(" ")}</div>
                  {w.note && <div className="text-xs text-[#9A5B14]">{w.note}</div>}
                </div>
                {i < diagram.wagons.length - 1 && <span className="px-0.5 text-[#8B93A1]">–</span>}
              </div>
            ))}
            <span className="pl-1 text-2xl">🚂</span>
          </div>
        </div>
      );

    case "bracket":
      return (
        <div className="grid gap-3 sm:grid-cols-3">
          {diagram.groups.map((g, i) => {
            const cc = g.caseId ? CASE_COLORS[g.caseId] : null;
            return (
              <div key={i} className={`rounded-xl border-2 p-3 text-center ${cc ? `${cc.border} ${cc.bg}` : "border-[rgba(15,23,42,.14)]"}`}>
                <div className="font-display text-2xl font-bold text-[#16243D]">{g.label}</div>
                <div className={`text-sm font-bold ${cc?.text ?? "text-[#5B6472]"}`}>{g.rule}</div>
                <div className="mt-1 font-semibold">{g.example}</div>
              </div>
            );
          })}
        </div>
      );
  }
}
