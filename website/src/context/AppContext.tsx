'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Blog { _id: string; title: string; slug: string; author: string; content: string; imageUrl?: string; imageAlt?: string; createdAt: string; }
interface Project { _id: string; title: string; slug: string; description: string; url?: string; imageUrl?: string; imageAlt?: string; category: string; tech: string[]; gradient: string; featured: boolean; }
interface CaseStudy { _id: string; title: string; slug: string; description: string; content: string; imageUrl?: string; imageAlt?: string; createdAt: string; }

interface WebsiteContextType {
  fetchBlogs: () => Promise<Blog[]>;
  fetchBlogBySlug: (slug: string) => Promise<Blog>;
  fetchProjects: () => Promise<Project[]>;
  fetchCaseStudies: () => Promise<CaseStudy[]>;
  fetchCaseStudyBySlug: (slug: string) => Promise<CaseStudy>;
}

const WebsiteContext = createContext<WebsiteContextType | null>(null);

export function WebsiteProvider({ children }: { children: ReactNode }) {
  const fetchBlogs = async (): Promise<Blog[]> => {
    const res = await fetch(`${API_URL}/api/blogs`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
  };

  const fetchBlogBySlug = async (slug: string): Promise<Blog> => {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`);
    if (!res.ok) throw new Error('Blog not found');
    return res.json();
  };

  const fetchProjects = async (): Promise<Project[]> => {
    const res = await fetch(`${API_URL}/api/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  };

  const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
    const res = await fetch(`${API_URL}/api/casestudies`);
    if (!res.ok) throw new Error('Failed to fetch case studies');
    return res.json();
  };

  const fetchCaseStudyBySlug = async (slug: string): Promise<CaseStudy> => {
    const res = await fetch(`${API_URL}/api/casestudies/${slug}`);
    if (!res.ok) throw new Error('Case study not found');
    return res.json();
  };

  return (
    <WebsiteContext.Provider value={{ fetchBlogs, fetchBlogBySlug, fetchProjects, fetchCaseStudies, fetchCaseStudyBySlug }}>
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  const ctx = useContext(WebsiteContext);
  if (!ctx) throw new Error('useWebsite must be used within WebsiteProvider');
  return ctx;
}
