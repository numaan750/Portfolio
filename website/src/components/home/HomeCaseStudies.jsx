import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const COMPARISONS = [
  {
    type: "before",
    label: "Common Challenges",
    color: "border-red-500/30 bg-red-500/5",
    labelColor: "bg-red-500/20 text-red-300 border-red-500/30",
    points: [
      "Slow-loading pages that increase bounce rates",
      "Poor mobile experience and inconsistent layouts",
      "Outdated designs that fail to engage users",
      "Limited scalability as business needs grow",
      "Security gaps that put data at risk",
      "Difficult maintenance and frequent technical issues",
    ],
  },
  {
    type: "after",
    label: "What I Deliver",
    color: "border-[#6366f1]/30 bg-[#6366f1]/5",
    labelColor: "bg-[#6366f1]/20 text-indigo-300 border-[#6366f1]/30",
    points: [
      "Fast, optimized websites built for performance",
      "Seamless experience across desktop, tablet, and mobile",
      "Modern interfaces focused on usability and conversions",
      "Scalable architecture ready for future growth",
      "Secure development following industry best practices",
      "Clean, maintainable code for long-term reliability",
    ],
  },
];

export default function HomeCaseStudies() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <SectionHeader
        tag="The Difference"
        title="Why Businesses Choose My Approach"
        subtitle="Delivering scalable, user-focused web solutions built for performance, reliability, and growth." />
      <div className="grid gap-6 lg:grid-cols-2">
        {COMPARISONS.map((item) => (
          <div key={item.type} className={`rounded-3xl border p-8 ${item.color}`}>
            <span className={`inline-flex mb-6 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${item.labelColor}`}>
              {item.label}
            </span>
            <ul className="space-y-4">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className={`mt-1 text-lg ${item.type === "before" ? "text-red-400" : "text-indigo-400"}`}>
                    {item.type === "before" ? "✕" : "✓"}
                  </span>
                  <span className="text-slate-300 leading-7">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}