/**
 * Nativ app shell: fixed 84px left icon rail (README §Navigation), content
 * max-width 1280 centered. ≤900px the rail becomes a bottom tab bar.
 */
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { BookOpen, Map, MessageCircle, Puzzle, Settings, SquarePen, type LucideIcon } from "lucide-react";
import { INK, RED } from "./kit";

const NAV: { label: string; to: string; icon: LucideIcon }[] = [
  { label: "Path", to: "/", icon: Map },
  { label: "Notes", to: "/notes", icon: SquarePen },
  { label: "Stories", to: "/stories", icon: BookOpen },
  { label: "Practice", to: "/practice", icon: Puzzle },
  { label: "Tutor", to: "/tutor", icon: MessageCircle },
];

/** Which rail item lights up for the current path (deck→Practice, lesson→Path). */
function activeFor(pathname: string): string {
  if (pathname === "/") return "/";
  if (pathname.startsWith("/review")) return "/practice";
  if (pathname.startsWith("/notes")) return "/notes";
  if (pathname.startsWith("/stories") || pathname.startsWith("/story/")) return "/stories";
  if (pathname.startsWith("/practice")) return "/practice";
  if (pathname.startsWith("/tutor")) return "/tutor";
  if (pathname.startsWith("/settings")) return "/settings";
  return "/";
}

function RailItem({ label, icon: Icon, active, onClick }: { label: string; icon: LucideIcon; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex w-16 flex-col items-center gap-[3px] rounded-xl pb-[7px] pt-[9px] transition-colors duration-150 max-[900px]:w-14"
      style={{ background: active ? "rgba(201,52,52,.08)" : "transparent", color: active ? RED : "#5B6472" }}
    >
      <Icon size={21} strokeWidth={1.7} />
      <div className="text-[10px] font-semibold" style={{ letterSpacing: ".02em" }}>
        {label}
      </div>
    </button>
  );
}

export function Rail() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const active = activeFor(pathname);
  return (
    <div
      className="fixed bottom-0 left-0 top-0 z-50 flex w-[84px] flex-col items-center border-r bg-[#FDFCFA] pb-3.5 pt-4 max-[900px]:top-auto max-[900px]:right-0 max-[900px]:w-auto max-[900px]:flex-row max-[900px]:justify-around max-[900px]:border-r-0 max-[900px]:border-t max-[900px]:px-2.5 max-[900px]:pb-[calc(6px+env(safe-area-inset-bottom))] max-[900px]:pt-1.5"
      style={{ borderColor: "rgba(15,23,42,.08)" }}
    >
      <button onClick={() => nav("/")} className="relative mb-4 flex h-10 w-10 items-center justify-center max-[900px]:hidden" aria-label="Home">
        <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 32, lineHeight: 1, color: INK, transform: "skewX(-7deg)" }}>N</span>
        <div className="absolute right-[3px] top-0 h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
      </button>
      <nav className="flex flex-1 flex-col gap-1.5 max-[900px]:flex-1 max-[900px]:flex-row max-[900px]:justify-around max-[900px]:gap-0.5">
        {NAV.map((n) => (
          <RailItem key={n.to} label={n.label} icon={n.icon} active={active === n.to} onClick={() => nav(n.to)} />
        ))}
      </nav>
      <RailItem label="Settings" icon={Settings} active={active === "/settings"} onClick={() => nav("/settings")} />
    </div>
  );
}

/** Standard screen: rail + centered 1280 column. */
export default function AppShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden pl-[84px] max-[900px]:pb-[82px] max-[900px]:pl-0">
      <Rail />
      <main className="relative z-[1] mx-auto max-w-[1280px] px-10 pb-12 pt-8 max-[1200px]:px-6 max-[700px]:px-4 max-[700px]:pb-12 max-[700px]:pt-[18px]">
        <Outlet />
      </main>
    </div>
  );
}

/** Full-bleed stage (lesson / story / test / checkpoint players) — keeps the rail. */
export function StageShell() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden pl-[84px] max-[900px]:pb-[82px] max-[900px]:pl-0">
      <Rail />
      <main className="relative z-[1] flex min-h-dvh flex-col px-10 pb-14 pt-8 max-[700px]:px-4">
        <Outlet />
      </main>
    </div>
  );
}
