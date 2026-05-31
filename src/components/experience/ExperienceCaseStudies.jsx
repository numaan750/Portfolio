import SectionWrapper from "@/components/ui/SectionWrapper";

const CASES = [
  { title: "Analytics portal", highlight: "Clear KPI panels and conversion-oriented layout.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" },
  { title: "Brand website", highlight: "Modern landing page with strong storytelling and user flow.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
];

export default function ExperienceCaseStudies() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="section-tag">Case Studies</p>
          <h2 className="section-title">Experience in projects that need both design and architecture.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {CASES.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

