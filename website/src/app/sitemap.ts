import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const BACKEND_URL = process.env.BACKEND_URL || "https://portfolio-backend-psi-wheat.vercel.app";

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${BACKEND_URL}${path}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return [] as T;
  }

  return response.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/faq",
    "/projects",
    "/services",
    "/services/development",
    "/services/seo",
    "/services/ui-ux",
    "/skills",
    "/privacy-policy",
    "/terms-and-conditions",
  ] as const;

  const [blogs, projects, caseStudies] = await Promise.all([
    fetchJson<Array<{ slug: string; updatedAt?: string }>>("/api/blogs"),
    fetchJson<Array<{ slug: string; updatedAt?: string }>>("/api/projects"),
    fetchJson<Array<{ slug: string; updatedAt?: string }>>("/api/casestudies"),
  ]);

  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: blog.updatedAt || now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.updatedAt || now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${SITE_URL}/casestudies/${study.slug}`,
    lastModified: study.updatedAt || now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...blogRoutes, ...projectRoutes, ...caseStudyRoutes];
}
