"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", type: "page" },
  { label: "About", href: "/about", type: "page" },
  { label: "Services", href: "/services", type: "page" },
  { label: "Skills", href: "/skills", type: "page" },
  { label: "Projects", href: "/projects", type: "page" },
  { label: "Blog", href: "/blog", type: "page" },
  { label: "Contact", href: "/contact", type: "page" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const activeLink = NAV_LINKS.find((link) => pathname === link.href);
  const activeLinkHref = activeLink?.href ?? "";

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="mycontainer fixed top-4 left-0 right-0 z-[100]">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{
            y: { duration: 0.35, ease: "easeInOut" },
            opacity: { duration: 0.25 },
          }}
          className={`w-full rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-[#07070f]/85 backdrop-blur-xl border border-[#6366f1]/15 shadow-lg shadow-black/20"
              : "bg-[#07070f]/60 backdrop-blur-md border border-white/8"
          }`}
        >
          <div className="flex items-center justify-between h-[70px] px-5">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setMenuOpen(false);
              }}
              className="font-extrabold text-xl no-underline tracking-tight gradient-text"
            >
              Nexcode
            </Link>
            <div className="hidden md:flex gap-2 items-center">
              {NAV_LINKS.map((link) => {
                const isActive = activeLinkHref === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick()}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium no-underline transition-all duration-250 border ${
                      isActive
                        ? "text-white bg-linear-to-br from-[#6366f1] to-[#22d3ee] border-transparent shadow-[0_4px_16px_rgba(99,102,241,0.35)]"
                        : "text-slate-300 bg-white/10 border-transparent hover:text-white hover:border-white/30 hover:bg-white/8"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex md:hidden items-center bg-transparent border-none text-slate-100 text-2xl cursor-pointer"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </motion.nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[88px] left-6 right-6 z-[99] bg-[#07070f]/95 backdrop-blur-xl border border-[#6366f1]/10 rounded-2xl px-6 pt-4 pb-7 md:hidden"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeLinkHref === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick()}
                  className={`block py-3.5 text-base font-semibold no-underline border-b border-white/5 transition-colors duration-200 ${
                    isActive ? "text-[#6366f1]" : "text-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

