import { motion } from 'framer-motion'

// A reusable animated section heading (eyebrow + title + subtitle).
export function SectionHeading({ eyebrow, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`${center ? 'mx-auto max-w-2xl text-center' : ''} ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-slate-600 md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}

// Fade-up wrapper for staggered reveals.
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
