import { ArrowRight, CalendarClock, CheckCircle2 } from "lucide-react";

const lessons = [
  {
    title: "React Server Components review",
    time: "10:30",
    status: "Queued"
  },
  {
    title: "Supabase policies checkpoint",
    time: "13:00",
    status: "Practice"
  },
  {
    title: "Motion polish sprint",
    time: "17:45",
    status: "Project"
  }
];

export function UpcomingTile() {
  return (
    <section className="flex h-full min-h-60 flex-col justify-between gap-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-teal-100">Today&apos;s path</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Upcoming lessons</h2>
        </div>
        <button
          className="focus-ring inline-flex h-10 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-slate-200 transition-transform hover:scale-[1.02]"
          type="button"
        >
          View all
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </header>

      <ol className="grid gap-3">
        {lessons.map((lesson) => (
          <li
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl bg-white/[0.055] p-3"
            key={lesson.title}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-teal-300/15 text-teal-100">
              <CalendarClock className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">{lesson.title}</p>
              <p className="mt-1 text-xs text-slate-400">{lesson.time}</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.07] px-2.5 py-1 text-xs text-slate-300">
              <CheckCircle2 className="size-3.5 text-teal-200" aria-hidden="true" />
              {lesson.status}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
