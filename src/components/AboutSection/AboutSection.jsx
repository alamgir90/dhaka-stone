import React from "react";
const HERO_LOGO_URL ="https://res.cloudinary.com/dzhzei8q6/image/upload/v1763757750/DSlogo_ybz5hz.png";


const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-slate-100 py-12 sm:py-16 lg:py-20"
    >
      <div className="relative overflow-hidden">
        {/* soft background lights */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] sm:text-xs text-slate-300 shadow-lg shadow-black/60">
              About Dhaka Stone
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-cyan-300">
                River Raiter Stone Supplier
              </span>{" "}
              in Bangladesh
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Dhaka Stone imports premium River Raiter stone chips directly
              from India and crushes them using modern machines to maintain
              consistent quality, accurate sizes, and dust-free finishing for
              your construction projects.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* LEFT: 3D info card */}
            <div
              className="
                relative
                [transform:perspective(1600px)_rotateX(8deg)_rotateY(-6deg)]
                drop-shadow-[0_30px_70px_rgba(0,0,0,0.9)]
              "
            >
              {/* shadow panel */}
              <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-slate-900/85 border border-slate-800/80 blur-[1px]" />

              {/* main card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 px-6 sm:px-8 py-6 sm:py-8">
                {/* logo + title */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-700/70">
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-emerald-400/30 rounded-full" />
                    <img
                      src={HERO_LOGO_URL}
                      alt="Dhaka Stone Logo"
                      className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Since 2025
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-slate-50">
                      Dhaka Stone – Premium Stone Chips
                    </p>
                  </div>
                </div>

                {/* body text */}
                <div className="mt-4 space-y-3 text-sm sm:text-[15px] text-slate-200">
                  <p>
                    We focus on delivering clean, accurately sized stone chips
                    for residential, commercial and industrial projects. Every
                    batch is carefully washed to minimize dust and improve
                    concrete strength.
                  </p>
                  <p>
                    Our stones are ideal for RCC casting, foundation, beam,
                    column and slab works. We keep consistent stock of 5mm,
                    10mm, 15mm, 20mm and 25mm sizes to support urgent project
                    timelines.
                  </p>
                </div>

                {/* stats row */}
                <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 px-3 py-3">
                    <p className="text-slate-400">Daily capacity</p>
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-300">
                      100+ tons
                    </p>
                    <p className="text-slate-400 text-[11px] sm:text-xs">
                      Crushed & ready to deliver
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/80 px-3 py-3">
                    <p className="text-slate-400">Service area</p>
                    <p className="text-lg sm:text-xl font-extrabold text-cyan-300">
                      All Bangladesh
                    </p>
                    <p className="text-slate-400 text-[11px] sm:text-xs">
                      Dhaka-based fast dispatch
                    </p>
                  </div>
                </div>

                {/* footer note */}
                <div className="mt-5 pt-4 border-t border-slate-700/70 text-[11px] sm:text-xs text-slate-400 flex flex-wrap gap-2 justify-between">
                  <span>Import method: L/C from India</span>
                  <span>Payment: bKash • Nagad • Bank • Cash (Dhaka)</span>
                </div>
              </div>
            </div>

            {/* RIGHT: bullet list & timeline */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8">
              {/* key points */}
              <div className="rounded-3xl bg-slate-900/70 border border-slate-700/80 p-5 sm:p-6 lg:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Why builders choose Dhaka Stone
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>
                      Consistent stone sizes from modern crushing machines for
                      stronger, denser concrete mixes.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>
                      Machine-washed and dust-reduced chips that improve bond
                      between stone, sand and cement.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                    <span>
                      Bulk delivery with covered trucks to keep materials clean
                      during transport.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                    <span>
                      Dedicated support for contractors, developers and ready-mix
                      plants.
                    </span>
                  </li>
                </ul>
              </div>

              {/* timeline / process */}
              <div className="rounded-3xl bg-slate-900/60 border border-slate-700/80 p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  From Indian mines to your project site
                </h3>
                <ol className="space-y-3 text-[13px] sm:text-sm text-slate-200">
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">
                      1
                    </span>
                    <span>
                      High-grade River Raiter stone is sourced from trusted
                      quarries in India and shipped via L/C.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">
                      2
                    </span>
                    <span>
                      Stones are crushed into 5mm, 10mm, 15mm, 20mm and 25mm
                      sizes using modern crushers.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">
                      3
                    </span>
                    <span>
                      Chips are washed to remove excess dust, then stockpiled in
                      clean yards for quick loading.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px]">
                      4
                    </span>
                    <span>
                      Your order is loaded and dispatched to your site anywhere
                      in Bangladesh with live coordination.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
