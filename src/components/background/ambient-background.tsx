"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cursor-following radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x)_var(--cursor-y),rgba(96,165,250,0.18),transparent_30rem)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

      {/* Floating orb 1 — using CSS animation instead of Framer Motion for performance */}
      <div
        className="absolute left-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/12 blur-3xl will-change-transform"
        style={{ animation: "float1 18s ease-in-out infinite" }}
      />

      {/* Floating orb 2 */}
      <div
        className="absolute bottom-[-16rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-cyan-300/10 blur-3xl will-change-transform"
        style={{ animation: "float2 22s ease-in-out infinite" }}
      />

      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-500/10 to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,rgba(11,17,32,0.72)_64%)]" />
    </div>
  );
}
