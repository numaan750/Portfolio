import SectionWrapper from "@/components/ui/SectionWrapper";

// HomePartners.jsx
const PARTNERS = ["Devsrank", "NoorPak", "Filim6", "VShop", "Ananda", "AI Soulmate", "EliteImage"];

export default function HomePartners() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f1320]/90 p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left - Text */}
        <div className="text-center lg:text-left shrink-0">
          <p className="section-tag">Trusted by</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Brands That Grow With Me
          </h2>
        </div>

        {/* Right - Brands */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
          {PARTNERS.map((brand) => (
            <span
              key={brand}
              className="rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-2.5 text-sm font-semibold text-slate-200"
            >
              {brand}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}