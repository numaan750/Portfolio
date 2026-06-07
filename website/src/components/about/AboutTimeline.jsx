import SectionWrapper from "@/components/ui/SectionWrapper";

const TIMELINE = [
{
date: "2022",
label: "Learning the Fundamentals",
detail:
"Started my Computer Science journey and built a strong understanding of programming, problem-solving, and software development fundamentals.",
},
{
date: "2023",
label: "Exploring Full-Stack Development",
detail:
"Focused on the MERN stack, learning how to build complete web applications using React, Node.js, Express, and MongoDB.",
},
{
date: "2024",
label: "Working on Real Projects",
detail:
"Began developing websites and web applications for clients, gaining practical experience in development, deployment, and project collaboration.",
},
{
date: "2025",
label: "Building Scalable Solutions",
detail:
"Worked on business websites, e-commerce platforms, dashboards, and SaaS applications with a focus on performance, security, and scalability.",
},
{
date: "2026",
label: "Expanding into AI & Modern Technologies",
detail:
"Integrated AI-powered features and modern web technologies into projects, helping businesses create smarter and more efficient digital solutions.",
},
];


export default function AboutTimeline() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="mb-8 text-center sm:text-left">
        <p className="section-tag">Timeline</p>
        <h2 className="section-title">My Learning & Growth Journey</h2>
        <p className="section-sub">A look at how my skills, experience, and projects have evolved over the years, from learning the fundamentals to building modern web applications and business solutions.</p>
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