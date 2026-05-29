import { Clock3, Target, Zap } from "lucide-react";

const metrics = [
  { label: "Deep work", value: "2.4h", icon: Clock3 },
  { label: "Accuracy", value: "94%", icon: Target },
  { label: "XP earned", value: "820", icon: Zap }
];

export function FocusTile() {
  return (
    <section className="flex h-full min-h-60 flex-col justify-between gap-6">
      <header>
        <p className="text-sm font-medium text-teal-100">Focus score</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">91</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Today&apos;s study quality is trending above your 14-day average.
        </p>
      </header>

      <div className="grid gap-2">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              className="flex items-center justify-between rounded-2xl bg-white/[0.055] p-3"
              key={metric.label}
            >
              <span className="flex items-center gap-2 text-sm text-slate-300">
                <Icon className="size-4 text-teal-200" aria-hidden="true" />
                {metric.label}
              </span>
              <span className="font-semibold text-white">{metric.value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
