import { useState } from 'react'
import { Link } from 'react-router-dom'

// Vector recreation of the Agro One logo: sprout + tractor badge.
// Used as the header mark and as the fallback if /logo.png is absent.
function BrandBadge({ className = 'h-11 w-11' }) {
  return (
    <span className={`grid place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-[78%] w-[78%]" role="img" aria-label="Agro One">
        {/* circular ring */}
        <circle cx="20" cy="21" r="13.5" fill="none" stroke="#2f6b2f" strokeWidth="2" />
        {/* sprout: stem + two leaves rising above the ring */}
        <path d="M20 11c0-3 0-6 0-8" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 5c4-3.6 9-3.4 12.4-.6C28.8 6.8 23.6 7.4 20 5z" fill="#4ade80" />
        <path d="M20 6.5c-2.8-2.6-6.6-2.4-9 .2 2.6 1.4 6 1.2 9-.2z" fill="#22c55e" />
        {/* tractor silhouette inside the ring */}
        <g fill="#2f6b2f">
          <rect x="12" y="20" width="11" height="5" rx="1.2" />
          <rect x="18.5" y="16.5" width="5" height="4.5" rx="1" />
          <circle cx="14.5" cy="27" r="3.4" />
          <circle cx="24" cy="26.4" r="4.4" />
        </g>
        <circle cx="14.5" cy="27" r="1.4" fill="#bbf7d0" />
        <circle cx="24" cy="26.4" r="1.8" fill="#bbf7d0" />
      </svg>
    </span>
  )
}

function Wordmark({ light }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-brand-800'
        }`}
      >
        Agro<span className="text-brand-500">One</span>
      </span>
      <span
        className={`mt-0.5 text-[10px] font-semibold italic tracking-wide ${
          light ? 'text-brand-100' : 'text-brand-600'
        }`}
      >
        A New Agri Perspective
      </span>
    </span>
  )
}

export default function Logo({ light = false }) {
  const [imgOk, setImgOk] = useState(true)

  // If the real logo file exists (/public/logo.png) show it; otherwise render
  // the vector brand lockup so the header is always branded.
  if (imgOk) {
    // `light` = sitting on a dark background (e.g. footer) → wrap in a white
    // card so the white-background logo stays clean. On the white navbar it
    // renders plainly and blends seamlessly.
    return (
      <Link to="/" className="flex items-center" aria-label="Agro One — A New Agri Perspective">
        <img
          src="/logo.png"
          alt="Agro One — A New Agri Perspective"
          onError={() => setImgOk(false)}
          className={`w-auto object-contain ${
            light ? 'h-12 rounded-xl bg-white px-3 py-2 shadow-sm' : 'h-11 md:h-12'
          }`}
        />
      </Link>
    )
  }

  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Agro One home">
      <span className="transition-transform group-hover:scale-105">
        <BrandBadge />
      </span>
      <Wordmark light={light} />
    </Link>
  )
}
