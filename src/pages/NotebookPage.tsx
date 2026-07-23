import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { levels } from "@/content";
import { db } from "@/lib/db";

/** The Notebook: all lesson notes, searchable; completed lessons highlighted. */
export default function NotebookPage() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [q, setQ] = useState("");
  useEffect(() => {
    void db.lessonProgress.toArray().then((rows) => setCompleted(new Set(rows.map((r) => r.lessonId))));
  }, []);

  const needle = q.trim().toLowerCase();

  return (
    <div>
      <h1 className="text-2xl font-black">📓 Notebook</h1>
      <p className="text-stone-500">Your personal grammar book — it grows with every lesson.</p>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search… (e.g. biti, greetings, alphabet)"
        className="mt-4 w-full rounded-xl border-2 border-stone-300 bg-white px-4 py-2.5 outline-none focus:border-stone-900"
      />
      {levels.map((level) =>
        level.units.map((unit) => {
          const lessons = unit.lessons.filter(
            (l) =>
              !needle ||
              l.title.toLowerCase().includes(needle) ||
              l.titleEn.toLowerCase().includes(needle) ||
              l.grammarTags.some((t) => t.includes(needle)) ||
              l.vocab.some((v) => v.hr.toLowerCase().includes(needle) || v.en.toLowerCase().includes(needle)),
          );
          if (lessons.length === 0) return null;
          return (
            <section key={unit.id} className="mt-6">
              <h2 className="font-black text-stone-500">
                Unit {unit.number}: {unit.title}
              </h2>
              <div className="mt-2 grid gap-2">
                {lessons.map((l) => (
                  <Link
                    key={l.id}
                    to={`/notes/${l.id}`}
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm hover:bg-stone-100"
                  >
                    <span>{completed.has(l.id) ? "✅" : "📄"}</span>
                    <span className="font-semibold">{l.title}</span>
                    <span className="text-sm text-stone-400">— {l.titleEn}</span>
                    {!completed.has(l.id) && (
                      <span className="ml-auto text-xs font-bold text-stone-400">not completed yet</span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          );
        }),
      )}
    </div>
  );
}
