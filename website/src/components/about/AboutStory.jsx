import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const STORY_ITEMS = [
  {
    title: "Getting Started",
    description:
      "My journey began with learning web development fundamentals, focusing on JavaScript, React, and modern development practices while building small projects and improving my skills.",
  },
  {
    title: "Building Real Projects",
    description:
      "As my experience grew, I started developing websites, business platforms, and custom web applications, helping clients turn their ideas into functional digital products.",
  },
  {
    title: "Expanding My Expertise",
    description:
      "Today, I build modern web solutions using the MERN stack, Next.js, and AI technologies, creating scalable, user-friendly applications designed for real business growth.",
  },
];

export default function AboutStory() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <SectionHeader
        tag="My Journey "
        title="A Journey of Learning, Building, and Growth"
        subtitle="From learning the fundamentals of web development to building real-world applications, every project has helped shape my skills and experience."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {STORY_ITEMS.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden glass rounded-3xl border border-white/10 p-6 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
            <span className="relative z-10 inline-flex rounded-full bg-[#6366f1]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#c7d2fe]">
              {item.title}
            </span>
            <p className="relative z-10 mt-4 text-slate-300 leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}