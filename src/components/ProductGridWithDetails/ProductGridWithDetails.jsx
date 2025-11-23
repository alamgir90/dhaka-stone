// src/components/ProductGridWithDetails.jsx
import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const ProductGridWithDetails = ({ products }) => {
  return (
    <section className="bg-slate-950 text-slate-100 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1 text-xs text-slate-300 shadow-lg shadow-black/50">
            Dhaka Stone Products
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Our Stone Sizes
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Imported River Raiter Stone • Machine Crushed • Dust-Free
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((item) => (
            <div
              key={item.id}
              className="
                group relative
                rounded-3xl
                bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                border border-slate-700/70
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.9)]
                hover:scale-[1.02]
                transition-all duration-300
              "
            >
              {/* shadow */}
              <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-slate-900/80 blur-md -z-10" />

              {/* image */}
              <div className="overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* name */}
              <h3 className="mt-3 text-lg font-bold text-slate-100">
                {item.name}
              </h3>

              {/* import method */}
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                {item.method}
              </p>

              {/* rating + price */}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-yellow-400 ${
                        i < Math.round(item.rating) ? "" : "opacity-40"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-emerald-300 font-bold text-sm sm:text-base">
                  ৳ {item.price}
                </p>
              </div>

              {/* Details button → route */}

              <Link
                to={`/products/${item.slug}`}
                className="
                  mt-4 block text-center py-2 rounded-xl
                  border border-cyan-400 text-cyan-300
                  hover:bg-slate-900/70
                  hover:-translate-y-0.5
                  transition-all duration-200
                  text-sm
                "
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridWithDetails;
