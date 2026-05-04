"use client";

import { motion } from "framer-motion";
import { FaSearch, FaPaintBrush, FaCode, FaRocket } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { processSteps } from "@/lib/data";

const icons = {
  FaSearch,
  FaPaintBrush,
  FaCode,
  FaRocket,
};

export default function Process() {
  return (
    <SectionWrapper id="process" className="pt-[40px] pb-[40px]">
      <SectionHeader
        tag="My Process"
        title="How I Work"
        subtitle="A streamlined workflow to bring your ideas to life efficiently."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]"
      >
        {processSteps.map((step) => {
          const Icon = icons[step.icon];

          return (
            <motion.div
              key={step.id}
              variants={fadeUp}
              className="relative p-[32px] rounded-[16px] overflow-hidden group hover:-translate-y-[8px] transition-transform duration-[300ms] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0)] to-[rgba(34,211,238,0)] group-hover:from-[rgba(99,102,241,0.05)] group-hover:to-[rgba(34,211,238,0.05)] transition-colors duration-[500ms] pointer-events-none" />
              <div className="absolute top-[-24px] right-[12px] text-[112px] font-[900] text-[rgba(255,255,255,0.03)] group-hover:text-[rgba(99,102,241,0.08)] transition-colors duration-[300ms] select-none pointer-events-none">
                0{step.id}
              </div>
              <div className="relative z-[10] w-[56px] h-[56px] rounded-[12px]  flex items-center justify-center  text-[24px] mb-[24px] text-[#22d3ee] border border-[rgba(99,102,241,0.2)] bg-gradient-to-br  from-[rgba(99,102,241,0.2)]  to-[rgba(34,211,238,0.2)] group-hover:scale-[1.1] transition-transform duration-[300ms]">
                {Icon && <Icon />}
              </div>
              <div className="relative z-[10]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                  <span className="text-[11px] uppercase tracking-[1px] font-[800] text-[#a5b4fc] bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] px-[10px] py-[4px] rounded-[999px]">
                    Step {step.id}
                  </span>
                </div>
                <h3 className="font-[800] text-[18px] text-[#f1f5f9] mb-[12px]">
                  {step.title}
                </h3>
                <p className="text-[#94a3b8] text-[14px] leading-[24px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
