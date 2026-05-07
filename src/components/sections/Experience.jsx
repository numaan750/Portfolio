"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { experience } from "@/lib/data";

export default function Experience() {
  const work = experience.filter((e) => e.type === "work");
  const edu = experience.filter((e) => e.type === "education");

  return (
    <SectionWrapper id="experience" className="pt-10 pb-10">
      <SectionHeader
        tag="Experience & Education"
        title="My Journey"
        subtitle="Professional milestones and academic background that shaped my expertise."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={fadeLeft}>
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-[36px] h-[36px] rounded-xl bg-linear-to-br from-[#6366f1]/25 to-[#22d3ee]/25 flex items-center justify-center text-indigo-300 text-base">
              <FaBriefcase />
            </div>
            <h3 className="font-extrabold text-[1.1rem]">Work Experience</h3>
          </div>

          <div className="relative pl-7">
            <div className="timeline-line absolute left-1.5 top-2 bottom-2" />
            {work.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`relative ${i < work.length - 1 ? "mb-8" : "mb-0"}`}
              >
                <div className="timeline-dot absolute -left-[29px] top-1" />

                <div className="glass px-5 py-5.5">
                  <div className="flex justify-between items-start gap-2 flex-wrap mb-1.5">
                    <h4 className="font-extrabold text-[0.97rem] text-slate-100">
                      {item.title}
                    </h4>
                    <span className="text-[0.72rem] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-2.5 py-1 shrink-0 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-indigo-300 text-[0.83rem] font-semibold mb-3">
                    @ {item.company}
                  </div>
                  <ul className="m-0 pl-4 list-disc marker:text-slate-500">
                    {item.points.map((pt, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-[0.85rem] leading-[1.65] mb-1"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeRight}>
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-[36px] h-[36px] rounded-xl bg-linear-to-br from-[#6366f1]/25 to-[#22d3ee]/25 flex items-center justify-center text-indigo-300 text-base">
              <FaGraduationCap />
            </div>
            <h3 className="font-extrabold text-[1.1rem]">Education</h3>
          </div>

          <div className="relative pl-7">
            <div className="timeline-line absolute left-1.5 top-2 h-[100px]" />

            {edu.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative mb-8"
              >
                <div className="timeline-dot absolute -left-[29px] top-1" />
                <div className="glass px-5 py-5.5">
                  <div className="flex justify-between items-start gap-2 flex-wrap mb-1.5">
                    <h4 className="font-extrabold text-[0.97rem] text-slate-100">
                      {item.title}
                    </h4>
                    <span className="text-[0.72rem] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-2.5 py-1 shrink-0 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-indigo-300 text-[0.83rem] font-semibold mb-3">
                    {item.company}
                  </div>
                  <ul className="m-0 pl-4 list-disc marker:text-slate-500">
                    {item.points.map((pt, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-[0.85rem] leading-[1.65] mb-1"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="glass p-5 mt-5">
              <p className="text-slate-400 text-[0.82rem] font-semibold mb-3 uppercase tracking-[0.08em]">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Redux",
                  "REST APIs",
                  "Tailwind",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/25 text-indigo-300 text-[0.75rem] font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

