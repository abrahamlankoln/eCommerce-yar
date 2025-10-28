import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'Youtube', href: '#' },
]

const infoLinks = [
  { to: '/about', label: 'About' },
  { to: '/collections', label: 'Collections' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
]

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 text-slate-800 border-t border-slate-200">
      {/* ÜST KISIM: Marka + Sosyal */}
      <section className="w-full max-w-[1280px] mx-auto flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold text-slate-900">Bandage</h2>

        <div className="flex items-center gap-5 text-sky-600">
          <button className="hover:text-sky-700 transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </button>
          <button className="hover:text-sky-700 transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </button>
          <button className="hover:text-sky-700 transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </button>
        </div>
      </section>

      <hr className="border-slate-200" />

      {/* ORTA KISIM: Link kolonları + Subscribe */}
      <section className="w-full max-w-[1280px] mx-auto grid gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-slate-900 font-semibold mb-2">Company Info</h3>
          <button className="text-slate-600 hover:text-slate-900 text-left">About Us</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Carrier</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">We are hiring</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Blog</button>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-slate-900 font-semibold mb-2">Legal</h3>
          <button className="text-slate-600 hover:text-slate-900 text-left">About Us</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Carrier</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">We are hiring</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Blog</button>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-slate-900 font-semibold mb-2">Features</h3>
          <button className="text-slate-600 hover:text-slate-900 text-left">Business Marketing</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">User Analytic</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Live Chat</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Unlimited Support</button>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h3 className="text-slate-900 font-semibold mb-2">Resources</h3>
          <button className="text-slate-600 hover:text-slate-900 text-left">IOS & Android</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Watch a Demo</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">Customers</button>
          <button className="text-slate-600 hover:text-slate-900 text-left">API</button>
        </div>

        <div className="flex flex-col gap-4 text-sm lg:col-span-2">
    <h3 className="text-slate-900 font-semibold mb-2">Get In Touch</h3>

    <div className="flex w-full max-w-sm rounded border border-slate-300 overflow-hidden">
      <input
        type="email"
        placeholder="Your Email"
        className="flex-1 px-4 py-3 text-slate-700 text-sm outline-none"
      />
      <button className="bg-sky-600 px-3 py-3 text-white text-sm font-semibold hover:bg-sky-700 shrink-0">
        Subscribe
      </button>
    </div>

    <p className="text-[12px] text-slate-500 leading-relaxed max-w-sm">
      Lore imp sum dolor Amit
    </p>
  </div>
      </section>

      <hr className="border-slate-200" />

      {/* ALT KISIM: Copy text */}
      <section className="w-full max-w-[1280px] mx-auto grid gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-5">
        Made With Love By Finland All Right Reserved
      </section>
    </footer>
  )
}

export default Footer
