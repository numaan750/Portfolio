import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiExpress, SiMongodb, SiTypescript, SiJavascript,
  SiOpenai, SiVercel, SiFigma, SiFramer,
  SiGoogleanalytics, SiLighthouse,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  MdDevices, MdSpeed,
  MdOutlinePalette, MdOutlineAccessibility, MdOutlineTravelExplore,
} from "react-icons/md";

const skills = [
  // Frontend & Framework
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiFramer />, label: "Framer Motion" },

  // Backend & Database
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <TbApi />, label: "REST APIs" },

  // Languages
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiJavascript />, label: "JavaScript" },

  // UI/UX
  { icon: <SiFigma />, label: "Figma" },
  { icon: <MdDevices />, label: "Responsive Design" },
  { icon: <MdOutlinePalette />, label: "UI/UX Design" },
  { icon: <MdOutlineAccessibility />, label: "Accessibility" },

  // SEO & Performance
  { icon: <SiGoogleanalytics />, label: "Google Analytics" },
  { icon: <MdSpeed />, label: "Core Web Vitals" },
  { icon: <SiLighthouse />, label: "Lighthouse" },
  { icon: <MdOutlineTravelExplore />, label: "Technical SEO" },

  // AI & Deployment
  { icon: <SiOpenai />, label: "AI Integration" },
  { icon: <SiVercel />, label: "Vercel" },
];

export default function SkillsHero() {
  return (
    <SectionWrapper id="skills" className="pt-15 bg-[#07070f]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-tag mb-4">Skills & Experience</p>
        <h1 className="section-title mb-4">
          Technologies I Use to Build Modern Web Applications
        </h1>
        <p className="max-w-5xl mb-10 mx-auto text-slate-300 leading-relaxed">
          I specialize in building fast, responsive, and user-friendly web applications
          using modern technologies. From frontend interfaces to backend systems, I
          create complete solutions that help businesses grow and deliver better user
          experiences.        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90">
          <img
            src="/images/skills/Building-Reliable-and-Scalable-Digital-Products.png"
            alt="Numaan Ali"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 space-y-3">
          <p className="section-tag">My Expertise</p>
          <h2 className="section-title text-xl lg:text-2xl">
            Building Reliable and Scalable Digital Products
          </h2>
          <p className="section-sub text-sm">
            With experience in modern web development, I develop websites, SaaS
            applications, dashboards, and custom business solutions. My focus is on clean
            code, performance, responsiveness, and creating products that users enjoy
            using.          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4">
            {skills.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1220]/90 px-4 py-3 text-sm text-slate-200 transition-colors duration-200 hover:bg-indigo-500/10 hover:border-indigo-500/30 cursor-pointer"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 text-base flex-shrink-0">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}