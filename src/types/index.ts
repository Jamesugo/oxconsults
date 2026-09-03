// ============================================================
// Ox Consults — TypeScript Type Definitions
// ============================================================

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  methodology: MethodologyStep[];
  deliverables: string[];
  challenges: string[];
  caseStudySlug?: string;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  stats: IndustryStat[];
  relatedServices: string[];
  teamMembers: string[];
}

export interface IndustryStat {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  service: string;
  serviceSlug: string;
  region: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: CaseStudyMetric[];
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
  featured: boolean;
  image: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  suffix?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  expertise: string[];
  industries: string[];
  image: string;
  linkedin: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  industry: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  authorSlug: string;
  image: string;
  featured: boolean;
  tags: string[];
}

export type InsightCategory = 'Strategy' | 'Leadership' | 'Digital' | 'Markets' | 'Operations';

export interface BookingFormData {
  service: string;
  consultant?: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  engagementType: 'advisory' | 'project' | 'retainer';
  message: string;
  date?: string;
  time?: string;
  nda?: File;
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { lat: number; lng: number };
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: string;
}

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
}
