// src/components/PromoSection.jsx

import sampleImg from "../assets/promo-couple.jpg" // kendi görselin

const PromoSection = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full
          max-w-[1440px]      /* genişlettik */
          mx-auto
          flex
          flex-col
          gap-10
          px-8               /* PageContent ile hizalı gözüksün diye 8 tuttuk */
          py-0              /* yüksekliği arttırdık: daha heybetli */
          lg:flex-row
          lg:items-center
          lg:gap-16
        "
      >
        {/* SOL: FOTOĞRAF */}
        <div className="w-full lg:w-1/2">
          <img
            src={sampleImg}
            alt="promo couple"
            className="
              w-full
              h-[44rem]        /* resmi büyüttük */
              object-cover
              object-bottom    /* alt kısmı daha çok göster */
              rounded-none
            "
          />
        </div>

        {/* SAĞ: METİN BLOĞU */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 text-left">
  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
    SUMMER 2020
  </p>

  <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl leading-snug">
    Part of the Neural <br className="hidden sm:block" /> Universe
  </h2>

  <p className="text-slate-600 text-base leading-relaxed max-w-md">
    We know how large objects will act,<br /> but things on a small scale.
  </p>

          {/* Butonlar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="button"
              className="
                rounded-sm
                bg-emerald-600
                px-6
                py-3
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                hover:bg-emerald-700
              "
            >
              BUY NOW
            </button>

            <button
              type="button"
              className="
                rounded-sm
                border
                border-emerald-600
                px-6
                py-3
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-emerald-700
                hover:bg-emerald-50
              "
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
