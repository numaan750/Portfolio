'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

// Types
interface Blog { _id: string; title: string; slug: string; author: string; content: string; imageUrl?: string; imageAlt?: string; createdAt: string; }
interface Project { _id: string; title: string; slug: string; description: string; url?: string; imageUrl?: string; imageAlt?: string; category: string; tech: string[]; gradient: string; featured: boolean; }
interface CaseStudy { _id: string; title: string; slug: string; description: string; content: string; imageUrl?: string; imageAlt?: string; createdAt: string; }

interface AppContextType {
  // Auth
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  
  // Blogs
  blogs: Blog[];
  blogsLoading: boolean;
  fetchBlogs: () => Promise<void>;
  getBlog: (slug: string) => Promise<Blog>;
  createBlog: (data: Partial<Blog>) => Promise<void>;
  updateBlog: (slug: string, data: Partial<Blog>) => Promise<void>;
  deleteBlog: (slug: string) => Promise<void>;
  
  // Projects
  projects: Project[];
  projectsLoading: boolean;
  fetchProjects: () => Promise<void>;
  getProject: (slug: string) => Promise<Project>;
  createProject: (data: Partial<Project>) => Promise<void>;
  updateProject: (slug: string, data: Partial<Project>) => Promise<void>;
  deleteProject: (slug: string) => Promise<void>;
  
  // Case Studies
  caseStudies: CaseStudy[];
  caseStudiesLoading: boolean;
  fetchCaseStudies: () => Promise<void>;
  getCaseStudy: (slug: string) => Promise<CaseStudy>;
  createCaseStudy: (data: Partial<CaseStudy>) => Promise<void>;
  updateCaseStudy: (slug: string, data: Partial<CaseStudy>) => Promise<void>;
  deleteCaseStudy: (slug: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [caseStudiesLoading, setCaseStudiesLoading] = useState(false);

  // --- AUTH ---
  const login = async (email: string, password: string) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    document.cookie = `token=${data.token}; path=/; max-age=86400; SameSite=Strict`;
    router.push('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('token');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/login');
  };

  // --- BLOGS ---
  const fetchBlogs = async () => {
    setBlogsLoading(true);
    try {
      const { data } = await api.get('/admin/blogs');
      setBlogs(data);
    } finally {
      setBlogsLoading(false);
    }
  };

  const getBlog = async (slug: string): Promise<Blog> => {
    const { data } = await api.get(`/admin/blogs/${slug}`);
    return data;
  };

  const createBlog = async (payload: Partial<Blog>) => {
    await api.post('/admin/blogs', payload);
    await fetchBlogs();
  };

  const updateBlog = async (slug: string, payload: Partial<Blog>) => {
    await api.put(`/admin/blogs/${slug}`, payload);
    await fetchBlogs();
  };

  const deleteBlog = async (slug: string) => {
    await api.delete(`/admin/blogs/${slug}`);
    setBlogs((prev) => prev.filter((b) => b.slug !== slug));
  };

  // --- PROJECTS ---
  const fetchProjects = async () => {
    setProjectsLoading(true);
    try {
      const { data } = await api.get('/admin/projects');
      setProjects(data);
    } finally {
      setProjectsLoading(false);
    }
  };

  const getProject = async (slug: string): Promise<Project> => {
    const { data } = await api.get(`/admin/projects/${slug}`);
    return data;
  };

  const createProject = async (payload: Partial<Project>) => {
    await api.post('/admin/projects', payload);
    await fetchProjects();
  };

  const updateProject = async (slug: string, payload: Partial<Project>) => {
    await api.put(`/admin/projects/${slug}`, payload);
    await fetchProjects();
  };

  const deleteProject = async (slug: string) => {
    await api.delete(`/admin/projects/${slug}`);
    setProjects((prev) => prev.filter((p) => p.slug !== slug));
  };

  // --- CASE STUDIES ---
  const fetchCaseStudies = async () => {
    setCaseStudiesLoading(true);
    try {
      const { data } = await api.get('/admin/casestudies');
      setCaseStudies(data);
    } finally {
      setCaseStudiesLoading(false);
    }
  };

  const getCaseStudy = async (slug: string): Promise<CaseStudy> => {
    const { data } = await api.get(`/admin/casestudies/${slug}`);
    return data;
  };

  const createCaseStudy = async (payload: Partial<CaseStudy>) => {
    await api.post('/admin/casestudies', payload);
    await fetchCaseStudies();
  };

  const updateCaseStudy = async (slug: string, payload: Partial<CaseStudy>) => {
    await api.put(`/admin/casestudies/${slug}`, payload);
    await fetchCaseStudies();
  };

  const deleteCaseStudy = async (slug: string) => {
    await api.delete(`/admin/casestudies/${slug}`);
    setCaseStudies((prev) => prev.filter((cs) => cs.slug !== slug));
  };

  return (
    <AppContext.Provider value={{
      login, logout,
      blogs, blogsLoading, fetchBlogs, getBlog, createBlog, updateBlog, deleteBlog,
      projects, projectsLoading, fetchProjects, getProject, createProject, updateProject, deleteProject,
      caseStudies, caseStudiesLoading, fetchCaseStudies, getCaseStudy, createCaseStudy, updateCaseStudy, deleteCaseStudy,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
