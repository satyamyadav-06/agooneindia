import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Products() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Our Products"
        description="Browse Agro One's range of agricultural machinery — paddy shifting machines, grain lifters, screw conveyors, rice mills, maize harvesters, paddy cleaners and grading machines."
        path="/products"
      />
      <PageHero
        title="Our Products"
        subtitle="A complete range of agricultural machinery — engineered for performance, priced for farmers."
        crumb="Products"
      />

      <section className="section">
        <div className="container">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active === c
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand-950 px-8 py-10 text-center text-white md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Need a custom size or configuration?
              </h3>
              <p className="mt-2 text-brand-100/80">
                We fabricate machines tailored to your crop, capacity and budget.
              </p>
            </div>
            <Link to="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Request Custom Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
