import type { Locale } from "../i18n/ui";

export interface Experience {
  company: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  translations: Record<Locale, {
    location: string;
    role: string;
    employmentType?: string;
    summary: string;
    highlights: string[];
  }>;
}

export interface Project {
  technologies: string[];
  repository?: string;
  demo?: string;
  featured?: boolean;
  translations: Record<Locale, {
    title: string;
    summary: string;
    problem: string;
    solution: string;
    result?: string;
  }>;
}
