"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Pillars", href: "#pillars", section: "pillars" },
  { label: "Impact", href: "#impact", section: "impact" },
  { label: "Events", href: "#events", section: "events" },
  { label: "Team", href: "#team", section: "team" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const navRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    event.currentTarget.blur();

    // Restore body scroll immediately so scrolling isn't blocked
    document.body.style.overflow = "";
    setMobileMenuOpen(false);

    // Programmatically scroll to the target section
    if (href) {
      const target = document.querySelector(href);
      if (target) {
        // Small delay to let the menu close animation start and overflow restore
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  };


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
        <div className="hidden items-center gap-1 md:flex relative">
          {navItems.map((item) => (
            <a
              key={item.href}
              ref={(el) => {
                if (el) navRefs.current.set(item.section, el);
              }}
              href={item.href}
              className={cn(
                "focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                activeSection === item.section
                  ? "text-white"
                  : "text-slate-300 hover:bg-white/[0.07] hover:text-white",
              )}
            >
              {item.label}
              {activeSection === item.section && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full bg-white/[0.1]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </a>
          ))}
        </div>
        <a
          href="#join"
          className="focus-ring hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-50 sm:inline-flex"
        >
          Join ThinkTech
        </a>
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition hover:bg-white/[0.08] md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu overlay — closes menu when tapping outside */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 -z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-4 max-w-xl overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.07] shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-1 p-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12]",
                    activeSection === item.section ? "bg-white/[0.06] text-white" : "text-slate-200",
                  )}
                  onClick={handleMobileNavClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#join"
                className="focus-ring mt-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-blue-50 active:bg-blue-100"
                onClick={handleMobileNavClick}
              >
                Join ThinkTech
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
