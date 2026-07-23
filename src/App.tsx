import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LessonPage from "./pages/LessonPage";
import ReviewPage from "./pages/ReviewPage";
import NotebookPage from "./pages/NotebookPage";
import NotesPage from "./pages/NotesPage";
import StoriesPage from "./pages/StoriesPage";
import StoryPage from "./pages/StoryPage";
import TestPage from "./pages/TestPage";
import CheckpointPage from "./pages/CheckpointPage";
import SettingsPage from "./pages/SettingsPage";
import TutorPage from "./pages/TutorPage";
import PracticePage from "./pages/PracticePage";

const tabs = [
  { to: "/", label: "Path", emoji: "🛤️" },
  { to: "/review", label: "Review", emoji: "🃏" },
  { to: "/practice", label: "Practice", emoji: "🎯" },
  { to: "/notes", label: "Notebook", emoji: "📓" },
  { to: "/stories", label: "Stories", emoji: "📖" },
  { to: "/tutor", label: "Tutor", emoji: "🗣️" },
  { to: "/settings", label: "Settings", emoji: "⚙️" },
];

/** Standard app shell: header + centered column. */
function Shell() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4">
      <header className="flex items-center justify-between py-4">
        <NavLink to="/" className="text-xl font-black tracking-tight">
          🇭🇷 CroLearn
        </NavLink>
        <nav className="flex gap-1">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                  isActive ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-200"
                }`
              }
            >
              <span className="mr-1">{t.emoji}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
    </div>
  );
}

/** Presentation stage: no app chrome — lessons, tests and stories own the whole screen. */
function Stage() {
  return (
    <div className="flex min-h-dvh flex-col px-4 sm:px-6">
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Stage />}>
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/checkpoint/:id" element={<CheckpointPage />} />
      </Route>
      <Route element={<Shell />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/notes" element={<NotebookPage />} />
        <Route path="/notes/:lessonId" element={<NotesPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
