import { gallery } from "@/data/gallery";
import { Reveal } from "@/components/effects/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionShell } from "@/components/ui/section-shell";

const gradients: Record<string, string> = {
  "network-forum": "from-blue-400/35 via-slate-200/10 to-amber-300/18",
  "debate-lab": "from-cyan-300/26 via-blue-500/16 to-white/10",
  "prototype-podium": "from-amber-300/24 via-blue-300/16 to-slate-100/10",
  "leadership-circle": "from-white/18 via-blue-400/24 to-cyan-300/12",
};

export function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="A visual archive ready for real moments."
      description=" "
    >
      <div className="grid gap-5 md:grid-cols-2">
        {gallery.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <GlassCard className="h-full p-4">
              <div
                className={`aspect-[16/10] rounded-2xl border border-white/10 bg-gradient-to-br ${gradients[item.image]} overflow-hidden`}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.24),transparent_20%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px]" />
              </div>
              <div className="p-3 pt-5">
                <div className="mb-3 flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                  <span>{item.event}</span>
                  <span aria-hidden="true">/</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
