import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UIUXPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#08101d] border-b border-white/5 pt-30 pb-15">
          <div className="mycontainer grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                UI / UX Design
              </p>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
                Beautiful, usable interfaces designed for real people.
              </h1>
              <p className="mt-6 max-w-2xl text-slate-300 leading-8">
                I craft interface systems that feel effortless and guide users through your product. From research to polished prototypes, every screen is built for clarity, conversion, and accessibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Research-driven UX",
                  "High-fidelity mockups",
                  "Design system support",
                  "Mobile-first interactions",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80"
                alt="UI / UX Design"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-4xl border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-semibold text-white">Design with purpose</h2>
              <p className="mt-6 text-slate-300 leading-8">
                I focus on real user needs and business goals, balancing strong visuals with intuitive usability. The result is a design system that supports growth and reduces friction.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> User research, personas, and experience maps.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Wireframes, user flows, and prototyping.
                </li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Polished UI patterns for consistent brand expression.
                </li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Accessibility checks and responsive behavior.
                </li>
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-linear-to-br from-indigo-500/20 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">Prototype fast</h3>
                <p className="mt-4 text-slate-200">Validate ideas before development with clickable design prototypes.</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-slate-700/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">Brand consistency</h3>
                <p className="mt-4 text-slate-200">Create a cohesive visual system across screens and interactions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08101d] py-15">
          <div className="mycontainer grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-indigo-300 uppercase tracking-[0.35em] text-sm">Design process</p>
              <h2 className="text-3xl font-semibold text-white">A structured workflow that keeps design aligned with goals.</h2>
              <ol className="space-y-6 text-slate-300">
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Discover</strong>
                  Gather business context and define user journeys.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Design</strong>
                  Create wireframes, layouts, and UI direction.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Deliver</strong>
                  Hand off polished assets or collaborate on implementation.
                </li>
              </ol>
            </div>
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0b1325] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
                alt="UI UX design workflow"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="rounded-4xl border border-white/10 bg-[#0d1324] p-10 text-slate-300 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Ready to shape your next digital experience?</h2>
                <p className="mt-4 max-w-2xl leading-8">
                  I deliver designs that feel polished, clear, and easy for users to understand — from landing pages to web apps.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                  Back to services
                </Link>
                <Link href="/contact" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Start a design project
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
