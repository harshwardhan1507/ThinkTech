"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X, ArrowRight } from "lucide-react";
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

  // Handle scroll detection for nav shrinkage
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Navigate to section on mobile
  const navigateTo = useCallback((href: string) => {
    // 1. Restore scroll first
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    // 2. Close mobile menu
    setMobileMenuOpen(false);

    // 3. Scroll to section
    if (href.startsWith("#")) {
      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to allow the overflow to restore cleanly
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", href);
        }, 50);
      }
    }
  }, []);

  return (
    <>
      {/* Fixed Navigation Header */}
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
          <a
            href="#home"
            className="focus-ring flex items-center gap-2 rounded-full"
            onClick={(e) => {
              if (mobileMenuOpen) {
                e.preventDefault();
                navigateTo("#home");
              }
            }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950">
              <Sparkles size={16} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">ThinkTech</span>
          </a>

          {/* Desktop Navigation */}
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
            href="https://chat.whatsapp.com/Lu3qEWeDTiM8twPE0KtZmG"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-50 sm:inline-flex"
          >
            Join ThinkTech
          </a>

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white transition hover:bg-white/[0.08] active:scale-95 md:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-panel"
            id="mobile-navigation"
            className="fixed inset-x-4 top-22 z-50 mx-auto max-w-lg overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/95 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigateTo(item.href)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition active:scale-[0.98]",
                    activeSection === item.section
                      ? "bg-white/[0.12] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                      : "text-slate-200 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  <span>{item.label}</span>
                  {activeSection === item.section && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  )}
                </button>
              ))}

              <div className="mt-1 border-t border-white/10 pt-2">
                <a
                  href="https://chat.whatsapp.com/Lu3qEWeDTiM8twPE0KtZmG"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-blue-50 active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Join ThinkTech</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
