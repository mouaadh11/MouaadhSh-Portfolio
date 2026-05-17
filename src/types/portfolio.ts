export type TimestampValue = string | Date | { seconds: number; nanoseconds: number };

export type PortfolioCollection =
  | "projects"
  | "education"
  | "experience"
  | "achievements"
  | "tools"
  | "blogs";

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatarUrl: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface PortfolioItemBase {
  id: string;
  order: number;
  createdAt?: TimestampValue;
  updatedAt?: TimestampValue;
}

export interface Project extends PortfolioItemBase {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
}

export interface Education extends PortfolioItemBase {
  title: string;
  institution: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Experience extends PortfolioItemBase {
  title: string;
  company: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Achievement extends PortfolioItemBase {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

export interface Tool extends PortfolioItemBase {
  name: string;
  category: string;
  iconUrl?: string;
  level?: string;
}

export interface Blog extends PortfolioItemBase {
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  tags: string[];
  published: boolean;
}

export type PortfolioCollectionMap = {
  projects: Project;
  education: Education;
  experience: Experience;
  achievements: Achievement;
  tools: Tool;
  blogs: Blog;
};
