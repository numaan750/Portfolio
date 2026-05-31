import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#08101d] border-b border-white/5 pt-30 pb-15">
          <div className="mycontainer grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-200">
                SEO & Performance
              </p>
              <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
                Rank higher and load faster with optimized web performance.
              </h1>
              <p className="mt-6 max-w-2xl text-slate-300 leading-8">
                I improve search visibility and page speed through technical SEO, metadata strategy, and performance tuning. The result is a website that attracts users and keeps them engaged.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Core Web Vitals",
                  "Metadata strategy",
                  "Semantic structure",
                  "Analytics insights",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1322] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="SEO and Performance"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-semibold text-white">Why this service matters</h2>
              <p className="mt-6 text-slate-300 leading-8">
                Modern search performance requires more than keywords. I focus on site structure, speed, and analytics so every page is discoverable, fast, and ready to convert.
              </p>
              <ul className="mt-8 space-y-4 text-slate-300">
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Technical SEO audits for crawlability and indexability.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Page speed improvements that increase engagement.</li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Structured data, metadata, and schema markup.
                </li>
                <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" /> Analytics reviews to measure growth and refine priorities.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-indigo-500/20 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">Search-ready content</h3>
                <p className="mt-4 text-slate-200">Optimized page structure and copy that speaks to both users and search engines.</p>
              </div>
              <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-700/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">Performance-first builds</h3>
                <p className="mt-4 text-slate-200">Delivering a fast user experience on every device with modern rendering techniques.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08101d] py-15">
          <div className="mycontainer grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-indigo-300 uppercase tracking-[0.35em] text-sm">SEO process</p>
              <h2 className="text-3xl font-semibold text-white">A practical approach to rankings and speed.</h2>
              <ol className="space-y-6 text-slate-300">
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Audit</strong>
                  Review technical performance, search setup, and content structure.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Optimize</strong>
                  Improve page speed, tags, schema, and layout for search engines.
                </li>
                <li className="rounded-[1.75rem] border border-white/10 bg-[#0d1324] p-6">
                  <strong className="block text-white">Measure</strong>
                  Track results with analytics and refine the strategy over time.
                </li>
              </ol>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1325] shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80"
                alt="SEO work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mycontainer py-15">
          <div className="rounded-[2rem] border border-white/10 bg-[#0d1324] p-10 text-slate-300 shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Want better search performance?</h2>
                <p className="mt-4 max-w-2xl leading-8">
                  I help websites rank stronger and perform faster through practical, measurable SEO improvements.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/services" className="rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                  Back to services
                </Link>
                <Link href="/contact" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Request an audit
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
