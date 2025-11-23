import React from 'react';
import { BsTicketDetailed } from "react-icons/bs";
import confetti from "canvas-confetti";
const HERO_IMAGE_URL = "https://res.cloudinary.com/dzhzei8q6/image/upload/v1763784117/Bannerimage_id1xtd.png";

const Banner = () => {
  
  const handleWorkOrder = () => {
  // 1) Confetti anim
  confetti({
    particleCount: 250,
    spread: 90,
    origin: { y: 0.6 },
    colors: ["#ff00ff", "#00ffff", "#ffff00", "#ff6600", "#00ff66", "#66ccff"],
  });

  // 2) Delay করে WhatsApp Redirect
  setTimeout(() => {
    window.open("https://wa.me/8801722223973", "_blank");
  }, 900); // 0.9 sec পরে redirect
};
    return (
    <section
      id="home"
      className="bg-slate-950 text-slate-100 pt-6 sm:pt-8 lg:pt-10"
    >
      <div className="relative overflow-hidden">
        {/* Background Accent Lights */}
        <div className="pointer-events-none absolute -top-32 -left-40 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT SIDE — TEXT + CTA */}
            <div className="space-y-6 sm:space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-emerald-500/40 px-3 py-1 text-xs sm:text-sm font-medium shadow-lg shadow-black/50">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Premium River Raiter Stone • Imported from India
              </p>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                  Clean, High-Quality Stone Chips
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-cyan-300">
                    5mm to 25mm Sizes Available
                  </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl">
                  We supply premium River Raiter stone chips imported from
                  India, processed through modern crushers and washers. Fast
                  delivery across Dhaka and all over Bangladesh.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/60">
                    ✓
                  </span>
                  <p>Available sizes: 5mm, 10mm, 15mm, 20mm, 25mm</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/60">
                    ✓
                  </span>
                  <p>Washed, dust-free & concrete-friendly</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400/60">
                    ✓
                  </span>
                  <p>Best for casting, foundation & structural works</p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/60">
                    ✓
                  </span>
                  <p>Delivery available anywhere in Bangladesh</p>
                </div>
              </div>
             
              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <button
                
                  onClick={handleWorkOrder}
                  
  className="px-6 py-2.5 rounded-full font-semibold
  bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-900
  shadow-[0_14px_32px_rgba(132,204,22,0.9)] border border-lime-300/80
  hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(74,222,128,1)]
  active:translate-y-[1px] active:shadow-[0_6px_16px_rgba(34,197,94,0.7)]
  transition-all duration-150"

                   href="https://wa.me/8801722223973"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    btn 
                   bg-gradient-to-r from-pink-400 to-pink-200


                    border-none text-slate-900 font-bold 
                    rounded-xl
                    shadow-xl shadow-emerald-900/70 
                    hover:brightness-110 hover:-translate-y-0.5
                    transition-all duration-200
                    text-lg sm:text-sm lg:text-base
                    text-2xl
            
                  "
                >
                  Work Order
                  </button>
                  
                

                <a
                  href="#stone-sizes"
                  className="
                    btn btn-ghost 
                    border border-slate-600 
                    rounded-xl
                    text-xs sm:text-sm lg:text-base
                    hover:border-cyan-400 hover:bg-slate-900/60
                    hover:-translate-y-0.5 hover:shadow-lg
                    transition-all duration-200
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </a>
              </div>
            </div>

            {/* RIGHT — 3D IMAGE CARD WITH YOUR BANNER */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  relative
                  w-full max-w-sm sm:max-w-md 
                  [transform:perspective(1600px)_rotateX(10deg)_rotateY(-12deg)]
                  drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]
                "
              >
                {/* Back shadow panel */}
                <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-slate-900/80 border border-slate-800/80 blur-[1px]" />

                {/* Main card with image */}
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 p-3 sm:p-4">
                  <div className="relative overflow-hidden rounded-2xl bg-slate-900">
                    <img
                      src={HERO_IMAGE_URL}
                      alt="Dhaka Stone 3/4 (20mm) Stone Bowl"
                      className="
                        w-full h-full object-cover 
                        transition-transform duration-500 
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* Small info strip under image */}
                  <div className="mt-3 sm:mt-4 flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                    <span>🔶 Five Types of Stone Chips</span> 

                  <button
  className="
    inline-flex items-center gap-2 cursor-pointer 
    rounded-full px-4 py-1
    bg-slate-900/90
    border border-emerald-400
    shadow-[0_6px_0_rgba(16,185,129,1)]
    hover:translate-y-0.5 hover:shadow-[0_3px_0_rgba(16,185,129,1)]
    active:translate-y-1 active:shadow-[0_0px_0_rgba(16,185,129,1)]
    transition-all duration-150
  "
>
  <BsTicketDetailed size={22} className="text-emerald-300" />
  <span className="text-emerald-300 font-semibold text-lg">
    View
  </span>
</button>


                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;