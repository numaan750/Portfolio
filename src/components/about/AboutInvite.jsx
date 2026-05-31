import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutInvite() {
  return (
    <SectionWrapper className="pt-15 pb-15 bg-[#07070f]">
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1020]/90 p-6 sm:p-8 lg:p-10 text-center transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_30%)] pointer-events-none" />
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-10" />
        <div className="relative z-20 mx-auto max-w-xl">
          <p className="section-tag">Let's Collaborate</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            Ready to turn your idea into a modern website?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Polished design, smooth interactions, and reliable launch support — let's build something great together.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="/contact" className="btn-primary px-6 py-3 w-full sm:w-auto justify-center">
              Book a Call
            </a>
            <a href="/projects" className="btn-outline px-6 py-3 w-full sm:w-auto justify-center">
              Review Portfolio
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}