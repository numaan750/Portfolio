import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeam from "@/components/about/AboutTeam";
import AboutInvite from "@/components/about/AboutInvite";
// import About from "@/components/about/About";

export const metadata = {
  title: "About",
  description:
    "Learn more about Numaan Ali, his design process, development approach, and the values behind every project.",
  keywords: [
    "about",
    "Numaan Ali",
    "web developer",
    "UI UX specialist",
    "portfolio about",
    "design process",
  ],
};

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
