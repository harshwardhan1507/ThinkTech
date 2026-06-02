import type { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type ImpactMetric = {
  numericValue: number;
  suffix: string;
  label: string;
  detail: string;
  accentColor?: string;
};

export type TimelineMilestone = {
  date: string;
  title: string;
  description: string;
};

export type Pillar = {
  title: string;
  description: string;
  signal: string;
  icon: LucideIcon;
};

export type Event = {
  title: string;
  description: string;
  date: string;
  format: string;
  audience: string;
  image?: string;
  category?: string;
  impact?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  profile: string;
  focus: string;
  initials?: string;
  image?: string;
  gradient: string;
  linkedin?: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  imageSrc?: string;
  event: string;
  date: string;
};

export type Achievement = {
  title: string;
  description: string;
};
