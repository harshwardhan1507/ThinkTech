"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarLabelGroupProps {
  size?: "sm" | "md" | "lg";
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

export function AvatarLabelGroup({
  size = "md",
  src,
  alt,
  title,
  subtitle,
  isOpen = false,
  onClick,
  className,
}: AvatarLabelGroupProps) {
  const avatarSizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-label={`${title} developer profile trigger`}
      className={cn(
        "group flex items-center gap-2.5 rounded-full p-1 sm:pr-3 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:bg-white/10 border border-transparent hover:border-white/15 active:scale-[0.98]",
        isOpen && "bg-white/10 border-white/20 ring-1 ring-sky-400/30",
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-full overflow-hidden border border-white/20 shadow-sm flex-shrink-0 transition-transform duration-200 group-hover:scale-105",
          avatarSizes[size]
        )}
      >
        <Image src={src} alt={alt} fill sizes="44px" className="object-cover" />
      </div>

      <div className="flex flex-col text-left justify-center">
        <span className="text-xs font-semibold text-white leading-tight group-hover:text-sky-300 transition-colors">
          {title}
        </span>
        {subtitle && (
          <span className="text-[10px] font-medium text-neutral-400 leading-none mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
}
