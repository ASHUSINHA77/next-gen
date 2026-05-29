import { Suspense } from "react";
import { ActivityTile } from "@/components/activity-tile";
import { BentoGrid, MotionTile } from "@/components/bento";
import { CourseGrid } from "@/components/course-grid";
import { DashboardShell } from "@/components/dashboard-shell";
import { FocusTile } from "@/components/focus-tile";
import { HeroTile } from "@/components/hero-tile";
import { UpcomingTile } from "@/components/upcoming-tile";
import { CourseSkeletonGrid } from "@/components/skeletons";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

async function CoursesSection() {
  const result = await getCourses();

  return <CourseGrid result={result} />;
}

export default function Home() {
  return (
    <DashboardShell>
      <BentoGrid>
        <MotionTile className="lg:col-span-2">
          <HeroTile name="Aarav" streak={12} />
        </MotionTile>

        <MotionTile>
          <ActivityTile />
        </MotionTile>

        <MotionTile>
          <FocusTile />
        </MotionTile>

        <MotionTile className="lg:col-span-2">
          <UpcomingTile />
        </MotionTile>

        <Suspense fallback={<CourseSkeletonGrid />}>
          <CoursesSection />
        </Suspense>
      </BentoGrid>
    </DashboardShell>
  );
}
