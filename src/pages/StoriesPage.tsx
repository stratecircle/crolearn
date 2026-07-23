import { Link } from "react-router-dom";
import { allUnits } from "@/content";

export default function StoriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-black">📖 Stories</h1>
      <p className="text-stone-500">Reading at your level — every story uses only what you've learned.</p>
      <div className="mt-4 grid gap-2">
        {allUnits.map((u) => (
          <Link
            key={u.story.id}
            to={`/story/${u.story.id}`}
            className="rounded-xl bg-white px-4 py-3 shadow-sm hover:bg-stone-100"
          >
            <span className="font-black">{u.story.title}</span>
            <span className="ml-2 text-sm text-stone-400">
              — {u.story.titleEn} · {u.levelId} · unit {u.number}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
