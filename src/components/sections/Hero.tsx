"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronRight, Zap, Search, MessageSquare } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import HeroScene from "@/components/3d/HeroScene";

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
  { value: 2000, suffix: "+", label: "Vehicles Serviced" },
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 3, suffix: "", label: "Languages Spoken" },
  { value: 100, suffix: "%", label: "Transparent Pricing" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* BG photo + tint overlays */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark tint — heavy on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black-pure/95 via-black-pure/80 to-black-pure/60" />
        {/* Bottom fade for stats bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black-pure via-transparent to-black-pure/40" />
        {/* Orange accent glow */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(249,115,22,0.08) 0%, transparent 60%)"
        }} />
      </div>

      {/* 3D Canvas */}
      <HeroScene />

      {/* Noise overlay */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-32 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <span className="text-slate-400 text-sm tracking-wide">Now Accepting Appointments &middot; Spanaway, WA</span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-display font-bold tracking-tight mb-6">
                <motion.span
                  className="block text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] gradient-text leading-[0.95]"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.2 }}
                >
                  SmartCare
                </motion.span>
                <motion.span
                  className="block text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] text-white leading-[0.95] mt-2"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.35 }}
                >
                  Auto
                </motion.span>
                <motion.span
                  className="block text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] text-white leading-[0.95] mt-2"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: 0.5 }}
                >
                  Repair.
                </motion.span>
              </h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.65 }}
                className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md"
              >
                Expert diagnostics, EV & hybrid service, and honest pricing. Professional-grade equipment. Multilingual team.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Link
                  href="/#booking"
                  className="group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-8 py-4 min-h-[48px] transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] active:scale-[0.97]"
                >
                  Book Appointment
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+12532143774"
                  className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/50 hover:text-accent-400 text-base px-8 py-4 min-h-[48px] transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </motion.div>

              {/* Trust micro-badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.95 }}
                className="flex flex-wrap gap-3"
              >
                <div className="glass border border-white/5 border-t-white/10 rounded-2xl px-4 py-2.5 inline-flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-white text-xs font-medium">EV & Hybrid Certified</span>
                </div>
                <div className="glass border border-white/5 border-t-white/10 rounded-2xl px-4 py-2.5 inline-flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-white text-xs font-medium">Factory-Level Diagnostics</span>
                </div>
                <div className="glass border border-white/5 border-t-white/10 rounded-2xl px-4 py-2.5 inline-flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-white text-xs font-medium">English &middot; Spanish &middot; Ukrainian &middot; Russian</span>
                </div>
              </motion.div>
            </div>

            {/* Right — logo + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              {/* Circular glass frame */}
              <div className="relative w-[340px] h-[340px] xl:w-[380px] xl:h-[380px] rounded-full border border-accent-500/10 bg-white/[0.01] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-accent-500/[0.06]" />
                <Logo className="w-[220px] h-[220px] opacity-[0.15]" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-4 right-0 xl:right-4 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...spring, delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent-400 text-sm font-bold">5.0</span>
                  <span className="text-accent-400 text-xs">&#9733;</span>
                  <span className="text-white text-xs font-medium">Google Rating</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-4 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-accent-400 text-sm font-bold">2,000+</span>
                  <span className="text-white text-xs font-medium">Repairs Completed</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-8 glass rounded-2xl px-4 py-3 border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...spring, delay: 1.6 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white text-xs font-medium">Open Mon&ndash;Fri</span>
                  <span className="text-slate-500 text-[10px]">&middot; 9-5</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 1.0 }}
        className="relative z-10 border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 1.1 + i * 0.1 }}
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
