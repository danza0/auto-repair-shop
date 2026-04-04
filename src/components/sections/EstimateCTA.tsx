"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone, Calculator, Car, Wrench, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const steps = [
  { icon: Car, label: "Pick your vehicle" },
  { icon: Wrench, label: "Select services" },
  { icon: DollarSign, label: "Instant price range" },
];

export default function EstimateCTA() {
  return (
    <section id="booking" className="relative py-24 bg-navy-850 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-500/8 rounded-full blur-3xl" />
      </div>

      {/* Decorative gear */}
      <motion.div
        className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="148" stroke="#f97316" strokeWidth="1.5" />
          <circle cx="180" cy="180" r="63" stroke="#f97316" strokeWidth="1.5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a1 = ((i * 30) - 5) * (Math.PI / 180);
            const a2 = ((i * 30) + 5) * (Math.PI / 180);
            const x1 = 180 + 148 * Math.cos(a1); const y1 = 180 + 148 * Math.sin(a1);
            const x2 = 180 + 168 * Math.cos(a1); const y2 = 180 + 168 * Math.sin(a1);
            const x3 = 180 + 168 * Math.cos(a2); const y3 = 180 + 168 * Math.sin(a2);
            const x4 = 180 + 148 * Math.cos(a2); const y4 = 180 + 148 * Math.sin(a2);
            return <path key={i} d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4}`} stroke="#f97316" strokeWidth="1.5" />;
          })}
        </svg>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge variant="accent">
            <Calculator className="w-3 h-3 mr-1.5 inline-block" />
            Free Instant Estimate
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 font-display"
        >
          Know Your Cost{" "}
          <span className="text-accent-500">Before You Commit</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Use our 60-second estimator wizard — select your vehicle type, enter details, pick services, and get an instant price range. No surprises. Book directly via Calendly when you&apos;re ready.
        </motion.p>

        {/* Step indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-12"
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/15 border border-accent-500/30 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm font-medium text-slate-300">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-navy-600 mx-2 hidden sm:block shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-lg px-10 py-4 transition-colors duration-200 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
            >
              <Calculator className="w-5 h-5" />
              Get a Free Estimate
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <a
            href="tel:+12532143774"
            className="inline-flex items-center justify-center gap-2 font-medium text-slate-400 hover:text-accent-400 transition-colors text-base px-4 py-2"
          >
            <Phone className="w-4 h-4" />
            Or call us: (253) 214-3774
          </a>
        </motion.div>
      </div>
    </section>
  );
}
