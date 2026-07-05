import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Check,
  ChevronRight,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Tag,
} from 'lucide-react'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { Reveal } from '../components/Section'
import { getProduct, products } from '../data/products'
import { company } from '../data/site'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) return <Navigate to="/products" replace />

  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 3)
  const fallback = products.filter((p) => p.slug !== slug).slice(0, 3)
  const suggestions = related.length ? related : fallback

  const enquireText = encodeURIComponent(
    `Hello Agro One, I'm interested in the ${product.name}. Please share details and the best price.`,
  )
  const waLink = `https://wa.me/${company.whatsapp}?text=${enquireText}`

  return (
    <>
      <SEO
        title={product.name}
        description={product.short}
        path={`/products/${product.slug}`}
        image={`https://www.agroone.in${product.image}`}
      />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50 pt-24 md:pt-28">
        <div className="container flex flex-wrap items-center gap-1.5 py-4 text-sm text-slate-500">
          <Link to="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight size={15} />
          <Link to="/products" className="hover:text-brand-700">
            Products
          </Link>
          <ChevronRight size={15} />
          <span className="font-medium text-slate-800">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
              >
                <img
                  src={gallery[activeImg]}
                  alt={product.name}
                  className="aspect-[4/3] w-full object-cover"
                />
              </motion.div>
              {gallery.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {gallery.map((g, i) => (
                    <button
                      key={g}
                      onClick={() => setActiveImg(i)}
                      className={`overflow-hidden rounded-xl border-2 transition-all ${
                        activeImg === i ? 'border-brand-600' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img src={g} alt="" className="h-20 w-24 object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div>
            <span className="eyebrow mb-4">
              <Tag size={13} /> {product.category}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-brand-600">{product.tagline}</p>
            <p className="mt-5 text-slate-600">{product.description}</p>

            {/* Key features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check size={14} />
                  </span>
                  {f}
                </div>
              ))}
            </div>

            {/* Price / enquiry box */}
            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="flex items-center gap-2 text-brand-800">
                <ShieldCheck size={18} />
                <p className="text-sm font-semibold">
                  Get the best factory price · Made in India
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary">
                  <MessageCircle size={18} /> Enquire on WhatsApp
                </a>
                <a href={`tel:${company.phoneRaw}`} className="btn-outline">
                  <Phone size={18} /> {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="container mt-14">
          <h2 className="text-2xl font-bold text-slate-900">Specifications</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? 'bg-white' : 'bg-slate-50'}>
                    <th className="w-1/3 border-b border-slate-100 px-5 py-3 text-left font-semibold text-slate-700">
                      {k}
                    </th>
                    <td className="border-b border-slate-100 px-5 py-3 text-slate-600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section bg-slate-50 pt-0">
        <div className="container pt-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Related Products</h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:gap-2.5"
            >
              All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
