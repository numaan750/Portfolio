"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiExpress,
  SiStripe,
  SiCloudinary,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { scaleIn } from "@/lib/animations";
import { skills } from "@/lib/data";

const iconMap = {
  SiNextdotjs: <SiNextdotjs />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiRedux: <SiRedux />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiGithub: <SiGithub />,
  SiStripe: <SiStripe />,
  SiCloudinary: <SiCloudinary />,
  TbApi: <TbApi />,
  SiJsonwebtokens: <MdSecurity />,
};

const categoryClasses = {
  Frontend: "bg-[#6366f1]/15 border-[#6366f1]/35 text-indigo-300",
  "State Mgmt": "bg-purple-500/15 border-purple-500/35 text-purple-300",
  Backend: "bg-cyan-400/15 border-cyan-400/30 text-cyan-300",
  Database: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  Security: "bg-amber-500/15 border-amber-500/30 text-amber-300",
  Tools: "bg-red-500/15 border-red-500/25 text-red-300",
  Payments: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
};

const categoryGradients = {
  Frontend: "from-[#6366f1]/60 to-[#6366f1]",
  "State Mgmt": "from-purple-500/60 to-purple-500",
  Backend: "from-cyan-400/60 to-cyan-400",
  Database: "from-emerald-500/60 to-emerald-500",
  Security: "from-amber-500/60 to-amber-500",
  Tools: "from-red-500/60 to-red-500",
  Payments: "from-indigo-500/60 to-indigo-500",
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[#0d0d1a]/40 pt-10 pb-10">
      <SectionHeader
        tag="Skills"
        title="What I Work With"
        subtitle="Technologies and tools I use to build robust, scalable applications."
      />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
        {skills.map((skill, i) => {
          const catClass =
            categoryClasses[skill.category] || categoryClasses["Tools"];
          const catGradient =
            categoryGradients[skill.category] || categoryGradients["Tools"];
          return (
            <motion.div
              key={skill.name}
              variants={scaleIn}
              custom={i}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(99,102,241,0.2)",
              }}
              className="glass px-5 py-5.5 cursor-default transition-all duration-250"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className={`w-[42px] h-[42px] rounded-xl border flex items-center justify-center text-xl shrink-0 ${catClass}`}
                >
                  {iconMap[skill.icon] ?? <TbApi />}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[0.92rem] text-slate-100 mb-0.5">
                    {skill.name}
                  </div>
                  <span
                    className={`text-[0.7rem] font-bold tracking-[0.08em] uppercase border rounded-full px-2 py-0.5 ${catClass}`}
                  >
                    {skill.category}
                  </span>
                </div>
                <div
                  className={`font-extrabold text-sm shrink-0 ${catClass.split(" ").find((c) => c.startsWith("text-"))}`}
                >
                  {skill.level}%
                </div>
              </div>
              <div className="skill-bar-track">
                <motion.div
                  className={`skill-bar-fill bg-linear-to-r ${catGradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

