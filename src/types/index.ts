export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  views: number;
  likes: number;
  date: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  process?: string;
  results?: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  email: string;
  social: {
    dribbble?: string;
    behance?: string;
    linkedin?: string;
    twitter?: string;
  };
  followers: number;
  following: number;
  projects: number;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  thumbnail: string;
  featured?: boolean;
}

export interface FeedPost {
  id: string;
  type: 'image' | 'text';
  content: string;
  image?: string;
  likes: number;
  comments: number;
  date: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}