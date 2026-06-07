"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq" className="pt-15">
      <SectionHeader
        tag="FAQ"
        title="Frequently Asked Questions"
subtitle="Find answers to common questions about my services, development process, timelines, and project collaboration."
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col lg:flex-row relative mt-8 items-center"
      >
        {" "}
        <div className="w-full lg:w-[50%] flex flex-col justify-center py-6 z-20 relative lg:mr-[-60px] bg-[#0f0f1a] rounded-[1.5rem] shadow-xl min-h-[350px]">
          <div className="flex flex-col z-10">
            {faqs.map((faq, index) => {
              const isActive = openIndex === index;

              return (
                <div
                  key={faq.id || index}
                  onClick={() => setOpenIndex(index)}
                  className={`flex items-center justify-between px-6 py-5 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.04] rounded-2xl"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                          : "bg-slate-500"
                      }`}
                    />
                    <span
                      className={`font-medium text-[1.05rem] transition-colors duration-300 ${
                        isActive ? "text-[#22d3ee]" : "text-slate-300"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <FaChevronRight
                    className={`flex-shrink-0 transition-colors duration-300 ml-4 ${
                      isActive ? "text-[#22d3ee]" : "text-slate-500"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative flex mt-6 lg:mt-0 z-10">
          <div className="w-full h-full bg-linear-to-br from-[#6366f1] to-[#22d3ee] rounded-[1.5rem] p-8 md:p-12 md:pl-25 flex flex-col justify-center min-h-95 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
            <AnimatePresence mode="wait">
              {faqs[openIndex] && (
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {faqs[openIndex].question}
                  </h3>
                  <p className="text-white/90 text-[1.05rem] leading-relaxed font-medium">
                    {faqs[openIndex].answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

