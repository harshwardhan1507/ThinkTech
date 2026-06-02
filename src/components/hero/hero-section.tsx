"use client";

import { HeroVisual } from "@/components/hero/hero-visual";
import { NetworkField } from "@/components/background/network-field";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion } from "framer-motion";

const titleLines = ["Think.", "Speak.", "Lead."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const titleLineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const bottomBarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.4,
    },
  },
};

const bottomItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pt-28"
    >
      <div className="absolute -right-20 top-20 h-64 w-64 opacity-70 sm:-right-10 sm:top-28 sm:h-80 sm:w-80 lg:-right-20 lg:h-[34rem] lg:w-[34rem] lg:hidden">
        <NetworkField />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="relative z-10 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow mb-5" variants={itemVariants}>
            Faculty of Engineering and Technology
          </motion.p>

          <h1 className="hero-title">
            {titleLines.map((line, index) => (
              <motion.span
                key={line}
                className="inline-block"
                variants={titleLineVariants}
                custom={index}
              >
                {line}
                {index < titleLines.length - 1 && <br />}
              </motion.span>
            ))}
          </h1>

          {/* Gradient sweep across the title */}
          <motion.div
            className="pointer-events-none absolute -inset-x-4 top-8 h-32 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 2.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            variants={itemVariants}
          >
            ThinkTech is the STEM Orator Society empowering engineering students to turn ideas into
            clear communication, confident leadership, and measurable influence.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" variants={itemVariants}>
            <MagneticButton href="#join">Join ThinkTech</MagneticButton>
            <MagneticButton href="#events" variant="secondary">
              Explore Events
            </MagneticButton>
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>

      <motion.div
        className="absolute inset-x-5 bottom-6 mx-auto hidden max-w-7xl items-end justify-between text-xs uppercase tracking-[0.24em] text-slate-500 sm:flex"
        variants={bottomBarVariants}
        initial="hidden"
        animate="visible"
      >
        {["Ideas", "Communication", "Influence"].map((word) => (
          <motion.span key={word} variants={bottomItemVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
