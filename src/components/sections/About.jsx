"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { personalInfo } from "@/lib/data";

const infoItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${personalInfo.location}`,
  },
  { icon: <FaCode />, label: "Focus", value: "Full-Stack MERN", href: null },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="pt-10 pb-10">
      <SectionHeader
        tag="About Me"
        title="Who I Am"
        subtitle="A passionate MERN developer crafting clean, scalable web applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        <motion.div variants={fadeLeft} className="h-full">
          <div className="glass px-5 sm:px-8 py-7 sm:py-9 h-full flex flex-col">
            <h3 className="font-extrabold text-xl mb-4 bg-gradient-to-br from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent w-max">
              My Story
            </h3>
            <p className="text-slate-400 leading-[1.85] mb-4 text-[0.97rem]">
              {personalInfo.summary}
            </p>
            <p className="text-slate-400 leading-[1.85] text-[0.97rem]">
              I love turning complex problems into elegant, user-friendly
              solutions. Whether it's a pixel-perfect UI or a scalable REST API,
              I care deeply about code quality, performance, and great user
              experiences.
            </p>

            <div className="mt-auto pt-7">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5.5 py-2.5"
              >
                View Linkedin Profile
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeRight} className="flex flex-col gap-3 h-full">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i}
              whileHover={{ x: 4 }}
            >
              <a
                href={item.href ?? undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="glass flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 transition-colors hover:border-[#6366f1]/40 block"
              >
                <div className="w-[42px] h-[42px] rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#22d3ee]/20 flex items-center justify-center text-indigo-300 text-[1.1rem] shrink-0">
                  {item.icon}
                </div>

                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-[0.08em] mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-slate-100 font-semibold text-[0.95rem]">
                    {item.value}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div variants={fadeUp} className="glass p-4 sm:p-5 mt-auto">
            <div className="grid grid-cols-3 gap-0">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "15+", label: "Technologies" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center py-1 ${i < 2 ? "border-r border-[#6366f1]/20" : ""}`}
                >
                  <div className="gradient-text font-black text-2xl">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
