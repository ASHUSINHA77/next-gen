"use client";

import { RotateCcw } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <DashboardShell>
      <section className="grid min-h-[70vh] place-items-center rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-8 text-center">
        <div className="max-w-md">
          <p className="text-sm font-medium text-red-200">Dashboard error</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Something interrupted the lesson stream.</h1>
          <p className="mt-4 text-sm leading-6 text-slate-400">{error.message}</p>
          <button
            type="button"
            className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-semibold text-slate-950"
            onClick={reset}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </button>
        </div>
      </section>
    </DashboardShell>
  );
}
