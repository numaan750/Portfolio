import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const STORY_ITEMS = [
  {
    title: "Early start",
    description: "Started building websites with JavaScript and React while studying computer science.",
  },
  {
    title: "First product launch",
    description: "Delivered a complete SaaS landing page with live payment integration and custom CMS.",
  },
  {
    title: "AI features",
    description: "Integrated OpenAI and Claude APIs into experience-driven applications.",
  },
];

export default function AboutStory() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <SectionHeader
        tag="Story"
        title="From early experiments to polished production websites"
        subtitle="A journey of fast iteration, design improvement, and intentional decision-making."
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