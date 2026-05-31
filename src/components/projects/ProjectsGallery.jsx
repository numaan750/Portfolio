import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/data";

export default function ProjectsGallery() {
  return (
    <SectionWrapper className="pt-14 pb-16">
      <SectionHeader
        tag="Gallery"
        title="A broad portfolio of modern web experiences"
        subtitle="Projects are presented with clean visuals and a clear product story for each solution."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.slice(0, 6).map((project) => (
          <div key={project.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90">
            <img src={`https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80`} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300 leading-7">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

