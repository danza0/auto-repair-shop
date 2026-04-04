"use client";

import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

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
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-64 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-48 bg-accent-500/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-max relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">Our Shop</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Inside SmartCare
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Take a look at our facility, equipment, and the team behind your vehicle&apos;s care.
          </p>
        </motion.div>

        {/* Video placeholder - 16:9 aspect ratio */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 group relative"
        >
          <div
            className="relative w-full bg-navy-900/80 rounded-3xl border-2 border-dashed border-navy-600 overflow-hidden flex flex-col items-center justify-center gap-5 transition-all duration-500 group-hover:border-accent-500/50 group-hover:shadow-2xl group-hover:shadow-accent-500/10"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-950/60 to-navy-900/80" />

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center gap-5">
              {/* Pulsing play button */}
              <motion.div
                className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-xl shadow-accent-500/25 cursor-pointer hover:bg-accent-400 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249,115,22,0.45)",
                    "0 0 0 20px rgba(249,115,22,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              >
                <Play className="w-9 h-9 text-white ml-1" fill="white" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-bold text-lg tracking-tight">
                  Shop Tour Video Coming Soon
                </p>
                <p className="text-slate-500 text-sm mt-1.5">
                  SmartCare Auto Repair &middot; Spanaway, WA
                </p>
              </div>
            </div>

            {/* Corner bracket accents */}
            <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-accent-500/30 rounded-tl-lg transition-colors duration-300 group-hover:border-accent-500/60" />
            <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-accent-500/30 rounded-tr-lg transition-colors duration-300 group-hover:border-accent-500/60" />
            <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-accent-500/30 rounded-bl-lg transition-colors duration-300 group-hover:border-accent-500/60" />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-accent-500/30 rounded-br-lg transition-colors duration-300 group-hover:border-accent-500/60" />
          </div>
        </motion.div>

        {/* Photo grid - 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map(({ label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <motion.div
                className="group relative bg-navy-900/70 rounded-2xl border-2 border-dashed border-navy-600 overflow-hidden flex flex-col items-center justify-center gap-3 cursor-pointer"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.03, borderColor: "rgba(249,115,22,0.55)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {/* Center glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(249,115,22,0.10) 0%, transparent 65%)",
                  }}
                />

                {/* Camera icon */}
                <div className="w-14 h-14 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/40 transition-all duration-300">
                  <Camera className="w-6 h-6 text-accent-500/70 group-hover:text-accent-400 transition-colors duration-300" />
                </div>

                {/* Label */}
                <div className="text-center px-4">
                  <p className="text-slate-300 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                    {label}
                  </p>
                  <p className="text-slate-600 text-xs mt-1">Photo Coming Soon</p>
                </div>

                {/* Corner bracket accents on hover */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-accent-500/0 group-hover:border-accent-500/50 rounded-tl-sm transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-accent-500/0 group-hover:border-accent-500/50 rounded-tr-sm transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-accent-500/0 group-hover:border-accent-500/50 rounded-bl-sm transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-accent-500/0 group-hover:border-accent-500/50 rounded-br-sm transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
