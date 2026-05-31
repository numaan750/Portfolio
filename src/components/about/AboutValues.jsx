import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const VALUES = [
  { title: "Quality code", description: "Readable, maintainable, and organized for any team." },
  { title: "UX clarity", description: "Interface decisions guided by user behavior and conversion." },
  { title: "Responsive build", description: "Layouts that adapt smoothly from mobile to desktop." },
];

export default function AboutValues() {
  return (
    <SectionWrapper className="pt-15">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <div className="mb-4">
            <p className="section-tag">Values</p>
            <h2 className="section-title">The values behind every website and feature delivery</h2>
            <p className="section-sub">Consistency, performance, and trust are the foundation of every solution.</p>
          </div>
          <div className="space-y-4">
            {VALUES.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-4 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                <h3 className="relative z-10 text-xl font-semibold text-white">{item.title}</h3>
                <p className="relative z-10 mt-2 text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-4xl border border-white/10 bg-[#0b1220]/90 p-4">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
            alt="Detail-oriented workflow"
            className="h-[220px] sm:h-[320px] lg:h-[520px] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}