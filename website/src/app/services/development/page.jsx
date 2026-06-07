import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="bg-[#08101d] border-b border-white/5 pt-35 pb-16">
          <div className="mycontainer">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-stretch">

              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="inline-flex w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  Full-Stack Development
                </p>
                <h1 className="mt-6 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-[1.2]">
                  Modern Websites Built for Performance, Growth, and Reliability
                </h1>
                <p className="mt-6 text-slate-300 leading-8 max-w-2xl">
                  I build fast, secure, and scalable websites using modern technologies like Next.js, React, Node.js, and MongoDB. Whether you need a business website, SaaS platform, dashboard, or custom web application, every project is developed with performance, usability, and long-term growth in mind.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Next.js & React", "Secure Backend Development", "API Integrations", "Responsive & SEO-Ready"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — image matches left height */}
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
                <img
                  src="/home-images/services-images/development/Modern-Websites-Built-for-Performance-Growth-and-Reliability.png"
                  alt="Full-Stack Development"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTION 2 ─── */}
        <section className="mycontainer py-16">
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">

            {/* Left card */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Everything You Need to Launch a Successful Website
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                From planning and development to deployment and optimization, I provide complete website development solutions. Every project is built with clean code, responsive design, and a strong technical foundation to ensure long-term success.
              </p>
              <ul className="mt-6 space-y-4 text-slate-300">
                {[
                  "Custom websites and web applications tailored to your business goals.",
                  "Secure APIs, authentication systems, and third-party integrations.",
                  "Fast-loading, SEO-friendly, and fully responsive user experiences.",
                  "Deployment, performance optimization, and ongoing technical support.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right col — flex column stretches to match */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Perfect For Growing Businesses</h3>
                <p className="mt-4 text-slate-300 leading-8">
                  Ideal for startups, agencies, SaaS platforms, e-commerce businesses, and growing brands looking for a modern, scalable, and reliable web solution. Whether you're launching a new product, improving an existing website, or building a custom web application, this service is designed to support your business goals and future growth.                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-[1.75rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-transparent p-6 text-white">
                  <h4 className="text-lg font-semibold">Fast & Scalable</h4>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">Built to handle growing traffic, new features, and future business needs.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/8 bg-gradient-to-br from-slate-700/70 to-transparent p-6 text-white">
                  <h4 className="text-lg font-semibold">Secure & Reliable</h4>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">Developed with modern security practices and a stable architecture.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── SECTION 3 ─── */}
        <section className="bg-[#08101d] py-16">
          <div className="mycontainer">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-stretch">

              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="text-indigo-300 uppercase tracking-[0.35em] text-xs">Development process</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                  A Simple Process From Idea to Launch
                </h2>
                <ol className="mt-6 space-y-4 text-slate-300">
                  {[
                    { title: "Planning & Strategy", desc: "Understand project goals, requirements, and the best technical approach." },
                    { title: "Development & Testing", desc: "Build the website, integrate features, and test everything for quality." },
                    { title: "Launch & Support", desc: "Deploy the project and provide support to ensure smooth performance." },
                  ].map((step) => (
                    <li key={step.title} className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                      <strong className="block text-white mb-1">{step.title}</strong>
                      {step.desc}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right — image fills full height */}
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1325] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
                <img
                  src="/home-images/services-images/development/A-Simple-Process-From-Idea-to-Launch.png"
                  alt="Development workflow"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="mycontainer py-16">
          <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 sm:p-10 text-slate-300 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">Ready to Build Your Next Website?</h2>
                <p className="mt-4 max-w-2xl leading-8">
                  Let's turn your ideas into a fast, modern, and scalable web solution built for real business growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link href="/services" className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                  Back to services
                </Link>
                <Link href="/contact" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}