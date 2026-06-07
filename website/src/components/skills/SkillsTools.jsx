import SectionWrapper from "@/components/ui/SectionWrapper";

const TOOLS = [
  "VS Code",
  "GitHub",
  "Stripe",
  "Vercel",
  "Postman",
  "MongoDB Atlas",
  "Cloudinary",
  "Figma",
  "Adobe Photoshop",
  "Google Analytics",
  "Google Search Console",
  "Ahrefs",
];

export default function SkillsTools() {
  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="rounded-4xl border border-white/10 bg-[#0f1320]/90 p-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="section-tag">Toolset</p>
            <h2 className="section-title">Tools I Use Every Day</h2>
            <p className="section-sub max-w-xl">
From coding and design to deployment and SEO, these are the tools I rely on
  to create fast, scalable, and user-friendly digital experiences.            </p>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
            {TOOLS.map((tool) => (
              <div
                key={tool}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/90 px-5 py-6 text-center text-slate-200 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                <p className="relative z-10 text-sm font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}