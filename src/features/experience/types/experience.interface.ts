
export interface Experience {
  id: string;
  position: string;
  employment_type: string;
  company?: string;
  location: string;
  start_date: string;
  end_date?: string | null; 
  description: string;
  skills: string[];
  details?: {
    overview?: string;
    role?: string;
    skills_acquired?: string[];
    impact?: string;
    company_link?: string;
  }
}