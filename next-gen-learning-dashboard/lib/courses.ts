import { createSupabaseServerClient } from "@/lib/supabase";
import type { Course, CoursesResult } from "@/lib/types";

const demoCourses: Course[] = [
  {
    id: "demo-1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Atom",
    created_at: new Date().toISOString()
  },
  {
    id: "demo-2",
    title: "TypeScript Systems",
    progress: 62,
    icon_name: "Braces",
    created_at: new Date().toISOString()
  },
  {
    id: "demo-3",
    title: "Data Visualization Lab",
    progress: 48,
    icon_name: "LineChart",
    created_at: new Date().toISOString()
  },
  {
    id: "demo-4",
    title: "AI Product Thinking",
    progress: 86,
    icon_name: "BrainCircuit",
    created_at: new Date().toISOString()
  }
];

export async function getCourses(): Promise<CoursesResult> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return {
      courses: demoCourses,
      error: "Supabase environment variables are missing. Showing local demo data."
    };
  }

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return {
      courses: demoCourses,
      error: `Supabase request failed: ${error.message}. Showing local demo data.`
    };
  }

  return {
    courses: data ?? [],
    error: null
  };
}
