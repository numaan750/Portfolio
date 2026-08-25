"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { richTextToPlainText } from "@/components/ui/RichText";


export default function ExperienceCaseStudies() {
  const [caseList, setCaseList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchDbCaseStudies = async () => {
      try {
        const res = await fetch('/api/casestudies', { cache: 'no-store' });
        if (!res.ok) return;
        const dbCases = await res.json();

        if (dbCases && dbCases.length > 0) {
          const merged = dbCases.map((c) => ({
            title: c.title,
            highlight: richTextToPlainText(c.description || c.content || '').slice(0, 140),
            slug: c.slug,
            image: c.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            imageAlt: c.imageAlt || c.title,
          }));

          if (isMounted) setCaseList(merged);
        } else if (isMounted) {
          setCaseList([]);
        }
      } catch (err) {
        console.warn("Backend offline or unreachable. Using fallback case studies.", err);
      }
    };

    fetchDbCaseStudies();
    const refreshInterval = window.setInterval(fetchDbCaseStudies, 5000);
    window.addEventListener('focus', fetchDbCaseStudies);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', fetchDbCaseStudies);
    };
  }, []);

  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="section-tag">Case Studies</p>
          <h2 className="section-title">Insights from Real Client Success Stories</h2>
        </div>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseList.map((item, idx) => (
            <Link
              href={item.slug ? `/casestudies/${item.slug}` : "#"}
              key={item.slug || item.title || idx}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/5 bg-[#0d1325] backdrop-blur-sm"
            >
              {/* IMAGE */}
              <div className="w-full p-4 pb-0 sm:p-3 sm:pb-0">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-300 line-clamp-2 group-hover:text-indigo-300 sm:text-[18px]">
                  {item.title}
                </h3>
                <p className="mb-6 line-clamp-4 text-sm leading-6 text-slate-400 sm:text-[13px]">
                  {item.highlight}
                </p>
                <div className="mt-auto flex items-center gap-0.5 text-sm font-semibold text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
                  <span>Read case study</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}