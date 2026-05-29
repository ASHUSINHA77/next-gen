"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CalendarClock,
  GraduationCap,
  LayoutDashboard,
  Settings
} from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Schedule", icon: CalendarClock },
  { label: "Insights", icon: BarChart3 },
  { label: "Settings", icon: Settings }
];

export function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      <aside className="hidden overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/30 backdrop-blur md:block">
        <nav aria-label="Primary navigation" className="flex h-full flex-col">
          <a
            className="focus-ring mb-8 flex h-12 items-center gap-3 rounded-2xl px-3 text-white"
            href="#"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-teal-300 text-slate-950 shadow-lg shadow-teal-500/20">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide lg:inline">
              NovaLearn
            </span>
          </a>

          <ul className="flex flex-1 flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className={clsx(
                      "focus-ring relative flex h-12 w-full items-center justify-center overflow-hidden rounded-2xl px-3 text-sm transition-colors lg:justify-start lg:gap-3",
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                    )}
                    onClick={() => setActive(item.label)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-2xl bg-white/10 shadow-inner shadow-white/5"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <Icon className="relative z-10 size-5 shrink-0" aria-hidden="true" />
                    <span className="relative z-10 hidden truncate font-medium lg:inline">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-white/10 bg-[#090c11]/90 p-2 shadow-2xl shadow-black/50 backdrop-blur md:hidden"
      >
        <ul className="grid grid-cols-5 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  className="focus-ring relative grid h-12 w-full place-items-center rounded-2xl text-slate-400"
                  onClick={() => setActive(item.label)}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-0 rounded-2xl bg-teal-300/15"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <Icon
                    className={clsx("relative z-10 size-5", isActive && "text-teal-200")}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
