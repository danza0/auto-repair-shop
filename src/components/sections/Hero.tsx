"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronRight, Cpu, Zap, Languages, Camera } from "lucide-react";
import { useEffect } from "react";

const trustItems = [
  { icon: Cpu, label: "Advanced Diagnostics" },
  { icon: Zap, label: "EV & Hybrid Specialists" },
  { icon: Languages, label: "EN · ES · RU Service" },
];

const particles = [
  { cx: "72%", cy: "28%", r: 4, delay: 0 },
  { cx: "78%", cy: "62%", r: 3, delay: 1.2 },
  { cx: "65%", cy: "48%", r: 5, delay: 0.6 },
  { cx: "85%", cy: "38%", r: 3, delay: 2 },
  { cx: "60%", cy: "72%", r: 4, delay: 1.5 },
];

function GearSVG({
  size,
  strokeOpacity,
  teeth,
  innerR,
  outerR,
  toothW,
}: {
  size: number;
  strokeOpacity: number;
  teeth: number;
  innerR: number;
  outerR: number;
  toothW: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const toothPaths = Array.from({ length: teeth }).map((_, i) => {
    const a1 = ((i * 360) / teeth - toothW / 2) * (Math.PI / 180);
    const a2 = ((i * 360) / teeth + toothW / 2) * (Math.PI / 180);
    const x1 = cx + innerR * Math.cos(a1);
    const y1 = cy + innerR * Math.sin(a1);
    const x2 = cx + outerR * Math.cos(a1);
    const y2 = cy + outerR * Math.sin(a1);
    const x3 = cx + outerR * Math.cos(a2);
    const y3 = cy + outerR * Math.sin(a2);
    const x4 = cx + innerR * Math.cos(a2);
    const y4 = cy + innerR * Math.sin(a2);
    return `M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`;
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <circle cx={cx} cy={cy} r={innerR - 2} stroke="#f97316" strokeWidth="1.5" strokeOpacity={strokeOpacity} />
      <circle cx={cx} cy={cy} r={innerR * 0.35} stroke="#f97316" strokeWidth="1.5" strokeOpacity={strokeOpacity} />
      {toothPaths.map((d, i) => (
        <path key={i} d={d} stroke="#f97316" strokeWidth="1.5" strokeOpacity={strokeOpacity} />
      ))}
    </svg>
  );
}

function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <motion.path
        d="M620 50 L680 50 L680 120 L750 120"
        stroke="#f97316"
        strokeWidth="1"
        strokeOpacity="0.25"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      <motion.path
        d="M700 200 L700 280 L760 280 L760 340"
        stroke="#f97316"
        strokeWidth="1"
        strokeOpacity="0.2"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.5, delay: 1.4, ease: "easeInOut" }}
      />
      <motion.path
        d="M560 400 L600 400 L600 460 L680 460"
        stroke="#f97316"
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
      />
      {/* Node dots */}
      <motion.circle cx="680" cy="50" r="3" fill="#f97316" fillOpacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
      <motion.circle cx="760" cy="280" r="3" fill="#f97316" fillOpacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 }} />
      <motion.circle cx="680" cy="460" r="3" fill="#f97316" fillOpacity="0.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.3 }} />
    </svg>
  );
}

const headlineWords = ["Smart", "Service."];
const subWords = ["Expert", "Repairs."];

export default function Hero() {
  const glowControls = useAnimation();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    timeoutId = setTimeout(() => {
      glowControls.start({
        textShadow: [
          "0 0 20px rgba(249,115,22,0.6)",
          "0 0 40px rgba(249,115,22,1)",
          "0 0 20px rgba(249,115,22,0.6)",
        ],
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" as const },
      });
    }, 1800);
    return () => clearTimeout(timeoutId);
  }, [glowControls]);

  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* Pulsing glow orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none hidden lg:block"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-600/6 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Circuit lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <CircuitLines />
      </div>

      {/* Large rotating gear (right side) */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <GearSVG size={420} strokeOpacity={1} teeth={14} innerR={170} outerR={195} toothW={10} />
      </motion.div>

      {/* Smaller counter-rotating gear */}
      <motion.div
        className="absolute right-48 top-[30%] opacity-[0.05] pointer-events-none hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <GearSVG size={180} strokeOpacity={1} teeth={10} innerR={72} outerR={84} toothW={12} />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-500"
            style={{ left: p.cx, top: p.cy, width: p.r * 2, height: p.r * 2 }}
            animate={{ y: [-8, 8, -8], x: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4 + i * 0.7, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <div className="max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/25 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-accent-400 text-sm font-medium">Now Accepting Appointments — Spanaway, WA</span>
            </motion.div>

            {/* Headline — word-by-word reveal via clipPath */}
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-4 font-display">
              <span className="block overflow-hidden">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.18, duration: 0.55, ease: "easeOut" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden">
                {subWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-2"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                    transition={{ delay: 0.68 + i * 0.18, duration: 0.55, ease: "easeOut" }}
                  >
                    {i === 1 ? (
                      <motion.span className="text-accent-500" animate={glowControls}>
                        {word}
                      </motion.span>
                    ) : (
                      <span className="text-accent-500">{word}</span>
                    )}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Precision diagnostics, programming, BEV/hybrid service, and more. Modern equipment. Honest communication. Multilingual team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5, type: "spring", stiffness: 100 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-lg px-8 py-4 transition-colors duration-200 shadow-lg hover:shadow-accent-500/40"
                >
                  Book Appointment <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="tel:+12532143774"
                  className="inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-white/30 text-white hover:border-accent-500 hover:text-accent-400 text-lg px-8 py-4 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  (253) 214-3774
                </a>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {trustItems.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-3 px-4 py-2.5 bg-navy-800/70 border border-navy-600 rounded-xl cursor-default"
                  whileHover={{ borderColor: "rgba(249,115,22,0.5)", boxShadow: "0 0 16px 2px rgba(249,115,22,0.18)", y: -2 }}
                  transition={{ type: "spring", stiffness: 300, delay: i * 0.05 }}
                >
                  <div className="w-9 h-9 bg-accent-500/10 border border-accent-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-500" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — shop photo placeholder (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main placeholder card */}
              <div className="relative aspect-[4/3] bg-navy-800 rounded-3xl border-2 border-dashed border-navy-500 flex flex-col items-center justify-center gap-4 overflow-hidden">
                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
                  animate={{ top: ["10%", "90%", "10%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/25 rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-accent-500/60" />
                </div>
                <div className="text-center px-6">
                  <p className="text-slate-400 font-semibold text-base mb-1">Shop Photo Coming Soon</p>
                  <p className="text-slate-600 text-xs">SmartCare Auto Repair · Spanaway, WA</p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent-500/40 rounded-tl" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent-500/40 rounded-tr" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent-500/40 rounded-bl" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent-500/40 rounded-br" />
              </div>

              {/* Mini status readout cards */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-navy-800 border border-navy-600 rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-semibold">Open Mon–Fri</span>
                </div>
                <div className="text-slate-500 text-[10px] mt-0.5">9 AM – 5 PM</div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-accent-500 rounded-2xl px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 180 }}
              >
                <div className="text-white text-xs font-bold">3 Languages</div>
                <div className="text-orange-200 text-[10px]">EN · ES · RU</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
