import { SectionShell } from "@/components/ui/section-shell";
import { TeamCarousel } from "@/components/sections/team-carousel";

export function TeamSection() {
  return (
    <SectionShell
      id="team"
      eyebrow="Team"
      title="A leadership network, not a committee list."
      description="ThinkTech is organized by students who care about craft: the craft of rooms, questions, formats, and presence."
    >
      <TeamCarousel />
    </SectionShell>
  );
}
