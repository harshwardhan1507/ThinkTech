import type { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  detail: string;
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
};

export type TeamMember = {
  name: string;
  role: string;
  profile: string;
  focus: string;
  initials: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  event: string;
  date: string;
};

export type Achievement = {
  title: string;
  description: string;
};
