import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Gauge, MessageCircle, Sparkles } from 'lucide-react'
import { company } from '../data/site'

export default function ProductCard({ product }) {
  const enquire = encodeURIComponent(
    `Hello Agro One, I'm interested in the ${product.name}. Please share details and price.`,
  )
  const to = `/products/${product.slug}`
  const specs = product.tagline.split('·').map((s) => s.trim())

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-900/10 hover:ring-brand-200">
      <Link to={to} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-700 shadow-sm ring-1 ring-white/60 backdrop-blur">
            {product.category}
          </span>
          {product.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
              <Sparkles size={12} /> Bestseller
            </span>
          )}
        </div>

        <span className="absolute inset-0 grid place-items-center bg-brand-950/0 opacity-0 transition-all duration-300 group-hover:bg-brand-950/20 group-hover:opacity-100">
          <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-700 shadow-lg transition-transform duration-300 group-hover:translate-y-0">
            View Details <ArrowUpRight size={16} />
          </span>
        </span>
      </Link>

      {/* Floating spec strip, overlapping the image */}
      <div className="relative z-10 mx-4 -mt-5 flex flex-wrap gap-1.5 rounded-2xl bg-white p-2.5 shadow-md ring-1 ring-slate-100">
        {specs.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700"
          >
            <Gauge size={11} /> {s}
          </span>
        ))}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <Link to={to}>
          <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-600">{product.short}</p>

        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <Check size={15} className="shrink-0 text-brand-500" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
          <Link
            to={to}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-soft"
          >
            View Details <ArrowUpRight size={15} />
          </Link>
          <a
            href={`https://wa.me/${company.whatsapp}?text=${enquire}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#25D366] p-2.5 text-white shadow-sm transition-all hover:bg-[#1fb655] hover:shadow-soft"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </article>
  )
}
