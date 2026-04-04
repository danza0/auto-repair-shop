"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronRight, Cpu, Zap, Languages } from "lucide-react";

const trustItems = [
  { icon: Cpu, label: "Advanced Diagnostics" },
  { icon: Zap, label: "EV & Hybrid Specialists" },
  { icon: Languages, label: "EN · ES · RU Service" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-600/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/30 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Decorative gear outlines */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none">
          <circle cx="210" cy="210" r="180" stroke="#f97316" strokeWidth="2"/>
          <circle cx="210" cy="210" r="120" stroke="#f97316" strokeWidth="2"/>
          <circle cx="210" cy="210" r="60" stroke="#f97316" strokeWidth="2"/>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 210 + 125 * Math.cos(angle);
            const y1 = 210 + 125 * Math.sin(angle);
            const x2 = 210 + 175 * Math.cos(angle);
            const y2 = 210 + 175 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="2"/>;
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/25 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-accent-400 text-sm font-medium">Now Accepting Appointments — Spanaway, WA</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 font-display"
          >
            Smart Service.<br />
            <span className="text-accent-500 text-glow">Expert Repairs.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
          >
            Precision diagnostics, programming, BEV/hybrid service, and more. Modern equipment. Honest communication. Multilingual team.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-lg px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-accent-500/40 hover:scale-[1.02]"
            >
              Book Appointment <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+12532143774"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-white/30 text-white hover:border-accent-500 hover:text-accent-400 text-lg px-8 py-4 transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              (253) 214-3774
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-500" />
                </div>
                <span className="text-slate-300 text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
