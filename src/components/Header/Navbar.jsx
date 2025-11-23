import React, { useState } from 'react';

import { NavLink } from "react-router";
const LOGO_URL = "https://res.cloudinary.com/dzhzei8q6/image/upload/v1763757750/DSlogo_ybz5hz.png";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full transition-all duration-200
    ${
      isActive
        ? "bg-emerald-500/90 text-white shadow-[0_10px_28px_rgba(16,185,129,0.70)] border border-emerald-300/80"
        : "text-slate-100/90 hover:bg-white/10 hover:text-white"
    }`;
    return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950/95 border-b border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row */}
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={LOGO_URL}
                alt="Dhaka Stone Logo"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center gap-5 lg:gap-8 text-sm md:text-base font-semibold">
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/products" className={navLinkClass}>
                  Products
                </NavLink>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </ul>
            </div>

            {/* Desktop WhatsApp Button */}
            <div className="hidden md:flex justify-end">
              <a
                href="https://wa.me/8801722223973"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide
                bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-900
                shadow-[0_14px_32px_rgba(132,204,22,0.9)] border border-lime-300/80
                hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(74,222,128,1)]
                active:translate-y-[1px] active:shadow-[0_6px_16px_rgba(34,197,94,0.7)]
                transition-transform transition-shadow duration-150"
              >
                WhatsApp Order
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/15 shadow-lg active:scale-95 transition"
              onClick={() => setOpen((prev) => !prev)}
            >
              {/* আইকন */}
              <div className="space-y-1.5">
                <span
                  className={`block h-[2px] w-5 rounded-full bg-slate-100 transition-transform ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-4 rounded-full bg-slate-100 transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-slate-100 transition-transform ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {open && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-3 bg-slate-900/90 rounded-2xl px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.9)] border border-white/10">
                <NavLink
                  to="/"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/stone-sizes"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Stone Sizes
                </NavLink>
                <NavLink
                  to="/about"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>

                {/* Mobile WhatsApp Button */}
                <a
                  href="https://wa.me/8801722223973"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex justify-center items-center px-5 py-2.5 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-900
                  shadow-[0_14px_32px_rgba(132,204,22,0.9)] border border-lime-300/80
                  active:translate-y-[1px] active:shadow-[0_6px_16px_rgba(34,197,94,0.7)]
                  transition-transform transition-shadow duration-150"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;