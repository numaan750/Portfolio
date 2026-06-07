"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";
import { richTextToPlainText } from "@/components/ui/RichText";

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/blogs`);
        if (!res.ok) return;
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.warn("Backend offline or unreachable. No blogs loaded.", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16 min-h-screen bg-[#07070f] text-slate-100">
        <SectionWrapper>
          <div className="max-w-full mb-12">
            <p className="section-tag">Blogs</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
              Insights, Ideas & Resources
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore articles covering web development, UI/UX design, SEO, performance optimization, and modern technologies. Discover practical insights, industry trends, and useful tips to help you build better digital experiences.            </p>
          </div>

          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="glass rounded-3xl p-16 text-center border border-white/5 bg-[#0b1220]/40 backdrop-blur-md">
              <p className="text-slate-400 text-lg">No blog posts published yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/5 bg-[#0b1220]/60 hover:border-indigo-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-900/20"
                >
                  {/* Image with overlay — hover effect only on image area */}
                  <div className="relative overflow-hidden">
                    {blog.imageUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={blog.imageUrl}
                          alt={blog.imageAlt || blog.title}
                          className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay slides up — stays inside image bounds */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/95 via-[#07070f]/75 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-5">
                          <h3 className="text-white font-bold text-sm leading-snug mb-1.5 line-clamp-2">
                            {blog.title}
                          </h3>
                          <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                            {richTextToPlainText(blog.content)}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-44 bg-gradient-to-br from-indigo-900/40 to-violet-900/30 flex items-center justify-center">
                        <span className="text-indigo-400/30 text-5xl font-black">//</span>
                      </div>
                    )}
                  </div>

                  {/* Card footer — always visible, no hover effect here */}
                  <div className="p-5 space-y-3">
                    <h2 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors">
                      {blog.title}
                    </h2>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <FiUser className="text-indigo-500/70" />
                        {blog.author || "Admin"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="text-indigo-500/70" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-indigo-400">
                      Read Article <FiArrowRight className="text-[11px]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}