import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import RichText from "@/components/ui/RichText";


const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

async function getProject(slug) {
  const res = await fetch(`${BACKEND_URL}/api/projects/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    return {
      title: "Project Not Found | Nexcode",
    };
  }

  // Strip HTML tag helper for metaDescription fallback
  const plainTextDescription = project.description
    ? project.description.replace(/<[^>]*>/g, "").substring(0, 160).trim()
    : "";

  const finalTitle = project.metaTitle || `${project.title} | Nexcode Project`;
  const finalDesc = project.metaDescription || plainTextDescription || "Custom full-stack web application showcase built by Nexcode.";
  const finalImage = project.metaImage || project.imageUrl || "";

  return {
    title: finalTitle,
    description: finalDesc,
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      type: "website",
      images: finalImage ? [{ url: finalImage, alt: project.metaImageAlt || project.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDesc,
      images: finalImage ? [finalImage] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07070f] text-white">
        <div className="text-center space-y-4">
          <p className="text-6xl">🔍</p>
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link
            href="/projects"
            className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
          >
            &larr; Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc =
    project.imageUrl ||
    `https://api.microlink.io/?url=${encodeURIComponent(
      project.url
    )}&screenshot=true&meta=false&embed=screenshot.url&type=jpeg`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#07070f] text-slate-100">

        {/* ── HERO BANNER ── */}
        <section className="relative w-full overflow-hidden bg-[#07070f]">
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

          <div className="relative mycontainer pt-36 pb-0 ">
            {/* Category pill */}
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-300">
                {project.category || "Project"}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
            </div>

            {/* Title */}
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white leading-[1.1] md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            {/* Subtitle / short description if present */}
            {project.subtitle && (
              <p className="mt-4 max-w-2xl text-lg text-slate-400 font-medium">
                {project.subtitle}
              </p>
            )}

            {/* Tech stack pills */}
            {project.tech?.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-sm"
                  >
                    <HiOutlineCode className="text-indigo-400" />
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/50"
                >
                  <FiExternalLink className="text-base" />
                  Live Preview
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                >
                  <FiGithub className="text-base" />
                  Source Code
                </a>
              )}
            </div>

            {/* Divider line flowing into image */}
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>

        {/* ── SCREENSHOT ── */}
        <section className="bg-[#07070f]">
          <div className="mycontainer py-12">
            <div className="group relative overflow-hidden rounded-2xl border border-white/8 shadow-2xl shadow-black/60">
              {/* Fake browser chrome top bar */}
              <div className="flex items-center gap-2 border-b border-white/8 bg-[#0d1117] px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <div className="mx-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-1 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  {project.url ? project.url.replace(/https?:\/\//, "") : "preview"}
                </div>
              </div>

              {/* Screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={project.imageAlt || project.title}
                className="w-full object-cover transition duration-700 group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </section>

        {/* ── CONTENT GRID ── */}
        <section className="bg-[#07070f]">
          <div className=" mycontainer pb-24">
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">

              {/* Description – takes 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">About this project</h2>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <RichText
                  content={project.description}
                  className="text-slate-300 text-[1.05rem] leading-relaxed space-y-4"
                />
              </div>

              {/* Sidebar – 1 col */}
              <aside className="space-y-8">

                {/* Quick Info Card */}
                <div className="rounded-2xl border border-white/8 bg-[#0d1117] p-6 space-y-5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    Project Info
                  </h3>

                  {project.category && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Category
                      </p>
                      <p className="text-sm font-medium text-slate-200">{project.category}</p>
                    </div>
                  )}

                  {project.year && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Year
                      </p>
                      <p className="text-sm font-medium text-slate-200">{project.year}</p>
                    </div>
                  )}

                  {project.role && (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Role
                      </p>
                      <p className="text-sm font-medium text-slate-200">{project.role}</p>
                    </div>
                  )}

                  {project.tech?.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Links Card */}
                {(project.url || project.github) && (
                  <div className="rounded-2xl border border-white/8 bg-[#0d1117] p-6 space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                      Links
                    </h3>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
                      >
                        <span>Live Site</span>
                        <FiExternalLink className="text-indigo-400" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                      >
                        <span>GitHub Repo</span>
                        <FiGithub />
                      </a>
                    )}
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}