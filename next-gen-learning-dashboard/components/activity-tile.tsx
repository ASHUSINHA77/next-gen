const weeks = Array.from({ length: 35 }, (_, index) => {
  const level = [1, 2, 3, 1, 0, 2, 4, 1, 3, 2][index % 10];
  return level;
});

const levelClasses = [
  "bg-white/8",
  "bg-teal-300/20",
  "bg-teal-300/35",
  "bg-teal-300/55",
  "bg-teal-200/80"
];

export function ActivityTile() {
  return (
    <section className="flex h-full flex-col justify-between gap-8">
      <header>
        <p className="text-sm font-medium text-teal-100">Activity</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Weekly momentum</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          A compact view of learning sessions, practice attempts, and review streaks.
        </p>
      </header>

      <div className="grid grid-cols-7 gap-2" aria-label="Mock contribution activity graph">
        {weeks.map((level, index) => (
          <span
            key={index}
            className={`aspect-square rounded-md ${levelClasses[level]} shadow-sm shadow-teal-950/30`}
            aria-hidden="true"
          />
        ))}
      </div>

      <footer className="grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-white/[0.055] p-3">
          <p className="text-xl font-semibold text-white">28</p>
          <p className="text-xs text-slate-400">Sessions</p>
        </div>
        <div className="rounded-2xl bg-white/[0.055] p-3">
          <p className="text-xl font-semibold text-white">91%</p>
          <p className="text-xs text-slate-400">Focus</p>
        </div>
        <div className="rounded-2xl bg-white/[0.055] p-3">
          <p className="text-xl font-semibold text-white">4.8h</p>
          <p className="text-xs text-slate-400">This week</p>
        </div>
      </footer>
    </section>
  );
}
