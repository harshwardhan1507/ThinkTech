"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  /** Parallax intensity: 0 = no movement, 1 = full scroll speed. Default: 0.3 */
  speed?: number;
  /** Direction of parallax movement. Default: "vertical" */
  direction?: "vertical" | "horizontal";
};

export function ParallaxLayer({
  children,
  className,
  speed = 0.3,
  direction = "vertical",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const x = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={
        direction === "vertical"
          ? { y, willChange: "transform" }
          : { x, willChange: "transform" }
      }
    >
      {children}
    </motion.div>
  );
}
