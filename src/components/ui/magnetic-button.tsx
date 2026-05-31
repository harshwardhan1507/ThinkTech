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
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-normal transition-colors",
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
      {...props}
    >
      {children}
      <motion.span aria-hidden="true" style={{ x: iconX }}>
        <ArrowRight size={16} strokeWidth={2.2} />
      </motion.span>
    </motion.a>
  );
}
