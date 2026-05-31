"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { tokens } from "@/lib/tokens";
import { useCursorLight } from "@/hooks/use-cursor-light";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  useCursorLight();

  return (
    <MotionConfig
      reducedMotion={reducedMotion ? "always" : "never"}
      transition={{ duration: tokens.motion.duration.base, ease: tokens.motion.easing }}
    >
      {children}
    </MotionConfig>
  );
}
