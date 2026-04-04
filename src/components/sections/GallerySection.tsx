"use client";

import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";

const photos = [
  { label: "Our Workshop" },
  { label: "Diagnostic Equipment" },
  { label: "Our Team" },
  { label: "BEV/Hybrid Bay" },
  { label: "Customer Lounge" },
  { label: "Precision Tools" },
];

export default function GallerySection() {
  return (
    <section className="relative py-28 md:py-36 bg-navy-950 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Our Shop</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Inside SmartCare
          </h2>
          <p className="text-lg text-slate-400 max-w-xl">
            Take a look at our facility, equipment, and the team behind your vehicle&apos;s care.
          </p>
        </motion.div>

        {/* Video — full-width cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div
            className="group relative w-full rounded-3xl border border-white/5 bg-navy-900/50 overflow-hidden flex items-center justify-center cursor-pointer hover:border-accent-500/20 transition-all duration-500"
            style={{ aspectRatio: "21/9" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950/40 via-transparent to-navy-950/60" />

            <div className="relative z-10 flex flex-col items-center gap-5">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-500/20 rounded-full flex items-center justify-center border border-accent-500/30 group-hover:bg-accent-500/30 transition-all duration-300"
                animate={{ boxShadow: ["0 0 0 0 rgba(249,115,22,0.3)", "0 0 0 20px rgba(249,115,22,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-accent-400 ml-1" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-display font-bold text-lg">Shop Tour Coming Soon</p>
                <p className="text-slate-600 text-sm mt-1">SmartCare Auto Repair</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo grid — 3x2 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {photos.map(({ label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/5 bg-navy-900/30 overflow-hidden flex flex-col items-center justify-center gap-3 hover:border-accent-500/15 transition-all duration-500 cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/15 rounded-xl flex items-center justify-center group-hover:bg-accent-500/15 transition-all duration-300">
                <Camera className="w-5 h-5 text-accent-500/60 group-hover:text-accent-400 transition-colors" />
              </div>
              <div className="text-center px-4">
                <p className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">{label}</p>
                <p className="text-slate-700 text-xs mt-1">Coming Soon</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
