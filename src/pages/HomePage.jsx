import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { Crown, Gem, Plane, Sparkles, Quote, ArrowUpRight } from "lucide-react"
import Slider from "../components/Slider"
import ProductCard from "../components/ProductCard"
import ProductTile from "../components/ProductTile"
import heroOne from "../assets/hero-1.jpg"
import menImg from "../assets/editors/men.jpg"
import womenImg from "../assets/editors/women.jpg"
import accessoriesImg from "../assets/editors/accessories.jpg"
import kidsImg from "../assets/editors/kids.jpg"
import look1 from "../assets/gallery/look1.jpg"
import look2 from "../assets/gallery/look2.jpg"
import look3 from "../assets/gallery/look3.jpg"
import look4 from "../assets/gallery/look4.jpg"
import look5 from "../assets/gallery/look5.jpg"
import look6 from "../assets/gallery/look6.jpg"
import look7 from "../assets/gallery/look7.jpg"
import look8 from "../assets/gallery/look8.jpg"
import PromoSlider from "../components/PromoSlider"
import promo1 from "../assets/promo1.png"
import promo2 from "../assets/promo2.png"





const heroSlides = [
  {
    id: "hero-1",
    season: "SUMMER 2026",
    title: "NEW COLLECTİON",
    subtitle:
      "We Know How large objects will act, but things on a small scale .",
    ctaHref: "#concierge",
    image: heroOne,
  },
  {
    id: "hero-2",
    season: "SUMMER 2026",
    title: "NEW COLLECTİON",
    subtitle:
      "We Know How large objects will act, but things on a small scale .",
    ctaHref: "#concierge",
    image: heroOne,
  },
]


const featuredProducts = [
  {
    id: "lunar-coat",
    name: "Lunar Cashmere Coat",
    price: "$3,450",
    badge: "Signature",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "aurora-clutch",
    name: "Aurora Evening Clutch",
    price: "$1,280",
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "solstice-heel",
    name: "Solstice Sculpted Heel",
    price: "$980",
    badge: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "halcyon-shades",
    name: "Halcyon Optics",
    price: "$640",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
]

const conciergePrivileges = [
  {
    icon: Crown,
    title: "Maison Privileges",
    copy: "Private shopping salons, atelier previews, and invitation only runway access tailored to your calendar.",
  },
  {
    icon: Plane,
    title: "Voyager Concierge",
    copy: "Door-to-door logistics, luggage curation, and express alterations delivered to global destinations.",
  },
  {
    icon: Gem,
    title: "Heritage Craft",
    copy: "Archival craftsmanship preserved by our artisans, offering lifetime refinements on signature pieces.",
  },
]

const maisonExperiences = [
  {
    heading: "The Salon Sitting",
    description:
      "Reserve an after-hours styling sitting with champagne pairings, live sketching, and lookbook curation.",
    link: "#salon",
  },
  {
    heading: "Material Library",
    description:
      "Explore mill-exclusive textiles, custom dye lots, and bespoke embroideries guided by our atelier curator.",
    link: "#materials",
  },
  {
    heading: "Personal Archivist",
    description:
      "Catalogue your collection with secure storage, restoration schedules, and provenance documentation.",
    link: "#archive",
  },
]

const patronStories = [
  {
    name: "Evelyn Laurent",
    title: "Art Patron & Collector",
    words:
      "Every commission feels like a story written only for me. The maison remembers the smallest nuance of my taste.",
  },
  {
    name: "Sir Daniel Clarke",
    title: "Founder, Clarke Holdings",
    words:
      "Their concierge anticipates entire itineraries. The garments arrive pressed, perfumed, and poised for the spotlight.",
  },
]

const HomePage = () => {
  const handleAdd = (product) => {
    toast.success(`${product.name} added to your wardrobe concierge`, {
      icon: "bag",
    })
  }

  return (
    <>
    
    {/* Diğer içerikler ortalı */}
    <div className="flex flex-col justify-center gap-16">
      <section className="w-[70%] mx-auto flex flex-col gap-10 items-center justify-center text-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-4xl font-bold uppercase tracking-[0.35em] text-accent text-black">
            Editor's Pick
          </p>
          
          <p className="max-w-2xl text-3xl text-slate-400">
            Problem's trying to resolve conflict between
          </p>
        </div>
      
        <div className="grid gap-6 sm:grid-cols-12">
          <figure className="relative overflow-hidden rounded-none border border-white/40 bg-white shadow-[0_20px_60px_rgba(11,33,64,0.1)] sm:col-span-7">
            <img
              src={menImg}
              alt="Menswear capsule"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute inset-x-6 bottom-6 flex justify-between text-white">
              
              <span className="rounded-none bg-white px-16 py-5 text-sm font-semibold uppercase tracking-[0.35em] text-brand shadow">
                Men
              </span>
            </figcaption>
          </figure>

          <figure className="relative overflow-hidden rounded-none border border-white/40 bg-white shadow-[0_20px_60px_rgba(11,33,64,0.08)] sm:col-span-3">
            <img
              src={womenImg}
              alt="Womenswear capsule"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute inset-x-4 bottom-6 flex justify-center">
              <span className="rounded-none bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-brand shadow">
                Women
              </span>
            </figcaption>
          </figure>

          <div className="grid gap-6 sm:col-span-2">
            <figure className="relative overflow-hidden rounded-none border border-white/30 bg-white shadow-[0_12px_40px_rgba(11,33,64,0.08)]">
              <img
                src={accessoriesImg}
                alt="Accessories capsule"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-x-3 bottom-5 flex justify-center">
                <span className="rounded-none bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-brand shadow">
                  Accessories
                </span>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-none border border-white/30 bg-white shadow-[0_12px_40px_rgba(11,33,64,0.08)]">
              <img
                src={kidsImg}
                alt="Kids capsule"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-x-3 bottom-5 flex justify-center">
                <span className="rounded-none bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-brand shadow">
                  Kids
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>









            {/* YENİ BÖLÜM - KOLEKSİYON GRID */}
      <section className="w-[70%] mx-auto flex flex-col gap-10 text-center">
        {/* 1. ÜST YAZILAR */}
        <header className="flex flex-col items-center text-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand">
            BAŞLIK 1
          </p>

          <h2 className="text-2xl font-semibold text-brand sm:text-3xl tracking-tight">
            BAŞLIK 2
          </h2>

          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
            BAŞLIK 3
          </p>
        </header>




<div className="grid gap-6 sm:grid-cols-4 ">
    <ProductTile
      image={look1}
      name="Graphic Design"
      category="English Department"
      oldPrice="$26.48"
      newPrice="$6.48"
      colors={["#14b8a6", "#2563eb", "#ea580c", "#0f172a"]}
    />
    <ProductTile
      image={look2}
      name="Modern Classics"
      category="Fashion Studio"
      oldPrice="$32.00"
      newPrice="$14.00"
      colors={["#111827", "#e11d48", "#a855f7", "#facc15"]}
    />
    <ProductTile
      image={look3}
      name="Graphic Design"
      category="English Department"
      oldPrice="$116.48"
      newPrice="$67.48"
      colors={["#14b8a6", "#2563eb", "#ea580c", "#0f172a"]}
    />
    <ProductTile
      image={look4}
      name="Modern Classics"
      category="Fashion Studio"
      oldPrice="$122.00"
      newPrice="$144.00"
      colors={["#111827", "#e11d48", "#a855f7", "#facc15"]}
    />
    {/* 6 tane daha ekleyebilirsin */}
  </div>
  <div className="grid gap-6 sm:grid-cols-4 mt-16">
    <ProductTile
      image={look5}
      name="Graphic Design"
      category="English Department"
      oldPrice="$161.48"
      newPrice="$66.48"
      colors={["#14b8a6", "#2563eb", "#ea580c", "#0f172a"]}
    />
    <ProductTile
      image={look6}
      name="Modern Classics"
      category="Fashion Studio"
      oldPrice="$225.00"
      newPrice="$146.00"
      colors={["#111827", "#e11d48", "#a855f7", "#facc15"]}
    />
    <ProductTile
      image={look7}
      name="Graphic Design"
      category="English Department"
      oldPrice="$156.48"
      newPrice="$68.48"
      colors={["#14b8a6", "#2563eb", "#ea580c", "#0f172a"]}
    />
    <ProductTile
      image={look8}
      name="Modern Classics"
      category="Fashion Studio"
      oldPrice="$222.00"
      newPrice="$148.00"
      colors={["#111827", "#e11d48", "#a855f7", "#facc15"]}
    />
    {/* 6 tane daha ekleyebilirsin */}
  </div>  
      </section>
    </div>


    
</>
  )
}

export default HomePage

