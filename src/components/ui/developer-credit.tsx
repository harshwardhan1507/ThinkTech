"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { AvatarLabelGroup } from "@/components/ui/AvatarLabelGroup";
import { Globe, ArrowUpRight, Heart } from "lucide-react";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const developerLinks = {
  portfolio: "https://harshwardhanportfolio.vercel.app/",
  linkedin: "https://linkedin.com/in/harsh-wardhan-singh-cse",
  github: "https://github.com/harshwardhan1507",
};

export const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"];

// Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.045,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.96,
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
  },
};

export function DeveloperCredit() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-flex flex-col items-center sm:items-end">
      {/* Floating Apple-Inspired Developer Profile Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-full mb-3.5 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 w-[320px] sm:w-[370px] p-5 rounded-2xl bg-[#0A0A0F]/96 border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-50 text-left overflow-hidden select-none"
            role="dialog"
            aria-label="Harsh Wardhan Developer Profile"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Profile Header */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-md flex-shrink-0 group">
                <Image
                  src="/team/harsh_avatar.jpg"
                  alt="Harsh Wardhan"
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-sky-400/40 pointer-events-none animate-pulse" />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  Hi, I&apos;m Harsh Wardhan
                </h3>
                <p className="text-xs font-semibold text-sky-400 mt-0.5">
                  Full-Stack Developer
                </p>
                <p className="text-[11px] font-mono text-neutral-400">
                  Technical Coordinator • ThinkTech Society
                </p>
              </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mt-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Building meaningful developer experiences</span>
              </div>
            </motion.div>

            {/* Subtle Translucent Divider */}
            <motion.div variants={itemVariants} className="h-px bg-white/10 my-4" />

            {/* Description */}
            <motion.p variants={itemVariants} className="text-xs text-neutral-300 leading-relaxed max-w-sm">
              Thanks for checking out ThinkTech Society! I designed and developed this website with a focus on performance, accessibility, and smooth user experiences.
            </motion.p>

            {/* Tech Stack Chips */}
            <motion.div variants={itemVariants} className="mt-3.5 flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Social Action Heading */}
            <motion.div variants={itemVariants} className="mt-5">
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                Find me here
              </h4>

              {/* 3 Action Cards */}
              <div className="flex flex-col gap-2">
                {/* Portfolio Card */}
                <motion.a
                  variants={itemVariants}
                  href={developerLinks.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-neutral-100 group-hover:text-white leading-tight">
                        Portfolio
                      </span>
                      <span className="text-[10px] font-medium text-neutral-400">
                        Explore my projects
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>

                {/* LinkedIn Card */}
                <motion.a
                  variants={itemVariants}
                  href={developerLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-neutral-100 group-hover:text-white leading-tight">
                        LinkedIn
                      </span>
                      <span className="text-[10px] font-medium text-neutral-400">
                        Let&apos;s connect professionally
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>

                {/* GitHub Card */}
                <motion.a
                  variants={itemVariants}
                  href={developerLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-neutral-500/10 border border-neutral-500/20 text-neutral-200 group-hover:scale-110 transition-transform">
                      <GitHubIcon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-neutral-100 group-hover:text-white leading-tight">
                        GitHub
                      </span>
                      <span className="text-[10px] font-medium text-neutral-400">
                        Open source & personal projects
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div variants={itemVariants} className="mt-4 pt-3 border-t border-white/10 text-center">
              <p className="text-[11px] font-mono text-neutral-400 flex items-center justify-center gap-1">
                <span>Built with passion, curiosity, and lots of coffee</span>
                <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
              </p>
            </motion.div>

            {/* Glass Arrow Pointing Down */}
            <div className="absolute -bottom-1.5 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-7 w-3.5 h-3.5 rotate-45 bg-[#0A0A0F] border-r border-b border-white/15" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Credit Label Group Trigger */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
          Designed & Developed by
        </span>
        <AvatarLabelGroup
          size="md"
          src="/team/harsh_avatar.jpg"
          alt="Harsh Wardhan"
          title="Harsh Wardhan"
          subtitle="Website Developer"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}
