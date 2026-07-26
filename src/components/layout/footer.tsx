"use client";

import { Sparkles } from "lucide-react";
import { DeveloperCredit } from "@/components/ui/developer-credit";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/60 py-10 text-slate-400 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <a href="#home" className="focus-ring flex items-center gap-2 rounded-full">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-950">
              <Sparkles size={14} aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">ThinkTech</span>
          </a>
          <p className="text-xs text-slate-400" suppressHydrationWarning>
            &copy; {currentYear} ThinkTech • STEM Orator Society. All rights reserved.
          </p>
        </div>

        {/* Developer Credit - Final Footer Element */}
        <div className="flex items-center justify-center sm:justify-end">
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
