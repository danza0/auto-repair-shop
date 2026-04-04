"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Calculator,
  Car,
  Wrench,
  DollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const stepIndicators = [
  { icon: Car, label: "Pick your vehicle" },
  { icon: Wrench, label: "Select services" },
  { icon: DollarSign, label: "Instant price range" },
];

export default function EstimateCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-500/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-600/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating gear SVG decoration - right */}
      <motion.svg
        className="absolute top-10 right-10 w-40 h-40 text-navy-800/30 hidden lg:block pointer-events-none"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M50 30a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-6v-8h-4v8a26 26 0 0 0-12.7 5.3l-5.7-5.7-2.8 2.8 5.7 5.7A26 26 0 0 0 25.2 45H17v4h8.2a26 26 0 0 0 5.3 12.7l-5.7 5.7 2.8 2.8 5.7-5.7A26 26 0 0 0 46 69.8V78h4v-8.2a26 26 0 0 0 12.7-5.3l5.7 5.7 2.8-2.8-5.7-5.7A26 26 0 0 0 70.8 49H79v-4h-8.2a26 26 0 0 0-5.3-12.7l5.7-5.7-2.8-2.8-5.7 5.7A26 26 0 0 0 50 24z"
        />
      </motion.svg>

      {/* Rotating gear SVG decoration - left (smaller, counter-rotation) */}
      <motion.svg
        className="absolute bottom-16 left-12 w-24 h-24 text-navy-800/20 hidden lg:block pointer-events-none"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M50 30a20 20 0 1 1 0 40 20 20 0 0 1 0-40zm0-6v-8h-4v8a26 26 0 0 0-12.7 5.3l-5.7-5.7-2.8 2.8 5.7 5.7A26 26 0 0 0 25.2 45H17v4h8.2a26 26 0 0 0 5.3 12.7l-5.7 5.7 2.8 2.8 5.7-5.7A26 26 0 0 0 46 69.8V78h4v-8.2a26 26 0 0 0 12.7-5.3l5.7 5.7 2.8-2.8-5.7-5.7A26 26 0 0 0 70.8 49H79v-4h-8.2a26 26 0 0 0-5.3-12.7l5.7-5.7-2.8-2.8-5.7 5.7A26 26 0 0 0 50 24z"
        />
      </motion.svg>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6 inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Free Instant Estimate
          </Badge>
        </motion.div>

        {/* Giant headline */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Know Your Cost{" "}
          <span className="text-accent-500">Before You Commit</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our 60-second estimate wizard gives you an upfront price range — no
          surprises, no commitment, no pressure.
        </motion.p>

        {/* Step indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stepIndicators.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-navy-800/70 border border-navy-700/50">
                  <Icon className="w-4 h-4 text-accent-400" />
                  <span className="text-sm text-slate-300 whitespace-nowrap">
                    {s.label}
                  </span>
                </div>
                {i < stepIndicators.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-600 hidden sm:block" />
                )}
              </div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Primary CTA with pulsing glow */}
          <div className="relative group">
            <motion.div
              className="absolute -inset-1.5 rounded-xl bg-accent-500/40 blur-lg pointer-events-none"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Link
              href="/estimate"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-400 text-white font-semibold text-lg transition-colors duration-300 shadow-lg shadow-accent-500/25"
            >
              <Calculator className="w-5 h-5" />
              Get a Free Estimate
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Secondary CTA */}
          <a
            href="tel:+12532143774"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-navy-700 hover:border-accent-500/40 text-slate-300 hover:text-white font-medium transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Or call us: (253) 214-3774
          </a>
        </motion.div>
      </div>
    </section>
  );
}
