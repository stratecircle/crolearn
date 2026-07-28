/**
 * ČISTO design-system primitives.
 *
 * White page, cool hairlines, one blue accent, mono metadata layer. Boxes only
 * around interactive things; everything else is lists + dividers + whitespace.
 * Every screen composes these instead of re-declaring card/button/chip styles.
 */
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export const INK = "var(--ink)";
export const BODY = "var(--body)";
export const BODY2 = "var(--body2)";
export const MUTED = "var(--muted)";
/** The accent. (Historically named RED — now the restrained blue.) */
export const ACCENT = "var(--primary)";
export const RED = ACCENT;
/** Croatian red — šahovnica mark + error states ONLY. */
export const CRVENI = "var(--crveni)";
export const GREEN = "var(--green)";
export const ORANGE = "var(--orange)";
export const VIOLET = "var(--violet)";
export const BLUE = "var(--blue)";
export const TEAL = "var(--teal)";
export const BORDER = "rgba(var(--ink-rgb),.1)";
export const DIVIDER = "rgba(var(--ink-rgb),.08)";

/** Levels are not colour-coded in ČISTO — everything runs through the accent. */
export const LEVEL_COLORS: Record<string, string> = {
  A1: ACCENT,
  A2: ACCENT,
  B1: ACCENT,
  B2: ACCENT,
  C1: ACCENT,
  C2: ACCENT,
};

/** Display face — same grotesk as body; hierarchy comes from size/weight. */
export const DISPLAY = "'Schibsted Grotesk',system-ui,sans-serif";
/** Reading face for stories and long-form Croatian. */
export const READING = "'Newsreader',Georgia,serif";
/** Mono metadata face. */
export const MONO = "'Geist Mono',ui-monospace,monospace";
export const SHADOW_CARD = "none";
export const SHADOW_FLOAT = "0 4px 24px rgba(var(--shadow-rgb),.08)";

/**
 * The šahovnica — CroLearn's mark, and the one red thing in the app.
 * `filled` (0–1) optionally renders it as a progress object, filling
 * cell-by-cell in reading order.
 */
export function Sahovnica({ size = 20, cols = 4, rows = 3, filled = 1, color = CRVENI, className = "" }: { size?: number; cols?: number; rows?: number; filled?: number; color?: string; className?: string }) {
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
      {cells}
    </svg>
  );
}

/** Mono uppercase metadata line — "B1 · UNIT 17 · LESSON 8", counts, tags. */
export function Meta({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`meta ${className}`} style={{ color: MUTED, ...style }}>
      {children}
    </div>
  );
}

/** Section label: mono eyebrow with an optional right-aligned meta slot. */
export function SectionTitle({ children, right, className = "" }: { children: ReactNode; right?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 ${className}`}>
      <Meta>{children}</Meta>
      {right && <div className="meta flex-none" style={{ color: "var(--muted3)" }}>{right}</div>}
    </div>
  );
}

/**
 * Page header: mono eyebrow above a large tight-tracked title, with an
 * optional right slot (actions / meta) on the baseline.
 */
export function PageHeader({ eyebrow, title, sub, right, className = "" }: { eyebrow?: ReactNode; title: ReactNode; sub?: ReactNode; right?: ReactNode; className?: string }) {
  return (
    <header className={`flex items-end justify-between gap-6 ${className}`}>
      <div className="min-w-0">
        {eyebrow && <Meta className="mb-2">{eyebrow}</Meta>}
        <h1 className="text-[26px] font-bold leading-tight" style={{ color: INK, letterSpacing: "-.02em" }}>{title}</h1>
        {sub && <p className="mt-1.5 text-sm" style={{ color: BODY2 }}>{sub}</p>}
      </div>
      {right && <div className="flex-none pb-1">{right}</div>}
    </header>
  );
}

/** Hairline rule. */
export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px ${className}`} style={{ background: DIVIDER }} />;
}

/**
 * Translucent wash of a colour. CSS custom properties go through `color-mix`
 * because their channels aren't knowable in JS.
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
      style={{ borderColor: BORDER, ...style }}
    >
      {children}
    </div>
  );
}

/** Large heading. `size` is the desktop size; it scales down fluidly on phones. */
export function H({ children, size = 24, className = "", style }: { children: ReactNode; size?: number; className?: string; style?: CSSProperties }) {
  const min = Math.max(17, Math.round(size * 0.78));
  return (
    <div
      className={`font-bold ${className}`}
      style={{
        fontSize: `clamp(${min}px, ${(size / 15).toFixed(1)}vw, ${size}px)`,
        lineHeight: 1.2,
        letterSpacing: "-.02em",
        color: INK,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Panel-level heading. */
export function CardH({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[15px] font-semibold ${className}`} style={{ color: INK, letterSpacing: "-.01em" }}>
      {children}
    </div>
  );
}

/** Mono eyebrow (kept name for the players' unit · section lines). */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <Meta className={className}>{children}</Meta>;
}

export function BtnPrimary({ children, onClick, icon: Icon, className = "", disabled }: { children: ReactNode; onClick?: () => void; icon?: LucideIcon; className?: string; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-white transition-[background,transform] duration-150 active:scale-[.98] ${className}`}
      style={{ background: disabled ? "rgba(var(--ink-rgb),.18)" : ACCENT }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.background = "var(--primary-hover)")}
      onMouseLeave={(e) => !disabled && (e.currentTarget.style.background = ACCENT)}
    >
      {children}
      {Icon && <Icon size={15} strokeWidth={2.2} />}
    </button>
  );
}

export function BtnGhost({ children, onClick, icon: Icon, className = "", disabled }: { children: ReactNode; onClick?: () => void; icon?: LucideIcon; className?: string; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-lg border bg-transparent px-3.5 text-sm font-medium transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-40 ${className}`}
      style={{ borderColor: "rgba(var(--ink-rgb),.14)", color: BODY }}
    >
      {Icon && <Icon size={15} color={BODY2} strokeWidth={2} />}
      {children}
    </button>
  );
}

export function ProgressBar({ pct, color = ACCENT, height = 3, className = "" }: { pct: number; color?: string; height?: number; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-full ${className}`} style={{ height, background: "rgba(var(--ink-rgb),.08)" }}>
      <div className="h-full rounded-full transition-[width] duration-300" style={{ width: `${Math.max(0, Math.min(100, pct))}%`, background: color }} />
    </div>
  );
}

/** Conic progress ring with a hole; children render in the middle. */
export function Ring({ pct, color = ACCENT, size = 104, hole = 92, children }: { pct: number; color?: string; size?: number; hole?: number; children: ReactNode }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-full"
      style={{ width: size, height: size, background: `conic-gradient(${color} 0 ${Math.round(pct)}%, rgba(var(--ink-rgb),.08) 0 100%)` }}
    >
      <div className="flex flex-col items-center justify-center rounded-full bg-[color:var(--page)]" style={{ width: hole, height: hole }}>
        {children}
      </div>
    </div>
  );
}

/** Neutral icon square. The colour param survives but stays quiet. */
export function Tile({ icon: Icon, color = BODY2, size = 36, radius = 8, iconSize }: { icon: LucideIcon; color?: string; size?: number; radius?: number; iconSize?: number }) {
  return (
    <div
      className="flex flex-none items-center justify-center"
      style={{ width: size, height: size, borderRadius: Math.min(radius, 10), background: "var(--tint)" }}
    >
      <Icon size={iconSize ?? Math.round(size * 0.47)} color={color} strokeWidth={1.8} />
    </div>
  );
}

export function Chip({ children, color = BODY2 }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="meta inline-block self-start whitespace-nowrap rounded-full border px-2.5 py-1"
      style={{ borderColor: "rgba(var(--ink-rgb),.12)", color }}
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
      style={{ width: 44, height: 26, background: on ? ACCENT : "rgba(var(--ink-rgb),.16)" }}
    >
      <div
        className="rounded-full bg-white transition-transform duration-200"
        style={{ width: 20, height: 20, boxShadow: "0 1px 3px rgba(var(--shadow-rgb),.3)", transform: on ? "translateX(18px)" : "translateX(0)" }}
      />
    </button>
  );
}

/** Compact stat: value + mono caption. Icon optional and quiet. */
export function StatChip({ icon: Icon, color = BODY2, value, label, big = false }: { icon?: LucideIcon; color?: string; value: string; label: string; big?: boolean }) {
  return (
    <div className="flex-none">
      <div className="flex items-baseline gap-1.5">
        {Icon && !big && <Icon size={14} color={color} strokeWidth={2} className="self-center" />}
        <span className="tabular-nums font-bold" style={{ fontSize: big ? 24 : 17, color: INK, letterSpacing: "-.01em" }}>{value}</span>
      </div>
      <div className="meta mt-0.5 whitespace-nowrap" style={{ color: MUTED }}>{label}</div>
    </div>
  );
}

/** Row of StatChips: normal flex on desktop, swipeable strip on phones. */
export function StatRow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`nativ-noscrollbar flex items-center gap-8 overflow-x-auto max-[700px]:-mx-4 max-[700px]:gap-6 max-[700px]:px-4 ${className}`}>
      {children}
    </div>
  );
}

/** Quiet square icon button (player chrome: exit, back, flag…). */
export function IconBtn({ icon: Icon, onClick, label, disabled, size = 36 }: { icon: LucideIcon; onClick?: () => void; label: string; disabled?: boolean; size?: number }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex flex-none items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[color:var(--tint)] disabled:opacity-30 disabled:hover:bg-transparent"
      style={{ width: size, height: size }}
    >
      <Icon size={Math.round(size * 0.5)} color={BODY2} strokeWidth={1.9} />
    </button>
  );
}

/** Search field. */
export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg bg-[color:var(--tint)] px-3">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={MUTED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 border-none bg-transparent text-sm outline-none"
        style={{ color: INK }}
      />
    </div>
  );
}

/** Dashed empty-state block. */
export function EmptyState({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-[10px] border border-dashed px-6 py-12 text-center" style={{ borderColor: "rgba(var(--ink-rgb),.14)" }}>
      <div className="mb-1 text-sm font-semibold" style={{ color: INK }}>{title}</div>
      <div className="text-sm" style={{ color: MUTED }}>{sub}</div>
    </div>
  );
}

/** Status banner used inside players (looking-back / retry / review notices). */
export function Banner({ children, color = BODY2 }: { children: ReactNode; color?: string }) {
  return (
    <p className="mb-3 rounded-lg px-3.5 py-2 text-[13px] font-medium" style={{ background: tint(color, 0.07), color }}>
      {children}
    </p>
  );
}

/** Full-width completion block (lesson / deck / practice endings). */
export function DoneCard({ icon: Icon = undefined, title, children }: { icon?: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="px-6 py-14 text-center">
      <div className="mb-6 flex justify-center"><Sahovnica size={24} /></div>
      {Icon && (
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: tint(GREEN, 0.1) }}>
          <Icon size={22} color={GREEN} strokeWidth={2} />
        </div>
      )}
      <div className="mb-3 font-bold" style={{ fontSize: "clamp(24px,3.4vw,32px)", lineHeight: 1.15, letterSpacing: "-.02em", color: INK }}>{title}</div>
      {children}
    </div>
  );
}

/**
 * Player chrome bar (story / test / checkpoint stages — LessonPlayer has its
 * own richer copy of the same layout). Slim full-width bar over a hairline;
 * the progress line lives in the bar's bottom edge.
 */
export function StageHeader({
  onExit,
  exitLabel = "Exit",
  eyebrow,
  title,
  pos,
  right,
  progressPct,
  exitIcon,
}: {
  onExit: () => void;
  exitLabel?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  pos?: string;
  right?: ReactNode;
  progressPct?: number;
  exitIcon: LucideIcon;
}) {
  return (
    <header className="relative flex-none border-b" style={{ borderColor: "rgba(var(--ink-rgb),.08)" }}>
      <div className="mx-auto flex h-14 w-full max-w-[980px] items-center gap-1.5 px-4">
        <IconBtn icon={exitIcon} label={exitLabel} onClick={onExit} />
        <div className="min-w-0 flex-1 px-2">
          {eyebrow && <div className="meta truncate" style={{ color: MUTED }}>{eyebrow}</div>}
          <div className="truncate text-sm font-semibold leading-tight" style={{ color: INK, letterSpacing: "-.01em" }}>{title}</div>
        </div>
        {pos && <span className="meta whitespace-nowrap px-1 tabular-nums" style={{ color: MUTED }}>{pos}</span>}
        {right}
      </div>
      {progressPct !== undefined && (
        <div
          className="absolute bottom-[-1px] left-0 h-[2px]"
          style={{ width: `${Math.max(0, Math.min(100, progressPct))}%`, background: ACCENT, transition: "width 300ms ease" }}
        />
      )}
    </header>
  );
}

/** Segmented control (theme / mode pickers) — pill track, floating white thumb. */
export function Seg<T extends string>({ options, value, onChange, icons }: { options: T[]; value: T; onChange: (v: T) => void; icons?: Partial<Record<T, LucideIcon>> }) {
  return (
    <div className="flex rounded-lg p-[3px]" style={{ background: "var(--tint2)" }}>
      {options.map((o) => {
        const Icon: LucideIcon | undefined = icons?.[o];
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className="flex h-8 flex-1 items-center justify-center gap-1.5 rounded-[6px] px-3 text-[13px] capitalize transition-colors duration-150"
            style={{
              background: active ? "var(--card)" : "transparent",
              color: active ? INK : BODY2,
              fontWeight: active ? 600 : 450,
              boxShadow: active ? "0 1px 4px rgba(var(--shadow-rgb),.1)" : "none",
            }}
          >
            {Icon && <Icon size={14} strokeWidth={2} />}
            {o}
          </button>
        );
      })}
    </div>
  );
}
