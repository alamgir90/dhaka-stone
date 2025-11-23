// src/components/ContactSection.jsx
import React from "react";
import { FaFacebookF, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-slate-100 py-14 sm:py-16 lg:py-20"
    >
      <div className="relative overflow-hidden">
        {/* Background Lights */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1 text-[11px] sm:text-xs text-slate-300 shadow-lg shadow-black/50">
              Contact Us
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-cyan-300">
                Touch With Dhaka Stone
              </span>
            </h2>

            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              We are available for orders, delivery, bulk supply & inquiries.
            </p>
          </div>

          {/* 3D Contact Card */}
          <div
            className="
              relative
              max-w-3xl mx-auto
              [transform:perspective(1500px)_rotateX(8deg)]
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]
            "
          >
            {/* Back Shadow Layer */}
            <div className="absolute inset-0 translate-y-4 rounded-3xl bg-slate-900/85 border border-slate-800/80 blur-[2px]" />

            {/* Main Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 p-8 sm:p-10">

              <div className="space-y-8 sm:space-y-10">

                {/* Gmail */}
                <a
                  href="mailto:info.dhakastone@gmail.com"
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center text-emerald-300 text-2xl bg-slate-900/80 border border-emerald-400/40 rounded-xl shadow-md shadow-emerald-500/30">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Gmail</p>
                    <p className="text-lg font-semibold">
                      info.dhakastone@gmail.com
                    </p>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/dhakastonebd"
                  target="_blank"
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center text-blue-400 text-xl bg-slate-900/80 border border-blue-400/40 rounded-xl shadow-md shadow-blue-500/30">
                    <FaFacebookF />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Facebook Page</p>
                    <p className="text-lg font-semibold">facebook.com/dhakastonebd</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801722223973"
                  target="_blank"
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center text-green-400 text-xl bg-slate-900/80 border border-green-400/40 rounded-xl shadow-md shadow-green-500/30">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp</p>
                    <p className="text-lg font-semibold">01722223973</p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://dhakastone.com"
                  target="_blank"
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center text-amber-300 text-xl bg-slate-900/80 border border-amber-300/40 rounded-xl shadow-md shadow-amber-500/30">
                    <FaGlobe />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Website</p>
                    <p className="text-lg font-semibold">dhakastone.com</p>
                  </div>
                </a>

                {/* Office Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=AB+Shopping+Complex,+Mirpur+2,+Dhaka"
                  target="_blank"
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 flex items-center justify-center text-purple-300 text-xl bg-slate-900/80 border border-purple-300/40 rounded-xl shadow-md shadow-purple-500/30">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Office Address</p>
                    <p className="text-lg font-semibold leading-snug">
                      AB Shopping Complex (8th Floor),<br />
                      Mirpur-2, Dhaka-1216
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <p className="mt-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Dhaka Stone — All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
