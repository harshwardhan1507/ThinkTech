"use client";

import type { ReactNode } from "react";
import { motion, type Transition } from "framer-motion";
import { tokens } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
  once?: boolean;
};

const directionVariants: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.92 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration,
  once = true,
}: RevealProps) {
  const dirVars = directionVariants[direction];
  const dur = duration ?? tokens.motion.duration.slow;

  const transition: Transition = {
    duration: dur,
    ease: tokens.motion.easing as [number, number, number, number],
    delay,
  };

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        ...dirVars,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
