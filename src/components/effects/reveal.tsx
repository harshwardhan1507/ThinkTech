"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { tokens } from "@/lib/tokens";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: tokens.motion.duration.slow, ease: tokens.motion.easing, delay }}
    >
      {children}
    </motion.div>
  );
}
