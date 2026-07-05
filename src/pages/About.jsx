import { Link } from 'react-router-dom'
import { Target, Eye, ArrowRight, Check } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'
import { SectionHeading, Reveal } from '../components/Section'
import { company, whyChooseUs, stats } from '../data/site'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about ${company.legalName} — an agricultural machinery manufacturer founded in ${company.founded} in Indore, Madhya Pradesh.`}
        path="/about"
      />
      <PageHero
        title="About Agro One"
        subtitle="An agri-engineering company on a mission to make farming faster, easier and more profitable."
        crumb="About Us"
      />

      {/* Company profile */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="/home-banner.jpg"
              alt="Agro One machinery"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
          <div>
            <SectionHeading
              center={false}
              eyebrow="Company Profile"
              title="Innovation that solves real farming problems"
            />
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                Established in <strong>{company.founded}</strong>, {company.legalName} is a growing
                manufacturer and supplier of agricultural machinery based in{' '}
                {company.address.city}, {company.address.state}. We set out to solve the everyday
                challenges of the agricultural sector through smart, dependable machinery.
              </p>
              <p>
                Our flagship high-performing Paddy Shifting Machines — along with grain lifters,
                conveyors, rice mills and harvesters — are trusted by farmers, mills and warehouses.
                We also collaborate with reliable vendors to ensure consistent quality and supply.
              </p>
              <p>
                Under the guidance of our proprietor{' '}
                <strong>{company.proprietor}</strong>, we focus on innovation, fair pricing and
                customer satisfaction in everything we build.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                ['Founded', company.founded],
                ['Head Office', `${company.address.city}, ${company.address.state}`],
                ['Proprietor', company.proprietor],
                ['GST No.', company.gst],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {k}
                  </dt>
                  <dd className="mt-1 font-bold text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-slate-50">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              text: 'To empower farmers and agri-businesses with affordable, high-performance machinery that reduces labour, saves time and increases productivity — built with honest engineering.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To become one of the most trusted agricultural machinery brands in India, known for innovation, reliability and a genuine commitment to the farming community.',
            },
          ].map((b) => (
            <Reveal key={b.title}>
              <div className="card h-full p-8">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-soft">
                  <b.icon size={26} />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{b.title}</h3>
                <p className="mt-3 text-slate-600">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-brand-950 px-6 py-12 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-brand-400">{s.value}</p>
                <p className="mt-1 text-sm text-brand-100/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Our Strengths"
            title="What sets us apart"
            subtitle="The core values that guide how we build and how we serve."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={w.icon} size={20} />
                    </span>
                    <h3 className="font-bold text-slate-900">{w.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-brand-100 bg-brand-50 p-8 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Want to know which machine fits your needs?
              </h3>
              <p className="mt-1 text-slate-600">Our team is happy to guide you, free of cost.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Talk to Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
