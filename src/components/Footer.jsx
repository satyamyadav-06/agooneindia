import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Youtube, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'
import { products } from '../data/products'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = 2026
  return (
    <footer className="relative mt-10 bg-brand-950 text-brand-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="container relative">
        {/* CTA strip */}
        <div className="-mt-12 mb-12 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-10 shadow-soft md:px-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Ready to upgrade your farm equipment?
              </h3>
              <p className="mt-2 text-brand-50">
                Talk to our team for the right machine at the right price.
              </p>
            </div>
            <Link to="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200/80">
              {company.legalName} manufactures innovative, affordable and reliable agricultural
              machinery — proudly engineered in Indore since {company.founded}.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Youtube, href: company.social.youtube },
                { Icon: Facebook, href: company.social.facebook },
                { Icon: Instagram, href: company.social.instagram },
                { Icon: Linkedin, href: company.social.linkedin },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-brand-100 transition-colors hover:bg-brand-500 hover:text-white"
                  aria-label="social link"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-brand-200/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Products</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products"
                    className="text-brand-200/80 transition-colors hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />
                <span className="text-brand-200/80">
                  {company.address.line1}, {company.address.city}, {company.address.state} -{' '}
                  {company.address.pincode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-brand-400" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-brand-400" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-brand-200/70 md:flex-row">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>GST: {company.gst} · Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}
