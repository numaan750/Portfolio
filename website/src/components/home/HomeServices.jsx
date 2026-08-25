import Link from "next/link";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

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

export default function HomeServices() {
  return (
    <SectionWrapper id="services" className="pt-15">
      <SectionHeader
        tag="Services"
        title="Services I Offer"
        subtitle="Delivering end-to-end digital solutions that combine modern design, scalable development, and performance-driven strategies to help businesses grow, engage users, and achieve measurable results."
        subtitleClassName="max-w-none"
      />
      <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.title}
            href={`/services/${service.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/5 bg-[#0d1325] backdrop-blur-sm"
          >
            {/* IMAGE */}
            <div className="w-full p-4 pb-0 sm:p-3 sm:pb-0">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
              <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-300 line-clamp-2 group-hover:text-indigo-300 sm:text-[18px]">
                {service.title}
              </h3>
              <p className="mb-6 line-clamp-4 text-sm leading-6 text-slate-400 sm:text-[13px]">
                {service.description}
              </p>
              <div className="mt-auto flex items-center gap-0.5 text-sm font-semibold text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
                <span>Learn more</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}