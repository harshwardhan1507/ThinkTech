import { EventsCarousel } from "@/components/sections/events-carousel";
import { SectionShell } from "@/components/ui/section-shell";

export function EventsSection() {
  return (
    <SectionShell
      id="events"
      eyebrow="Events"
      title="Formats designed for serious student voices."
      description="Each event is built to make technical thinking more visible, more rigorous, and more persuasive."
    >
      <EventsCarousel />
    </SectionShell>
  );
}
