import { Link } from 'react-router-dom'
import { ArrowRightCircle } from 'lucide-react'

const AboutPage = () => (
  <div className="flex flex-col gap-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10">
    <header className="space-y-4">
      <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-light backdrop-blur">
        Our story
      </p>
      <h1 className="text-3xl font-semibold text-white sm:text-4xl">
        Crafting a design-led commerce experience
      </h1>
      <p className="text-sm text-slate-300 sm:text-base">
        Nova Commerce is a concept brand curated for the Workintech E-Comm project,
        translating the Figma Ecommerce UI Kit into a responsive React + Tailwind
        experience. Every layout is engineered mobile-first to honor the modern customer
        journey.
      </p>
    </header>

    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
          Design philosophy
        </p>
        <p className="mt-3 text-sm text-slate-300">
          We embrace modular UI components, flex layouts, and reusable state to keep the
          experience scalable. Tailwind-powered tokens and mobile-first breakpoints mirror
          the best of product design systems.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-light">
          Tech stack
        </p>
        <p className="mt-3 text-sm text-slate-300">
          React Router 5, Redux + Thunk, Tailwind CSS, Axios, Toastify, and lucide-react
          icons, bundled with Vite for instant feedback loops and production-ready builds.
        </p>
      </div>
    </div>

    <Link
      to="/collections"
      className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-light"
    >
      View latest collections
      <ArrowRightCircle className="h-4 w-4" />
    </Link>
  </div>
)

export default AboutPage

