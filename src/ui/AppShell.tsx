/**
 * ČISTO app shell: 220px text sidebar (faint gray, hairline edge), content in
 * a centered readable column. ≤900px the sidebar becomes an icon tab bar along
 * the bottom. Players (StageShell) run chrome-free — a focused mode with no
 * navigation; the ✕ in the player chrome is the way back.
 */
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { BookOpen, GraduationCap, House, MessageCircle, NotebookText, Puzzle, Settings, type LucideIcon } from "lucide-react";
import { countDue } from "@/lib/srs";
import { INK, BODY2, Sahovnica } from "./kit";

const NAV: { label: string; to: string; icon: LucideIcon; group: number }[] = [
  { label: "Home", to: "/", icon: House, group: 0 },
  { label: "Course", to: "/course", icon: GraduationCap, group: 0 },
  { label: "Practice", to: "/practice", icon: Puzzle, group: 1 },
  { label: "Stories", to: "/stories", icon: BookOpen, group: 1 },
  { label: "Notes", to: "/notes", icon: NotebookText, group: 1 },
  { label: "Tutor", to: "/tutor", icon: MessageCircle, group: 2 },
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
       * min-h/min-w hold the bottom-bar hit box at the 44px touch minimum
       * (7 items x 44 = 308px, fits inside a 390px viewport).
       */
      className="flex h-8 w-full items-center gap-2.5 rounded-md px-2.5 text-left transition-colors duration-100 max-[900px]:h-auto max-[900px]:min-h-[44px] max-[900px]:w-auto max-[900px]:min-w-[44px] max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-0.5 max-[900px]:rounded-lg max-[900px]:px-3 max-[900px]:py-1.5"
      style={{ background: active ? "rgba(var(--ink-rgb),.06)" : "transparent", color: active ? INK : BODY2 }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(var(--ink-rgb),.035)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={16} strokeWidth={active ? 2.1 : 1.8} className="flex-none" />
      <span className="min-w-0 flex-1 truncate text-[13.5px] max-[900px]:sr-only" style={{ fontWeight: active ? 600 : 480 }}>
        {label}
      </span>
      {badge > 0 && (
        <>
          <span aria-hidden className="meta flex-none tabular-nums max-[900px]:absolute max-[900px]:hidden" style={{ color: "var(--primary)" }}>
            {badge > 99 ? "99+" : badge}
          </span>
          <span className="sr-only">{badge} card{badge === 1 ? "" : "s"} due for review</span>
        </>
      )}
    </button>
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

export function Sidebar() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const active = activeFor(pathname);
  const due = useDueCount(pathname);
  return (
    <div
      className="fixed bottom-0 left-0 top-0 z-50 flex w-[220px] flex-col border-r px-3 pb-3 pt-5 max-[900px]:top-auto max-[900px]:right-0 max-[900px]:w-auto max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-around max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-2 max-[900px]:pb-[calc(4px+env(safe-area-inset-bottom))] max-[900px]:pt-1"
      style={{ borderColor: "rgba(var(--ink-rgb),.08)", background: "var(--tint4)" }}
    >
      <button
        onClick={() => nav("/")}
        className="mb-6 flex items-center gap-2.5 rounded-md px-2.5 py-1 max-[900px]:hidden"
        aria-label="Home"
        title="CroLearn"
      >
        <Sahovnica size={16} cols={4} rows={3} />
        <span className="text-sm font-bold" style={{ color: INK, letterSpacing: "-.01em" }}>CroLearn</span>
      </button>
      <nav aria-label="Main" className="flex flex-1 flex-col gap-px max-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-around max-[900px]:gap-0">
        {NAV.map((n, i) => (
          <div key={n.to} className="max-[900px]:contents">
            {i > 0 && NAV[i - 1].group !== n.group && <div className="h-3 max-[900px]:hidden" />}
            <NavItem
              label={n.label}
              icon={n.icon}
              active={active === n.to}
              badge={n.to === "/practice" ? due : 0}
              onClick={() => nav(n.to)}
            />
          </div>
        ))}
        <div className="min-[901px]:hidden">
          <NavItem label="Settings" icon={Settings} active={active === "/settings"} onClick={() => nav("/settings")} />
        </div>
      </nav>
      <div className="max-[900px]:hidden">
        <NavItem label="Settings" icon={Settings} active={active === "/settings"} onClick={() => nav("/settings")} />
      </div>
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
 * Standard screen: sidebar + centered readable column.
 *
 * The bottom bar is 53px tall below 900px (1px border + pt-1 + a 44px touch row
 * + pb-1) and then clears the home indicator itself, so the reservation below
 * has to carry the same safe-area inset — otherwise the last row of a list
 * sits underneath the bar on a notched phone.
 */
export default function AppShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pl-[220px] max-[900px]:pb-[calc(64px+env(safe-area-inset-bottom))] max-[900px]:pl-0">
      <SkipLink />
      <Sidebar />
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto max-w-[880px] px-10 pb-20 pt-12 max-[1100px]:px-8 max-[700px]:px-5 max-[700px]:pt-8"
      >
        <Outlet />
      </main>
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
