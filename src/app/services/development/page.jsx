import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main >
        <section className="bg-[#08101d] border-b border-white/5 pt-30 pb-15">
          <div className="mycontainer grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                Full-Stack Development
              </p>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
                Build a fast, secure web product that grows with your business.
              </h1>
              <p className="mt-6 max-w-2xl text-slate-300 leading-8">
                I deliver modern web applications using Next.js, Node.js, and production-grade tooling. From architecture and APIs to deployment, your project is built for performance, security, and long-term success.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "API-first architecture",
                  "Authentication & authorization",
                  "Server-side rendering",
                  "Cloud deployment",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                alt="Full-Stack Development"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-semibold text-white">What this service includes</h2>
              <p className="text-slate-300 leading-8">
                Every development engagement is designed to move your project from idea to launch. I focus on clean code, maintainable architecture, and user-centric delivery so your website works beautifully across desktop, mobile, and tablet.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Custom front-end interfaces with React and Next.js.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> API development, integrations, and secure user flows.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Performance tuning, SEO-ready markup, and accessibility.
                </li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Deployment automation with hosted infrastructure or serverless platforms.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
                <h3 className="text-2xl font-semibold text-white">Recommended for</h3>
                <p className="mt-4 text-slate-300 leading-8">
                  Product startups, SaaS landing pages, agency sites, and web apps that need a modern full-stack implementation with best-practice architecture.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-indigo-500/20 to-transparent p-6 text-white">
                  <h4 className="text-xl font-semibold">Fast iteration</h4>
                  <p className="mt-3 text-slate-200">Build features quickly without losing code quality.</p>
                </div>
                <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-700/70 to-transparent p-6 text-white">
                  <h4 className="text-xl font-semibold">Stable launch</h4>
                  <p className="mt-3 text-slate-200">Launch with confidence using deployment checks and monitoring.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08101d] py-15">
          <div className="mycontainer grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-indigo-300 uppercase tracking-[0.35em] text-sm">Development process</p>
              <h2 className="text-3xl font-semibold text-white">A clear path from concept to live release.</h2>
              <ol className="space-y-6 text-slate-300">
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Plan</strong>
                  Define scope, system requirements, and user journeys.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Build</strong>
                  Create the UI, build APIs, and integrate services with quality testing.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Launch</strong>
                  Deploy the final site with fast load times, analytics, and CI/CD support.
                </li>
              </ol>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1325] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
                alt="Development workflow"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-10 text-slate-300 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Ready to build your web product?</h2>
                <p className="mt-4 max-w-2xl leading-8">
                  I can help you ship a polished, maintainable website that handles growth, users, and real traffic.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
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
