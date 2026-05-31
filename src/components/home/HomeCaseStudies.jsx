import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const COMPARISONS = [
  {
    type: "before",
    label: "Old Approach",
    color: "border-red-500/30 bg-red-500/5",
    labelColor: "bg-red-500/20 text-red-300 border-red-500/30",
    points: [
      "Slow page loads with unoptimized assets",
      "No mobile responsiveness",
      "Basic UI with no animations or transitions",
      "Hardcoded backend with no scalability",
      "No authentication or security layer",
      "Manual deployments with no CI/CD",
    ],
  },
  {
    type: "after",
    label: "My Approach",
    color: "border-[#6366f1]/30 bg-[#6366f1]/5",
    labelColor: "bg-[#6366f1]/20 text-indigo-300 border-[#6366f1]/30",
    points: [
      "Optimized performance with fast load times",
      "Fully responsive across all screen sizes",
      "Modern UI with smooth animations",
      "Scalable MERN stack architecture",
      "JWT-based secure authentication",
      "Deployed on Vercel with proper configuration",
    ],
  },
];

export default function HomeCaseStudies() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <SectionHeader
        tag="Before / After"
        title="The Difference a Good Developer Makes"
        subtitle="Here is what most websites look like — and what I deliver instead."
      />
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