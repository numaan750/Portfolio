import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ProjectsHero() {
  return (
    <SectionWrapper className="pt-24 pb-16 bg-[#07070f]">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="section-tag">Projects</p>
          <h1 className="section-title">Showcasing polished web experiences with strong visual impact.</h1>
          <p className="section-sub max-w-xl">
            A selection of websites, dashboards, and AI-first experiences designed to feel premium and perform smoothly across screens.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "E-commerce launches",
              "AI-enabled apps",
              "Real estate platforms",
              "Admin dashboards",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0b1220]/90 aspect-square">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            alt="Project showcase"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

