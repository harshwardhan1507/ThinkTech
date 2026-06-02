"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  /** Enable 3D tilt effect on pointer move */
  tilt?: boolean;
  /** Dynamic border glow color on hover */
  glowColor?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "tilt" | "glowColor">;

export function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className,
  tilt = false,
  glowColor,
  ...props
}: GlassCardProps<T>) {
  const Component = as || "div";
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 300,
    damping: 30,
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!tilt) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (tilt) {
    return (
      <div ref={cardRef} style={{ perspective: "1200px" }}>
        <motion.div
          className={cn("glass-card group relative overflow-hidden", className)}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          {...(props as Record<string, unknown>)}
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
          <span className="pointer-events-none absolute -inset-20 translate-x-[-65%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[65%] group-hover:opacity-100" />
          {glowColor && (
            <span
              className="pointer-events-none absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: glowColor }}
            />
          )}
          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    );
  }

  return (
    <Component className={cn("glass-card group relative overflow-hidden", className)} {...props}>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
      <span className="pointer-events-none absolute -inset-20 translate-x-[-65%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[65%] group-hover:opacity-100" />
      {glowColor && (
        <span
          className="pointer-events-none absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: glowColor }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
