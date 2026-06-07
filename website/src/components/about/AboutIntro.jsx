"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { FaBolt, FaBrain, FaMobileAlt, FaShieldAlt } from "react-icons/fa";


const infoItems = [
  { icon: <FaEnvelope />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaPhone />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <FaMapMarkerAlt />, label: "Location", value: personalInfo.location, href: `https://maps.google.com/?q=${personalInfo.location}` },
  { icon: <FaCode />, label: "Stack", value: "MERN + Next.js", href: null },
];

const highlights = [
  { icon: <FaBolt className="text-indigo-400 text-2xl" />, title: "Fast Project Delivery", desc: "Delivering high-quality websites and applications on time without compromising performance." },
  { icon: <FaBrain className="text-cyan-400 text-2xl" />, title: "Modern Web Solutions", desc: "Building scalable websites and web applications using the latest technologies and best practices." },
  { icon: <FaMobileAlt className="text-indigo-400 text-2xl" />, title: "Responsive User Experience", desc: "Creating seamless experiences that work perfectly across desktop, tablet, and mobile devices." },
  { icon: <FaShieldAlt className="text-cyan-400 text-2xl" />, title: "Secure & Scalable Development", desc: "Developing reliable solutions with clean architecture, strong security, and future growth in mind." },
];

export default function AboutIntro() {
  return (
    <SectionWrapper id="about" className="pt-15">
      <SectionHeader
        tag="About Me"
        title="Helping Businesses Build Modern Digital Experiences"
        subtitle="I create modern websites and web applications that combine clean design, strong performance, and scalable development to help businesses grow online."
      />

      <div className="flex flex-col lg:flex-row gap-8 mb-8">

        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90"
        >
          <img
            src="/images/about-images/Helping-Businesses-Build-Modern-Digital-Experiences.png"
            alt="Numaan Ali - MERN Stack Developer"
            className="w-full h-[280px] sm:h-[360px] lg:h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="w-full lg:w-1/2 glass px-6 sm:px-8 py-7 flex flex-col gap-5"
        >
          <div>
            <h3 className="font-extrabold text-xl mb-4 bg-linear-to-br from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent w-max">
              My Introduction
            </h3>
            <p className="text-slate-400 leading-[1.85] text-[0.97rem]">
              I'm Numaan Ali, a Full-Stack Web Developer with 2+ years of experience building modern websites and web applications. I specialize in the MERN stack and Next.js, creating fast, secure, and user-friendly digital solutions. My focus is on developing scalable products with clean code, strong performance, and seamless user experiences that help businesses grow and succeed online.            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d1a]/90 p-4 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-2 mb-2">
                  {h.icon}
                  <div className="font-bold text-slate-100 text-sm">{h.title}</div>
                </div>
                <div className="relative z-10 text-slate-400 text-xs leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>

          <div>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
              View LinkedIn Profile
            </a>
          </div>
        </motion.div>

      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        <motion.div variants={fadeLeft} className="w-full lg:w-1/2 flex flex-col gap-3">
          {infoItems.map((item, i) => (
            <motion.div key={item.label} variants={fadeUp} custom={i} whileHover={{ x: 4 }}>
              <a
                href={item.href ?? undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden glass flex items-center gap-4 px-5 py-4 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] block"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                <div className="relative z-10 w-[42px] h-[42px] rounded-xl bg-linear-to-br from-[#6366f1]/20 to-[#22d3ee]/20 flex items-center justify-center text-indigo-300 text-[1.1rem] shrink-0">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-[0.08em] mb-0.5">{item.label}</div>
                  <div className="text-slate-100 font-semibold text-[0.95rem]">{item.value}</div>
                </div>
              </a>
            </motion.div>
          ))}
          <motion.div variants={fadeUp} className="group relative overflow-hidden glass p-5 mt-1 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-3 gap-0">
              {[
                { value: "2+", label: "Years Exp." },
                { value: "18+", label: "Projects" },
                { value: "15+", label: "Clients" },
              ].map((s, i) => (
                <div key={s.label} className={`text-center py-1 ${i < 2 ? "border-r border-[#6366f1]/20" : ""}`}>
                  <div className="gradient-text font-black text-2xl">{s.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="w-full lg:w-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90"
        >
          <img
            src="/images/about-images/Helping-Businesses-Build-Modern.png"
            alt="Developer coding"
            className="w-full h-[280px] sm:h-[360px] lg:h-full object-cover"
          />
        </motion.div>

      </div>
    </SectionWrapper>
  );
}