"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calculator, ChevronRight, Phone, Car, Wrench, DollarSign } from "lucide-react";
import Link from "next/link";

const stepIndicators = [
  { icon: Car, label: "Pick your vehicle" },
  { icon: Wrench, label: "Select services" },
  { icon: DollarSign, label: "Instant price range" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function EstimateCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section id="booking" ref={sectionRef} className="relative py-28 md:py-36 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <motion.div style={{ scale, opacity }} className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy-900 to-navy-950 p-10 sm:p-14 lg:p-20 overflow-hidden">
          <div className="noise absolute inset-0 pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-500/[0.04] blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-500/[0.02] blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/5 text-accent-400 text-xs font-mono tracking-wider mb-8"
            >
              <Calculator className="w-3.5 h-3.5" />
              FREE INSTANT ESTIMATE
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, ...spring }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              Know Your Cost<br />
              <span className="gradient-text">Before You Commit.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-lg text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed"
            >
              Our 60-second estimate wizard gives you an upfront price range — no surprises, no commitment.
            </motion.p>

            {/* Step indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-12"
            >
              {stepIndicators.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.08] bg-navy-950/50">
                      <Icon className="w-4 h-4 text-accent-500/70" />
                      <span className="text-sm text-slate-400 whitespace-nowrap">{s.label}</span>
                    </div>
                    {i < stepIndicators.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-slate-700 hidden sm:block" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/estimate"
                className="group inline-flex items-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-8 py-4 min-h-[48px] transition-all duration-200 shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_50px_rgba(249,115,22,0.4)] active:scale-[0.97]"
              >
                <Calculator className="w-5 h-5" />
                Get a Free Estimate
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+12532143774"
                className="inline-flex items-center gap-2 font-display font-semibold rounded-full border border-white/10 text-slate-400 hover:border-accent-500/40 hover:text-white text-base px-8 py-4 min-h-[48px] transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (253) 214-3774
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
