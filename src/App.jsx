import { Route, Switch } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Header from "./layout/Header"
import PageContent from "./layout/PageContent"
import Footer from "./layout/Footer"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

import Slider from "./components/Slider"
import PromoSlider from "./components/PromoSlider"
import PromoSection from "./components/PromoSection" 
import FeaturedPosts from "./components/FeaturedPosts"
import heroOne from "./assets/hero-1.jpg"
import promo1 from "./assets/promo1.png"
import promo2 from "./assets/promo2.png"

import "react-toastify/dist/ReactToastify.css"

function App() {
  // HERO SLIDER (en üstteki büyük slider)
  const heroSlides = [
    {
      id: "hero-1",
      season: "SUMMER 2026",
      title: "NEW COLLECTION",
      subtitle:
        "We know how large objects will act, but things on a small scale.",
      ctaHref: "#concierge",
      image: heroOne,
    },
    {
      id: "hero-2",
      season: "SUMMER 2026",
      title: "NEW COLLECTION",
      subtitle:
        "We know how large objects will act, but things on a small scale.",
      ctaHref: "#concierge",
      image: heroOne,
    },
  ]

  // PROMO SLIDER (Vita Classic alanı / yeşil blok)
  const promoSlides = [
    {
      season: "SUMMER 2020",
      titleLine1: "Vita Classic",
      titleLine2: "Product",
      description:
        "We know how large objects will act. We know how objects will act. We know.",
      price: "$16.48",
      ctaLabel: "ADD TO CART",
      image: promo1,
    },
    {
      season: "SUMMER 2020",
      titleLine1: "Vita Classic",
      titleLine2: "Product",
      description:
        "We know how large objects will act. We know how objects will act. We know.",
      price: "$29.99",
      ctaLabel: "ADD TO CART",
      image: promo2,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* HEADER SABİT */}
      <Header />

      {/* Header fixed olduğu için sayfayı slider'dan aşağı itiyoruz */}
      <div className="pt-[7.5rem]" />

      {/* FULL WIDTH HERO SLIDER */}
      <Slider slides={heroSlides} />

      {/* SAYFANIN ANA İÇERİĞİ (Editor’s Pick, 8'li ürünler...) */}
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContent>

      {/* FULL WIDTH YEŞİL BLOK (Vita Classic Slider) */}
      <PromoSlider slides={promoSlides} />

      {/* FULL WIDTH COUPLE + TEXT BLOĞU */}
      <PromoSection />
      {/* 5. Featured Posts alanı (yeni eklediğimiz bölüm) */}
      <FeaturedPosts />

      {/* FOOTER */}
      <Footer />
      

      {/* Toast bildirimi */}
      <ToastContainer
        position="top-right"
        newestOnTop
        closeOnClick
        theme="light"
      />
    </div>
  )
}

export default App
