/**
 * Nativ design-system primitives (design_handoff_nativ_app).
 * Tokens: README §Design Tokens. Every screen composes these instead of
 * re-declaring card/button/chip styles.
 */
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export const INK = "var(--ink)";
export const BODY = "var(--body)";
export const BODY2 = "var(--body2)";
export const MUTED = "var(--muted)";
export const RED = "var(--primary)";
export const GREEN = "var(--green)";
export const ORANGE = "var(--orange)";
export const VIOLET = "var(--violet)";
export const BLUE = "var(--blue)";
export const TEAL = "var(--teal)";
export const BORDER = "rgba(var(--ink-rgb),.15)";
export const DIVIDER = "rgba(var(--ink-rgb),.12)";

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
/** Lora — the reading face for stories and long-form notes. */
export const READING = "'Lora',Georgia,serif";
// Udžbenik is a printed page: panels sit flat and are separated by hairline
// rules. These stay exported for the players, but resolve to (near) nothing.
export const SHADOW_CARD = "none";
export const SHADOW_FLOAT = "0 2px 10px rgba(var(--shadow-rgb),.05)";

/**
 * The šahovnica — CroLearn's mark. A field of the Croatian checkerboard;
 * `filled` (0–1) optionally renders it as a progress object, filling
 * cell-by-cell in reading order.
 */
export function Sahovnica({ size = 22, cols = 4, rows = 3, filled = 1, color = RED, className = "" }: { size?: number; cols?: number; rows?: number; filled?: number; color?: string; className?: string }) {
  const cell = size / cols;
  const total = cols * rows;
  const lit = Math.round(Math.max(0, Math.min(1, filled)) * total);
  const cells = [];
  for (let i = 0; i < total; i++) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const isRed = (r + c) % 2 === 0;
    if (!isRed) continue;
    cells.push(
      <rect
        key={i}
        x={c * cell}
        y={r * cell}
        width={cell}
        height={cell}
        fill={i < lit ? color : "rgba(var(--ink-rgb),.14)"}
      />,
    );
  }
  return (
    <svg width={size} height={(size / cols) * rows} viewBox={`0 0 ${size} ${cell * rows}`} className={className} aria-hidden="true" style={{ display: "block" }}>
      <rect x={0} y={0} width={size} height={cell * rows} fill="none" stroke="rgba(var(--ink-rgb),.25)" strokeWidth="1" />
      {cells}
    </svg>
  );
}

/** Editorial section header: Playfair title + hairline rule running to the margin. */
export function SectionTitle({ children, right, className = "" }: { children: ReactNode; right?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-none" style={{ fontFamily: DISPLAY, fontWeight: 600, fontSize: 21, color: INK, letterSpacing: "-.01em" }}>{children}</div>
      <div className="h-px min-w-6 flex-1" style={{ background: "rgba(var(--ink-rgb),.18)" }} />
      {right && <div className="flex-none text-sm" style={{ color: BODY2 }}>{right}</div>}
    </div>
  );
}

/**
 * Translucent wash of an accent colour. The palette is CSS custom properties now
 * (`var(--green)`), whose channels aren't knowable in JS, so anything that isn't
 * a literal hex goes through `color-mix` instead of manual channel maths.
 */
export function tint(color: string, a: number): string {
  if (/^#[0-9a-f]{6}$/i.test(color)) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }
  return `color-mix(in srgb, ${color} ${Math.round(a * 1000) / 10}%, transparent)`;
}

export function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`rounded-[10px] border bg-[color:var(--card)] ${className}`}
      style={{ borderColor: "rgba(var(--ink-rgb),.16)", ...style }}
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
    <div className={`flex items-center gap-2 text-xs font-semibold ${className}`} style={{ letterSpacing: ".14em", color: RED }}>
      <span className="inline-block h-px w-[18px] flex-none" style={{ background: RED }} />
      {children}
    </div>
  );
}

export function BtnPrimary({ children, onClick, icon: Icon, className = "", disabled }: { children: ReactNode; onClick?: () => void; icon?: LucideIcon; className?: string; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-[46px] items-center gap-2.5 whitespace-nowrap rounded-lg px-6 text-[15px] font-semibold text-white transition-colors duration-[180ms] ${className}`}
      style={{ background: disabled ? "rgba(var(--ink-rgb),.15)" : RED, letterSpacing: ".01em" }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = "var(--primary-hover)")}
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
      className={`inline-flex h-[46px] items-center gap-2.5 whitespace-nowrap rounded-lg border bg-transparent px-5 text-[15px] font-medium transition-colors duration-[180ms] hover:bg-[rgba(var(--ink-rgb),.05)] ${className}`}
      style={{ borderColor: "rgba(var(--ink-rgb),.3)", color: BODY }}
    >
      {Icon && <Icon size={17} color={MUTED} />}
      {children}
    </button>
  );
}

export function ProgressBar({ pct, color = RED, height = 5, className = "" }: { pct: number; color?: string; height?: number; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2px] ${className}`} style={{ height, background: "rgba(var(--ink-rgb),.12)" }}>
      <div className="h-full" style={{ width: `${Math.max(0, Math.min(100, pct))}%`, background: color }} />
    </div>
  );
}

/** Conic progress ring with a hole; children render in the middle. */
export function Ring({ pct, color, size = 112, hole = 88, children }: { pct: number; color: string; size?: number; hole?: number; children: ReactNode }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: `conic-gradient(${color} 0 ${Math.round(pct)}%, rgba(var(--ink-rgb),.15) 0 100%)` }}
    >
      <div className="flex flex-col items-center justify-center rounded-full bg-[color:var(--card)]" style={{ width: hole, height: hole }}>
        {children}
      </div>
    </div>
  );
}

/** Tinted icon square. */
export function Tile({ icon: Icon, color, size = 48, radius = 8, iconSize }: { icon: LucideIcon; color: string; size?: number; radius?: number; iconSize?: number }) {
  return (
    <div
      className="flex flex-none items-center justify-center border"
      style={{ width: size, height: size, borderRadius: Math.min(radius, 8), background: tint(color, 0.08), borderColor: tint(color, 0.28) }}
    >
      <Icon size={iconSize ?? Math.round(size * 0.44)} color={color} strokeWidth={1.7} />
    </div>
  );
}

export function Chip({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="inline-block self-start whitespace-nowrap rounded-[5px] border px-2.5 py-1 text-xs font-semibold"
      style={{ borderColor: tint(color, 0.45), color, letterSpacing: ".02em", background: tint(color, 0.06) }}
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
      style={{ width: 52, height: 30, background: on ? INK : "rgba(var(--ink-rgb),.16)" }}
    >
      <div
        className="rounded-full bg-[color:var(--card)] transition-transform duration-200"
        style={{ width: 24, height: 24, boxShadow: "0 1px 3px rgba(var(--shadow-rgb),.25)", transform: on ? "translateX(22px)" : "translateX(0)" }}
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
      <Icon size={19} color={color} strokeWidth={1.6} />
      <div>
        <div className="leading-tight" style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 17, color: INK }}>{value}</div>
        <div className="whitespace-nowrap text-xs" style={{ color: MUTED, letterSpacing: ".04em" }}>{label.toUpperCase()}</div>
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
      className="flex flex-none items-center justify-center rounded-lg border bg-[color:var(--card)] transition-colors duration-[180ms] hover:bg-[color:var(--tint)] disabled:opacity-30 disabled:hover:bg-[color:var(--card)]"
      style={{ width: size, height: size, borderColor: "rgba(var(--ink-rgb),.18)" }}
    >
      <Icon size={Math.round(size * 0.41)} color={BODY2} />
    </button>
  );
}

/** Search field in the card toolbar style. */
export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-lg border bg-[color:var(--card)] px-[18px]" style={{ borderColor: BORDER }}>
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
    <div className="rounded-[10px] border border-dashed px-6 py-14 text-center" style={{ borderColor: "rgba(var(--ink-rgb),.12)" }}>
      <div className="mb-1.5 text-base font-semibold" style={{ color: INK }}>{title}</div>
      <div className="text-sm" style={{ color: MUTED }}>{sub}</div>
    </div>
  );
}

/** Status banner used inside players (looking-back / retry / review notices). */
export function Banner({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p className="mb-3 rounded-lg px-3.5 py-2 text-sm font-semibold" style={{ background: tint(color, 0.1), color }}>
      {children}
    </p>
  );
}

/** Full-width completion card (lesson / deck / practice endings). */
export function DoneCard({ icon: Icon = undefined, title, children }: { icon?: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="rounded-[10px] border bg-[color:var(--card)] px-12 py-14 text-center max-[700px]:px-6 max-[700px]:py-10" style={{ borderColor: "rgba(var(--ink-rgb),.16)" }}>
      <div className="mb-5 flex justify-center"><Sahovnica size={30} /></div>
      {Icon && (
        <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full border" style={{ background: tint(GREEN, 0.08), borderColor: tint(GREEN, 0.3) }}>
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
    <div className="flex overflow-hidden rounded-lg border bg-[color:var(--card)]" style={{ borderColor: "rgba(var(--ink-rgb),.18)" }}>
      {options.map((o, i) => {
        const Icon: LucideIcon | undefined = icons?.[o];
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="flex h-12 flex-1 items-center justify-center gap-2 text-[15px] transition-colors duration-[180ms]"
            style={{
              borderLeft: i === 0 ? "none" : "1px solid rgba(var(--ink-rgb),.18)",
              background: active ? "var(--tint5)" : "var(--card)",
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
