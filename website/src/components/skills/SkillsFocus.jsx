import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const FOCUS_AREAS = [
  {
    title: "Web Development",
    description:
      "Building modern, fast, and scalable websites and web applications using the latest technologies. From business websites to SaaS platforms, I create solutions that deliver exceptional user experiences.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing clean, intuitive, and user-focused interfaces that improve engagement and make digital products easy to use across all devices and screen sizes.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving search engine visibility through technical SEO, on-page optimization, and off-page strategies to help websites attract more organic traffic and grow online.",
  },
];

export default function SkillsFocus() {
  return (
    <SectionWrapper className="pt-15">
      <SectionHeader
        tag="Focus"
        title="Focused on What Matters Most"
        subtitle="Delivering impactful digital solutions through modern development, user-centered design, and effective SEO strategies."
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