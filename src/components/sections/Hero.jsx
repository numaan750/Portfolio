"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo } from "@/lib/data";

const floatAnim = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20 pt-28 md:pt-32"
    >
      <div className="mesh-bg" />
      <div className="dot-grid" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[8%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.35),transparent_70%)] blur-[60px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[15%] left-[5%] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.28),transparent_70%)] blur-[60px] pointer-events-none"
      />

      <div className="relative z-10 mycontainer">
        <div className="grid grid-cols-1 items-center gap-12 w-full justify-items-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-xs font-semibold text-indigo-300 tracking-[0.06em] uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] inline-block animate-[pulse_2s_infinite]" />
              Available for Work
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-4 text-slate-100"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[clamp(1.2rem,3vw,1.75rem)] font-bold text-slate-400 mb-4 tracking-[-0.01em]"
            >
              {personalInfo.title}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-[90%] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[900px] mb-4 mx-auto px-2 sm:px-0 text-center"
            >
              {personalInfo.summary}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex gap-3.5 flex-wrap mb-4 justify-center"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#projects");
                }}
                className="btn-primary"
              >
                View My Work <HiArrowRight />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="btn-outline"
              >
                Get In Touch
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-3 justify-center"
            >
              {[
                {
                  icon: <FaGithub />,
                  href: personalInfo.github,
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: personalInfo.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaEnvelope />,
                  href: `mailto:${personalInfo.email}`,
                  label: "Email",
                },
                {
                  icon: <FaPhone />,
                  href: `tel:${personalInfo.phone}`,
                  label: "Phone",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="social-icon"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
