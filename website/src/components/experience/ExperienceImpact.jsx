import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const IMPACTS = [
  { title: "Performance First", stat: "3x Faster", description: "Fast-loading websites optimized for speed, responsiveness, and smooth user interactions." },
  { title: "User-Centered Design", stat: "UX", description: "Clean and intuitive designs that create a positive experience and keep users engaged." },
  { title: "Business Growth", stat: "SEO", description: "SEO-ready and scalable solutions built to support visibility, conversions, and future growth." },
];

export default function ExperienceImpact() {
  return (
    <SectionWrapper>
      <SectionHeader
        tag="Impact"
        title="Creating Results That Matter"
        subtitle="My goal is to build websites and digital experiences that not only look great but also help businesses grow and achieve their objectives."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {IMPACTS.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6">
            <p className="text-3xl font-extrabold text-white">{item.stat}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300 leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

