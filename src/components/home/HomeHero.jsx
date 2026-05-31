import SectionWrapper from "@/components/ui/SectionWrapper";

export default function HomeHero() {
  return (
    <SectionWrapper id="home" className="pt-24 pb-16">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#111827]/70 px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
            Premium full-stack design & development
          </span>
          <h1 className="text-[2.75rem] leading-[1.03] font-extrabold text-white max-w-3xl sm:text-[3.5rem]">
            Build a modern digital presence that converts visitors into customers.
          </h1>
          <p className="max-w-xl text-slate-300 text-[1rem] leading-8">
            Professional website experiences with clean visuals, strong UX, and responsive performance for every screen. Designed for founders, agencies, and SaaS brands.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="/contact" className="btn-primary inline-flex items-center justify-center max-w-max">
              Start a project
            </a>
            <a href="/projects" className="btn-outline inline-flex items-center justify-center max-w-max">
              View latest work
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Fast Delivery", value: "48h" },
              { label: "UX Audit", value: "Pro" },
              { label: "Performance", value: "A+" },
              { label: "Support", value: "24/7" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0d0d1a]/80 p-4 text-center">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#111827] to-[#0d0d1a] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.35)] aspect-square">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
            alt="Modern dashboard layout"
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-[#020617]/80 p-5 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#22d3ee]">Featured design</p>
            <h2 className="mt-3 text-2xl font-bold text-white">SaaS growth dashboard with intuitive controls</h2>
            <p className="mt-2 text-slate-400">Engaging UI that helps users understand workflows and metrics at a glance.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

