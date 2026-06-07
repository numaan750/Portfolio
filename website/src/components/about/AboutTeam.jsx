import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";


const SERVICES = [
  {
  title: "UI / UX Design",
  slug: "ui-ux",
  description: "Designing intuitive, visually engaging, and user-focused interfaces that enhance usability and drive conversions. From wireframing and prototyping to responsive, pixel-perfect designs, every experience is crafted for clarity, accessibility, and seamless interaction.",
  image: "/home-images/services-images/ui-ux-design.png",
},
{
  title: "Full-Stack Development",
  slug: "development",
  description: "Building scalable, high-performance web applications using the MERN stack and modern technologies. From secure backend architectures and REST APIs to dynamic frontends and AI integrations, I deliver reliable solutions tailored to business growth.",
  image: "/home-images/services-images/Full-Stack-Development.png",
},
{
  title: "SEO & Performance",
  slug: "seo",
  description: "Optimizing websites for speed, search visibility, and exceptional user experience. Through technical SEO, Core Web Vitals improvements, and performance-focused development, I help businesses achieve higher rankings and better engagement.",
  image: "/home-images/services-images/seo.png",
},
];


export default function AboutTeam() {
  return (
    <SectionWrapper className="pt-15">
  <div className="mb-8 text-center sm:text-left">
    <p className="section-tag">How I Can Help</p>
    <h2 className="section-title">
      Solutions Built Around Your Business Goals
    </h2>
    <p className="section-sub">
      Whether you're launching a new idea, improving an existing platform, or growing your online presence, I provide modern web solutions designed to support your business objectives and long-term growth.
    </p>
  </div>

  <div className="grid gap-8 lg:grid-cols-3">
    {SERVICES.map((service) => (
      <Link
        key={service.title}
        href={`/services/${service.slug}`}
        className="group"
      >
        <div className="glass overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1">
          <div className="h-60 overflow-hidden bg-[#0b1220]">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>

            <p className="text-slate-300 leading-7">
              {service.description}
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</SectionWrapper>
  );
}