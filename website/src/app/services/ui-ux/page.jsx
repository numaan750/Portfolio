import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UIUXPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO SECTION ── */}
        <section className="bg-[#08101d] border-b border-white/5 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="mycontainer flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-12">

            {/* Left: text */}
            <div className="flex flex-col justify-center">
              <p className="inline-flex self-start rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                UI / UX Design
              </p>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl leading-tight">
                Design Experiences Your Users Will Love
              </h1>
              <p className="mt-6 text-slate-300 leading-8 max-w-xl">
                I design intuitive and user-friendly interfaces that help businesses create better digital
                experiences. From wireframes to polished designs, every screen is crafted to improve
                usability, engagement, and conversions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Research-driven UX",
                  "High-fidelity mockups",
                  "Design system support",
                  "Mobile-first interactions",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image — same height as left col */}
            <div className="w-full min-h-[190px] sm:min-h-[400px] lg:min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="/home-images/services-images/ui-ux/Design-Experiences-Your-Users-Will-Love.png"
                alt="UI / UX Design"
                className="h-full w-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Card left */}
            <div className="rounded-3xl border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                Great Design Starts With Understanding Your Users
              </h2>
              <p className="mt-6 text-slate-300 leading-8 text-sm sm:text-base">
                A successful design is more than just visuals. I focus on understanding user behavior,
                business goals, and customer needs to create experiences that feel simple, intuitive, and effective.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300 text-sm sm:text-base">
                {[
                  "User research to understand audience needs and expectations.",
                  "Clear user flows that simplify navigation and interactions.",
                  "Modern and consistent UI designs aligned with your brand.",
                  "Responsive experiences that work seamlessly across all devices.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Four mini cards right — same height as left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  gradient: "from-indigo-500/20",
                  title: "Validate Ideas Faster",
                  desc: "Interactive prototypes help test concepts early and gather valuable feedback before development begins.",
                },
                {
                  gradient: "from-slate-700/70",
                  title: "Consistent User Experience",
                  desc: "Design systems ensure every screen feels cohesive, professional, and easy to use across all platforms.",
                },
                {
                  gradient: "from-violet-500/20",
                  title: "Accessible by Default",
                  desc: "Every design follows accessibility best practices so your product works for every type of user.",
                },
                {
                  gradient: "from-slate-600/50",
                  title: "Handoff-Ready Assets",
                  desc: "Clean, organized design files and specs that developers can implement quickly without back-and-forth.",
                },
              ].map(({ gradient, title, desc }) => (
                <div
                  key={title}
                  className={`rounded-2xl sm:rounded-3xl bg-gradient-to-br ${gradient} to-transparent border border-white/10 p-4 sm:p-6 text-white flex flex-col`}
                >
                  <h3 className="text-sm sm:text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-2 sm:mt-4 text-slate-200 leading-6 text-xs sm:text-sm flex-1">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESIGN PROCESS ── */}
        <section className="bg-[#08101d] py-16 sm:py-20">
          <div className="mycontainer flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-12">

            {/* Left: steps */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-indigo-300 uppercase tracking-[0.35em] text-sm">Design process</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                A Simple Process For Better User Experiences
              </h2>
              <ol className="space-y-4 text-slate-300">
                {[
                  {
                    title: "Research & Strategy",
                    desc: "Understand your goals, audience, and project needs.",
                  },
                  {
                    title: "Wireframes & Design",
                    desc: "Create user-focused layouts and polished interface designs.",
                  },
                  {
                    title: "Review & Delivery",
                    desc: "Refine the design and deliver development-ready assets.",
                  },
                ].map(({ title, desc }) => (
                  <li
                    key={title}
                    className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6"
                  >
                    <strong className="block text-white mb-1">{title}</strong>
                    {desc}
                  </li>
                ))}
              </ol>
            </div>

            {/* Right: image — same height as left col */}
            <div className="w-full min-h-[190px] sm:min-h-[420px] lg:min-h-0 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1325] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="/home-images/services-images/ui-ux/A-Simple-Process-For-Better-User-Experiences.png"
                alt="UI UX design workflow"
                className="h-full w-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mycontainer py-16 sm:py-20">
          <div className="rounded-3xl border border-white/10 bg-[#0d1324] p-8 sm:p-10 text-slate-300 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                  Ready to Create a Better User Experience?
                </h2>
                <p className="mt-4 leading-8">
                  I create clean, modern, and user-friendly designs that help businesses achieve their goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link
                  href="/services"
                  className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                >
                  Back to services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
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