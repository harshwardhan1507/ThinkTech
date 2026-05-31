import { CalendarDays } from "lucide-react";
import { events } from "@/data/events";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function EventsSection() {
  return (
    <SectionShell
      id="events"
      eyebrow="Events"
      title="Formats designed for serious student voices."
      description="Each event is built to make technical thinking more visible, more rigorous, and more persuasive."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {events.map((event, index) => (
          <Reveal key={event.title} delay={index * 0.08}>
            <GlassCard className="h-full p-6">
              <div className="mb-8 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_35%_25%,rgba(96,165,250,0.38),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
              </div>
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays size={16} aria-hidden="true" />
                <span>{event.date}</span>
                <span aria-hidden="true">/</span>
                <span>{event.format}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{event.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{event.description}</p>
              <p className="mt-6 text-sm font-medium text-blue-200">{event.audience}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
