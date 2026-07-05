import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Star,
  ShieldCheck,
  Sprout,
  Quote,
  Flame,
  MapPin,
} from 'lucide-react'
import SEO from '../components/SEO'
import Icon from '../components/Icon'
import { SectionHeading, Reveal } from '../components/Section'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { company, stats, whyChooseUs, services, testimonials } from '../data/site'

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6)
  const featuredCategories = ['All', ...new Set(featured.map((p) => p.category))]
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleFeatured =
    activeCategory === 'All'
      ? featured
      : featured.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Agricultural Machinery Manufacturer"
        description="Agro One manufactures high-performance agricultural machinery in Indore — paddy shifting machines, grain lifters, conveyors, rice mills, maize harvesters and more."
        path="/"
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-950 pt-28 text-white md:pt-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

        <div className="container relative grid items-center gap-12 pb-20 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-100 ring-1 ring-white/15"
            >
              <Sprout size={14} /> Trusted Agri Machinery · Since {company.founded}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-4xl font-extrabold leading-[1.1] text-white md:text-6xl"
            >
              Engineering{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">
                smarter farming
              </span>{' '}
              for India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-5 max-w-xl text-lg text-brand-100/90"
            >
              From paddy shifting machines to mini rice mills, {company.legalName} builds durable,
              affordable machinery that saves labour, time and money for farmers and agri-businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/products" className="btn bg-white text-brand-700 hover:bg-brand-50">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                Get a Free Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100/80"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-400" /> Quality Assured
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-brand-400" /> Pan-India Delivery
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-brand-400" /> Farmer Trusted
              </span>
            </motion.div>
          </div>

          {/* Hero image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <img
                src="/home-banner.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=80'
                }}
                alt="Agro One grain loader machine in operation at a warehouse"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  🌾
                </span>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">500+</p>
                  <p className="text-xs font-medium text-slate-500">Machines delivered</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 hidden rounded-2xl bg-brand-600 px-4 py-3 text-white shadow-soft sm:block">
              <div className="flex items-center gap-2 text-sm font-bold">
                <Star size={16} className="fill-white" /> 4.8/5 Rated
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="container grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand-400 md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-brand-100/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="section relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-50 blur-3xl" />
        <div className="container relative">
          {/* Full-width brand banner */}
          <Reveal className="relative">
            <img
              src="/images/about-banner.jpg"
              onError={(e) => {
                e.currentTarget.src = '/home-banner.jpg'
              }}
              alt="Agro One agricultural machinery — flexible screw conveyor and grain lifter"
              className="w-full rounded-3xl object-cover shadow-card"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-950/70 via-brand-950/0 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur">
                <MapPin size={16} /> {company.address.city}, {company.address.state}
              </div>
              <div className="rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-soft">
                <p className="text-3xl font-extrabold">{new Date().getFullYear() - 2022}+</p>
                <p className="text-xs">Years of trust</p>
              </div>
            </div>
          </Reveal>

          {/* Intro + strengths */}
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              center={false}
              eyebrow="Who We Are"
              title="Solving farming challenges through machinery innovation"
              subtitle={`Founded in ${company.founded} in Indore, ${company.legalName} designs and manufactures agricultural equipment that helps farmers and agri-businesses work faster and smarter.`}
            />
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChooseUs.slice(0, 4).map((w, i) => (
                  <Reveal key={w.title} delay={i * 0.06} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={w.icon} size={20} />
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">{w.title}</p>
                      <p className="text-sm text-slate-600">{w.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Link to="/about" className="btn-primary mt-8">
                More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section relative overflow-hidden bg-slate-50">
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="container relative">
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Live in Farms Across India
            </span>
          </div>
          <SectionHeading
            eyebrow="Our Machinery"
            title="Best-selling agricultural machines"
            subtitle="Engineered for Indian farms — reliable, efficient and built to last."
            className="mt-3"
          />

          {/* Category quick-filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {featuredCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  activeCategory === c
                    ? 'bg-brand-600 text-white shadow-soft'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {c === 'All' && <Flame size={14} />}
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleFeatured.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 text-center">
            <Link to="/products" className="btn-outline">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POSTER SHOWCASE ===== */}
      <section className="section bg-gradient-to-br from-brand-50 to-white">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              center={false}
              eyebrow="Our Precision Engineering"
              title="Flexible Screw Conveyor & Grain Lifter"
              subtitle="Flexible suction hose, carbon-steel screw and 18–20 ft range — built for paddy shifting, grain loading & unloading, and bulk material handling."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Flexible Suction Hose',
                'Carbon Steel Screw',
                '18 / 20 Feet Range',
                'Easy Mobility',
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl bg-white p-3 font-medium text-slate-700 shadow-sm ring-1 ring-slate-100"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products/screw-auger-conveyor-20ft" className="btn-primary">
                View Conveyor <ArrowRight size={18} />
              </Link>
              <Link to="/products/grain-lifter-20ft" className="btn-outline">
                View Grain Lifter
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-400/30 to-brand-600/20 blur-xl" />
              <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-brand-100">
                <img
                  src="/images/poster.jpg"
                  onError={(e) => {
                    e.currentTarget.src = '/images/products/spiral-auger-screw-conveyor.jpg'
                  }}
                  alt="Agro One flexible screw conveyor and grain lifter — features and applications"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Agro One"
            title="Built on quality, priced for farmers"
            subtitle="Six reasons agri-businesses across the region choose us as their machinery partner."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="card group relative h-full overflow-hidden p-6 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft">
                  <span className="absolute -right-4 -top-4 text-6xl font-black text-slate-50 transition-colors group-hover:text-brand-50">
                    0{i + 1}
                  </span>
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
                    <Icon name={w.icon} size={22} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-600">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES STRIP ===== */}
      <section className="section relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="container relative">
          <SectionHeading
            eyebrow="What We Offer"
            title="End-to-end agri machinery services"
            subtitle="More than manufacturing — we support you through the entire equipment lifecycle."
            className="[&_h2]:text-white [&_p]:text-brand-100/80"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-brand-400/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-brand-100/80">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Explore Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by farmers & agri-businesses"
            subtitle="Real feedback from the people who use our machines every day."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <figure className="card relative h-full overflow-hidden p-7">
                  <Quote
                    className="absolute -right-2 -top-2 text-brand-50"
                    size={80}
                    strokeWidth={1}
                  />
                  <div className="relative flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="relative mt-4 text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="relative mt-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
