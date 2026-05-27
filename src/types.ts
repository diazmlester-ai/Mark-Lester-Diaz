export interface Service {
  id: string;
  title: string;
  description: string;
  nodeNumber: string;
}

export interface Tool {
  name: string;
  logoSvg: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  metrics?: { label: string; value: string };
  workflowImageUrl?: string;
  tags: string[];
  details: string[];
  projectName?: string;
  projectOverview?: string;
  problem?: string;
  solution?: string | string[];
  impact?: string | string[];
  tools?: string[];
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}
