import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FiCalendar, FiUser, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import RichText from "@/components/ui/RichText";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

async function getBlog(slug) {
  const res = await fetch(`${BACKEND_URL}/api/blogs/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

async function getAllBlogs() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blogs`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const [blog, allBlogs] = await Promise.all([getBlog(slug), getAllBlogs()]);

  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 6);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07070f] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
          <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">
            &larr; Back to articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-30 pb-16 min-h-screen bg-[#07070f] text-slate-100">
        <SectionWrapper>

          {/* Layout: article + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            {/* LEFT — Article */}
            <article className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <FiUser className="text-indigo-400" />
                    {blog.author || "Admin"}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCalendar className="text-indigo-400" />
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Hero image */}
              {blog.imageUrl && (
                <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.imageUrl}
                    alt={blog.imageAlt || blog.title}
                    className="max-h-[480px] w-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="border-t border-white/5 pt-8">
                <RichText
                  content={blog.content}
                  className="prose prose-invert prose-slate max-w-none
                    prose-headings:font-bold prose-headings:text-white
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-[1.05rem]
                    prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
                    prose-strong:text-white
                    prose-code:text-indigo-300 prose-code:bg-indigo-950/40 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-[#0b1220] prose-pre:border prose-pre:border-white/5
                    prose-blockquote:border-l-indigo-500 prose-blockquote:text-slate-400
                    prose-li:text-slate-300
                    prose-img:rounded-xl prose-img:border prose-img:border-white/5"
                />
              </div>
            </article>

            {/* RIGHT — Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28">
              {/* Related posts */}
              {relatedBlogs.length > 0 && (
                <div className="rounded-2xl border border-white/5 bg-[#0b1220]/60 backdrop-blur-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-white/5">
                    <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                      Related Articles
                    </h3>
                  </div>
                  <ul className="divide-y divide-white/5">
                    {relatedBlogs.map((related) => (
                      <li key={related._id}>
                        <Link
                          href={`/blog/${related.slug}`}
                          className="group flex gap-3 p-4 hover:bg-white/[0.03] transition-colors"
                        >
                          {related.imageUrl && (
                            <div className="shrink-0 w-14 h-14 overflow-hidden rounded-lg border border-white/5">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={related.imageUrl}
                                alt={related.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex flex-col justify-between min-w-0">
                            <p className="text-sm text-slate-300 font-medium leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors">
                              {related.title}
                            </p>
                            <span className="text-xs text-slate-500 mt-1">
                              {new Date(related.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back to all articles CTA */}
              <Link
                href="/blog"
                className="flex items-center justify-between gap-2 w-full px-5 py-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <span className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Browse all articles
                </span>
                <FiArrowRight className="text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </aside>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}