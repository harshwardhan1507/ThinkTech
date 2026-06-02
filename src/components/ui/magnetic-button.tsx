"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { motion, type HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const iconX = useTransform(springX, [-18, 18], [-2, 4]);

  return (
    <motion.a
      className={cn(
        "focus-ring group/btn relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold tracking-normal transition-colors",
        variant === "primary"
          ? "bg-white text-slate-950 shadow-[0_12px_40px_rgba(248,250,252,0.18)] hover:bg-blue-50"
          : "border border-white/14 bg-white/[0.055] text-white backdrop-blur-2xl hover:bg-white/[0.09]",
        className,
      )}
      style={{ x: springX, y: springY }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.16);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.16);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {/* Glow effect on hover */}
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-opacity duration-300 group-hover/btn:opacity-100" />
      )}
      {variant === "secondary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-[inset_0_0_20px_rgba(96,165,250,0.1)] transition-opacity duration-300 group-hover/btn:opacity-100" />
      )}
      <span className="relative z-10">{children}</span>
      <motion.span aria-hidden="true" className="relative z-10" style={{ x: iconX }}>
        <ArrowRight size={16} strokeWidth={2.2} />
      </motion.span>
    </motion.a>
  );
}
