"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { tokens } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay between each child. Default: tokens.motion.stagger.base */
  stagger?: number;
  /** Base delay before the first child animates */
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const getInitial = (direction: string) => {
  switch (direction) {
    case "down": return { opacity: 0, y: -20 };
    case "left": return { opacity: 0, x: 30 };
    case "right": return { opacity: 0, x: -30 };
    default: return { opacity: 0, y: 24 };
  }
};

const visible = { opacity: 1, x: 0, y: 0 };

export function StaggerReveal({
  children,
  className,
  stagger = tokens.motion.stagger.base,
  delay = 0,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {/* Each direct child should be wrapped in motion.div with item variants */}
      {children}
    </motion.div>
  );
}

/**
 * Use as a direct child of <StaggerReveal> — auto-animates with stagger.
 */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: getInitial(direction),
        visible: {
          ...visible,
          transition: {
            duration: tokens.motion.duration.slow,
            ease: tokens.motion.easing as [number, number, number, number],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
