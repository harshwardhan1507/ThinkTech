"use client";

import Image from "next/image";
import { useRef } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { events } from "@/data/events";

function EventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      data-event-card
      className="min-w-[82vw] snap-center sm:min-w-[25rem] lg:min-w-[29rem] xl:min-w-[31rem]"
      style={{
        perspective: "1200px",
      }}
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.032)),rgba(255,255,255,0.06)] shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        whileHover={{
          borderColor: "rgba(255,255,255,0.22)",
          boxShadow: "0 24px 80px rgba(2,6,23,0.45), 0 0 40px rgba(59,130,246,0.08)",
          y: -6,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top shine */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />

        {/* Sweep effect */}
        <span className="pointer-events-none absolute -inset-20 translate-x-[-65%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[65%] group-hover:opacity-100" />

        <div className="relative p-4 sm:p-5">
          {/* Hero image */}
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            {event.image && (
              <Image
                src={event.image}
                alt={`${event.title} event poster`}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 400px, 496px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-white/5" />

            {/* Category badge */}
            {event.category && (
              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-lg">
                {event.category}
              </span>
            )}

            {/* Impact metric */}
            {event.impact && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-blue-200 backdrop-blur-lg">
                <Users size={12} aria-hidden="true" />
                {event.impact}
              </div>
            )}
          </div>

          {/* Metadata */}
          <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <CalendarDays size={14} aria-hidden="true" />
            <span>{event.date}</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>{event.format}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {event.title}
          </h3>

          {/* Description — reveals on hover */}
          <div className="mt-4 overflow-hidden">
            <p className="leading-7 text-slate-300 line-clamp-3 transition-all duration-500 group-hover:line-clamp-none">
              {event.description}
            </p>
          </div>

          <p className="mt-5 text-sm font-medium text-blue-200/80">{event.audience}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}

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
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.12] hover:border-white/20"
            aria-label="Show previous event"
            onClick={() => slide("previous")}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white backdrop-blur-2xl transition hover:bg-white/[0.12] hover:border-white/20"
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
          <EventCard key={event.title} event={event} index={index} />
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
