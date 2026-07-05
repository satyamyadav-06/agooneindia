import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, User } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { Reveal } from '../components/Section'
import { company } from '../data/site'

const initial = { name: '', phone: '', email: '', product: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // No backend yet → forward the enquiry to WhatsApp so no lead is lost.
    const text = encodeURIComponent(
      `New enquiry from website%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AProduct: ${form.product}%0AMessage: ${form.message}`,
    )
    window.open(`https://wa.me/${company.whatsapp}?text=${text}`, '_blank')
    setSent(true)
    setForm(initial)
  }

  const cards = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: [
        company.address.line1,
        `${company.address.city}, ${company.address.state} - ${company.address.pincode}`,
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: [company.phone],
      href: `tel:${company.phoneRaw}`,
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: [company.email],
      href: `mailto:${company.email}`,
    },
    { icon: Clock, title: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 7:00 PM'] },
  ]

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Get in touch with ${company.legalName}, Indore. Call ${company.phone} or send us an enquiry for agricultural machinery quotes and support.`}
        path="/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Have a question or need a quote? We'd love to hear from you."
        crumb="Contact"
      />

      {/* Info cards */}
      <section className="section pb-0">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="card h-full p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <c.icon size={22} />
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{c.title}</h3>
                {c.lines.map((l) =>
                  c.href ? (
                    <a
                      key={l}
                      href={c.href}
                      className="mt-1 block text-sm text-slate-600 hover:text-brand-700"
                    >
                      {l}
                    </a>
                  ) : (
                    <p key={l} className="mt-1 text-sm text-slate-600">
                      {l}
                    </p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card p-7 md:p-9">
              <h2 className="text-2xl font-bold text-slate-900">Send us an enquiry</h2>
              <p className="mt-2 text-slate-600">
                Fill in the form and we'll get back to you shortly.
              </p>

              {sent && (
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-50 p-4 text-brand-800 ring-1 ring-brand-100">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    Thanks! Your enquiry is ready to send via WhatsApp. We'll respond soon.
                  </p>
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update}
                    required
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                />
                <Field
                  label="Product of Interest"
                  name="product"
                  value={form.product}
                  onChange={update}
                  placeholder="e.g. Paddy Shifting Machine"
                />
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us your requirement..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Enquiry <Send size={17} />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <iframe
                  title="Agro One location"
                  src={company.mapEmbed}
                  className="h-[320px] w-full border-0 lg:h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="card flex items-center gap-4 bg-brand-950 p-6 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500">
                  <User size={22} />
                </span>
                <div>
                  <p className="text-sm text-brand-100/80">Proprietor</p>
                  <p className="text-lg font-bold text-white">{company.proprietor}</p>
                </div>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="btn ml-auto bg-white text-brand-700 hover:bg-brand-50"
                >
                  <Phone size={16} /> Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}
