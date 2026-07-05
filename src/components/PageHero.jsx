import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Compact hero banner used at the top of every inner page.
export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-16 pt-32 text-white md:pt-40">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="container relative">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center gap-1.5 text-sm text-brand-200/80"
        >
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={15} />
          <span className="text-white">{crumb || title}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-4 max-w-2xl text-lg text-brand-100/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
