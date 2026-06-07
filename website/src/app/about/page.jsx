import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeam from "@/components/about/AboutTeam";
import AboutInvite from "@/components/about/AboutInvite";
// import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <AboutIntro />
        {/* <About /> */}
        <AboutStory />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam />
        <AboutInvite />
      </main>
      <Footer />
    </>
  );
}
