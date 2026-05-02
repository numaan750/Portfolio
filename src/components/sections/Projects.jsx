"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { scaleIn, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/data";

const FILTERS = [
  "All",
  "AI / Full-Stack",
  "E-Commerce",
  "SaaS / Productivity",
  "Dashboard / Admin",
  "Real Estate",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="pt-10 pb-10">
      <SectionHeader
        tag="Projects"
        title="What I've Built"
        subtitle="A selection of real-world projects — from AI platforms to e-commerce stores."
      />
      <motion.div variants={fadeUp} className="flex gap-2.5 flex-wrap mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4.5 py-2 rounded-lg border font-semibold text-[0.82rem] cursor-pointer transition-all duration-250 ${
              activeFilter === f
                ? "border-[#6366f1] bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-white"
                : "border-[#6366f1]/20 bg-transparent text-slate-400"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6 max-sm:grid-cols-1">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
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
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&type=jpeg`}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/70 via-[#0d0d1a]/20 to-transparent" />
                <span className="absolute top-3.5 left-4 bg-gradient-to-br from-[#6366f1] to-[#22d3ee] backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-[0.72rem] font-bold text-slate-100 tracking-[0.06em]">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="absolute top-3.5 right-3.5 bg-gradient-to-br from-[#6366f1] to-[#22d3ee] rounded-full px-2.5 py-1 text-[0.68rem] font-extrabold text-white tracking-[0.06em] uppercase">
                    ★ Featured
                  </span>
                )}
              </div>
              <div className="px-5.5 py-6">
                <h3 className="font-extrabold text-[1.1rem] text-slate-100 mb-2.5">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-[0.88rem] leading-[1.7] mb-4.5 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full border border-[#6366f1]/20 text-[0.72rem] font-semibold text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[0.83rem] px-4.5 py-2.5"
                >
                  Live Demo <HiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
