import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HomeCta() {
  return (
    <SectionWrapper className="pt-15 pb-15">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#111827] via-[#0b1021] to-[#0a0f1f] p-6 sm:p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.32)] transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)] pointer-events-none" />
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-10" />
        <div className="relative z-20 mx-auto max-w-2xl space-y-5">
          <p className="section-tag">Let's Work Together</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Have a project in mind? Let's build something great.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mx-auto max-w-lg">
            I am available for freelance projects and full-time remote roles. Let's discuss your idea and turn it into a production-ready application.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="btn-primary px-6 py-3 w-full sm:w-auto justify-center">
              Hire Me
            </a>
            <a href="/projects" className="btn-outline px-6 py-3 w-full sm:w-auto justify-center">
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}