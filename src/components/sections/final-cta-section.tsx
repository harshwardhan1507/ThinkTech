"use client";

import { useRef } from "react";
import { BriefcaseBusiness, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.1, 0.3, 0.2]);

  return (
    <SectionShell id="join" className="pb-32">
      <motion.div
        ref={sectionRef}
        className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.032)),rgba(255,255,255,0.06)] px-6 py-16 text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:px-12 lg:py-24"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top shine line */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />

        {/* Animated radial glow that intensifies on scroll */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[100px]"
          style={{ scale: glowScale, opacity: glowOpacity }}
          aria-hidden="true"
        />

        {/* Secondary glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-4xl">
          <motion.p
            className="eyebrow mb-5 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Join the network
          </motion.p>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to find your voice?
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Become part of a community where engineering ideas are sharpened, spoken, challenged,
            and carried into the world with confidence.
          </motion.p>

          <motion.div
            className="mt-9 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton href="mailto:thinktech@example.edu">Start the Conversation</MagneticButton>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 w-full flex-col items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition-all hover:border-white/20 hover:bg-white/[0.1] hover:shadow-[0_0_20px_rgba(96,165,250,0.12)] sm:w-auto sm:flex-row"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon size={17} aria-hidden="true" />
                  Join on {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
