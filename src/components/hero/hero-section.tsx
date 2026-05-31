import { HeroVisual } from "@/components/hero/hero-visual";
import { NetworkField } from "@/components/background/network-field";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pt-28"
    >
      <div className="absolute -right-28 top-28 h-96 w-96 opacity-70 sm:-right-10 sm:h-[34rem] sm:w-[34rem] lg:hidden">
        <NetworkField />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 max-w-4xl">
          <p className="eyebrow mb-5">Faculty of Engineering and Technology</p>
          <h1 className="hero-title">
            Think.
            <br />
            Speak.
            <br />
            Lead.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            ThinkTech is the STEM Orator Society empowering engineering students to turn ideas into
            clear communication, confident leadership, and measurable influence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#join">Join ThinkTech</MagneticButton>
            <MagneticButton href="#events" variant="secondary">
              Explore Events
            </MagneticButton>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="absolute inset-x-5 bottom-6 mx-auto hidden max-w-7xl items-end justify-between text-xs uppercase tracking-[0.24em] text-slate-500 sm:flex">
        <span>Ideas</span>
        <span>Communication</span>
        <span>Influence</span>
      </div>
    </section>
  );
}
