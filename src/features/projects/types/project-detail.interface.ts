import type { IconType } from "react-icons";

export interface Technology {
  name: string;
  description: string;
  icon?: IconType;
}

export interface TechnicalStack {
  frontend: Technology[];
  backend?: Technology[];
  devOps?: Technology[];
}

export interface VisualContent {
  mainImage: string;
  screenshots: (string)[];
}
export interface AdditionalLinks {
  github?: string;
  demo?: string;
  case_study?: string;
}

export interface CompanyInfo {
  name: string;
  icon?: IconType;
  logo: string;
}


export interface DetailedProject {
  id: string;
  title: string;
  shortDescription: string;
  technicalStack: TechnicalStack;
  visualContent: VisualContent;
  company?: CompanyInfo;
  links?: AdditionalLinks;
}

export interface Collaborator {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export interface DetailedProject {
  id: string;
  title: string;
  shortDescription: string;
  technicalStack: TechnicalStack;
  visualContent: VisualContent;
  company?: CompanyInfo;
  links?: AdditionalLinks;
  collaborators?: Collaborator[];
}