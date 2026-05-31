"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const FOOTER_LINKS = [
    { label: "Home", href: "/", type: "page" },
    { label: "About", href: "/about", type: "page" },
    { label: "Services", href: "/services", type: "page" },
    { label: "Skills", href: "/skills", type: "page" },
    { label: "Projects", href: "/projects", type: "page" },
    { label: "Contact", href: "/contact", type: "page" },
  ];

  const handleFooterNav = (href) => {
    router.push(href);
  };

  return (
    <footer className="border-t border-[#6366f1]/20 bg-[#0d0d1a]/60 backdrop-blur-md py-10 px-6">
      <div className="max-w-300 mx-auto flex flex-col items-center gap-5 text-center">
        <a
          href="#home"
          className="font-extrabold text-[1.3rem] no-underline bg-linear-to-br from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent"
        >
          Nexcode
        </a>
        <div className="flex gap-6 flex-wrap justify-center">
          {FOOTER_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleFooterNav(item.href, item.type)}
              className="text-slate-400 text-[0.85rem] font-medium transition-colors duration-200 hover:text-indigo-300 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            { icon: <FaGithub />, href: personalInfo.github, label: "GitHub" },
            {
              icon: <FaLinkedinIn />,
              href: personalInfo.linkedin,
              label: "LinkedIn",
            },
            {
              icon: <FaPhone />,
              href: `tel:${personalInfo.phone}`,
              label: "Phone",
            },
            {
              icon: <FaEnvelope />,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="social-icon"
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p className="text-slate-400 text-[0.82rem]">
          © {year} {personalInfo.name} · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

