import Navbar        from '@/components/layout/Navbar'
import ScrollProgress from '@/components/layout/ScrollProgress'
import Hero           from '@/components/sections/Hero'
import TechMarquee    from '@/components/sections/TechMarquee'
import About          from '@/components/sections/About'
import Skills         from '@/components/sections/Skills'
import Process        from '@/components/sections/Process'
import Projects       from '@/components/sections/Projects'
import Testimonials   from '@/components/sections/Testimonials'
import FAQ            from '@/components/sections/FAQ'
import Experience     from '@/components/sections/Experience'
import Contact        from '@/components/sections/Contact'
import Footer         from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
