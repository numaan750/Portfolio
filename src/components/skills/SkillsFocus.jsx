import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const FOCUS_AREAS = [
  { title: "UI Development", description: "High-fidelity pages with accessible interactions and responsive layout." },
  { title: "Application Logic", description: "Clean data flows, state handling, and API integration." },
  { title: "Performance", description: "Optimized assets, lazy loading, and fast mobile rendering." },
];

export default function SkillsFocus() {
  return (
    <SectionWrapper className="pt-15">
      <SectionHeader
        tag="Focus"
        title="Focus areas that power successful web products"
        subtitle="A disciplined approach to architecture, design, and scalability."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {FOCUS_AREAS.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            <h3 className="relative z-10 text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="relative z-10 text-slate-300 leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}