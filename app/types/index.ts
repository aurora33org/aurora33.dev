import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark';
