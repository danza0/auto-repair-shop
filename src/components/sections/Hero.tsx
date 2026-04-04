"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Calculator,
  ChevronRight,
  Cpu,
  Zap,
  Languages,
  Camera,
} from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

const FloatingScene = dynamic(() => import("@/components/3d/FloatingScene"), {
  ssr: false,
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const trustItems = [
  { icon: Cpu, label: "Advanced Diagnostics" },
  { icon: Zap, label: "EV & Hybrid Specialists" },
  { icon: Languages, label: "EN \u00b7 ES \u00b7 RU Service" },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  x: `${10 + Math.random() * 80}%`,
  y: `${5 + Math.random() * 90}%`,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 4,
}));

const headlineTop = ["Precision"];
const headlineBottom = ["Auto", "Care."];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

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
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <circle
        cx={cx}
        cy={cy}
        r={innerR - 2}
        stroke="#f97316"
        strokeWidth="1.5"
        strokeOpacity={strokeOpacity}
      />
      <circle
        cx={cx}
        cy={cy}
        r={innerR * 0.35}
        stroke="#f97316"
        strokeWidth="1.5"
        strokeOpacity={strokeOpacity}
      />
      {toothPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#f97316"
          strokeWidth="1.5"
          strokeOpacity={strokeOpacity}
        />
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
      {/* Primary circuit paths */}
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
      {/* Additional circuit paths for density */}
      <motion.path
        d="M50 150 L120 150 L120 220 L200 220"
        stroke="#f97316"
        strokeWidth="0.8"
        strokeOpacity="0.12"
        strokeDasharray="220"
        initial={{ strokeDashoffset: 220 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.8, delay: 2.2, ease: "easeInOut" }}
      />
      <motion.path
        d="M100 480 L160 480 L160 530 L240 530"
        stroke="#f97316"
        strokeWidth="0.8"
        strokeOpacity="0.1"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.2, delay: 2.6, ease: "easeInOut" }}
      />
      {/* Node dots */}
      <motion.circle
        cx="680"
        cy="50"
        r="3"
        fill="#f97316"
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.circle
        cx="760"
        cy="280"
        r="3"
        fill="#f97316"
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      />
      <motion.circle
        cx="680"
        cy="460"
        r="3"
        fill="#f97316"
        fillOpacity="0.5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.3 }}
      />
      <motion.circle
        cx="200"
        cy="220"
        r="2.5"
        fill="#f97316"
        fillOpacity="0.35"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.8 }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Hero                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const glowControls = useAnimation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      glowControls.start({
        textShadow: [
          "0 0 20px rgba(249,115,22,0.6)",
          "0 0 60px rgba(249,115,22,1)",
          "0 0 20px rgba(249,115,22,0.6)",
        ],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      });
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [glowControls]);

  return (
    <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
      {/* ---- Gradient mesh overlay ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(15,23,42,0.95) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 40%, rgba(249,115,22,0.06) 0%, transparent 60%), linear-gradient(180deg, #0a0f1e 0%, #0d1526 50%, #0a0f1e 100%)",
        }}
      />

      {/* ---- 3D Floating Scene ---- */}
      <FloatingScene />

      {/* ---- Pulsing glow orbs ---- */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{
          duration: 6,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ---- Background glow blobs ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-600/6 rounded-full blur-3xl" />
      </div>

      {/* ---- Subtle grid overlay ---- */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ---- Circuit lines ---- */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <CircuitLines />
      </div>

      {/* ---- Rotating gears ---- */}
      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <GearSVG
          size={500}
          strokeOpacity={1}
          teeth={16}
          innerR={200}
          outerR={230}
          toothW={9}
        />
      </motion.div>
      <motion.div
        className="absolute right-56 top-[28%] opacity-[0.04] pointer-events-none hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <GearSVG
          size={200}
          strokeOpacity={1}
          teeth={10}
          innerR={78}
          outerR={92}
          toothW={12}
        />
      </motion.div>
      <motion.div
        className="absolute left-10 bottom-[15%] opacity-[0.03] pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <GearSVG
          size={160}
          strokeOpacity={1}
          teeth={8}
          innerR={60}
          outerR={72}
          toothW={14}
        />
      </motion.div>

      {/* ---- Floating particles (orange dots) ---- */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent-500"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ---- Main content ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ============ Left column -- text ============ */}
          <div className="max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-8"
            >
              <Badge variant="accent" className="gap-2 px-4 py-2 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                Now Accepting Appointments &mdash; Spanaway, WA
              </Badge>
            </motion.div>

            {/* Headline -- word-by-word reveal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] mb-6 font-display tracking-tight">
              {/* Line 1: Precision */}
              <span className="block overflow-hidden">
                {headlineTop.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2: Auto Care. (accent) */}
              <span className="block overflow-hidden mt-1">
                {headlineBottom.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-3"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                    transition={{
                      delay: 0.6 + i * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    {i === headlineBottom.length - 1 ? (
                      <motion.span
                        className="text-accent-500"
                        animate={glowControls}
                      >
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
              transition={{ delay: 1, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Expert diagnostics, programming, BEV/hybrid service, and more.
              Modern equipment. Honest pricing. Multilingual team.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#booking"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 font-bold rounded-xl text-lg px-8 py-4 transition-all duration-300",
                    "bg-accent-500 text-white hover:bg-accent-400",
                    "shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/40"
                  )}
                >
                  Book Appointment <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/estimate"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 font-bold rounded-xl text-lg px-8 py-4 transition-all duration-300",
                    "border-2 border-white/20 text-white",
                    "hover:border-accent-500 hover:text-accent-400 hover:shadow-lg hover:shadow-accent-500/10"
                  )}
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
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {trustItems.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-default",
                    "bg-navy-800/60 border border-navy-600/80 backdrop-blur-sm"
                  )}
                  whileHover={{
                    borderColor: "rgba(249,115,22,0.5)",
                    boxShadow: "0 0 20px 2px rgba(249,115,22,0.15)",
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: i * 0.05,
                  }}
                >
                  <div className="w-9 h-9 bg-accent-500/10 border border-accent-500/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent-500" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ============ Right column -- Diagnostic Dashboard ============ */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Ambient glow behind card */}
              <div
                className="absolute -inset-8 rounded-[40px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(249,115,22,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Dashboard card */}
              <div
                className={cn(
                  "relative rounded-3xl p-6 overflow-hidden",
                  "bg-navy-800/90 backdrop-blur-md",
                  "border border-navy-600/60",
                  "shadow-2xl shadow-black/50"
                )}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 0 rgba(255,255,255,0.05), inset 0 0 80px rgba(249,115,22,0.04)",
                  }}
                />

                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-navy-700/80">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      className="w-2.5 h-2.5 bg-green-400 rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-green-400 text-[11px] font-mono font-semibold tracking-[0.2em]">
                      SYSTEM ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 bg-accent-500 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-slate-600 text-[10px] font-mono tracking-wider">
                      SmartCare v3.0
                    </span>
                  </div>
                </div>

                {/* Scan area */}
                <div
                  className="relative bg-navy-900/80 rounded-2xl border border-navy-700/50 overflow-hidden mb-5"
                  style={{ aspectRatio: "16/9" }}
                >
                  {/* Animated scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-0.5 z-10"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.7) 30%, #f97316 50%, rgba(249,115,22,0.7) 70%, transparent 100%)",
                      boxShadow: "0 0 12px 2px rgba(249,115,22,0.3)",
                    }}
                    animate={{ top: ["5%", "95%", "5%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent-500/50 rounded-tl" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent-500/50 rounded-tr" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent-500/50 rounded-bl" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent-500/50 rounded-br" />
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                    <motion.div
                      className="w-14 h-14 bg-accent-500/10 border border-accent-500/25 rounded-xl flex items-center justify-center"
                      animate={{
                        borderColor: [
                          "rgba(249,115,22,0.25)",
                          "rgba(249,115,22,0.6)",
                          "rgba(249,115,22,0.25)",
                        ],
                        boxShadow: [
                          "0 0 0px rgba(249,115,22,0)",
                          "0 0 20px rgba(249,115,22,0.15)",
                          "0 0 0px rgba(249,115,22,0)",
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <Camera className="w-7 h-7 text-accent-500/60" />
                    </motion.div>
                    <div className="text-center">
                      <p className="text-slate-400 text-xs font-semibold">
                        Shop Photo Coming Soon
                      </p>
                      <p className="text-slate-600 text-[10px] font-mono mt-1 tracking-widest">
                        SCAN READY
                      </p>
                    </div>
                  </div>
                  {/* Floating data-point dots */}
                  {[
                    { x: "18%", y: "22%" },
                    { x: "72%", y: "60%" },
                    { x: "50%", y: "28%" },
                    { x: "35%", y: "70%" },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-accent-500 rounded-full"
                      style={{ left: pos.x, top: pos.y }}
                      animate={{
                        scale: [1, 2.2, 1],
                        opacity: [0.8, 0.2, 0.8],
                      }}
                      transition={{
                        duration: 2 + i * 0.6,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>

                {/* System status grid */}
                <div className="grid grid-cols-4 gap-2.5 mb-5">
                  {[
                    { label: "ENGINE", color: "green" },
                    { label: "BATTERY", color: "green" },
                    { label: "BRAKES", color: "green" },
                    { label: "ELEC", color: "accent" },
                  ].map(({ label, color }, i) => (
                    <motion.div
                      key={label}
                      className="text-center p-2.5 bg-navy-900/60 rounded-xl border border-navy-700/60"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.12 }}
                      whileHover={{
                        borderColor:
                          color === "accent"
                            ? "rgba(249,115,22,0.4)"
                            : "rgba(74,222,128,0.3)",
                        y: -1,
                      }}
                    >
                      <motion.div
                        className={cn(
                          "w-2 h-2 rounded-full mx-auto mb-1.5",
                          color === "accent" ? "bg-accent-400" : "bg-green-400"
                        )}
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.35,
                          repeat: Infinity,
                        }}
                      />
                      <span className="text-slate-500 text-[9px] font-mono uppercase block leading-tight tracking-wider">
                        {label}
                      </span>
                      <span
                        className={cn(
                          "text-[9px] font-mono font-semibold",
                          color === "accent"
                            ? "text-accent-400"
                            : "text-green-400"
                        )}
                      >
                        PASS
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Vehicle health bar */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-mono tracking-[0.2em]">
                      VEHICLE HEALTH
                    </span>
                    <motion.span
                      className="text-accent-400 text-sm font-mono font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      87%
                    </motion.span>
                  </div>
                  <div className="h-2 bg-navy-900 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #ea580c 0%, #f97316 50%, #fb923c 100%)",
                        boxShadow: "0 0 12px rgba(249,115,22,0.4)",
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: "87%" }}
                      transition={{
                        delay: 1.6,
                        duration: 1.4,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-[10px] font-mono tracking-[0.2em]">
                      DIAGNOSTICS
                    </span>
                    <motion.span
                      className="text-green-400 text-[10px] font-mono font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      COMPLETE ✓
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Floating status chip -- hours */}
              <motion.div
                className={cn(
                  "absolute -bottom-6 -left-6 rounded-2xl px-5 py-3.5",
                  "bg-navy-800/95 backdrop-blur-sm border border-navy-600/80",
                  "shadow-xl shadow-black/30"
                )}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <span className="text-white text-xs font-bold">
                    Open Mon&ndash;Fri
                  </span>
                </div>
                <div className="text-slate-500 text-[10px] font-mono mt-1">
                  9 AM &ndash; 5 PM
                </div>
              </motion.div>

              {/* Floating status chip -- languages */}
              <motion.div
                className={cn(
                  "absolute -top-5 -right-5 rounded-2xl px-5 py-3",
                  "bg-accent-500 shadow-xl shadow-accent-500/25"
                )}
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 180 }}
              >
                <div className="text-white text-xs font-bold">3 Languages</div>
                <div className="text-orange-200 text-[10px] font-mono">
                  EN &middot; ES &middot; RU
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Bottom gradient fade ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
