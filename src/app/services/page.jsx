import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";

const SERVICES = [
    {
        title: "UI / UX Design",
        slug: "ui-ux",
        description:
            "Designing polished interfaces focused on clarity, accessibility, and conversion. Every experience is optimized for modern devices, fast interaction, and brand consistency.",
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
        details: [
            "Research-led user flows and wireframes.",
            "High-fidelity prototypes for fast stakeholder review.",
            "Responsive UI systems built to scale.",
            "Accessibility checks and interaction polish.",
        ],
    },
    {
        title: "Full-Stack Development",
        slug: "development",
        description:
            "Building modern web applications with Next.js, Node, and robust APIs. Every project is created for performance, security, and easy expansion as your business grows.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        details: [
            "Scalable front-end and back-end architecture.",
            "API design with secure authentication.",
            "Server-side rendering and fast loading.",
            "Cloud-ready deployment and monitoring.",
        ],
    },
    {
        title: "SEO & Performance",
        slug: "seo",
        description:
            "Improving website visibility, speed, and conversion with SEO best practices and performance tuning. I help your pages rank higher and keep visitors engaged.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        details: [
            "Technical SEO audits and content recommendations.",
            "Core Web Vitals and speed optimization.",
            "Metadata, schema, and semantic structure.",
            "Analytics tracking and optimization reports.",
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
                            Web services built to grow your brand.
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                            Explore design, development, and SEO services with clear outcomes, polished visuals, and strategic execution for every stage of your digital project.
                        </p>
                    </div>
                </section>

                <SectionWrapper id="services-overview" className="pt-15">
                    <SectionHeader
                        tag="Explore"
                        title="Core services for modern web experiences"
                        subtitle="Choose the right service and dive into a full-paced process that covers planning, delivery, and measurable results."
                    />
                    <div className="grid gap-8 lg:grid-cols-3">
                        {SERVICES.map((service) => (
                            <article key={service.slug} className="group overflow-hidden rounded-4xl border border-white/10 bg-[#0b1325] shadow-[0_30px_100px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-2">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-linear-to-t from-black/85 via-black/60 to-transparent p-6">
                                        <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                                        <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 p-6">
                                    <ul className="space-y-3 text-slate-300">
                                        {service.details.map((detail) => (
                                            <li key={detail} className="flex gap-3">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                                    >
                                        View details
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </SectionWrapper>

                <SectionWrapper id="process" className="pt-15">
                    <SectionHeader
                        title="How I deliver strong digital work"
                        subtitle="Each service follows a polished process of discovery, design, execution, and refinement so your website looks great and performs even better."
                    />
                    <div className="grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                label: "Discover",
                                text: "Define goals, audience, and brand tone so every page supports business outcomes.",
                            },
                            {
                                label: "Design",
                                text: "Translate strategy into polished interfaces and interaction systems built for conversion.",
                            },
                            {
                                label: "Launch",
                                text: "Deploy the final experience with performance checks, SEO setup, and launch readiness.",
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

                <section className=" py-15">
                    <div className="mycontainer flex flex-col gap-10 rounded-4xl border border-white/10 bg-linear-to-br from-[#111620] to-[#08101d] p-10 shadow-[0_30px_120px_rgba(59,130,246,0.1)] lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Ready to build</p>
                            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Start your project with the right service.</h2>
                            <p className="mt-4 max-w-2xl text-slate-300">Whether you need UX design, a complete website, or SEO performance, I deliver expert support at every stage.</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                            Talk about a project
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
