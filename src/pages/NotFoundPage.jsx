import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-16 text-center sm:px-10">
    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
      <Compass className="h-7 w-7" />
    </span>
    <h1 className="text-3xl font-semibold text-white">Page not found</h1>
    <p className="max-w-md text-sm text-slate-300">
      The page you are trying to reach does not exist or has been moved. Navigate back to
      the homepage to continue exploring curated commerce experiences.
    </p>
    <Link
      to="/"
      className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-brand hover:text-white"
    >
      Return home
    </Link>
  </div>
)

export default NotFoundPage

