"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { FiArrowRight } from "react-icons/fi";
import { richTextToPlainText } from "@/components/ui/RichText";

export default function BlogListClient() {
  const getBlogDescription = (blog) => {
    if (blog.description) return blog.description;
    if (blog.excerpt) return blog.excerpt;

    if (blog.content) {
      try {
        return richTextToPlainText(blog.content);
      } catch {
        return "";
      }
    }

    return "";
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs`, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted) setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.warn("Backend offline or unreachable. No blogs loaded.", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchBlogs();
    const refreshInterval = window.setInterval(fetchBlogs, 5000);
    window.addEventListener('focus', fetchBlogs);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', fetchBlogs);
    };
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
              Explore articles covering web development, UI/UX design, SEO, performance optimization, and modern technologies. Discover practical insights, industry trends, and useful tips to help you build better digital experiences.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-2xl border border-white/5 bg-[#0b1220]/60">
                  <div className="skeleton h-56 w-full rounded-none sm:h-64" />
                  <div className="p-6 space-y-4">
                    <div className="skeleton h-4 w-4/5" />
                    <div className="flex items-center gap-4">
                      <div className="skeleton h-3 w-20" />
                      <div className="skeleton h-3 w-24" />
                    </div>
                    <div className="skeleton h-3 w-full" />
                    <div className="skeleton h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="glass rounded-3xl p-16 text-center border border-white/5 bg-[#0b1220]/40 backdrop-blur-md">
              <p className="text-slate-400 text-lg">No blog posts published yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className=" group flex h-full flex-col overflow-hidden rounded-[24px] border  border-white/5  bg-[#0d1325] backdrop-blur-sm "
                >
                  {/* IMAGE */}
                  <div className="w-full p-4 pb-0 sm:p-3 sm:pb-0">
                    {blog.imageUrl ? (
                      <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <OptimizedImage
                          src={blog.imageUrl}
                          alt={blog.imageAlt || blog.title}
                          width={800}
                          height={450}
                          className=" h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div
                        className=" flex aspect-[16/9] w-full items-center justify-center rounded-2xl bg-gradient-to-br  from-slate-700/40  to-slate-800/30"
                      >
                        <span className="text-4xl font-black text-slate-400/30">
                          {"//"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    {/* DATE */}
                    <p className="mb-3 text-sm font-medium text-slate-400">
                      {new Date(blog.createdAt).toISOString().split("T")[0]}
                    </p>

                    {/* TITLE */}
                    <h2
                      className=" mb-3 text-xl font-bold leading-snug  text-white transition-colors duration-300 line-clamp-2  group-hover:text-indigo-300  sm:text-[18px] "
                    >
                      {blog.title}
                    </h2>

                    {/* DESCRIPTION */}
                    {getBlogDescription(blog) && (
                      <p
                        className=" mb-6 line-clamp-3 text-sm leading-6  text-slate-400 sm:text-[12px] "
                      >
                        {getBlogDescription(blog)}
                      </p>
                    )}

                    {/* READ ARTICLE */}
                    <div
                      className=" mt-auto flex items-center gap-0.5 text-sm font-semibol  text-indigo-400 transition-colors duration-30  group-hover:text-indigo-300"
                    >
                      <span>Read article</span>

                      <FiArrowRight
                        className=" text-base transition-transform duration-300 group-hover:translate-x-1 mt-1"
                      />
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
