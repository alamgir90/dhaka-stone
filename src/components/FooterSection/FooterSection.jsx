// src/components/FooterSection.jsx
import React from "react";
import { FaFacebookF, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HERO_LOGO_URL =
  "https://res.cloudinary.com/dzhzei8q6/image/upload/v1763757750/DSlogo_ybz5hz.png";

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-950 text-slate-100 pt-12 pb-8 sm:pt-14 sm:pb-10"
    >
      <div className="relative overflow-hidden">

        {/* Soft Glow Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

        {/* Background Lights */}
        <div className="pointer-events-none absolute -top-20 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 3D Footer Card */}
          <div
            className="
              relative
              [transform:perspective(1600px)_rotateX(6deg)]
              drop-shadow-[0_-25px_60px_rgba(0,0,0,0.9)]
            "
          >

            {/* Shadow Panel */}
            <div className="absolute inset-0 -translate-y-3 rounded-3xl bg-slate-900/85 border border-slate-800/80 blur-[2px]" />

            {/* Main Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 px-6 sm:px-10 py-10">

              {/* Grid Content */}
              <div className="grid gap-10 lg:grid-cols-3">

                {/* Column 1 — Logo + Tagline */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={HERO_LOGO_URL}
                      alt="Dhaka Stone Logo"
                      className="w-14 h-14 rounded-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
                    />
                    <div>
                      <p className="text-xl font-extrabold tracking-wide">Dhaka Stone</p>
                      <p className="text-sm text-slate-300">Premium Stone Chips Supplier</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                    Clean, dust-free, machine-crushed stone chips imported from India
                    and delivered anywhere in Bangladesh.
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 mt-4">

                    {/* Facebook */}
                    <a
                      href="https://facebook.com/dhakastonebd"
                      target="_blank"
                      className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-600 hover:border-cyan-400 hover:bg-slate-800/60 text-cyan-300 text-xl transition-all duration-200 shadow-md hover:shadow-cyan-500/40"
                    >
                      <FaFacebookF />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/88017222223973"
                      target="_blank"
                      className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-600 hover:border-green-400 hover:bg-slate-800/60 text-green-400 text-xl transition-all duration-200 shadow-md hover:shadow-green-500/40"
                    >
                      <FaWhatsapp />
                    </a>

                    {/* Gmail */}
                    <a
                      href="mailto:info.dhakastone@gmail.com"
                      className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-600 hover:border-emerald-300 hover:bg-slate-800/60 text-emerald-300 text-xl transition-all duration-200 shadow-md hover:shadow-emerald-500/40"
                    >
                      <MdEmail />
                    </a>

                    {/* Website */}
                    <a
                      href="https://dhakastone.com"
                      target="_blank"
                      className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-600 hover:border-amber-300 hover:bg-slate-800/60 text-amber-300 text-lg transition-all duration-200 shadow-md hover:shadow-amber-500/40"
                    >
                      <FaGlobe />
                    </a>
                  </div>
                </div>

                {/* Column 2 — Quick Links */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg font-semibold">Quick Links</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                    <a href="#home" className="hover:text-emerald-300">Home</a>
                    <a href="#stone-sizes" className="hover:text-emerald-300">Stone Sizes</a>
                    <a href="#about" className="hover:text-emerald-300">About</a>
                    <a href="#contact" className="hover:text-emerald-300">Contact</a>
                  </div>
                </div>

                {/* Column 3 — Office Info */}
                <div className="space-y-4">
                  <p className="text-base sm:text-lg font-semibold">Contact Info</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li><span className="font-semibold">Gmail:</span> info.dhakastone@gmail.com</li>
                    <li><span className="font-semibold">Facebook:</span> dhakastonebd</li>
                    <li><span className="font-semibold">WhatsApp:</span> 01722223973</li>
                    <li>
                      <span className="font-semibold">Office:</span><br />
                      AB Shopping Complex (8th Floor),<br />
                      Mirpur-2, Dhaka-1216
                    </li>
                  </ul>
                </div>

              </div>

              {/* Bottom Bar */}
              <div className="mt-10 pt-4 border-t border-slate-700/80 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} Dhaka Stone — All Rights Reserved.
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
