"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { NetworkField } from "@/components/background/network-field";

export function HeroVisual() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 80]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, -4]);

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[43rem]"
      style={{ y, rotate }}
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_90px_rgba(59,130,246,0.16)] backdrop-blur-sm" />
      <motion.div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.14),transparent_58%)]"
        animate={{ scale: [1, 1.04, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <NetworkField />
      <div className="absolute inset-x-[28%] bottom-[18%] h-20 rounded-[50%] border border-white/10 bg-gradient-to-b from-white/[0.075] to-transparent blur-sm" />
    </motion.div>
  );
}
