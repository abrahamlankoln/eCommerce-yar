// src/components/FeaturedPosts.jsx
import myPhoto1 from "../assets/1.jpg"
import myPhoto2 from "../assets/2.jpg"
import myPhoto3 from "../assets/3.jpg"

const FeaturedPosts = () => {
  const posts = [
{ img: myPhoto1, title: "Koleksiyon 1" },
  { img: myPhoto2, title: "Koleksiyon 2" },
  { img: myPhoto3, title: "Koleksiyon 3" },
  ]

  return (
    <section className="w-[70%] mx-auto flex flex-col gap-10 py-20">
      {/* Üst başlık alanı */}
      <header className="text-center flex flex-col gap-3">
        <p className="text-sm font-semibold text-sky-500 uppercase tracking-[0.25em]">
          Practice Advice
        </p>

        <h2 className="text-3xl font-bold text-slate-900">Featured Posts</h2>

        <p className="text-slate-500 text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </header>

      {/* Kartlar */}
      <div className="grid gap-8 sm:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition"
          >
            {/* Görsel */}
            <div className="relative">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[22rem] object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                NEW
              </span>
            </div>

            {/* İçerik */}
            <div className="flex flex-col gap-3 p-6 text-left">
              <div className="text-[11px] text-slate-500 flex gap-2 flex-wrap">
                <span className="text-sky-500 font-semibold">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                {post.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                We focus on ergonomics and meeting you where you work. It's
                only a keystroke away.
              </p>

              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-4 border-t border-slate-200">
                <span>22 April 2021</span>
                <span>10 comments</span>
              </div>

              <button className="mt-3 text-sky-600 text-sm font-semibold hover:underline text-left">
                Learn More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts
