import { pillars } from "@/data/pillars";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function PillarsSection() {
  return (
    <SectionShell
      id="pillars"
      eyebrow="Society pillars"
      title="Five disciplines. One operating system for influence."
      description="Every ThinkTech format is designed to strengthen a specific part of the journey from thought to public impact."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <Reveal key={pillar.title} delay={index * 0.05}>
              <GlassCard className="min-h-72 p-6">
                <div className="mb-10 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300">
                    {pillar.signal}
                  </span>
                  <Icon className="text-blue-200" size={22} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{pillar.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
