import { Link, useParams } from "react-router-dom";
import { findLesson } from "@/content";
import LessonPlayer from "@/features/lesson/LessonPlayer";

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = id ? findLesson(id) : undefined;
  if (!lesson)
    return (
      <p className="py-10 text-center">
        Lesson not found. <Link to="/" className="underline">Back to the path</Link>
      </p>
    );
  return <LessonPlayer key={lesson.id} lesson={lesson} />;
}
