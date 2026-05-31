import { Brain, GitBranch, Lightbulb, Mic2, UsersRound } from "lucide-react";
import type { Pillar } from "@/types/content";

export const pillars: Pillar[] = [
  {
    title: "Public Speaking",
    description: "Structured practice for clarity, presence, and persuasive technical expression.",
    signal: "Voice",
    icon: Mic2,
  },
  {
    title: "Critical Thinking",
    description: "Frameworks for questioning assumptions and building arguments that stand up.",
    signal: "Reason",
    icon: Brain,
  },
  {
    title: "Debates",
    description: "High-trust formats where students defend ideas with rigor and respect.",
    signal: "Dialogue",
    icon: GitBranch,
  },
  {
    title: "Leadership",
    description: "Opportunities to host, moderate, mentor, and guide rooms with confidence.",
    signal: "Influence",
    icon: UsersRound,
  },
  {
    title: "Innovation Communication",
    description: "Turning prototypes, research, and systems thinking into stories people remember.",
    signal: "Impact",
    icon: Lightbulb,
  },
];
