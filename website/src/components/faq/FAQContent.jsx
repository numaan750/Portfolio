"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiChevronDown } from "react-icons/hi";
import Link from "next/link";

const CATEGORIES = ["All", "Services", "Process", "Technical"];

const FAQ_ITEMS = [
  {
    id: 1,
    category: "Services",
    question: "What services do you offer?",
    answer: "I provide full-stack web development, custom web applications, UI/UX design, AI integrations, API development, and website optimization. Whether you need a business website, SaaS platform, or custom solution, I can help bring your idea to life.",
  },
  {
    id: 2,
    category: "Process",
    question: "What is your development process?",
    answer: "My process starts with understanding your goals and requirements (Discovery & Planning). From there, I design the user experience (UI/UX Design), develop the application (Development), perform rigorous testing, and ensure a smooth launch with ongoing support (Testing & Launch).",
  },
  {
    id: 3,
    category: "Process",
    question: "How long does a project usually take?",
    answer: "Project timelines depend on the scope and complexity. A simple website may take 1–2 weeks, while larger applications such as SaaS platforms or custom systems can take several weeks. A detailed timeline is provided before development begins.",
  },
  {
    id: 4,
    category: "Process",
    question: "How do we communicate during the project?",
    answer: "Clear communication is a priority. I provide regular progress updates and stay available through email, WhatsApp, Zoom, or your preferred communication channel to ensure everything stays on track.",
  },
  {
    id: 5,
    category: "Services",
    question: "Do you offer support after the project is completed?",
    answer: "Yes. I provide 30 days of complimentary support after launch for bug fixes and performance checks. I also offer monthly maintenance and retainer plans for ongoing updates and support.",
  },
  {
    id: 6,
    category: "Services",
    question: "Can you work with existing websites or applications?",
    answer: "Absolutely. Whether you need new features, design improvements, performance optimization, or maintenance, I can work with existing projects and help enhance their functionality and user experience.",
  },
  {
    id: 7,
    category: "Technical",
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js (Server-Side Rendering, App Router). I also work with TypeScript, Tailwind CSS, Redux, Stripe/Creem payment processors, and AI APIs (OpenAI, Anthropic Claude, Gemini).",
  },
  {
    id: 8,
    category: "Services",
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes, absolutely. I respect the intellectual property and confidentiality of my clients' business ideas. We can sign a mutual NDA before you share sensitive project details.",
  },
  {
    id: 9,
    category: "Technical",
    question: "How do you handle project payments and pricing?",
    answer: "Pricing is customized based on project scope (fixed budget or hourly). For new projects, we typically request a 50% deposit upfront, and the remaining 50% is divided into project milestones (e.g., design approval and final hand-off).",
  },
  {
    id: 10,
    category: "Services",
    question: "Do you design the user interfaces (UI/UX) as well?",
    answer: "Yes, I design clean, modern, and high-converting user interfaces. I focus on responsive layouts, high contrast, smooth animations, and premium aesthetics (such as dark mode and glassmorphism) tailored to your brand.",
  },
];

export default function FAQContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFAQs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mycontainer relative z-10 max-w-4xl">
      {/* Header section */}
      <div className="text-center mb-12">
        <span className="section-tag">Help Desk</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Find answers to common questions about our web development services, tech stack, and project delivery process.
        </p>
      </div>

      {/* Controls Container */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
          <input
            type="text"
            placeholder="Search questions or answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-rgba(255,255,255,0.04) border border-[#6366f1]/20 rounded-xl py-3 pl-12 pr-4 text-slate-200 outline-none placeholder-slate-400 focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition-all bg-[#07070f]/40 backdrop-blur-md"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 p-1 bg-white/5 border border-white/5 rounded-xl overflow-x-auto w-full md:w-auto scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "text-white bg-linear-to-br from-[#6366f1] to-[#22d3ee] shadow-md shadow-indigo-950/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4 min-h-[300px]">
        <AnimatePresence initial={false}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  layout
                  className={`glass border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-[#6366f1]/40 bg-[#0d0d1a]/85 shadow-lg shadow-indigo-950/10"
                      : "border-[#6366f1]/15 bg-slate-900/10 hover:border-[#6366f1]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left p-6 bg-transparent border-none cursor-pointer text-slate-100 font-semibold text-[1.05rem]"
                  >
                    <span>{item.question}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-[#22d3ee] text-xl flex-shrink-0"
                    >
                      <HiChevronDown />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-300 text-[0.95rem] leading-relaxed border-t border-[#6366f1]/10 bg-[#0d0d1a]/20">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              layout
              className="text-center py-12 glass border border-[#6366f1]/10"
            >
              <p className="text-slate-400">No questions found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-[#22d3ee] font-medium hover:underline cursor-pointer bg-transparent border-none"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Box */}
      <div className="glass p-8 md:p-10 border border-[#6366f1]/20 shadow-2xl text-center mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/5 to-[#22d3ee]/5 pointer-events-none" />
        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
          Still Have Questions?
        </h3>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto mb-6 relative z-10">
          If you couldn't find the answer you were looking for, please drop us a message and we'll get back to you as soon as possible.
        </p>
        <Link href="/contact" className="btn-primary relative z-10">
          Send Message
        </Link>
      </div>
    </div>
  );
}
