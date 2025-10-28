import React from "react"

const ProductTile = ({ image, name, category, oldPrice, newPrice, colors = [] }) => {
  return (
    <div className="flex flex-col rounded-none border border-slate-200 bg-white shadow-[0_20px_60px_rgba(11,33,64,0.08)] overflow-hidden hover:shadow-[0_30px_70px_rgba(11,33,64,0.12)] transition h-full">
  {/* ÜRÜN FOTO ALANI */}
  <div className="w-full h-[36rem] overflow-hidden bg-white">
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
      loading="lazy"
    />
  </div>

  {/* ALT BİLGİ BLOĞU */}
  <div className="flex flex-col items-center text-center px-4 py-6">
    <p className="text-base font-semibold text-slate-900">{name}</p>

    <p className="text-sm text-slate-500 mt-1">{category}</p>

    <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
      <span className="text-slate-400 line-through">{oldPrice}</span>
      <span className="text-green-600">{newPrice}</span>
    </div>

    <div className="mt-4 flex items-center gap-3">
      {colors.map((color, index) => (
        <span
          key={index}
          className="h-4 w-4 rounded-none border border-slate-300"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  </div>
</div>

  )
}

export default ProductTile
