import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, Youtube, X } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { Reveal } from '../components/Section'
import { videos, company } from '../data/site'

// Fullscreen modal that plays the selected YouTube video.
function VideoModal({ video, onClose }) {
  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
        >
          Close <X size={18} />
        </button>

        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-white">{video.title}</h3>
          <p className="mt-1 text-sm text-white/70">{video.desc}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}

function VideoCard({ video, onPlay }) {
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  return (
    <article className="card overflow-hidden">
      <button
        onClick={onPlay}
        className="group relative block aspect-video w-full bg-slate-900"
        aria-label={`Play ${video.title}`}
      >
        <img
          src={thumb}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
        />
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
            <Play size={28} className="ml-1" fill="currentColor" />
          </span>
        </span>
      </button>
      <div className="p-5">
        <h3 className="font-bold text-slate-900">{video.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{video.desc}</p>
      </div>
    </article>
  )
}

export default function Videos() {
  const [active, setActive] = useState(null)

  return (
    <>
      <SEO
        title="Videos"
        description="Watch Agro One machinery in action — live demos of grain lifters, paddy shifting machines, trolley fillers and more."
        path="/videos"
      />
      <PageHero
        title="Machinery in Action"
        subtitle="Watch our machines at work — real demos from the field and the workshop."
        crumb="Videos"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.id + i} delay={i * 0.05}>
                <VideoCard video={v} onPlay={() => setActive(v)} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white">
                <Youtube size={28} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Subscribe for more demos</h3>
                <p className="text-slate-600">
                  See new machines and field tests on our YouTube channel.
                </p>
              </div>
            </div>
            <a
              href={company.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="btn bg-red-600 text-white hover:bg-red-700"
            >
              <Youtube size={18} /> Visit Channel
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && <VideoModal video={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  )
}
