import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const IMPACTS = [
  { title: "Accelerated launches", stat: "3x faster", description: "Streamlined development and deployment for modern websites." },
  { title: "Usability improvements", stat: "+26%", description: "Improved engagement with clearer content structure and navigation." },
  { title: "Visual polish", stat: "100%", description: "Pixel-perfect page sections designed for consistent brand impact." },
];

export default function ExperienceImpact() {
  return (
    <SectionWrapper>
      <SectionHeader
        tag="Impact"
        title="Experience that helps products move faster and look more professional"
        subtitle="The focus is on delivering value through both code quality and design clarity."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {IMPACTS.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6">
            <p className="text-3xl font-extrabold text-white">{item.stat}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300 leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

