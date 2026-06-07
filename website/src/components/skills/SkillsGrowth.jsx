import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const GROWTH_ITEMS = [
  {
    title: "Fast & Optimized Websites",
    stat: "100%",
  },
  {
    title: "Responsive User Experience",
    stat: "All Devices",
  },
  {
    title: "SEO-Friendly Development",
    stat: "Built-In",
  },
];

export default function SkillsGrowth() {
  return (
    <SectionWrapper className="pt-15">
      <SectionHeader
        tag="Results"
        title="Delivering Solutions That Create Real Impact"
        subtitle="Every project is built with a focus on performance, user experience, and long-term business growth."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {GROWTH_ITEMS.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 text-center cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            <p className="relative z-10 text-4xl font-extrabold text-white">{item.stat}</p>
            <p className="relative z-10 mt-3 text-slate-300 leading-7">{item.title}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}