import { BriefcaseBusiness, MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/search/results/all/?keywords=ThinkTech%20STEM%20Orator%27s%20Society",
    icon: BriefcaseBusiness,
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/Lu3qEWeDTiM8twPE0KtZmG",
    icon: MessageCircle,
  },
];

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
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.1] sm:w-auto"
                >
                  <Icon size={17} aria-hidden="true" />
                  Join on {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </SectionShell>
  );
}
