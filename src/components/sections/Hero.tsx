"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, ChevronRight, Shield, Zap } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

const stats = [
  { value: 6, suffix: "+", label: "Service Specialties" },
  { value: 3, suffix: "", label: "Languages Spoken" },
  { value: 100, suffix: "%", label: "Transparent Pricing" },
  { value: 5, suffix: ".0", label: "Customer Rating" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* BG layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(4,6,13,0.97) 0%, rgba(8,12,24,0.88) 40%, rgba(15,23,41,0.72) 100%)"
        }} />
        <div className="absolute top-0 right-0 w-[70%] h-[80%]" style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(249,115,22,0.07) 0%, transparent 60%)"
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <line x1="60%" y1="0" x2="100%" y2="100%" stroke="#f97316" strokeWidth="1" />
          <line x1="65%" y1="0" x2="105%" y2="100%" stroke="#f97316" strokeWidth="0.5" />
          <line x1="50%" y1="0" x2="90%" y2="100%" stroke="#f97316" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Noise overlay */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-32 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="max-w-xl">
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...spring, delay: 0.1 }}
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
                  className="block text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.2 }}
                >
                  Auto Maintenance
                </motion.span>
                <motion.span
                  className="block text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mt-2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.35 }}
                >
                  & <span className="gradient-text">Repair Service</span>
                </motion.span>
              </h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.5 }}
                className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md"
              >
                Expert diagnostics, programming, BEV/hybrid service, and more. Modern equipment. Honest pricing. Multilingual team.
              </motion.p>

              {/* CTAs — min 44px touch targets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  href="/#booking"
                  className="group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-8 py-4 min-h-[48px] transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] active:scale-[0.97]"
                >
                  Get Service
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/50 hover:text-accent-400 text-base px-8 py-4 min-h-[48px] transition-all duration-200"
                >
                  <Calculator className="w-4 h-4" />
                  Free Estimate
                </Link>
              </motion.div>
            </div>

            {/* Right — logo + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-500/[0.05] blur-[100px]" />
              <Logo className="w-[320px] h-[320px] opacity-[0.18]" />

              <motion.div
                className="absolute top-8 right-8 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-white text-xs font-medium">Advanced Diagnostics</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-4 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-white text-xs font-medium">EV & Hybrid Certified</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...spring, delay: 1.6 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white text-xs font-medium">Open Mon–Fri</span>
                </div>
                <div className="text-slate-500 text-[10px] mt-0.5">9 AM – 5 PM</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.9 }}
        className="relative z-10 border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 1.0 + i * 0.1 }}
                className="py-8 lg:py-10 px-6 lg:px-8 text-center lg:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-1">
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-slate-500 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
