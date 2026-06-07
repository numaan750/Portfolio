'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="mycontainer">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div variants={fadeUp} className="mb-14">
      {tag && <p className="section-tag">{tag}</p>}
      <h2 className="section-title">{title}</h2>
{subtitle && <p className="section-sub" style={{ maxWidth: 'none' }}>{subtitle}</p>}
    </motion.div>
  )
}

