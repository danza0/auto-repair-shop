"use client";

import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const photos = [
  { label: "Our Workshop",         type: "photo" },
  { label: "Diagnostic Equipment", type: "photo" },
  { label: "Our Team",             type: "photo" },
  { label: "BEV/Hybrid Bay",       type: "photo" },
  { label: "Customer Lounge",      type: "photo" },
  { label: "Precision Tools",      type: "photo" },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-96 h-48 bg-accent-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="accent" className="mb-4">Our Shop</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Inside SmartCare
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Take a look at our facility, equipment, and the team behind your vehicle&apos;s care.
          </p>
        </motion.div>

        {/* Video placeholder — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-6 group relative"
        >
          <div
            className="w-full bg-navy-800 rounded-3xl border-2 border-dashed border-navy-500 overflow-hidden flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-accent-500/60 group-hover:shadow-xl group-hover:shadow-accent-500/10"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 opacity-60" />

            <div className="relative flex flex-col items-center gap-4">
              {/* Pulsing play button */}
              <motion.div
                className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                animate={{ boxShadow: ["0 0 0 0 rgba(249,115,22,0.4)", "0 0 0 18px rgba(249,115,22,0)"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              >
                <Play className="w-9 h-9 text-white ml-1" fill="white" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">Shop Tour Video Coming Soon</p>
                <p className="text-slate-500 text-sm mt-1">SmartCare Auto Repair · Spanaway, WA</p>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-accent-500/30 rounded-tl-md" />
            <div className="absolute top-5 right-5 w-7 h-7 border-t-2 border-r-2 border-accent-500/30 rounded-tr-md" />
            <div className="absolute bottom-5 left-5 w-7 h-7 border-b-2 border-l-2 border-accent-500/30 rounded-bl-md" />
            <div className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-accent-500/30 rounded-br-md" />
          </div>
        </motion.div>

        {/* Photo grid — 2 rows of 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map(({ label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <motion.div
                className="group relative bg-navy-800 rounded-2xl border-2 border-dashed border-navy-500 overflow-hidden flex flex-col items-center justify-center gap-3 cursor-pointer"
                style={{ aspectRatio: "4/3" }}
                whileHover={{ scale: 1.025, borderColor: "rgba(249,115,22,0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />

                <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center group-hover:bg-accent-500/20 transition-colors duration-300">
                  <Camera className="w-6 h-6 text-accent-500/70 group-hover:text-accent-400 transition-colors" />
                </div>
                <div className="text-center px-4">
                  <p className="text-slate-400 text-sm font-semibold group-hover:text-slate-300 transition-colors">{label}</p>
                  <p className="text-slate-600 text-xs mt-0.5">Photo Coming Soon</p>
                </div>

                {/* Corner accents on hover */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-accent-500/0 group-hover:border-accent-500/50 rounded-tl transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-accent-500/0 group-hover:border-accent-500/50 rounded-tr transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-accent-500/0 group-hover:border-accent-500/50 rounded-bl transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-accent-500/0 group-hover:border-accent-500/50 rounded-br transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
