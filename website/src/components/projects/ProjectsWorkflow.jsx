import SectionWrapper from "@/components/ui/SectionWrapper";

const WORKFLOW = [
  { title: "Discovery", subtitle: "Understand product goals and audience needs." },
  { title: "Design", subtitle: "Build a visual system that communicates trust." },
  { title: "Development", subtitle: "Implement responsive pages and backend logic." },
  { title: "Launch", subtitle: "Deploy fast with analytics and support built in." },
];

export default function ProjectsWorkflow() {
  return (
    <SectionWrapper className="pt-14 pb-16 bg-[#07070f]">
      <div className="rounded-4xl border border-white/10 bg-[#0f1320]/90 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {WORKFLOW.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#6366f1]/10 text-sm font-bold text-[#c7d2fe]">{index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300 leading-7">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

