import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <section className="grid min-h-[70vh] place-items-center bg-slate-50 px-4 pt-20 text-center">
        <div>
          <p className="font-display text-8xl font-extrabold text-brand-600 md:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">
            Sorry, we couldn't find the page you were looking for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/products" className="btn-outline">
              <ArrowLeft size={18} /> View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
