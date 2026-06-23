import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkillsHero from "@/components/skills/SkillsHero";
import SkillsFocus from "@/components/skills/SkillsFocus";
import SkillsTools from "@/components/skills/SkillsTools";
import SkillsGrowth from "@/components/skills/SkillsGrowth";
import SkillsProjects from "@/components/skills/SkillsProjects";
import SkillsCta from "@/components/skills/SkillsCta";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceImpact from "@/components/experience/ExperienceImpact";
import ExperienceCaseStudies from "@/components/experience/ExperienceCaseStudies";
import ExperienceMilestones from "@/components/experience/ExperienceMilestones";
import ExperiencePartners from "@/components/experience/ExperiencePartners";

export const metadata = {
  title: "Skills & Expertise",
  description:
    "See the tools, technologies, and development expertise behind Numaan Ali's web projects.",
  keywords: [
    "skills",
    "web development skills",
    "UI UX expertise",
    "React skills",
    "Next.js skills",
    "SEO expertise",
  ],
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SkillsHero />
        <SkillsFocus />
        <SkillsTools />
        <SkillsGrowth />
        <ExperiencePartners />
        <SkillsProjects />
        {/* <ExperienceHero /> */}
        <ExperienceImpact />
        <ExperienceCaseStudies />
        {/* <ExperienceMilestones /> */}
        <SkillsCta />
      </main>
      <Footer />
    </>
  );
}
