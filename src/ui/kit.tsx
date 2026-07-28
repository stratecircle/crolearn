/**
 * Nativ design-system primitives (design_handoff_nativ_app).
 * Tokens: README §Design Tokens. Every screen composes these instead of
 * re-declaring card/button/chip styles.
 */
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export const INK = "#16243D";
export const BODY = "#3F4A5C";
export const BODY2 = "#5B6472";
export const MUTED = "#8B93A1";
export const RED = "#C93434";
export const GREEN = "#2F7D53";
export const ORANGE = "#E08A2B";
export const VIOLET = "#8B6FC9";
export const BLUE = "#3B6FD4";
export const TEAL = "#3E9FB0";
export const BORDER = "rgba(15,23,42,.09)";
export const DIVIDER = "rgba(15,23,42,.06)";

export const LEVEL_COLORS: Record<string, string> = {
  A1: RED,
  A2: GREEN,
  B1: ORANGE,
  B2: VIOLET,
  C1: BLUE,
  C2: TEAL,
};

/** Playfair Display — the display face for titles and Croatian content. */
export const DISPLAY = "'Playfair Display',serif";
export const SHADOW_CARD = "0 1px 3px rgba(15,23,42,.04)";
export const SHADOW_FLOAT = "0 1px 3px rgba(15,23,42,.04),0 16px 44px rgba(15,23,42,.06)";

export function tint(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

export function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`rounded-[20px] border bg-[#FDFCFA] shadow-[0_1px_3px_rgba(15,23,42,.04)] ${className}`}
      style={{ borderColor: BORDER, ...style }}
    >
      {children}
    </div>
  );
}

/** Playfair display heading. `size` is the desktop size; it scales down fluidly on phones. */
export function H({ children, size = 26, className = "", style }: { children: ReactNode; size?: number; className?: string; style?: CSSProperties }) {
  const min = Math.max(18, Math.round(size * 0.72));
  return (
    <div
      className={`font-bold ${className}`}
      style={{
        fontFamily: DISPLAY,
        fontSize: `clamp(${min}px, ${(size / 15).toFixed(1)}vw, ${size}px)`,
        lineHeight: 1.15,
        letterSpacing: "-.01em",
        color: INK,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Card-level Playfair heading (600/18). */
export function CardH({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={className} style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: 18, color: INK }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-xs font-semibold ${className}`} style={{ letterSpacing: ".13em", color: RED }}>
      {children}
    </div>
  );
}

export function BtnPrimary({ children, onClick, icon: Icon, className = "", disabled }: { children: ReactNode; onClick?: () => void; icon?: LucideIcon; className?: string; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-xl px-6 text-[15px] font-semibold text-white transition-colors duration-[180ms] ${className}`}
      style={{ background: disabled ? "rgba(15,23,42,.15)" : RED }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = "#B32C2C")}
      onMouseLeave={(e) => !disabled && (e.currentTarget.style.background = RED)}
    >
      {children}
      {Icon && <Icon size={17} />}
    </button>
  );
}

export function BtnGhost({ children, onClick, icon: Icon, className = "" }: { children: ReactNode; onClick?: () => void; icon?: LucideIcon; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-12 items-center gap-2.5 whitespace-nowrap rounded-xl border bg-white px-5 text-[15px] font-medium transition-colors duration-[180ms] hover:bg-[#F7F4F0] ${className}`}
      style={{ borderColor: "rgba(15,23,42,.1)", color: BODY }}
    >
      {Icon && <Icon size={17} color={MUTED} />}
      {children}
    </button>
  );
}

export function ProgressBar({ pct, color = RED, height = 7, className = "" }: { pct: number; color?: string; height?: number; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-full ${className}`} style={{ height, background: "rgba(15,23,42,.09)" }}>
      <div className="h-full rounded-full" style={{ width: `${Math.max(0, Math.min(100, pct))}%`, background: color }} />
    </div>
  );
}

/** Conic progress ring with a hole; children render in the middle. */
export function Ring({ pct, color, size = 112, hole = 88, children }: { pct: number; color: string; size?: number; hole?: number; children: ReactNode }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: `conic-gradient(${color} 0 ${Math.round(pct)}%, rgba(15,23,42,.09) 0 100%)` }}
    >
      <div className="flex flex-col items-center justify-center rounded-full bg-[#FDFCFA]" style={{ width: hole, height: hole }}>
        {children}
      </div>
    </div>
  );
}

/** Tinted icon square. */
export function Tile({ icon: Icon, color, size = 48, radius = 13, iconSize }: { icon: LucideIcon; color: string; size?: number; radius?: number; iconSize?: number }) {
  return (
    <div
      className="flex flex-none items-center justify-center"
      style={{ width: size, height: size, borderRadius: radius, background: tint(color, 0.1) }}
    >
      <Icon size={iconSize ?? Math.round(size * 0.44)} color={color} />
    </div>
  );
}

export function Chip({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="inline-block self-start whitespace-nowrap rounded-lg px-3 py-1.5 text-[13px]"
      style={{ background: tint(color, 0.11), color }}
    >
      {children}
    </span>
  );
}

export function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      role="switch"
      aria-checked={on}
      className="flex flex-none rounded-full p-[3px] transition-colors duration-200"
      style={{ width: 52, height: 30, background: on ? INK : "rgba(15,23,42,.16)" }}
    >
      <div
        className="rounded-full bg-white transition-transform duration-200"
        style={{ width: 24, height: 24, boxShadow: "0 1px 3px rgba(15,23,42,.25)", transform: on ? "translateX(22px)" : "translateX(0)" }}
      />
    </button>
  );
}

/** Compact stat: icon + value + caption. `big` renders the Practice-header variant. */
export function StatChip({ icon: Icon, color, value, label, big = false }: { icon: LucideIcon; color: string; value: string; label: string; big?: boolean }) {
  if (big) {
    return (
      <div className="flex-none">
        <div className="mb-[5px] flex items-center gap-2.5">
          <Icon size={20} color={color} strokeWidth={1.7} />
          <span style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(20px,2.4vw,26px)", color: INK }}>{value}</span>
        </div>
        <div className="whitespace-nowrap text-sm" style={{ color: BODY2 }}>{label}</div>
      </div>
    );
  }
  return (
    <div className="flex flex-none items-center gap-2.5">
      <Icon size={20} color={color} strokeWidth={1.7} />
      <div>
        <div className="text-[15px] font-semibold leading-tight" style={{ color: INK }}>{value}</div>
        <div className="whitespace-nowrap text-xs" style={{ color: MUTED }}>{label}</div>
      </div>
    </div>
  );
}

/** Row of StatChips: normal flex on desktop, swipeable strip on phones. */
export function StatRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`nativ-noscrollbar flex items-center gap-[26px] overflow-x-auto max-[700px]:-mx-4 max-[700px]:gap-5 max-[700px]:px-4 ${className}`}>
      {children}
    </div>
  );
}

/** Bordered square icon button (player chrome: exit, back, flag…). */
export function IconBtn({ icon: Icon, onClick, label, disabled, size = 44 }: { icon: LucideIcon; onClick?: () => void; label: string; disabled?: boolean; size?: number }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex flex-none items-center justify-center rounded-xl border bg-white transition-colors duration-[180ms] hover:bg-[#F7F4F0] disabled:opacity-30 disabled:hover:bg-white"
      style={{ width: size, height: size, borderColor: "rgba(15,23,42,.1)" }}
    >
      <Icon size={Math.round(size * 0.41)} color={BODY2} />
    </button>
  );
}

/** Search field in the card toolbar style. */
export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border bg-white px-[18px]" style={{ borderColor: BORDER }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 border-none bg-transparent text-[15px] outline-none"
        style={{ color: INK }}
      />
    </div>
  );
}

/** Dashed empty-state block. */
export function EmptyState({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-dashed px-6 py-14 text-center" style={{ borderColor: "rgba(15,23,42,.12)" }}>
      <div className="mb-1.5 text-base font-semibold" style={{ color: INK }}>{title}</div>
      <div className="text-sm" style={{ color: MUTED }}>{sub}</div>
    </div>
  );
}

/** Status banner used inside players (looking-back / retry / review notices). */
export function Banner({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p className="mb-3 rounded-xl px-3.5 py-2 text-sm font-semibold" style={{ background: tint(color, 0.1), color }}>
      {children}
    </p>
  );
}

/** Full-width completion card (lesson / deck / practice endings). */
export function DoneCard({ icon: Icon = undefined, title, children }: { icon?: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="rounded-[20px] border bg-white px-12 py-14 text-center max-[700px]:px-6 max-[700px]:py-10" style={{ borderColor: "rgba(15,23,42,.07)", boxShadow: SHADOW_FLOAT }}>
      {Icon && (
        <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full" style={{ background: tint(GREEN, 0.1) }}>
          <Icon size={30} color={GREEN} />
        </div>
      )}
      <div className="mb-3" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, color: INK }}>{title}</div>
      {children}
    </div>
  );
}

/** Segmented control (theme / font size pickers). */
export function Seg<T extends string>({ options, value, onChange, icons }: { options: T[]; value: T; onChange: (v: T) => void; icons?: Partial<Record<T, LucideIcon>> }) {
  return (
    <div className="flex overflow-hidden rounded-xl border bg-white" style={{ borderColor: "rgba(15,23,42,.1)" }}>
      {options.map((o, i) => {
        const Icon: LucideIcon | undefined = icons?.[o];
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="flex h-12 flex-1 items-center justify-center gap-2 text-[15px] transition-colors duration-[180ms]"
            style={{
              borderLeft: i === 0 ? "none" : "1px solid rgba(15,23,42,.1)",
              background: active ? "#F6F3EF" : "#fff",
              color: active ? INK : BODY2,
              fontWeight: active ? 600 : 400,
            }}
          >
            {Icon && <Icon size={16} />}
            {o}
          </button>
        );
      })}
    </div>
  );
}
