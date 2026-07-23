import { Link } from "react-router-dom";
import TutorChat from "@/features/tutor/TutorChat";
import { hasApiKey } from "@/lib/claude";

export default function TutorPage() {
  if (!hasApiKey()) {
    return (
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-black">🗣️ Tutor</h1>
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-stone-700">
            The AI tutor answers your Croatian questions, explains grammar, and runs
            role-plays. It needs your Anthropic API key.
          </p>
          <Link
            to="/settings"
            className="mt-4 inline-block rounded-xl bg-stone-900 px-4 py-2 font-bold text-white"
          >
            Add your key in Settings →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-[calc(100dvh-8rem)] max-w-2xl flex-col">
      <h1 className="text-2xl font-black">🗣️ Tutor</h1>
      <div className="mt-4 min-h-0 flex-1">
        <TutorChat />
      </div>
    </div>
  );
}
