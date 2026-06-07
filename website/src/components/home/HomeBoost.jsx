import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HomeBoost() {
  return (
    <SectionWrapper className=" bg-[#07070f]">
      <div className="rounded-3xl border border-white/10 bg-[#0c1221]/90 p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.24)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

          <div className="flex-1 space-y-5 text-center lg:text-left">
            <p className="section-tag">Ready to Innovate?</p>
            <h2 className="section-title">  Ready to bring your next project to life?</h2>
            <p className="section-sub mx-auto lg:mx-0">
              I help businesses and startups create modern, scalable, and high-performing web solutions that deliver exceptional user experiences and real business results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Full-Stack Web Development",
                "AI Integration & Automation",
                "Scalable & Secure Architecture",
                "Responsive User Experiences",
              ].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 p-4 text-slate-300 text-sm cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

                  <span className="relative z-10">{item}</span>

                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[420px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/90">
            <img
              src="/home-images/Ready-to-bring-your-next-project-to-life.png"
              alt="Developer coding"
              className="w-full h-[280px] sm:h-[340px] lg:h-[420px] object-cover"
            />
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}