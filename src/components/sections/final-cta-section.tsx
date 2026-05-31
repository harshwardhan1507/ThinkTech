import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

export function FinalCtaSection() {
  return (
    <SectionShell id="join" className="pb-32">
      <GlassCard className="relative overflow-hidden px-6 py-16 text-center sm:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.22),transparent_42%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="eyebrow mb-5 justify-center">Join the network</p>
          <h2 className="section-title">Ready to find your voice?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Become part of a community where engineering ideas are sharpened, spoken, challenged,
            and carried into the world with confidence.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton href="mailto:thinktech@example.edu">Start the Conversation</MagneticButton>
          </div>
        </div>
      </GlassCard>
    </SectionShell>
  );
}
