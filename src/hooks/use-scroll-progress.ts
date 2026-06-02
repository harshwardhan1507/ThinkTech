"use client";

import type { RefObject } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

type ScrollProgressOptions = {
  /** The ref of the element to track */
  target: RefObject<HTMLElement | null>;
  /** Offset start/end relative to viewport. Default: element enters bottom → exits top */
  offset?: string[];
};

/**
 * Returns a 0→1 MotionValue representing how far `target` has scrolled through the viewport.
 */
export function useScrollProgress({
  target,
  offset,
}: ScrollProgressOptions): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target,
    offset: (offset ?? ["start end", "end start"]) as ["start end", "end start"],
  });

  return scrollYProgress;
}

/**
 * Convenience: returns a transformed value mapped from scroll progress.
 */
export function useScrollTransform<T>(
  target: RefObject<HTMLElement | null>,
  inputRange: number[],
  outputRange: T[],
): MotionValue<T> {
  const progress = useScrollProgress({ target });
  return useTransform(progress, inputRange, outputRange);
}
