import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const MILESTONES = [
  { time: "2023", focus: "Product launches", detail: "Delivered SaaS landing pages and full-stack MVPs." },
  { time: "2024", focus: "AI integrations", detail: "Added smart features using OpenAI and custom APIs." },
  { time: "2025", focus: "Performance", detail: "Focused on responsive builds that load fast everywhere." },
];

export default function ExperienceMilestones() {
  return (
    <SectionWrapper className="pt-14 pb-16">
      <SectionHeader
        tag="Milestones"
        title="Key development milestones in product delivery"
        subtitle="A concise summary of the work that shaped the current skill set." 
      />
      <div className="space-y-4">
        {MILESTONES.map((item) => (
          <div key={item.time} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 sm:grid sm:grid-cols-[90px_1fr] sm:items-center gap-4">
            <div>
              <p className="text-3xl font-extrabold text-white">{item.time}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.focus}</h3>
              <p className="mt-2 text-slate-300 leading-7">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

