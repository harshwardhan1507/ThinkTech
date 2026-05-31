import { team } from "@/data/team";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function TeamSection() {
  return (
    <SectionShell
      id="team"
      eyebrow="Team"
      title="A leadership network, not a committee list."
      description="ThinkTech is organized by students who care about craft: the craft of rooms, questions, formats, and presence."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {team.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.06}>
            <GlassCard className="h-full p-6">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] text-lg font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-white">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-200">{member.role}</p>
              <p className="mt-5 text-sm leading-6 text-slate-300">{member.profile}</p>
              <p className="mt-7 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
                {member.focus}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
