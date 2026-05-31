import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: GlassCardProps<T>) {
  const Component = as || "div";

  return (
    <Component className={cn("glass-card group relative overflow-hidden", className)} {...props}>
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
      <span className="pointer-events-none absolute -inset-20 translate-x-[-65%] rotate-12 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 transition duration-700 group-hover:translate-x-[65%] group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
