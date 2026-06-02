import type { ImpactMetric, TimelineMilestone } from "@/types/content";

export const impactMetrics: ImpactMetric[] = [
  {
    numericValue: 4,
    suffix: "+",
    label: "Events Conducted",
    detail: "Curated debates, idea labs, speaker circles, and technical storytelling forums.",
    accentColor: "from-blue-400/30 to-blue-600/10",
  },
  {
    numericValue: 100,
    suffix: "+",
    label: "Students Reached",
    detail: "Participants across engineering disciplines learning to frame complex ideas.",
    accentColor: "from-cyan-400/30 to-cyan-600/10",
  },

  {
    numericValue: 4,
    suffix: "",
    label: "Competitions Hosted",
    detail: "Debate competitions, extempore challenges, and innovation storytelling contests.",
    accentColor: "from-purple-400/30 to-purple-600/10",
  },

];

export const timelineMilestones: TimelineMilestone[] = [
  {
    date: "Sep 2025",
    title: "Society Founded",
    description: "ThinkTech established at the Faculty of Engineering and Technology.",
  },
  {
    date: "Sep 2025",
    title: "First Debate",
    description: "Engineers' Day debate on AI in warfare drew 80+ students.",
  },
  {
    date: "Mar 2026",
    title: "Extempore Launch",
    description: "First extempore forum on deepfakes and misinformation.",
  },
  {
    date: "Apr 2026",
    title: "Panel Series",
    description: "Interdisciplinary panel discussion: AI — Servant or Partner?",
  },
  {
    date: "May 2026",
    title: "WordWeave",
    description: "Flagship storytelling challenge transforms technical narratives.",
  },
  {
    date: "Jun 2026",
    title: "100+ Reach",
    description: "Community crosses 100 students across engineering disciplines.",
  },
  {
    date: "Jun 2026",
    title: "Website Launch",
    description: "Official website built by Harsh Wardhan goes live.",
  },
];
