import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, ClipboardList, Cog, Truck } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { SectionHeading, Reveal } from '../components/Section'
import { services } from '../data/site'

const steps = [
  { icon: PhoneCall, title: 'Enquiry', text: 'Tell us your crop, capacity and requirements.' },
  { icon: ClipboardList, title: 'Recommendation', text: 'We suggest the right machine and a fair quote.' },
  { icon: Cog, title: 'Manufacturing', text: 'Your machine is built and quality-checked.' },
  { icon: Truck, title: 'Delivery & Setup', text: 'We deliver, install and train your team.' },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Agro One offers machinery manufacturing, installation, after-sales support, custom fabrication, operator training and bulk supply for agricultural businesses."
        path="/services"
      />
      <PageHero
        title="Our Services"
        subtitle="From manufacturing to after-sales support, we stay with you through the entire equipment journey."
        crumb="Services"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Complete agri-machinery solutions"
            subtitle="Everything you need to buy, run and maintain your equipment — under one roof."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="card group h-full p-7 hover:-translate-y-1 hover:border-brand-200">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, transparent process"
            subtitle="Four easy steps from your first call to a running machine."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="relative card h-full p-6 text-center">
                  <span className="absolute right-4 top-4 text-5xl font-extrabold text-brand-50">
                    {i + 1}
                  </span>
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
                    <s.icon size={24} />
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-10 text-center text-white md:flex-row md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white">Let's find the right solution for you</h3>
              <p className="mt-2 text-brand-50">Our experts are ready to help — at no cost.</p>
            </div>
            <Link to="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
