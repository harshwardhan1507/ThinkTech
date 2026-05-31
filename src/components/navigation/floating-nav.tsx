"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Pillars", href: "#pillars" },
  { label: "Impact", href: "#impact" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/12 bg-white/[0.06] px-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-all duration-500 sm:px-5",
          scrolled ? "h-14 max-w-4xl bg-white/[0.075] shadow-[0_18px_50px_rgba(0,0,0,0.34)]" : "h-16",
        )}
      >
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-full">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950">
            <Sparkles size={16} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-white">ThinkTech</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#join"
          className="focus-ring hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-50 sm:inline-flex"
        >
          Join ThinkTech
        </a>
        <a
          href="#join"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white sm:hidden"
          aria-label="Jump to join section"
        >
          <Menu size={18} aria-hidden="true" />
        </a>
      </nav>
    </motion.header>
  );
}
