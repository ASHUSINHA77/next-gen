import { DashboardShell } from "@/components/dashboard-shell";
import { BentoSkeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <DashboardShell>
      <BentoSkeleton />
    </DashboardShell>
  );
}
