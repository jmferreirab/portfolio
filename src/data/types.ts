export interface Experience {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  employmentType?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  result?: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  featured?: boolean;
}
