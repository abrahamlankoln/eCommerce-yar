import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "keen-slider/keen-slider.min.css"

const Slider = ({ slides = [], autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slideChanged(instance) {
        setCurrentSlide(instance.track.details.rel)
      },
    },
    [
      (instance) => {
        if (!autoPlay) return

        let timeout
        let mouseOver = false

        const clearNextTimeout = () => clearTimeout(timeout)

        const nextTimeout = () => {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => instance.next(), interval)
        }

        instance.on("created", () => {
          instance.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          instance.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        instance.on("dragStarted", clearNextTimeout)
        instance.on("animationEnded", nextTimeout)
        instance.on("updated", nextTimeout)
      },
    ],
  )

  useEffect(() => {
    setCurrentSlide(0)
  }, [slides.length])

  return (
    <section className="w-full relative">
      <div className="relative rounded- bg-gradient-to-br from-brand via-brand/90 to-brand/80 shadow-[0_40px_120px_rgba(11,33,64,0.35)]">
        
        <div ref={sliderRef} className="keen-slider overflow-hidden rounded-none">
          {slides.map((slide) => (
            <article
              key={slide.id}
              className="keen-slider__slide relative flex h-[130rem] flex-col overflow-hidden sm:h-[65rem]"
            >
              {/* ARKA PLAN FOTO */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
                loading="lazy"
              />

              {/* METİN BLOĞU */}
<div className="relative z-10 flex h-full flex-col justify-center pl-24 pr-6 py-10 sm:pl-56 sm:pr-20 sm:py-14 translate-y-10 sm:translate-y-16">

  {/* Yazı alanı */}
  <div className="flex flex-col text-white text-left sm:max-w-xl">
    {/* SEASON */}
    <div className="flex items-center gap-3 text-xl uppercase tracking-[0.35em] text-white font-bold mb-6 sm:mb-10">
      <span className="inline-flex h-[2px] w-12 bg-white" />
      {slide.season}
    </div>

    {/* TITLE */}
    <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-5xl">
      {slide.title}
    </h2>

    {/* SUBTITLE + BUTTON BLOĞU */}
    <div className="flex flex-col">
      <p className="text-sm sm:text-2xl text-white mb-0 max-w-[24rem] leading-snug">
        
        {slide.subtitle}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center">
        <a
          href={slide.ctaHref}
          className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-white hover:text-brand"
        >
          SHOP NOW
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>

</div>
              {/* OKLAR */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full items-center justify-between px-4 sm:px-10">
                <button
                  type="button"
                  onClick={() => slider.current?.prev()}
                  className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white shadow-2xl backdrop-blur transition hover:border-white hover:bg-white/45 hover:text-brand"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous slide</span>
                </button>

                <button
                  type="button"
                  onClick={() => slider.current?.next()}
                  className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white shadow-2xl backdrop-blur transition hover:border-white hover:bg-white/45 hover:text-brand"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next slide</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DOT INDICATORLAR */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => slider.current?.moveToIdx(index)}
            className={`h-1.5 w-10 rounded-full transition ${
              currentSlide === index ? "bg-accent" : "bg-brand/30"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Slider
