// src/pages/ProductDetailsPage.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/stoneData.json")
      .then(res => res.json())
      .then(data => {
        const item = data.find(p => p.slug === slug);
        setProduct(item);
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="bg-slate-950 text-slate-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/"
          className="text-cyan-300 text-sm hover:text-cyan-400"
        >
          ← Back to Products
        </Link>


        {/* 3D CARD */}
        <div
          className="
            relative mt-8 grid lg:grid-cols-2 gap-8
            [transform:perspective(1600px)_rotateX(6deg)]
          "
        >
          {/* shadow */}
          <div className="absolute inset-0 translate-y-4 rounded-3xl bg-slate-900/80 blur-[2px] -z-10" />

          {/* LEFT SIDE – IMAGE BOX */}
          <div
            className="
              relative rounded-3xl
              bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
              border border-slate-700
              p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]
            "
          >
            <div className="overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-80 object-contain"
              />
            </div>
                     <div>
                        {/* Title */}
        <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          {product.title}
        </h1>
                     </div>
            {/* Rating + Price */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-yellow-400 ${
                      i < Math.round(product.rating) ? "" : "opacity-30"
                    }`}
                  />
                ))}
                <span className="ml-1 text-xs text-slate-400">
                  {product.rating.toFixed(1)} / 5.0
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400">Price per cft</p>
                <p className="text-emerald-300 font-extrabold text-xl">
                  ৳ {product.price}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – FULL JSON DETAILS */}
          <div
            className="
              relative rounded-3xl
              bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
              border border-slate-700
              p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]
              text-sm sm:text-[15px]
            "
          >
            <div className="space-y-4">

              <div>
                <p className="text-slate-400 text-xs uppercase">Name</p>
                <p className="text-slate-200 font-semibold">{product.name}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">SKU</p>
                <p className="text-slate-200">{product.sku}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Slug</p>
                <p className="break-all text-slate-200">{product.slug}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Description</p>
                <p className="text-slate-200">{product.description}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Method</p>
                <p className="text-slate-200">{product.method}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Import Method</p>
                <p className="text-slate-200">{product.importMethod}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Origin</p>
                <p className="text-slate-200">{product.origin}</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs uppercase">Note</p>
                <p className="text-slate-200">{product.note}</p>
              </div>

              {/* Payment Options */}
              <div>
                <p className="text-slate-400 text-xs uppercase">Payment Options</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.paymentOptionsLocal.map((method) => (
                    <span
                      key={method}
                      className="
                        text-[12px] px-3 py-1 rounded-full
                        bg-slate-900 border border-slate-600 text-slate-200
                      "
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BUY NOW BUTTON */}
            <a
              href={`https://wa.me/8801722223973?text=I want to buy ${encodeURIComponent(
                product.title
              )}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-8 block w-full text-center
                py-3 rounded-xl text-black font-bold
                bg-gradient-to-r from-emerald-400 to-lime-400
                shadow-lg shadow-emerald-800/60
                hover:brightness-110 hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
