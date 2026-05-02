import Navbar        from '@/components/layout/Navbar'
import ScrollProgress from '@/components/layout/ScrollProgress'
import Hero           from '@/components/sections/Hero'
import About          from '@/components/sections/About'
import Skills         from '@/components/sections/Skills'
import Projects       from '@/components/sections/Projects'
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
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
