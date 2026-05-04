"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiExpress,
  SiStripe,
  SiCloudinary,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: SiRedux },
  { name: "REST APIs", icon: TbApi },
  { name: "GitHub", icon: SiGithub },
  { name: "Stripe", icon: SiStripe },
  { name: "Cloudinary", icon: SiCloudinary },
];

export default function TechMarquee() {
  return (
    <section className="py-12 border-y border-[#6366f1]/20 bg-[#0d0d1a]/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee gap-10 sm:gap-16 items-center flex w-max">
        {[...techStack, ...techStack, ...techStack].map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 text-slate-400/60 hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-default"
            >
              <Icon className="text-3xl sm:text-4xl" />
              <span className="font-extrabold text-[0.95rem] sm:text-[1.1rem] tracking-wider uppercase">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
