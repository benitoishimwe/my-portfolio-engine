import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  tasks: string[];
}

export interface ExpertiseCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  srLabel: string;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  description: string;
  email: string;
  baseUrl: string;
  social: SocialLink[];
  resumeUrl: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
