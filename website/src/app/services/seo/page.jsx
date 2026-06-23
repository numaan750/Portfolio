import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "SEO & Performance | Nexcode",
  description:
    "Technical SEO and performance optimization services designed to improve search visibility and website speed.",
  keywords: [
    "SEO services",
    "technical SEO",
    "performance optimization",
    "web performance",
    "search visibility",
    "Nexcode SEO",
  ],
};

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="bg-[#08101d] border-b border-white/5 pt-28 pb-16">
          <div className="mycontainer">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-stretch">

              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="inline-flex w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  SEO & Performance
                </p>
                <h1 className="mt-6 text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-[1.2]">
                  Help Your Website Rank Higher and Perform Better
                </h1>
                <p className="mt-6 text-slate-300 leading-8 max-w-2xl">
                  I help businesses improve their online visibility and website performance through technical SEO, speed optimization, and search-friendly website structures. The goal is to attract more visitors, improve user experience, and generate better results from your website.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Technical SEO", "Speed Optimization", "Core Web Vitals", "Search Visibility"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — image fills full height */}
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
                <img
                  src="/home-images/services-images/seo/Help-Your-Website-Rank-Higher-and-Perform-Better.png"
                  alt="SEO and Performance"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTION 2 — 4 cards right side ─── */}
        <section className="mycontainer py-16">
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">

            {/* Left card */}
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Everything Needed for Better Rankings and Performance
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                A successful website needs more than great design. I optimize the technical foundation of your website to improve search visibility, loading speed, and overall user experience, helping your business reach more potential customers online.
              </p>
              <ul className="mt-6 space-y-4 text-slate-300 flex-1">
                {[
                  "Technical SEO improvements to help search engines crawl and index your website properly.",
                  "Page speed optimization for faster loading times and better user engagement.",
                  "Structured metadata, schema markup, and SEO-friendly page architecture.",
                  "Analytics and performance tracking to measure growth and identify opportunities.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — 4 cards in 2x2 grid, same height as left */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Better Search Visibility",
                  desc: "Make it easier for potential customers to find your website through search engines.",
                  style: "from-indigo-500/20",
                  border: "border-indigo-500/20",
                },
                {
                  title: "Faster User Experience",
                  desc: "Improve loading speed and performance across desktop, tablet, and mobile devices.",
                  style: "from-slate-700/70",
                  border: "border-white/8",
                },
                {
                  title: "Core Web Vitals",
                  desc: "Pass Google's performance benchmarks for LCP, CLS, and INP scores.",
                  style: "from-emerald-500/15",
                  border: "border-emerald-500/20",
                },
                {
                  title: "On-Page SEO",
                  desc: "Optimized headings, meta tags, structured data, and internal linking.",
                  style: "from-violet-500/15",
                  border: "border-violet-500/20",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[1.75rem] border ${card.border} bg-gradient-to-br ${card.style} to-transparent p-6 text-white flex flex-col`}
                >
                  <h3 className="text-base sm:text-lg font-semibold leading-snug">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-1">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── SECTION 3 ─── */}
        <section className="bg-[#08101d] py-16">
          <div className="mycontainer">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-stretch">

              {/* Left */}
              <div className="flex flex-col justify-center">
                <p className="text-indigo-300 uppercase tracking-[0.35em] text-xs">SEO process</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
                  A Clear Process for Long-Term SEO Growth
                </h2>
                <ol className="mt-6 space-y-4 text-slate-300">
                  {[
                    { title: "Analyze", desc: "Review your website's SEO performance, speed, and technical setup." },
                    { title: "Optimize", desc: "Improve site structure, page speed, metadata, and technical SEO elements." },
                    { title: "Monitor & Improve", desc: "Track performance, measure results, and continue improving over time." },
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
                  src="/home-images/services-images/seo/A-Clear-Process-for-Long-Term-SEO-Growth.png"
                  alt="SEO work"
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Ready to Improve Your Website's Performance?
                </h2>
                <p className="mt-4 max-w-2xl leading-8">
                  Let's make your website faster, more visible, and better optimized for long-term growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link href="/services" className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                  Back to services
                </Link>
                <Link href="/contact" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Get SEO Consultation
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