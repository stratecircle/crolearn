/**
 * The desktop app frame.
 *
 * The window itself never scrolls: the shell is a full-height flex row, and
 * every pane inside a `View` owns its own overflow. That single decision is
 * what makes this read as an application rather than a long web page — the
 * sidebar and the view header stay put while content moves under them.
 *
 * Left: a 240px sidebar (brand, ⌘K search, grouped nav, tools at the foot).
 * Below 900px it detaches into a fixed bottom tab bar and the frame reclaims
 * the width.
 *
 * Players (StageShell) get no chrome at all — a lesson is a focused mode.
 */
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  House,
  MessageCircle,
  NotebookText,
  Puzzle,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { countDue } from "@/lib/srs";
import { MOD_LABEL, useHotkeys } from "@/lib/hotkeys";
import { BODY2, DIVIDER, INK, Kbd, MUTED, Sahovnica } from "./kit";
import CommandPalette from "./CommandPalette";

interface NavEntry {
  label: string;
  to: string;
  icon: LucideIcon;
}

const PRIMARY: NavEntry[] = [
  { label: "Home", to: "/", icon: House },
  { label: "Course", to: "/course", icon: GraduationCap },
  { label: "Practice", to: "/practice", icon: Puzzle },
];

const LIBRARY: NavEntry[] = [
  { label: "Stories", to: "/stories", icon: BookOpen },
  { label: "Notes", to: "/notes", icon: NotebookText },
];

const TOOLS: NavEntry[] = [
  { label: "Tutor", to: "/tutor", icon: MessageCircle },
  { label: "Settings", to: "/settings", icon: Settings },
];

/** Which item lights up for the current path (review→Practice). */
function activeFor(pathname: string): string {
  if (pathname === "/") return "/";
  if (pathname.startsWith("/course")) return "/course";
  if (pathname.startsWith("/review")) return "/practice";
  if (pathname.startsWith("/notes")) return "/notes";
  if (pathname.startsWith("/stories") || pathname.startsWith("/story/")) return "/stories";
  if (pathname.startsWith("/practice")) return "/practice";
  if (pathname.startsWith("/tutor")) return "/tutor";
  if (pathname.startsWith("/settings")) return "/settings";
  return "/";
}

function NavItem({
  label,
  icon: Icon,
  active,
  onClick,
  badge = 0,
}: {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      /*
       * Below 900px the label is visually dropped but stays in the a11y tree
       * (`sr-only`, not `hidden`) — `display:none` would leave these buttons
       * with no accessible name at all, since only the icon remains. Deriving
       * the name from content rather than an aria-label also keeps the "N cards
       * due for review" badge text part of the announcement.
       * min-h/min-w hold the bottom-bar hit box at the 44px touch minimum.
       */
      className="flex h-[30px] w-full items-center gap-2.5 rounded-md px-2.5 text-left transition-colors duration-100 max-[900px]:h-auto max-[900px]:min-h-[44px] max-[900px]:min-w-[44px] max-[900px]:w-auto max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-0.5 max-[900px]:rounded-lg max-[900px]:px-3"
      style={{ background: active ? "rgba(var(--ink-rgb),.06)" : "transparent", color: active ? INK : BODY2 }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(var(--ink-rgb),.035)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={15.5} strokeWidth={active ? 2.15 : 1.8} className="flex-none" />
      <span className="min-w-0 flex-1 truncate text-[13.5px] max-[900px]:sr-only" style={{ fontWeight: active ? 600 : 470 }}>
        {label}
      </span>
      {badge > 0 && (
        <>
          <span
            aria-hidden
            className="meta flex-none tabular-nums max-[900px]:hidden"
            style={{ color: active ? INK : "var(--muted3)" }}
          >
            {badge > 99 ? "99+" : badge}
          </span>
          <span className="sr-only">{badge} card{badge === 1 ? "" : "s"} due for review</span>
        </>
      )}
    </button>
  );
}

function NavGroup({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="max-[900px]:contents">
      {label && <div className="meta px-2.5 pb-1 pt-4 max-[900px]:hidden" style={{ color: "var(--muted3)" }}>{label}</div>}
      {children}
    </div>
  );
}

/**
 * Due count for the Practice badge. Refreshed on navigation and on window focus
 * so finishing a review session (or leaving the tab open past midnight) settles
 * to the right number without a reload.
 */
function useDueCount(pathname: string): number {
  const [due, setDue] = useState(0);
  useEffect(() => {
    let alive = true;
    const refresh = () => void countDue().then((n) => { if (alive) setDue(n); });
    refresh();
    window.addEventListener("focus", refresh);
    return () => {
      alive = false;
      window.removeEventListener("focus", refresh);
    };
  }, [pathname]);
  return due;
}

export function Sidebar({ onSearch }: { onSearch: () => void }) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const active = activeFor(pathname);
  const due = useDueCount(pathname);

  const item = (n: NavEntry) => (
    <NavItem
      key={n.to}
      label={n.label}
      icon={n.icon}
      active={active === n.to}
      badge={n.to === "/practice" ? due : 0}
      onClick={() => nav(n.to)}
    />
  );

  return (
    <div
      className="flex w-60 flex-none flex-col border-r max-[900px]:fixed max-[900px]:bottom-0 max-[900px]:left-0 max-[900px]:right-0 max-[900px]:z-50 max-[900px]:w-auto max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-around max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-2 max-[900px]:pb-[env(safe-area-inset-bottom)] max-[900px]:pt-1"
      style={{ borderColor: DIVIDER, background: "var(--tint4)" }}
    >
      {/* Brand row — exactly the height of a View header, so the two hairlines meet. */}
      <div className="flex h-14 flex-none items-center gap-2.5 px-4 max-[900px]:hidden">
        <Sahovnica size={15} cols={4} rows={3} />
        <span className="text-[13.5px] font-bold" style={{ color: INK, letterSpacing: "-.01em" }}>CroLearn</span>
      </div>

      <div className="px-2.5 pb-1 max-[900px]:hidden">
        <button
          onClick={onSearch}
          className="flex h-8 w-full items-center gap-2 rounded-md border px-2.5 transition-colors duration-100 hover:bg-[color:var(--card)]"
          style={{ borderColor: "rgba(var(--ink-rgb),.1)", background: "var(--card)" }}
        >
          <Search size={14} color={MUTED} strokeWidth={2} className="flex-none" />
          <span className="flex-1 text-left text-[13px]" style={{ color: MUTED }}>Search…</span>
          <Kbd>{MOD_LABEL}K</Kbd>
        </button>
      </div>

      <nav
        aria-label="Main"
        className="flex flex-1 flex-col gap-px overflow-y-auto px-2.5 max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-around max-[900px]:gap-0 max-[900px]:overflow-visible max-[900px]:px-0"
      >
        <NavGroup>{PRIMARY.map(item)}</NavGroup>
        <NavGroup label="Library">{LIBRARY.map(item)}</NavGroup>
        <div className="flex-1 max-[900px]:hidden" />
        <NavGroup>{TOOLS.map(item)}</NavGroup>
      </nav>
      <div className="h-2.5 flex-none max-[900px]:hidden" />
    </div>
  );
}

/** Keyboard users land on the nav first; this jumps them past it. Styled in index.css. */
function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}

/**
 * Standard screen: sidebar + a view pane that fills the window. Pages render a
 * `View`, which supplies the header bar and owns its own scrolling.
 */
export default function AppShell() {
  const [palette, setPalette] = useState(false);
  useHotkeys(
    {
      "mod+k": (e) => {
        e.preventDefault();
        setPalette((o) => !o);
      },
    },
    [],
  );

  return (
    <div className="flex h-dvh overflow-hidden max-[900px]:pb-[calc(53px+env(safe-area-inset-bottom))]">
      <SkipLink />
      <Sidebar onSearch={() => setPalette(true)} />
      <main id="main" tabIndex={-1} className="flex min-h-0 min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </div>
  );
}

/** Chrome-free stage for the players (lesson / story / test / checkpoint). */
export function StageShell() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <SkipLink />
      <main id="main" tabIndex={-1} className="flex min-h-dvh flex-col">
        <Outlet />
      </main>
    </div>
  );
}
