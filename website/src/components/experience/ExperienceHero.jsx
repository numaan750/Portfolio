import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ExperienceHero() {
  return (
    <SectionWrapper id="experience" className="pt-24 pb-16 bg-[#07070f]">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="section-tag">Experience</p>
          <h1 className="section-title">A proven track record in building real-world web products.</h1>
          <p className="section-sub max-w-xl">
            From early prototypes to polished launches, the experience spans startups, SaaS platforms, and production dashboards.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "MERN stack projects",
              "API integrations",
              "Mobile-ready UI",
              "Fast delivery",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b1220]/90 aspect-square">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"
            alt="Experienced developer working"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

