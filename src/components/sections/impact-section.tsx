"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { impactMetrics, timelineMilestones } from "@/data/impact-data";
import { useCountUp } from "@/hooks/use-count-up";
import { SectionShell } from "@/components/ui/section-shell";

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof impactMetrics)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const display = useCountUp({
    end: metric.numericValue,
    suffix: metric.suffix,
    trigger: isInView,
    duration: 2200,
  });

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6"
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        borderColor: "rgba(255,255,255,0.2)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Accent glow */}
      <div
        className={`pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 ${metric.accentColor}`}
      />

      {/* Top shine line */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-60" />

      <div className="relative z-10">
        <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
          {display}
        </p>
        <h3 className="mt-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
          {metric.label}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {metric.detail}
        </p>
      </div>
    </motion.div>
  );
}

function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <div ref={containerRef} className="mt-20 lg:mt-28">
      {/* Timeline header */}
      <motion.div
        className="mb-12 flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
          Our Journey
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-blue-400/30 to-transparent" />
      </motion.div>

      {/* Timeline items — clean stacked layout */}
      <div className="space-y-4 sm:space-y-5">
        {timelineMilestones.map((milestone, index) => (
          <motion.div
            key={milestone.date + milestone.title}
            className="group relative flex items-stretch gap-5 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Accent bar — fills on scroll */}
            <motion.div
              className="w-1 flex-shrink-0 rounded-l-xl bg-gradient-to-b from-blue-400 to-blue-600"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08 + 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "top" }}
            />

            {/* Content */}
            <div className="flex flex-1 flex-col gap-1 py-5 pr-5 sm:flex-row sm:items-center sm:gap-6">
              <span className="w-20 flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-blue-300/60">
                {milestone.date}
              </span>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-white sm:text-lg">
                  {milestone.title}
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ImpactSection() {
  return (
    <SectionShell
      id="impact"
      eyebrow="ThinkTech Impact"
      title="Momentum with an academic spine."
      description="ThinkTech is built around repeatable practice, ambitious programming, and a culture where communication is treated as an engineering skill."
    >
      {/* Decorative background glow for the section */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/8 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-cyan-400/6 blur-[80px]" />
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>

      {/* Timeline */}
      <Timeline />
    </SectionShell>
  );
}
