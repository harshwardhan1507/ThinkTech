"use client";

import Image from "next/image";
import { useRef } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { events } from "@/data/events";
import { GlassCard } from "@/components/ui/glass-card";

export function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>("[data-event-card]");
    const distance = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.85;

    track.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          Swipe, drag, or use the controls to move through ThinkTech&apos;s event archive.
        </p>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.1]"
            aria-label="Show previous event"
            onClick={() => slide("previous")}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.1]"
            aria-label="Show next event"
            onClick={() => slide("next")}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-3 sm:-mx-8 sm:gap-6 sm:px-8"
        aria-label="Scrollable event cards"
      >
        {events.map((event, index) => (
          <motion.article
            key={event.title}
            data-event-card
            className="min-w-[82vw] snap-center sm:min-w-[25rem] lg:min-w-[29rem] xl:min-w-[31rem]"
            initial={{ opacity: 0, x: 36, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="flex h-full flex-col p-4 sm:p-5">
              <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                {event.image && (
                  <Image
                    src={event.image}
                    alt={`${event.title} event poster`}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 400px, 496px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/54 via-transparent to-white/8" />
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <CalendarDays size={16} aria-hidden="true" />
                <span>{event.date}</span>
                <span aria-hidden="true">/</span>
                <span>{event.format}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{event.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{event.description}</p>
              <p className="mt-6 text-sm font-medium text-blue-200">{event.audience}</p>
            </GlassCard>
          </motion.article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl"
          aria-label="Show previous event"
          onClick={() => slide("previous")}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl"
          aria-label="Show next event"
          onClick={() => slide("next")}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
