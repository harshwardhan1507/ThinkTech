import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-28 px-5 py-24 sm:px-8 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl lg:mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="section-copy mt-5">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
