"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { clsx } from "clsx";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05
    }
  }
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      className="grid auto-rows-[minmax(15rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      aria-label="Student dashboard"
    >
      {children}
    </motion.section>
  );
}

export function MotionTile({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        scale: 1.015,
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={clsx(
        "grain group relative min-h-60 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1017] p-5 shadow-xl shadow-black/25 will-change-transform",
        "before:transition-opacity hover:border-teal-200/30 hover:shadow-teal-950/30",
        className
      )}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_15%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.14),transparent_30%)] opacity-80 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
