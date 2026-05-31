import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactHero() {
  return (
    <SectionWrapper id="contact" className="pt-15 bg-[#07070f]">
      <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#0f1320]/90 p-10 text-center transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none z-10" />
        <div className="relative z-20">
          <p className="section-tag">Contact</p>
          <h1 className="section-title">Let's build something exceptional together.</h1>
          <p className="section-sub max-w-2xl mx-auto">
            Share your project details and I'll respond with a clear plan, realistic timeline, and design-first approach.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}