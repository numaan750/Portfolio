import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";

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
