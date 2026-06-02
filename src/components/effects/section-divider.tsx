"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type DividerVariant = "glow" | "beam" | "fade";

type SectionDividerProps = {
  variant?: DividerVariant;
  className?: string;
};

export function SectionDivider({ variant = "glow", className }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none relative h-32 sm:h-40 lg:h-48 overflow-hidden", className)}
      aria-hidden="true"
    >
      {variant === "glow" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity }}
        >
          <motion.div
            className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-soft/40 to-transparent"
            style={{ scaleX: scale }}
          />
          <div className="absolute h-32 w-96 rounded-full bg-blue-500/8 blur-3xl" />
        </motion.div>
      )}

      {variant === "beam" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity }}
        >
          <motion.div
            className="h-[1px] w-full max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ scaleX: scale }}
          />
          <motion.div
            className="absolute h-20 w-64 bg-gradient-to-r from-transparent via-blue-400/6 to-transparent blur-2xl"
            style={{ scaleX: scale }}
          />
        </motion.div>
      )}

      {variant === "fade" && (
        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      )}
    </div>
  );
}
