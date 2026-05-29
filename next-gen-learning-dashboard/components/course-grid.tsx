import { AlertCircle, BookOpenCheck } from "lucide-react";
import { MotionTile } from "@/components/bento";
import { CourseCard } from "@/components/course-card";
import type { CoursesResult } from "@/lib/types";

export function CourseGrid({ result }: { result: CoursesResult }) {
  return (
    <>
      {result.error ? (
        <MotionTile className="min-h-28 md:col-span-2 lg:col-span-3">
          <section className="flex h-full items-center gap-3 text-amber-100">
            <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
            <p className="text-sm leading-6">{result.error}</p>
          </section>
        </MotionTile>
      ) : null}

      {result.courses.length > 0 ? (
        result.courses.map((course) => (
          <MotionTile key={course.id}>
            <CourseCard course={course} />
          </MotionTile>
        ))
      ) : (
        <MotionTile className="md:col-span-2 lg:col-span-3">
          <section className="grid min-h-52 place-items-center text-center">
            <div className="max-w-sm">
              <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-teal-300/15 text-teal-100">
                <BookOpenCheck className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">No active courses yet</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Add rows to the Supabase `courses` table and they will appear here on the next request.
              </p>
            </div>
          </section>
        </MotionTile>
      )}
    </>
  );
}
