import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const GROWTH_ITEMS = [
  { title: "Improved page speed", stat: "+47%" },
  { title: "Reduced bounce", stat: "-23%" },
  { title: "Conversion uplift", stat: "+18%" },
];

export default function SkillsGrowth() {
  return (
    <SectionWrapper className="pt-15">
      <SectionHeader
        tag="Results"
        title="Skills that deliver measurable product improvement"
        subtitle="A performance-minded approach that improves both design quality and business metrics."
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