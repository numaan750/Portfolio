"use client";

import { useState, useEffect } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { motion, AnimatePresence } from "framer-motion";
// import { HiExternalLink } from "react-icons/hi";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { scaleIn, fadeUp } from "@/lib/animations";
// fallbackProjects import removed
import Link from "next/link";
import { richTextToPlainText } from "@/components/ui/RichText";

const FILTERS = [
  "All",
  "AI / Full-Stack",
  "E-Commerce",
  "SaaS / Productivity",
  "Dashboard / Admin",
  "Real Estate",
];

export default function Projects({ showAll = false }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectList, setProjectList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchDbProjects = async () => {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        if (!res.ok) return;
        const dbProjects = await res.json();

        if (dbProjects && dbProjects.length > 0) {
          const mapped = dbProjects.map((p, idx) => ({
            ...p,
            id: p.id || p._id || `db-${idx}`,
            tech: p.tech || [],
            category: p.category || 'General',
            gradient: p.gradient || 'from-violet-500 to-pink-500',
          }));
          if (isMounted) setProjectList(mapped);
        } else {
          if (isMounted) setProjectList([]);
        }
      } catch (err) {
        console.warn("Backend offline or unreachable. Using offline fallback projects.", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDbProjects();
    const refreshInterval = window.setInterval(fetchDbProjects, 5000);
    window.addEventListener('focus', fetchDbProjects);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', fetchDbProjects);
    };
  }, []);

  const filtered =
    activeFilter === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);
  const displayedProjects = showAll ? filtered.slice(0, visibleCount) : filtered.slice(0, 6);

  return (
    <SectionWrapper id="projects" className="pt-15 pb-15">
      <SectionHeader
        tag="Projects"
        title="Recent Work"
        subtitle="Discover how I help businesses turn ideas into modern, scalable, and high-performing digital products."
      />
      {showAll && (
        <motion.div variants={fadeUp} className="flex gap-2.5 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setVisibleCount(6);
              }}
              className={`px-4.5 py-2 rounded-lg border font-semibold text-[0.82rem] cursor-pointer transition-all duration-250 ${activeFilter === f
                ? "border-[#6366f1] bg-linear-to-br from-[#6366f1] to-[#22d3ee] text-white"
                : "border-[#6366f1]/20 bg-transparent text-slate-400"
                }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      )}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="glass overflow-hidden rounded-2xl border border-white/5">
              <div className="skeleton h-[250px] w-full rounded-none" />
              <div className="p-5.5 py-6 space-y-4">
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-3 w-full" />
                <div className="skeleton h-3 w-5/6" />
                <div className="flex flex-wrap gap-2">
                  <div className="skeleton h-6 w-16 rounded-full" />
                  <div className="skeleton h-6 w-20 rounded-full" />
                  <div className="skeleton h-6 w-14 rounded-full" />
                </div>
                <div className="skeleton h-10 w-32 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => {
              const imageSrc = project.imageUrl || `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&type=jpeg`;
              return (
                <motion.div
                  key={project.id}
                  variants={scaleIn}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                  className="relative glass project-card !bg-[#0d1325] overflow-hidden group flex flex-col "
                >
                  <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10 " aria-label={`View ${project.title}`} />
                  <div className="w-full p-3 pb-0">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl relative">
                      <OptimizedImage
                        src={imageSrc}
                        alt={project.imageAlt || project.title}
                        width={800}
                        height={450}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      {project.featured && (
                        <span className="absolute top-3.5 right-3.5 bg-linear-to-br from-[#6366f1] to-[#22d3ee] rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold text-white tracking-[0.06em] uppercase">
                          ★ Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-300 line-clamp-2 group-hover:text-indigo-300">
                      {project.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-400 sm:text-[12px]">
                      {richTextToPlainText(project.description)}
                    </p>

                    <div className="mt-auto flex items-center gap-0.5 text-sm font-semibold text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300 relative z-20">
                      <span>View Project</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
      {showAll && visibleCount < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="btn-outline px-6 py-3 text-sm cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
      {!showAll && (
        <div className="text-center mt-10">
          <Link href="/projects" className="btn-outline px-6 py-3 text-sm">
            View All Projects
          </Link>
        </div>
      )}
    </SectionWrapper>
  );
}
