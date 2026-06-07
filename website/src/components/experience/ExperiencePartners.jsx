import SectionWrapper from "@/components/ui/SectionWrapper";

const PARTNERS = ["NoorPak", "Filim6", "Devsrank", "VShop", "EliteImage"];

export default function ExperiencePartners() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="rounded-4xl border border-white/10 bg-[#0f1320]/90 p-8">
        <p className="section-tag">Partners</p>
        <h2 className="section-title">Businesses and Brands I've Worked With</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/90 px-4 py-5 text-center text-slate-200 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              <span className="relative z-10">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}