import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs,
  SiExpress, SiMongodb, SiTypescript, SiJavascript,
  SiVercel, SiOpenai,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices, MdSpeed } from "react-icons/md";

const skills = [
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiReact />, label: "React" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <TbApi />, label: "REST APIs" },
  { icon: <SiOpenai />, label: "AI Integration" },
  { icon: <MdDevices />, label: "Fully Responsive" },
  { icon: <MdSpeed />, label: "Fast Delivery" },
];

export default function SkillsHero() {
  return (
    <SectionWrapper id="skills" className="pt-15 bg-[#07070f]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-tag mb-4">Skills & Experience</p>
        <h1 className="section-title mb-4">
          Expertise that is polished, modern, and ready for product work.
        </h1>
        <p className="max-w-5xl mb-10 mx-auto">
          Strong front-end capabilities combined with backend APIs, state management, and production-level tooling — backed by a proven track record building real-world products.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/90">
          <img
            src="https://media.istockphoto.com/id/871030872/photo/programming-code-abstract-technology-background-of-software-developer.jpg?s=612x612&w=0&k=20&c=lkfUNy8Sf3TpFBeIfpBAy6FB5XQwbwjdzypK_1uOQd8="
            alt="Numaan Ali"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0d0d1a]/90 p-6 space-y-3">
          <p className="section-tag">Experience</p>
          <h2 className="section-title text-xl lg:text-2xl">
            A proven track record in building real-world web products.
          </h2>
          <p className="section-sub text-sm">
            From early prototypes to polished launches — startups, SaaS platforms,
            and production dashboards.
          </p>
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