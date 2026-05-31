import Link from "next/link";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const SERVICES = [
  {
    title: "UI / UX Design",
    slug: "ui-ux",
    description: "Clean, modern, and user-focused interfaces designed to convert. From wireframes to pixel-perfect layouts — built with responsiveness, accessibility, and smooth animations in mind.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Full-Stack Development",
    slug: "development",
    description: "End-to-end web applications built with the MERN stack and Next.js. Scalable REST APIs, secure authentication, AI integrations, and payment gateways — all in one place.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SEO & Performance",
    slug: "seo",
    description: "Fast-loading, search-engine-optimized websites with server-side rendering, Core Web Vitals improvements, semantic HTML, and meta tag strategies to rank higher and load faster.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomeServices() {
  return (
    <SectionWrapper id="services" className="pt-15">
      <SectionHeader
        tag="Services"
        title="What I Can Build For You"
        subtitle="From design to deployment — I deliver complete, production-ready web solutions tailored to your business goals."
        subtitleClassName="max-w-none"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link key={service.title} href={`/services/${service.slug}`} className="group">
            <div className="glass overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
              <div className="h-60 overflow-hidden bg-[#0b1220]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-7">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}

