import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/layout/ScrollProgress'
import Hero from '@/components/home/Hero'
import TechMarquee from '@/components/home/TechMarquee'
import HomeServices from '@/components/home/HomeServices'
import HomePortfolio from '@/components/home/HomePortfolio'
import HomeStats from '@/components/home/HomeStats'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeWhyChoose from '@/components/home/HomeWhyChoose'
import HomeTestimonialsAlt from '@/components/home/HomeTestimonialsAlt'
// import HomePartners from '@/components/home/HomePartners'
import HomeBoost from '@/components/home/HomeBoost'
import HomeCta from '@/components/home/HomeCta'
import FAQ from '@/components/home/FAQ'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: "Home | Nexcode",
  description:
    "Launch modern websites, web apps, and SEO-optimized digital experiences with Numaan Ali.",
  keywords: [
    "Numaan Ali",
    "Nexcode",
    "Home",
    "Full-Stack Developer",
    "UI/UX Designer",
    "SEO Services",
    "Next.js",
    "React",
  ],
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <HomeServices />
        <HomeWhyChoose />
        <HomePortfolio />
        <HomeBoost />
        <HomeStats />
        <HomeCaseStudies />
        <HomeTestimonialsAlt />
        {/* <HomePartners /> */}
        <FAQ />
        <HomeCta />
      </main>
      <Footer />
    </>
  )
}

