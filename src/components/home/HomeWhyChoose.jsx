import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const REASONS = [
  {
    title: "Clean & Scalable Code",
    detail: "I write maintainable, well-structured code using best practices — easy to scale and hand off to any team.",
  },
  {
    title: "Full-Stack Expertise",
    detail: "From pixel-perfect UI to secure backend APIs — I handle the complete stack so you don't need multiple developers.",
  },
  {
    title: "AI Integration Experience",
    detail: "I have hands-on experience integrating OpenAI, Claude, and Gemini APIs into real production applications.",
  },
];

export default function HomeWhyChoose() {
  return (
    <SectionWrapper className="pt-15">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <SectionHeader
            tag="Why Work With Me"
            title="A Developer Who Delivers, Not Just Codes"
            subtitle="I focus on real results — fast delivery, clean UI, and production-ready code that works."
          />
          <div className="space-y-4">
            {REASONS.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <h3 className="relative z-10 text-xl font-semibold text-white">{item.title}</h3>
                <p className="relative z-10 mt-2 text-slate-300 leading-7">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" overflow-hidden rounded-4xl border border-white/10 bg-[#0d0d1a]/90  p-6 h-full min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1000&q=80"
            alt="Developer working"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}