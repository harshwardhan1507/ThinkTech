"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import { GlassCard } from "@/components/ui/glass-card";

export function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>("[data-team-card]");
    const distance = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.85;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.1]"
            aria-label="Show previous team member"
            onClick={() => slide("previous")}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.1]"
            aria-label="Show next team member"
            onClick={() => slide("next")}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-3 sm:-mx-8 sm:gap-6 sm:px-8"
        aria-label="Scrollable team member cards"
      >
        {team.map((member, index) => (
          <motion.article
            key={member.name}
            data-team-card
            className="min-w-[84vw] snap-center sm:min-w-[26rem] lg:min-w-[30rem] xl:min-w-[32rem]"
            initial={{ opacity: 0, x: 36, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="flex h-full flex-col p-4 sm:p-5">
              <div
                className={`relative mb-7 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${member.gradient}`}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} profile portrait`}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 416px, 512px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/16 bg-white/[0.08] text-4xl font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_70px_rgba(2,6,23,0.28)] sm:h-32 sm:w-32">
                      <span>{member.initials}</span>
                      <span className="absolute -inset-8 rounded-full bg-blue-300/14 blur-2xl" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(to_top,rgba(2,6,23,0.44),transparent_55%)]" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/12 bg-slate-950/38 px-3 py-1 text-xs font-semibold text-blue-100 backdrop-blur-xl">
                  {member.focus}
                </div>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-blue-200">{member.role}</p>
              <p className="mt-5 leading-7 text-slate-300">{member.profile}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-slate-300 transition hover:bg-white/[0.14] hover:text-white"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </GlassCard>
          </motion.article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl"
          aria-label="Show previous team member"
          onClick={() => slide("previous")}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl"
          aria-label="Show next team member"
          onClick={() => slide("next")}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
