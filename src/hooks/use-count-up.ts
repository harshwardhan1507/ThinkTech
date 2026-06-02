"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

type UseCountUpOptions = {
  /** Target numeric value */
  end: number;
  /** Duration in ms (default: 2000) */
  duration?: number;
  /** String prefix, e.g. "$" */
  prefix?: string;
  /** String suffix, e.g. "+" */
  suffix?: string;
  /** Whether to start the animation */
  trigger?: boolean;
};

/**
 * Returns a formatted string that counts up from 0 to `end` when `trigger` becomes true.
 */
export function useCountUp({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  trigger = false,
}: UseCountUpOptions): string {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;
    hasAnimated.current = true;

    let start: number | null = null;
    let raf: number;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.round(easedProgress * end);

      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration, prefix, suffix]);

  return display;
}
