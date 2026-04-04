"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Calculator, ChevronRight, Cpu, Zap, Languages, Camera } from "lucide-react";
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
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-white/30 text-white hover:border-accent-500 hover:text-accent-400 text-lg px-8 py-4 transition-all duration-200"
                >
                  <Calculator className="w-5 h-5" />
                  Get Free Estimate
                </Link>
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

          {/* Right column — Diagnostic Dashboard Mockup (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Dashboard card */}
              <div className="relative bg-navy-800 rounded-3xl border border-navy-600 p-5 overflow-hidden shadow-2xl shadow-black/40">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: "inset 0 0 60px rgba(249,115,22,0.04)" }} />

                {/* Dashboard header bar */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-navy-700">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-[11px] font-mono font-semibold tracking-widest">SYSTEM ACTIVE</span>
                  </div>
                  <span className="text-slate-600 text-[10px] font-mono tracking-wider">SmartCare v2.4</span>
                </div>

                {/* Main photo placeholder with scan line */}
                <div className="relative bg-navy-900 rounded-2xl border border-dashed border-navy-600 overflow-hidden mb-4"
                  style={{ aspectRatio: "16/9" }}>
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent z-10"
                    animate={{ top: ["5%", "95%", "5%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Pulsing corner scan brackets */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-accent-500/50 rounded-tl" />
                  <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-accent-500/50 rounded-tr" />
                  <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-accent-500/50 rounded-bl" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-accent-500/50 rounded-br" />
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <motion.div
                      className="w-12 h-12 bg-accent-500/10 border border-accent-500/25 rounded-xl flex items-center justify-center"
                      animate={{ borderColor: ["rgba(249,115,22,0.25)", "rgba(249,115,22,0.5)", "rgba(249,115,22,0.25)"] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <Camera className="w-6 h-6 text-accent-500/60" />
                    </motion.div>
                    <div className="text-center">
                      <p className="text-slate-400 text-xs font-semibold">Shop Photo Coming Soon</p>
                      <p className="text-slate-600 text-[10px] font-mono mt-0.5">SCAN READY</p>
                    </div>
                  </div>
                  {/* Floating data point dots */}
                  {[
                    { x: "20%", y: "25%" }, { x: "70%", y: "65%" }, { x: "55%", y: "30%" }
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-accent-500 rounded-full"
                      style={{ left: pos.x, top: pos.y }}
                      animate={{ scale: [1, 2, 1], opacity: [0.8, 0.3, 0.8] }}
                      transition={{ duration: 2 + i * 0.5, delay: i * 0.4, repeat: Infinity }}
                    />
                  ))}
                </div>

                {/* System status grid */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: "ENGINE", color: "green" },
                    { label: "BATTERY", color: "green" },
                    { label: "BRAKES", color: "green" },
                    { label: "ELEC", color: "accent" },
                  ].map(({ label, color }, i) => (
                    <motion.div
                      key={label}
                      className="text-center p-2 bg-navy-900 rounded-xl border border-navy-700"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full mx-auto mb-1 ${color === "accent" ? "bg-accent-400" : "bg-green-400"}`}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, delay: i * 0.35, repeat: Infinity }}
                      />
                      <span className="text-slate-500 text-[8px] font-mono uppercase block leading-tight">{label}</span>
                      <span className={`text-[8px] font-mono ${color === "accent" ? "text-accent-400" : "text-green-400"}`}>PASS</span>
                    </motion.div>
                  ))}
                </div>

                {/* Vehicle health bar */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-mono tracking-widest">VEHICLE HEALTH</span>
                    <motion.span
                      className="text-accent-400 text-[10px] font-mono font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >87%</motion.span>
                  </div>
                  <div className="h-1.5 bg-navy-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #ea580c 0%, #f97316 60%, #fb923c 100%)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-mono tracking-widest">DIAGNOSTICS</span>
                    <motion.span
                      className="text-green-400 text-[10px] font-mono font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >COMPLETE ✓</motion.span>
                  </div>
                </div>
              </div>

              {/* Floating status chips */}
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
