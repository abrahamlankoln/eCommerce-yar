import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingCart,
  User,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"

const menuConfig = [
  {
    label: "Home",
    to: "/",
    children: [],
  },
  {
    label: "Shop",
    to: "/shop",
    children: [
      { label: "Men", to: "/shop?category=men" },
      { label: "Women", to: "/shop?category=women" },
      { label: "Kids", to: "/shop?category=kids" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Ibrahim Simsek tarafından yapılmıştır", to: "/about#creator" },
      { label: "Marka Manifestosu", to: "/about#manifesto" },
      { label: "Vizyon & Misyon", to: "/about#vision" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
    children: [
      { label: "Son Yazılar", to: "/blog" },
      { label: "Style Guides", to: "/blog/guides" },
      { label: "Trend Reports", to: "/blog/trends" },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [
      { label: "Client Services", to: "/contact#support" },
      { label: "Partnerships", to: "/contact#partners" },
      { label: "Maison Locations", to: "/contact#stores" },
    ],
  },
]

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null)

  const handleToggle = (label, hasChildren) => {
    if (!hasChildren) {
      setOpenMenu(null)
      return
    }
    setOpenMenu((current) => (current === label ? null : label))
  }

  const closeMenu = () => setOpenMenu(null)

  return (
    <>
<div className="hidden fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-slate-900 text-xs text-slate-200 sm:block">
  <div className="flex w-full items-center justify-between px-6 py-2 sm:px-4">
    
    <div className="flex items-center gap-4">
      <a href="tel:+12255550118" className="inline-flex items-center gap-2 hover:text-blue-400">
        <Phone className="h-3.5 w-3.5" />
        <span>(536) 447 21 76</span>
      </a>
      <a
        href="mailto:michelle.rivera@example.com"
        className="inline-flex items-center gap-2 hover:text-blue-400"
      >
        <Mail className="h-3.5 w-3.5" />
        <span>abrahamlincon@gmail.com</span>
      </a>
    </div>

    <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-slate-100">
      Follow us and get a chance to win 80% off
    </p>

    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-100">
        Follow us :
      </span>
      <div className="flex items-center gap-2 text-slate-100">
        {[Instagram, Youtube, Facebook, Twitter].map((Icon) => (
          <a
            key={Icon.displayName || Icon.name}
            href="#"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 transition hover:border-brand hover:text-blue-500"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  </div>
</div>


      <header className="fixed top-[2rem] left-0 w-full z-40 border-b border-slate-200 bg-white shadow-md">
  <div className="flex w-full items-center gap-4 px-6 py-6 text-sm font-medium text-slate-600 sm:px-4">
    <Link to="/" className="text-xl font-semibold tracking-wide text-slate-900">
            Bandage
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-5">
            {menuConfig.map(({ label, to, children }) => {
              const hasChildren = children.length > 0
              if (!hasChildren) {
                return (
                  <NavLink
                    key={label}
                    to={to}
                    className="rounded-full px-3 py-2 text-sm font-semibold transition hover:text-brand"
                    activeClassName="text-brand"
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                )
              }

              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(label)}
                  onMouseLeave={closeMenu}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(label, hasChildren)}
                    className="group inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition hover:text-brand focus:outline-none"
                  >
                    <NavLink
                      to={to}
                      className="transition group-hover:text-brand"
                      activeClassName="text-brand"
                    >
                      {label}
                    </NavLink>
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        openMenu === label ? 'rotate-180 text-brand' : ''
                      }`}
                    />
                  </button>

                  {openMenu === label && (
                    <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 pt-5 shadow-lg">
                      <ul className="-mt-2 flex flex-col gap-1">
                        {children.map((item) => (
                          <li key={item.label}>
                            <NavLink
                              to={item.to}
                              className="block rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-900 hover:text-white"
                              activeClassName="bg-slate-900 text-white"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 text-slate-600">
            
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:border-brand hover:text-brand"
            >           
              <User className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </button>
            <NavLink
              to="/login"
              className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:border-brand hover:text-brand"
              activeClassName="border-brand text-brand"
              onClick={closeMenu}
            >Login / Register
            </NavLink>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:border-brand hover:text-brand"
            >           
              <Search className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:border-brand hover:text-brand"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Cart</span>
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition hover:border-brand hover:text-brand"
            >           
              <Heart className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </button>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
