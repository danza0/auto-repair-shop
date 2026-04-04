"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Calculator, ChevronRight, Cpu, Zap, Languages } from "lucide-react";
import { useRef } from "react";

/* ── Animated SVG Car ── */
function CarIllustration() {
  return (
    <svg viewBox="0 0 800 400" fill="none" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Ground shadow */}
      <motion.ellipse cx="400" cy="360" rx="320" ry="16" fill="url(#shadow)" initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.8, duration: 1 }} />

      {/* Car body */}
      <motion.path
        d="M140 260 L180 260 L210 180 L340 150 L520 150 L590 180 L640 260 L680 260 L680 290 L650 310 L180 310 L140 290 Z"
        fill="#0f1729"
        stroke="#f97316"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Roof */}
      <motion.path
        d="M240 180 L300 110 L500 110 L560 180"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />

      {/* Windows */}
      <motion.path
        d="M260 175 L310 120 L390 120 L390 175 Z"
        fill="rgba(249,115,22,0.08)"
        stroke="#f97316"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.path
        d="M400 175 L400 120 L490 120 L540 175 Z"
        fill="rgba(249,115,22,0.08)"
        stroke="#f97316"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Headlights */}
      <motion.rect x="635" y="240" width="40" height="20" rx="4" fill="rgba(249,115,22,0.3)" stroke="#f97316" strokeWidth="1.5"
        initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6, 1] }} transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatDelay: 3 }} />

      {/* Taillights */}
      <motion.rect x="145" y="245" width="30" height="15" rx="3" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} />

      {/* Front wheel */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
        <circle cx="260" cy="310" r="42" fill="#080c18" stroke="#f97316" strokeWidth="2" />
        <circle cx="260" cy="310" r="28" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
        <circle cx="260" cy="310" r="8" fill="#f97316" fillOpacity="0.4" />
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "260px 310px" }}>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line key={angle} x1="260" y1="310" x2={260 + 25 * Math.cos(angle * Math.PI / 180)} y2={310 + 25 * Math.sin(angle * Math.PI / 180)} stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
          ))}
        </motion.g>
      </motion.g>

      {/* Rear wheel */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}>
        <circle cx="560" cy="310" r="42" fill="#080c18" stroke="#f97316" strokeWidth="2" />
        <circle cx="560" cy="310" r="28" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />
        <circle cx="560" cy="310" r="8" fill="#f97316" fillOpacity="0.4" />
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "560px 310px" }}>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line key={angle} x1="560" y1="310" x2={560 + 25 * Math.cos(angle * Math.PI / 180)} y2={560 + 25 * Math.sin(angle * Math.PI / 180)} stroke="rgba(249,115,22,0.25)" strokeWidth="1" />
          ))}
        </motion.g>
      </motion.g>

      {/* Detail lines on body */}
      <motion.line x1="200" y1="260" x2="630" y2="260" stroke="rgba(249,115,22,0.15)" strokeWidth="1"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 1 }} />
      <motion.line x1="220" y1="230" x2="610" y2="230" stroke="rgba(249,115,22,0.1)" strokeWidth="0.8"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6, duration: 0.8 }} />

      {/* Door handle */}
      <motion.rect x="370" y="210" width="25" height="4" rx="2" fill="rgba(249,115,22,0.3)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />

      {/* Scan pulse effect */}
      <motion.line x1="100" y1="0" x2="100" y2="400" stroke="rgba(249,115,22,0.15)" strokeWidth="1"
        animate={{ x1: [100, 720], x2: [100, 720] }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }} />

      <defs>
        <radialGradient id="shadow">
          <stop offset="0%" stopColor="rgba(249,115,22,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ── Trust pills ── */
const trustItems = [
  { icon: Cpu, label: "Advanced Diagnostics" },
  { icon: Zap, label: "EV & Hybrid Certified" },
  { icon: Languages, label: "EN · ES · RU" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yCar = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(249,115,22,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(249,115,22,0.04) 0%, transparent 60%), linear-gradient(180deg, #04060d 0%, #080c18 100%)"
      }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full bg-accent-500/[0.04] blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:h-screen">

          {/* Left — Text */}
          <motion.div style={{ y: yText }} className="max-w-xl pt-20 lg:pt-0">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-slate-400 text-sm tracking-wide">Spanaway, WA — Now Accepting Appointments</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold tracking-tight mb-6">
              <motion.span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[0.95]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Precision
              </motion.span>
              <motion.span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] gradient-text leading-[0.95] mt-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Auto Care.
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md"
            >
              Expert diagnostics, programming, BEV/hybrid service, and more. Modern equipment. Honest pricing. Multilingual team.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/#booking"
                className="group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-8 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] hover:scale-[1.03]"
              >
                Book Appointment
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/50 hover:text-accent-400 text-base px-8 py-4 transition-all duration-300"
              >
                <Calculator className="w-4 h-4" />
                Free Estimate
              </Link>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 text-slate-500 text-xs">
                  <Icon className="w-3.5 h-3.5 text-accent-500/70" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Car */}
          <motion.div
            style={{ y: yCar }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative lg:pl-8"
          >
            {/* Glow behind car */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[60%] rounded-full bg-accent-500/[0.06] blur-[80px]" />
            </div>
            <CarIllustration />

            {/* Floating badge */}
            <motion.div
              className="absolute top-8 right-4 lg:right-0 glass rounded-2xl px-4 py-3 border border-white/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: "spring" }}
            >
              <div className="text-[10px] text-slate-500 font-mono tracking-wider mb-1">DIAGNOSTICS</div>
              <div className="text-accent-400 font-display font-bold text-sm">87% Health</div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 lg:left-0 glass rounded-2xl px-4 py-3 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white text-xs font-medium">Open Mon–Fri</span>
              </div>
              <div className="text-slate-500 text-[10px] mt-0.5">9 AM – 5 PM</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  );
}
