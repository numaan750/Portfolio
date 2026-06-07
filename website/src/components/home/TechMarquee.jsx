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
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiVercel,
  SiFirebase,
  SiSocketdotio,
  SiJest,
  SiWebpack,
  SiVite,
  SiSass,
  SiFramer,
  SiFigma,
  SiPaypal,
  SiNpm,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const techStack = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "React Query", icon: SiReact },
  { name: "React Router", icon: SiReact },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Vite", icon: SiVite },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SASS / SCSS", icon: SiSass },
  { name: "Material UI", icon: MdDesignServices },
  { name: "Shadcn UI", icon: SiReact },
  { name: "Figma", icon: SiFigma },
  { name: "REST APIs", icon: TbApi },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "Axios", icon: TbApi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Redis", icon: SiRedis },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "Firebase", icon: SiFirebase },
  { name: "Stripe", icon: SiStripe },
  { name: "PayPal", icon: SiPaypal },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "AWS", icon: FaAws },
  { name: "Vercel", icon: SiVercel },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Webpack", icon: SiWebpack },
  { name: "npm", icon: SiNpm },
  { name: "Jest", icon: SiJest },
];

export default function TechMarquee() {
  return (
    <section className="py-12 border-y border-[#6366f1]/20 bg-[#0d0d1a]/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#07070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#07070f] to-transparent z-10 pointer-events-none" />
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

