import { Flame, Play, Sparkles } from "lucide-react";

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  return (
    <section className="flex h-full min-h-64 flex-col justify-between gap-8">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Your next lesson is ready
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white md:text-5xl">
          Welcome back, {name}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
          Keep the streak alive with a focused sprint through today&apos;s active courses.
        </p>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <span className="grid size-11 place-items-center rounded-xl bg-orange-300 text-orange-950">
            <Flame className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-2xl font-semibold text-white">{streak} days</p>
            <p className="text-xs text-slate-400">Learning streak</p>
          </div>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-12 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
        >
          <Play className="size-4 fill-current" aria-hidden="true" />
          Resume
        </button>
      </div>
    </section>
  );
}
