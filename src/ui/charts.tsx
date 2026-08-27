/**
 * The dashboard's data marks.
 *
 * All three are single-series, so none needs a categorical palette: the heatmap
 * is a sequential blue ramp (`--ramp-0…4`, monotonic in lightness), the bars and
 * the sparkline are the one accent. Text always wears ink tokens — never the
 * series colour — and every mark carries a hover tooltip, which is what earns
 * the faint low steps of the ramp their sub-3:1 contrast.
 */
import { useState, type ReactNode } from "react";
import { ACCENT, BODY2, INK, MUTED } from "./kit";

/* ── shared tooltip ─────────────────────────────────────────────────────── */

function Tip({ children, x, y }: { children: ReactNode; x: number; y: number }) {
  return (
    <div
      className="pop pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium"
      style={{
        left: x,
        top: y - 6,
        background: "var(--ink)",
        color: "var(--page)",
        boxShadow: "var(--e2)",
      }}
    >
      {children}
    </div>
  );
}

/* ── activity heatmap ───────────────────────────────────────────────────── */

export interface DayCell {
  /** Local date key, `YYYY-MM-DD`. */
  key: string;
  date: Date;
  /** Reviews + lessons that day. */
  count: number;
}

const CELL = 11;
const GAP = 3;

/** Bucket a day's activity onto the 5-step ramp. */
function level(count: number, max: number): number {
  if (count <= 0) return 0;
  if (max <= 3) return count >= 3 ? 4 : count + 1;
  const q = count / max;
  return q > 0.66 ? 4 : q > 0.33 ? 3 : q > 0.12 ? 2 : 1;
}

/**
 * Study activity, one column per week, GitHub-style. `days` must be in
 * ascending date order and start on a Monday for the rows to line up.
 */
export function ActivityHeatmap({ days }: { days: DayCell[] }) {
  const [hover, setHover] = useState<{ d: DayCell; x: number; y: number } | null>(null);
  const max = days.reduce((m, d) => Math.max(m, d.count), 0);
  const weeks = Math.ceil(days.length / 7);

  // Month ticks: label a column when its first day starts a new month. A month
  // whose boundary lands within 3 columns of the previous label is skipped —
  // otherwise short months collide into "MARAPR".
  const ticks: { w: number; label: string }[] = [];
  for (let w = 0; w < weeks; w++) {
    const first = days[w * 7];
    if (!first) continue;
    const label = first.date.toLocaleDateString("en-GB", { month: "short" });
    const prev = ticks[ticks.length - 1];
    if (!prev) ticks.push({ w, label });
    else if (prev.label !== label && w - prev.w >= 3) ticks.push({ w, label });
  }

  return (
    <div className="relative">
      <div className="relative mb-1 h-3" style={{ width: weeks * (CELL + GAP) }}>
        {ticks.map((t) => (
          <span
            key={`${t.label}-${t.w}`}
            className="meta absolute top-0"
            style={{ left: t.w * (CELL + GAP), color: "var(--muted3)" }}
          >
            {t.label}
          </span>
        ))}
      </div>

      <div
        className="grid grid-flow-col"
        style={{ gridTemplateRows: `repeat(7, ${CELL}px)`, gap: GAP, width: weeks * (CELL + GAP) }}
        role="img"
        aria-label={`Study activity for the last ${days.length} days`}
      >
        {days.map((d) => {
          const lv = level(d.count, max);
          return (
            <div
              key={d.key}
              onMouseEnter={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const p = e.currentTarget.offsetParent?.getBoundingClientRect();
                setHover({ d, x: r.left - (p?.left ?? 0) + CELL / 2, y: r.top - (p?.top ?? 0) });
              }}
              onMouseLeave={() => setHover(null)}
              style={{
                width: CELL,
                height: CELL,
                borderRadius: 2.5,
                background: `var(--ramp-${lv})`,
                transition: "background 140ms ease",
              }}
            />
          );
        })}
      </div>

      <div className="mt-2.5 flex items-center gap-1.5">
        <span className="meta" style={{ color: "var(--muted3)" }}>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} style={{ width: 9, height: 9, borderRadius: 2, background: `var(--ramp-${l})` }} />
        ))}
        <span className="meta" style={{ color: "var(--muted3)" }}>More</span>
      </div>

      {hover && (
        <Tip x={hover.x} y={hover.y}>
          {hover.d.count === 0 ? "No study" : `${hover.d.count} review${hover.d.count === 1 ? "" : "s"}`}
          {" · "}
          {hover.d.date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
        </Tip>
      )}
    </div>
  );
}

/* ── forecast bars ──────────────────────────────────────────────────────── */

export interface Bar {
  label: string;
  value: number;
  /** Rendered in the accent rather than the muted step. */
  emphasis?: boolean;
}

/**
 * A small column chart — the review forecast. Bars are anchored to the baseline
 * with 4px rounded tops and a 2px surface gap, and a zero day still draws a
 * 2px stub so "nothing due" is visibly different from "no column".
 */
export function ForecastBars({ bars, height = 92 }: { bars: Bar[]; height?: number }) {
  const [hover, setHover] = useState<{ b: Bar; x: number; y: number } | null>(null);
  const max = Math.max(1, ...bars.map((b) => b.value));

  return (
    <div className="relative">
      <div className="flex items-end gap-[6px]" style={{ height }}>
        {bars.map((b, i) => {
          const h = b.value === 0 ? 2 : Math.max(4, Math.round((b.value / max) * (height - 8)));
          return (
            <div
              key={`${b.label}-${i}`}
              className="flex min-w-0 flex-1 items-end justify-center"
              style={{ height }}
              onMouseEnter={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const p = e.currentTarget.offsetParent?.getBoundingClientRect();
                setHover({ b, x: r.left - (p?.left ?? 0) + r.width / 2, y: r.top - (p?.top ?? 0) + (height - h) });
              }}
              onMouseLeave={() => setHover(null)}
            >
              <div
                className="w-full"
                style={{
                  height: h,
                  maxWidth: 26,
                  borderRadius: "4px 4px 2px 2px",
                  background: b.value === 0 ? "rgba(var(--ink-rgb),.12)" : b.emphasis ? ACCENT : "rgba(var(--primary-rgb),.35)",
                  transition: "height 320ms cubic-bezier(.22,.68,.3,1), background 140ms ease",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex gap-[6px]">
        {bars.map((b, i) => (
          <div key={`${b.label}-l-${i}`} className="meta min-w-0 flex-1 text-center" style={{ color: "var(--muted3)" }}>
            {b.label}
          </div>
        ))}
      </div>
      {hover && (
        <Tip x={hover.x} y={hover.y}>
          {hover.b.value === 0 ? "Nothing due" : `${hover.b.value} card${hover.b.value === 1 ? "" : "s"}`} · {hover.b.label}
        </Tip>
      )}
    </div>
  );
}

/* ── sparkline ──────────────────────────────────────────────────────────── */

/**
 * Trend at a glance — a 2px line with a soft fill and a marker on the latest
 * point. Deliberately axis-free: the number beside it carries the value, this
 * only carries the shape.
 */
export function Sparkline({
  points,
  width = 190,
  height = 40,
  color = ACCENT,
}: {
  points: number[];
  width?: number;
  height?: number;
  color?: string;
}) {
  if (points.length < 2) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const pad = 3;
  const xy = points.map((p, i) => [
    (i / (points.length - 1)) * (width - pad * 2) + pad,
    height - pad - ((p - min) / span) * (height - pad * 2),
  ]);
  const d = xy.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${d} L${width - pad} ${height} L${pad} ${height} Z`;
  const [lx, ly] = xy[xy.length - 1];
  const id = `spark-${Math.round(points[0] * 1000)}-${points.length}`;

  return (
    <svg width={width} height={height} aria-hidden="true" style={{ display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.16" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r="3" fill="var(--card)" stroke={color} strokeWidth="2" />
    </svg>
  );
}

/* ── hero number ────────────────────────────────────────────────────────── */

/** A headline figure. Not a chart — the right form when there's one number. */
export function Hero({
  value,
  unit,
  label,
  sub,
  trend,
}: {
  value: string;
  unit?: string;
  label: string;
  sub?: ReactNode;
  trend?: ReactNode;
}) {
  return (
    <div>
      <div className="meta" style={{ color: MUTED }}>{label}</div>
      <div className="mt-1.5 flex items-baseline gap-1.5">
        <span
          className="tabular-nums font-bold leading-none"
          style={{ fontSize: 38, letterSpacing: "-.035em", color: INK }}
        >
          {value}
        </span>
        {unit && <span className="text-sm" style={{ color: MUTED }}>{unit}</span>}
        {trend && <span className="ml-1">{trend}</span>}
      </div>
      {sub && <div className="mt-1.5 text-[13px]" style={{ color: BODY2 }}>{sub}</div>}
    </div>
  );
}
