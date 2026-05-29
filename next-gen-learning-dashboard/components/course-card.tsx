"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BookOpen,
  BrainCircuit,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Database,
  LineChart,
  Palette,
  ShieldCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Course } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Atom,
  BookOpen,
  BrainCircuit,
  Braces,
  ChartNoAxesCombined,
  Code2,
  Database,
  LineChart,
  Palette,
  ShieldCheck
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen;
}

export function CourseCard({ course }: { course: Course }) {
  const Icon = getIcon(course.icon_name);
  const progress = Math.min(100, Math.max(0, course.progress));

  return (
    <section className="flex h-full min-h-52 flex-col justify-between gap-6">
      <header>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-teal-100 shadow-inner shadow-white/5">
            <Icon className="size-6" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-white/[0.07] px-3 py-1 text-xs font-medium text-slate-300">
            {progress}%
          </span>
        </div>
        <h2 className="text-xl font-semibold leading-snug text-white">{course.title}</h2>
      </header>

      <div>
        <div className="mb-2 flex justify-between text-xs text-slate-400">
          <span>Progress</span>
          <span>{progress}% complete</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-teal-300 via-cyan-200 to-indigo-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ type: "spring", stiffness: 120, damping: 24, delay: 0.18 }}
            style={{ originX: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
