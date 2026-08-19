"use client";

import { motion } from "framer-motion";
import { FaQuoteRight, FaUser, FaStar } from "react-icons/fa";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/animations";
import HomePartners from "@/components/home/HomePartners";
import { useEffect, useState } from "react";
import { useWebsite } from "@/context/AppContext";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { fetchReviews } = useWebsite();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadReviews = () => {
      fetchReviews()
        .then((data) => {
          if (isMounted) {
            setReviews(Array.isArray(data) ? data : []);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Failed to fetch reviews', error);
          if (isMounted) setLoading(false);
        });
    };

    loadReviews();
    const refreshInterval = window.setInterval(loadReviews, 5000);
    window.addEventListener('focus', loadReviews);

    return () => {
      isMounted = false;
      window.clearInterval(refreshInterval);
      window.removeEventListener('focus', loadReviews);
    };
  }, [fetchReviews]);

  useEffect(() => {
    const container = document.querySelector(".testimonials-scroll");

    if (!container || loading || reviews.length === 0) return;

    let animationFrame;

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += 0.5;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused, loading, reviews]);

  return (
    <SectionWrapper id="testimonials" className="pt-15">
      <SectionHeader
        tag="Testimonials"
        title="What Clients Say"
        subtitle="Feedback from clients and businesses I've worked with, reflecting the quality, reliability, and results delivered through every project."
      />

      <div className="mb-10 sm:mb-14">
        <HomePartners />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={reviews.length > 0 ? "show" : "hidden"}
        viewport={{ once: true, amount: 0.1 }}
        className="testimonials-scroll flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide items-stretch pb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {loading ? (
          [1, 2, 3].map((placeholder) => (
            <div
              key={placeholder}
              className="glass shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[400px] min-h-[300px] rounded-2xl animate-pulse"
              aria-hidden="true"
            />
          ))
        ) : (

          reviews.map((item) => (
            <motion.div
              key={item._id}
              variants={fadeUp}
              className="glass relative p-5 sm:p-6 lg:p-8 rounded-2xl flex flex-col shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[500px] min-w-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <FaQuoteRight className="text-[20px] sm:text-[24px] text-indigo-300/20 absolute top-3 right-3 group-hover:text-indigo-300/40 transition-colors duration-300" />
              <div className="flex items-center gap-3 sm:gap-4 relative z-10 min-w-0">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-800 border-2 border-indigo-500/20 relative z-10">
                    <FaUser className="text-indigo-400 text-[22px] sm:text-[24px]" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-100 tracking-wide break-words [overflow-wrap:anywhere]">
                    {item.name ?? "Anonymous"}
                  </h4>
                  <p className="text-[0.7rem] sm:text-[0.78rem] text-cyan-400 font-semibold uppercase tracking-wider mt-0.5 break-words [overflow-wrap:anywhere]">
                    {item.role ?? "Client"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-5 mb-5 relative z-10 shrink-0" aria-label={`${item.rating || 5} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.min(Math.max(Number(item.rating) || 5, 1), 5) ? "text-amber-400" : "text-slate-700"}
                    size={15}
                  />
                ))}
              </div>
              <p className="text-slate-400 text-sm sm:text-[0.95rem] leading-relaxed sm:leading-[1.8] italic relative z-10 font-light break-words [overflow-wrap:anywhere] whitespace-normal min-w-0 flex-1">
                {item.content}
              </p>


            </motion.div>
          ))
        )}
      </motion.div>

      <style jsx>{`
        .testimonials-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </SectionWrapper>
  );
}
