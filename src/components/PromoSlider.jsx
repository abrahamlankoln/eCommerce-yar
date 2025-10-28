import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "keen-slider/keen-slider.min.css"



const PromoSlider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(instance) {
      setCurrentSlide(instance.track.details.rel)
    },
  })

  return (
    <section className="relative w-full bg-emerald-800 text-white overflow-hidden">
      {/* SLIDER WRAPPER */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <article
            key={index}
            className="
              keen-slider__slide
              relative
              flex
              w-full
              items-stretch
              overflow-hidden
            "
          >
            {/* tam genişlikli içerik row'u */}
            <div
              className="
                flex
                flex-col-reverse
                sm:flex-row
                w-full
                items-center
                justify-between
                /* tam genişlik */
                /* sağ-sol boşluk yok */
              "
              style={{
                minHeight: "50rem", // bölüm yüksekliği burada. büyütmek/küçültmek istersen buradan oynay
              }}
            >
              {/* SOL YAZI BLOKU */}
              <div
                className="
                  flex
                  flex-col
                  gap-6
                  text-center
                  sm:text-left
                  /* soldaki kolon masaüstünde yarım genişlik */
                  w-full
                  sm:w-1/2
                  /* iç boşluk */
                  px-6
                  py-16
                  sm:px-16
                  sm:py-24
                "
              >
                {/* sezon / küçük label */}
                <p className="uppercase tracking-[0.35em] text-xs font-semibold text-emerald-200">
                  {slide.season}
                </p>

                {/* büyük başlık */}
                <h2 className="text-3xl font-bold leading-tight sm:text-5xl text-white">
                  {slide.titleLine1}
                  <br />
                  {slide.titleLine2}
                </h2>

                {/* açıklama */}
                <p className="text-sm text-white/80 leading-relaxed max-w-md mx-auto sm:mx-0">
                  {slide.description}
                </p>

                {/* fiyat + buton */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <span className="text-xl font-bold text-white">
                    {slide.price}
                  </span>

                  <button className="bg-white text-emerald-800 font-semibold uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-none hover:bg-emerald-100 transition">
                    {slide.ctaLabel}
                  </button>
                </div>
              </div>

              {/* SAĞ GÖRSEL BLOĞU */}
              <div
                className="
                  relative
                  flex
                  items-end
                  justify-center
                  sm:justify-end
                  w-full
                  sm:w-1/2
                  /* görsel alanının yüksekliği */
                  h-[36rem]
                  sm:h-[45rem]
                "
              >
                <img
                  src={slide.image}
                  alt={slide.titleLine1}
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-auto
                    max-h-[45rem]
                    object-contain
                    drop-shadow-2xl
                    pointer-events-none
                    select-none
                  "
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* OKLAR */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex w-full items-center justify-between px-4 sm:px-10">
        <button
          type="button"
          onClick={() => slider.current?.prev()}
          className="
            pointer-events-auto
            inline-flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/20
            text-white
            shadow-2xl
            backdrop-blur-sm
            transition
            hover:border-white
            hover:bg-white/40
            hover:text-emerald-800
          "
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous promo</span>
        </button>

        <button
          type="button"
          onClick={() => slider.current?.next()}
          className="
            pointer-events-auto
            inline-flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/50
            bg-white/20
            text-white
            shadow-2xl
            backdrop-blur-sm
            transition
            hover:border-white
            hover:bg-white/40
            hover:text-emerald-800
          "
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next promo</span>
        </button>
      </div>

      {/* DOTLAR */}
      <div className="relative z-10 mt-8 mb-8 flex items-center justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => slider.current?.moveToIdx(idx)}
            className={`
              h-1.5 w-10 rounded-full transition
              ${currentSlide === idx ? "bg-white" : "bg-white/30"}
            `}
          >
            <span className="sr-only">Go to promo {idx + 1}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default PromoSlider
