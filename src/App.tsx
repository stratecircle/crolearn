import { Route, Routes } from "react-router-dom";
import AppShell, { StageShell } from "./ui/AppShell";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
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

export default function App() {
  return (
    <Routes>
      <Route element={<StageShell />}>
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/test/:id" element={<TestPage />} />
        <Route path="/checkpoint/:id" element={<CheckpointPage />} />
      </Route>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<CoursePage />} />
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
