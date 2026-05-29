import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";

export default function NotFound() {
  return (
    <DashboardShell>
      <section className="grid min-h-[70vh] place-items-center rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-8 text-center">
        <div className="max-w-md">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-teal-100">
            <SearchX className="size-7" aria-hidden="true" />
          </span>
          <p className="mt-6 text-sm font-medium text-teal-100">404</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">This lesson path does not exist.</h1>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Return to the dashboard and keep moving through today&apos;s learning plan.
          </p>
          <Link
            className="focus-ring mt-6 inline-flex h-11 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-semibold text-slate-950"
            href="/"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to dashboard
          </Link>
        </div>
      </section>
    </DashboardShell>
  );
}
