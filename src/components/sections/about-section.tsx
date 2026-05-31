import { achievements } from "@/data/achievements";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Who we are"
      title="A society for students who want their ideas to travel further."
      description="ThinkTech sits at the intersection of engineering, leadership, debate, and human communication. We help students shape technical depth into public clarity."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal key={achievement.title} delay={index * 0.08}>
            <GlassCard className="h-full p-7">
              <p className="mb-10 text-sm font-medium text-blue-200">0{index + 1}</p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{achievement.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{achievement.description}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
