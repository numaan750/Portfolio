"use client";

import { motion } from "framer-motion";
import { FaQuoteRight, FaUser } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import HomePartners from "@/components/home/HomePartners";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="pt-15">
      <SectionHeader
        tag="Testimonials"
        title="Client Reviews"
        subtitle="What people are saying about my work and collaboration."
      />

      <div className="mb-10 sm:mb-14">
        <HomePartners />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            className="glass relative p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <FaQuoteRight className="text-[20px] sm:text-[24px] text-indigo-300/20 absolute top-3 right-3 group-hover:text-indigo-300/40 transition-colors duration-300" />
            <p className="text-slate-400 text-sm sm:text-[0.95rem] leading-relaxed sm:leading-[1.8] mb-6 sm:mb-8 italic relative z-10 font-light">
              &ldquo;{item.content}&rdquo;
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mt-auto relative z-10">
              <div className="relative">
                <div className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-800 border-2 border-indigo-500/20 relative z-10">
                  <FaUser className="text-indigo-400 text-[22px] sm:text-[24px]" />
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-100 tracking-wide">
                  {item.name}
                </h4>
                <p className="text-[0.7rem] sm:text-[0.78rem] text-cyan-400 font-semibold uppercase tracking-wider mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

