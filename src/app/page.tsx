import { HeroSection } from "@/components/hero/hero-section";
import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/components/sections/about-section";
import { EventsSection } from "@/components/sections/events-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { TeamSection } from "@/components/sections/team-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <ImpactSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <FinalCtaSection />
    </SiteShell>
  );
}
