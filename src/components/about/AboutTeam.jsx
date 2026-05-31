import SectionWrapper from "@/components/ui/SectionWrapper";

const OFFERINGS = [
  {
    name: "Freelance Projects",
    detail: "Available for freelance web development projects — from simple landing pages to complex full-stack applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Full-Time Remote Roles",
    detail: "Open to full-time remote opportunities where I can contribute as a MERN Stack or Full-Stack Developer.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutTeam() {
  return (
    <SectionWrapper className="pt-15">
      <div className="mb-8 text-center sm:text-left">
        <p className="section-tag">Availability</p>
        <h2 className="section-title">Open to Work</h2>
        <p className="section-sub">I am currently available for freelance projects and full-time remote roles.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {OFFERINGS.map((item) => (
          <div key={item.name} className="rounded-3xl border border-white/10 bg-[#0b1220]/90 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-[200px] sm:h-[260px] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{item.name}</h3>
              <p className="mt-3 text-slate-300 leading-7 text-sm sm:text-base">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}