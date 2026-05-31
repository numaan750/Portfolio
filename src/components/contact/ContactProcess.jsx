import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const STEPS = [
  { title: "Share brief", description: "Tell me what you need, your goals, and your timeline." },
  { title: "Review proposal", description: "Receive a clear plan, deliverables, and production estimate." },
  { title: "Launch support", description: "Get fast deployment and ongoing improvements after launch." },
];

export default function ContactProcess() {
  return (
    <SectionWrapper className="pt-15 pb-15">
      <SectionHeader
        tag="Process"
        title="A simple plan for getting started with a website project"
        subtitle="A transparent process that keeps the focus on your goals and delivery." 
      />
      <div className="grid gap-6 md:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
            <h3 className="relative z-10 text-xl font-semibold text-white">{step.title}</h3>
            <p className="relative z-10 mt-3 text-slate-300 leading-7">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}