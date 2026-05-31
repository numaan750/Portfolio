import SectionWrapper from "@/components/ui/SectionWrapper";

const TIMELINE = [
  {
    date: "2021",
    label: "Started Computer Science Degree",
    detail: "Began Bachelor's in Computer Science at Lahore Leads University. Started learning programming fundamentals, data structures, and web basics.",
  },
  {
    date: "2022",
    label: "Learned MERN Stack",
    detail: "Mastered React, Node.js, Express, and MongoDB. Built multiple practice projects to strengthen full-stack development skills.",
  },
  {
    date: "2023",
    label: "First Freelance Projects",
    detail: "Delivered first real client projects — landing pages, portfolios, and small business websites. Gained hands-on experience with deployment and client communication.",
  },
  {
    date: "2024",
    label: "Production-Ready Full-Stack Apps",
    detail: "Built and launched full-stack MERN applications including e-commerce stores, admin dashboards, and SaaS platforms for real clients.",
  },
  {
    date: "2025",
    label: "AI-Powered Platforms & Full-Time Role",
    detail: "Joined DevsRank as MERN Stack Developer. Integrated OpenAI, Claude, and Gemini APIs into production apps. Delivered AI-powered platforms for global clients.",
  },
];

export default function AboutTimeline() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="mb-8 text-center sm:text-left">
        <p className="section-tag">Timeline</p>
        <h2 className="section-title">My Journey as a Developer</h2>
        <p className="section-sub">From learning the basics to building AI-powered production applications.</p>
      </div>

      <div className="relative">
        <div className="hidden sm:block absolute left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6366f1] to-[#22d3ee] rounded-full" />

        <div className="flex flex-col gap-6">
          {TIMELINE.map((item) => (
            <div key={item.date} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">

              <div className="flex sm:flex-col items-center gap-3 sm:gap-1 shrink-0">
                <div className="w-[42px] h-[42px] rounded-full bg-linear-to-br from-[#6366f1] to-[#22d3ee] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white text-[0.65rem] font-extrabold">{item.date}</span>
                </div>
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-[#0d0d1a]/90 p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-7">{item.detail}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}