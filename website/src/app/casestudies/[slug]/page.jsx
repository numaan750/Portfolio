import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FiCalendar, FiClock, FiBookOpen } from "react-icons/fi";
import RichText from "@/components/ui/RichText";
// import ReviewForm from '@/components/caseStudy/ReviewForm';


const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

async function getCaseStudy(slug) {
  const res = await fetch(`${BACKEND_URL}/api/casestudies/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const casestudy = await getCaseStudy(slug);

  if (!casestudy) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07070f] text-white">
        <div className="text-center space-y-4">
          <p className="text-6xl">📄</p>
          <h1 className="text-4xl font-bold">Case Study not found</h1>
          <Link
            href="/skills"
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4"
          >
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc =
    casestudy.imageUrl ||
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80";

  const formattedDate = casestudy.createdAt
    ? new Date(casestudy.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07070f] text-slate-100">

        {/* ── FULL-BLEED HERO IMAGE ── */}
        <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden">
          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={casestudy.imageAlt || casestudy.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Deep overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-[#07070f]/70 to-[#07070f]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07070f]/40 via-transparent to-transparent" />

          {/* Cyan glow accent */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Hero text pinned to bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 pb-10">
            <div className="mycontainer space-y-4">
              {/* Label */}
              <div className="flex items-center gap-3">
                <FiBookOpen className="text-cyan-400 text-sm" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Case Study
                </span>
                <span className="h-px w-12 bg-cyan-500/40" />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {casestudy.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 pt-1">
                {formattedDate && (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <FiCalendar className="text-cyan-500/70" />
                    {formattedDate}
                  </span>
                )}
                {casestudy.readTime && (
                  <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <FiClock className="text-cyan-500/70" />
                    {casestudy.readTime} min read
                  </span>
                )}
                {casestudy.category && (
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                    {casestudy.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTENT AREA ── */}
        <section className="relative bg-[#07070f]">
          {/* Subtle top border glow */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="mycontainer">

            {/* Lead / description block */}
            {casestudy.description && (
              <div className="relative mb-12">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
                <div className="pl-6">
                  <RichText
                    content={casestudy.description}
                    className="text-xl text-slate-200 font-medium leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px flex-1 bg-white/8" />
              <span className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
              </span>
              <span className="h-px flex-1 bg-white/8" />
            </div>

            {/* Main content */}
            <div className="prose-container">
              <RichText
                content={casestudy.content}
                className="text-slate-300 text-[1.05rem] leading-[1.9] space-y-6
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4
                  [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-100 [&_h3]:mt-8 [&_h3]:mb-3
                  [&_strong]:text-white [&_strong]:font-semibold
                  [&_a]:text-cyan-400 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-cyan-300
                  [&_blockquote]:border-l-4 [&_blockquote]:border-cyan-500/50 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-slate-400
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                  [&_li]:text-slate-300
                  [&_code]:bg-white/8 [&_code]:text-cyan-300 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-sm"
              />
            </div>

            {/* Bottom divider */}
            <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Review Form */}
            {/* <ReviewForm slug={slug} /> */}

            {/* Footer meta */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-10">
              <p className="text-sm text-slate-500">
                {formattedDate ? `Published on ${formattedDate}` : "Published"}
              </p>
              {casestudy.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {casestudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/8 bg-white/5 px-3 py-1 text-xs text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}