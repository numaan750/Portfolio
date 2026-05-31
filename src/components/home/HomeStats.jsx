import SectionWrapper from "@/components/ui/SectionWrapper";

const STATS = [
  { label: "Projects Completed", value: "18+" },
  { label: "Years Experience", value: "2+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Client Retention", value: "95%" },
];

export default function HomeStats() {
  return (
    <SectionWrapper className="pt-15">
      <div className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#111827]/90 to-[#0f172a]/95 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-0" />
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">

          <div className="flex-1 space-y-4 text-center lg:text-left">
            <p className="section-tag">By The Numbers</p>
            <h2 className="section-title">Real experience, real results</h2>
            <p className="section-sub mx-auto lg:mx-0">
              2+ years of building production-ready web applications for real clients — from AI platforms to e-commerce stores and SaaS dashboards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[420px] shrink-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 border border-white/10 text-center lg:text-left cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <p className="relative z-10 text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="relative z-10 mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.1em] text-slate-400 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}