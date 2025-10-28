import { Link } from "react-router-dom"
import { Heart, ShoppingCart } from "lucide-react"

const ProductCard = ({ product, onAdd }) => {
  if (!product) return null

  const { id, name, price, image, badge } = product

  const handleAdd = () => {
    if (typeof onAdd === "function") {
      onAdd(product)
    }
  }

  return (
    <article className="group flex flex-col gap-5 rounded-[2rem] border border-white/30 bg-white/80 p-5 shadow-[0_22px_55px_rgba(11,33,64,0.09)] transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_32px_70px_rgba(11,33,64,0.14)]">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
          loading="lazy"
        />
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/70 text-brand shadow backdrop-blur transition hover:border-accent hover:bg-accent hover:text-brand"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Save product</span>
        </button>
        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-brand shadow">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="space-y-2">
          <Link
            to={`/products/${id}`}
            className="block text-lg font-semibold text-brand transition group-hover:text-accent"
          >
            {name}
          </Link>
          <p className="text-sm text-slate-500">Complimentary concierge tailoring with purchase.</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-brand">{price}</p>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand transition hover:border-accent hover:bg-accent hover:text-brand"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
