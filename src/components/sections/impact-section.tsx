import { stats } from "@/data/stats";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function ImpactSection() {
  return (
    <SectionShell
      id="impact"
      eyebrow="Impact"
      title="Momentum with an academic spine."
      description="ThinkTech is built around repeatable practice, ambitious programming, and a culture where communication is treated as an engineering skill."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <GlassCard className="h-full p-6">
              <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">{stat.value}</p>
              <h3 className="mt-5 text-base font-semibold text-blue-100">{stat.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stat.detail}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
