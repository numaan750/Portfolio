'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        document.documentElement.style.setProperty('--scroll-progress', `${value}%`)
        ticking = false
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[200] bg-white/5">
      <motion.div
        className="scroll-progress-bar h-full bg-linear-to-r from-[#6366f1] to-[#22d3ee] origin-left shadow-[0_0_10px_rgba(99,102,241,0.7)]"
        transition={{ ease: 'linear', duration: 0 }}
      />
    </div>
  )
}

