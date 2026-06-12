"use client";

import { useState, useEffect } from "react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { scaleIn, fadeUp } from "@/lib/animations";
import { projects as fallbackProjects } from "@/lib/data";
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
  const [projectList, setProjectList] = useState(fallbackProjects);
  const [visibleImages, setVisibleImages] = useState({});

  useEffect(() => {
    const fetchDbProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) return;
        const dbProjects = await res.json();

        if (dbProjects && dbProjects.length > 0) {
          // Merge database projects with fallbacks.
          // Database projects have higher priority and will overwrite any fallback with matching slug or title.
          const merged = [...dbProjects];

          fallbackProjects.forEach((fallback) => {
            const isOverridden = dbProjects.some(
              (db) =>
                db.slug === fallback.slug ||
                db.title.toLowerCase() === fallback.title.toLowerCase()
            );
            if (!isOverridden) {
              merged.push(fallback);
            }
          });

          // Ensure standard mapping for IDs
          const mapped = merged.map((p, idx) => ({
            ...p,
            id: p.id || p._id || `db-${idx}`,
            tech: p.tech || [],
            category: p.category || 'General',
            gradient: p.gradient || 'from-violet-500 to-pink-500',
          }));

          setProjectList(mapped);
        }
      } catch (err) {
        console.warn("Backend offline or unreachable. Using offline fallback projects.", err);
      }
    };

    fetchDbProjects();
  }, []);

  const filtered =
    activeFilter === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);
  const displayedProjects = showAll ? filtered : filtered.slice(0, 4);

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
              onClick={() => setActiveFilter(f)}
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-sm:grid-cols-1">
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
                className="glass project-card overflow-hidden group"
              >
                <div className="h-[250px] relative overflow-hidden bg-[#0d0d1a]">
                  {visibleImages[project.id] !== false && (
                    <OptimizedImage
                      src={imageSrc}
                      alt={project.imageAlt || project.title}
                      width={340}
                      height={250}
                      className="w-full h-full group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d0d1a]/70 via-[#0d0d1a]/20 to-transparent" />
                  <span className="absolute top-3.5 left-4 bg-linear-to-br from-[#6366f1] to-[#22d3ee] backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-[0.72rem] font-bold text-slate-100 tracking-[0.06em]">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="absolute top-3.5 right-3.5 bg-linear-to-br from-[#6366f1] to-[#22d3ee] rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold text-white tracking-[0.06em] uppercase">
                      ★ Featured
                    </span>
                  )}
                </div>
                <div className="px-5.5 py-6">
                  <h3 className="font-extrabold text-[1.1rem] text-slate-100 mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-[0.88rem] leading-[1.7] mb-4.5 line-clamp-3">
                    {richTextToPlainText(project.description)}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech && project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full border border-[#6366f1]/20 text-[0.72rem] font-semibold text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-outline text-[0.83rem] px-4.5 py-2.5 inline-flex items-center gap-1"
                    >
                      View Details
                    </Link>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-[0.83rem] px-4.5 py-2.5 inline-flex items-center gap-1 border-[#6366f1]/20 hover:bg-[#6366f1]/10"
                      >
                        Live Demo <HiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
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
