import type { ReactNode } from "react";
import { AmbientBackground } from "@/components/background/ambient-background";
import { MotionProvider } from "@/components/effects/motion-provider";
import { FloatingNav } from "@/components/navigation/floating-nav";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <AmbientBackground />
      <FloatingNav />
      <main className="relative z-10">{children}</main>
    </MotionProvider>
  );
}
