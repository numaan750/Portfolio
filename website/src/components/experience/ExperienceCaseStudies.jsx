"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { richTextToPlainText } from "@/components/ui/RichText";

const FALLBACK_CASES = [
  { title: "Enterprise Analytics Portal", highlight: "Architected sophisticated KPI dashboards and conversion-optimized data visualizations.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" },
  { title: "High-Performance Brand Platform", highlight: "Engineered a modern, highly engaging landing experience optimized for seamless user acquisition flows.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
];

export default function ExperienceCaseStudies() {
  const [caseList, setCaseList] = useState(FALLBACK_CASES);

  useEffect(() => {
    const fetchDbCaseStudies = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiUrl}/api/casestudies`);
        if (!res.ok) return;
        const dbCases = await res.json();

        if (dbCases && dbCases.length > 0) {
          // Merge database case studies with fallbacks.
          const merged = dbCases.map((c) => ({
            title: c.title,
            highlight: richTextToPlainText(c.description || c.content || '').slice(0, 140),
            slug: c.slug,
            image: c.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
            imageAlt: c.imageAlt || c.title,
          }));

          // Add fallbacks that are not overridden by title
          FALLBACK_CASES.forEach((fallback) => {
            const isOverridden = dbCases.some(
              (db) => db.title.toLowerCase() === fallback.title.toLowerCase()
            );
            if (!isOverridden) {
              merged.push(fallback);
            }
          });

          setCaseList(merged);
        }
      } catch (err) {
        console.warn("Backend offline or unreachable. Using fallback case studies.", err);
      }
    };

    fetchDbCaseStudies();
  }, []);

  return (
    <SectionWrapper className="pt-15 bg-[#07070f]">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="section-tag">Case Studies</p>
          <h2 className="section-title">Insights from Real Client Success Stories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseList.map((item, idx) => (
            <Link href={item.slug ? `/casestudies/${item.slug}` : "#"} key={item.slug || item.title || idx} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90 block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.imageAlt || item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="mt-3 text-slate-300 leading-7">{item.highlight}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
