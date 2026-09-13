import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

export const metadata = {
    title: "Services | Soft Line Devs",
    description:
        "Discover professional web design, full-stack development, and SEO services tailored for modern businesses.",
    keywords: [
        "web development services",
        "UI UX services",
        "SEO services",
        "Next.js developer",
        "portfolio services",
        "custom web development",
    ],
};
const SERVICES = [
    {
        title: "UI / UX Design",
        slug: "ui-ux",
        description: "Creating intuitive, visually appealing, and user-friendly interfaces that help users navigate effortlessly while strengthening your brand and improving engagement.",
        image:
            "/home-images/services-images/ui-ux-design.png",
        details: [
            "User research and wireframing",
            "Interactive prototypes and design systems",
            "Responsive website and web app design",
            "Accessibility and usability best practices",
        ],
    },
    {
        title: "Full-Stack Development",
        slug: "development",
        description:
            "Building secure, scalable, and high-performance websites and web applications using modern technologies like MERN Stack and Next.js.",
        image:
            "/home-images/services-images/Full-Stack-Development.png",
        details: [
            "Custom web application development",
            "Secure APIs and authentication systems",
            "Scalable frontend and backend architecture",
            "Deployment and performance optimization",
        ],
    },
    {
        title: "SEO & Performance",
        slug: "seo",
        description: "Improving website speed, search visibility, and overall user experience to help businesses attract more visitors and achieve better online results.",
        image:
            "/home-images/services-images/seo.png",
        details: [
            "Technical SEO improvements",
            "Core Web Vitals optimization",
            "Structured metadata and schema setup",
            "Performance monitoring and analytics",
        ],
    },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-30">
                <section className="bg-[#0c1220] border-b border-white/5 py-20">
                    <div className="mycontainer text-center">
                        <p className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                            Services
                        </p>
                        <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                            Professional Web Solutions Built for Modern Businesses
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                            From user-focused design and full-stack development to SEO and performance optimization, I provide complete digital solutions that help businesses build a stronger online presence, improve user experience, and achieve long-term growth.                        </p>
                    </div>
                </section>

                <SectionWrapper id="services-overview" className="pt-15">
                    <SectionHeader
                        tag="We Offerings"
                        title="Services Designed Around Your Business Needs"
                        subtitle="Every business has unique goals. Whether you need a modern website, a custom web application, or better online visibility, I provide solutions tailored to your requirements and growth objectives."
                    />
                    <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service) => (
                            <a key={service.slug} href={`/services/${service.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/5 bg-[#0d1325] backdrop-blur-sm">
                                <div className="w-full p-4 pb-0 sm:p-3 sm:pb-0">
                                    <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                                    <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-300 line-clamp-2 group-hover:text-indigo-300 sm:text-[18px]">
                                        {service.title}
                                    </h3>
                                    <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-400 sm:text-[13px]">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto flex items-center gap-0.5 text-sm font-semibold text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
                                        <span>Learn more</span>
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </SectionWrapper>

                <SectionWrapper id="process" className="pt-15">
                    <SectionHeader
                        title="A Simple Process From Idea to Launch"
                        subtitle="Every project follows a clear and structured process to ensure smooth collaboration, efficient development, and successful delivery."
                    />
                    <div className="grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                label: "Discover",
                                text: "Understand your goals, business requirements, and target audience to create the right strategy for your project.",
                            },
                            {
                                label: "Design & Build",
                                text: "Design the experience, develop the solution, and implement the features needed to bring your vision to life.",
                            },
                            {
                                label: "Launch & Optimize",
                                text: "Deploy the project, test performance, and make improvements to ensure everything runs smoothly and efficiently.",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-[#0d1325] p-8 cursor-pointer transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                            >
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                                <p className="relative z-10 text-sm uppercase tracking-[0.3em] text-indigo-300">{item.label}</p>
                                <p className="relative z-10 mt-4 text-lg font-semibold text-white">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>

                <section className="py-12 sm:py-15">
                    <div className="mycontainer flex flex-col gap-6 sm:gap-8 lg:gap-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/10 bg-[#0d1325] p-6 sm:p-8 lg:p-10 shadow-[0_30px_120px_rgba(59,130,246,0.1)] lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-indigo-300">Let's Build Something Great</p>
                            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">Ready to Start Your Next Project?</h2>
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                                Whether you need a website, web application, or performance-focused solution, I can help transform your ideas into a modern digital product built for growth.
                            </p>
                        </div>
                        <Link href="/contact" className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 transition hover:bg-slate-100 whitespace-nowrap">
                            Get In Touch
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
