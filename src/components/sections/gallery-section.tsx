"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Reveal } from "@/components/effects/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GallerySection() {
  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="A visual archive ready for real moments."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {gallery.map((item, index) => {
          // Alternate: first and last items span larger
          const isLarge = index === 0 || index === 3;

          return (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]",
                  isLarge ? "aspect-[16/10] md:aspect-[16/10]" : "aspect-[16/10]",
                )}
                whileHover={{
                  borderColor: "rgba(255,255,255,0.2)",
                  boxShadow: "0 24px 80px rgba(2,6,23,0.45)",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Image */}
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-slate-200/5 to-amber-300/10" />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content overlay — revealed on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
                  <div className="translate-y-2 transform transition-all duration-500 group-hover:translate-y-0">
                    <div className="mb-2 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                      <span>{item.event}</span>
                      <span aria-hidden="true" className="text-white/30">·</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-slate-300 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Top shine */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
