import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/home/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore a portfolio of custom web applications, business websites, and digital experiences built for performance and growth.",
  keywords: [
    "projects",
    "portfolio",
    "web applications",
    "case studies",
    "custom websites",
    "development portfolio",
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Projects showAll />
      </main>
      <Footer />
    </>
  );
}
