import SectionWrapper from "@/components/ui/SectionWrapper";

export default function SkillsCta() {
  return (
    <SectionWrapper className="pt-15 pb-15">
      <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#111827] via-[#0f1320] to-[#090b16] p-10 text-center cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        <p className="relative z-10 section-tag">Build</p>
        <h2 className="relative z-10 section-title">Turn your next product idea into a fast, responsive website.</h2>
        <p className="relative z-10 section-sub max-w-2xl mx-auto">
          Whether you need a marketing site, web app, or dashboard, the skills and tooling are ready to support your launch.
        </p>
        <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="/contact" className="btn-primary px-8 py-3">
            Start a brief
          </a>
          <a href="/projects" className="btn-outline px-8 py-3">
            Explore projects
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}