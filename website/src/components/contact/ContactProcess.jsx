import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const STEPS = [
{
title: "Share Your Requirements",
description:
"Tell me about your project, goals, or inquiry through the contact form, and provide any important details you'd like to discuss.",
},
{
title: "Review & Discussion",
description:
"I'll review your message, understand your requirements, and get back to you to discuss the best approach and possible solutions.",
},
{
title: "Plan & Get Started",
description:
"Once everything is aligned, we'll define the next steps and move forward with a clear plan tailored to your needs.",
},
];

export default function ContactProcess() {
  return (
    <SectionWrapper className="pt-15 pb-15">
      <SectionHeader
        tag="Process"
        title="What Happens Next?"
        subtitle="Once you submit your inquiry, I'll review your requirements and guide you through the next steps to ensure a smooth and efficient experience." 
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