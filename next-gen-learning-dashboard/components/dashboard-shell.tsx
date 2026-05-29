import { Sidebar } from "@/components/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-4 pb-24 pt-4 text-slate-100 md:px-6 md:pb-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-7xl gap-4 md:grid-cols-[5rem_1fr] lg:grid-cols-[16rem_1fr]">
        <Sidebar />
        <main className="min-w-0 rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30 backdrop-blur md:p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
