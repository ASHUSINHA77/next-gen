import { DashboardShell } from "@/components/dashboard-shell";

function SkeletonTile({ className = "" }: { className?: string }) {
  return (
    <article
      className={`min-h-60 animate-pulse rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-5 ${className}`}
      aria-hidden="true"
    >
      <div className="h-10 w-10 rounded-2xl bg-white/10" />
      <div className="mt-8 h-5 w-2/3 rounded-full bg-white/10" />
      <div className="mt-3 h-4 w-1/2 rounded-full bg-white/10" />
      <div className="mt-10 h-3 w-full rounded-full bg-white/10" />
    </article>
  );
}

export function CourseSkeletonGrid() {
  return (
    <>
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile />
    </>
  );
}

export function BentoSkeleton() {
  return (
    <section className="grid auto-rows-[minmax(15rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SkeletonTile className="lg:col-span-2" />
      <SkeletonTile />
      <SkeletonTile />
      <SkeletonTile className="lg:col-span-2" />
      <CourseSkeletonGrid />
    </section>
  );
}

export function FullPageSkeleton() {
  return (
    <DashboardShell>
      <BentoSkeleton />
    </DashboardShell>
  );
}
