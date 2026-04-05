"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, Search, Car, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: CalendarCheck, step: "01", title: "Request Appointment", description: "Fill out our quick booking form online or give us a call. We confirm within 1 business day." },
  { icon: Search, step: "02", title: "Discuss Your Needs", description: "We discuss your vehicle's symptoms and confirm what service or diagnostics are needed." },
  { icon: Car, step: "03", title: "Drop Off Your Vehicle", description: "Drop your vehicle off at our shop at 108 163rd St S, Spanaway, WA." },
  { icon: Wrench, step: "04", title: "Expert Repair", description: "Our technicians use professional-grade equipment to diagnose and complete your repairs." },
  { icon: CheckCircle, step: "05", title: "Drive Away Happy", description: "We walk you through what was done, answer questions, and get you driving again." },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.55], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">How It Works</span>
            <div className="h-px w-8 bg-accent-500/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Simple, Transparent<br />
            <span className="gradient-text">Process.</span>
          </h2>
        </motion.div>

        {/* Progress line — desktop */}
        <div className="hidden lg:block relative mb-16">
          <div className="h-px bg-white/5 w-full" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-accent-500 to-accent-400"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, ...spring }}
                className="relative group"
              >
                {/* Giant step number */}
                <div className="text-[80px] lg:text-[100px] font-display font-bold text-white/[0.025] leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                  {s.step}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center mb-4 group-hover:bg-accent-500/15 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.1)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <span className="text-accent-500/60 text-[10px] font-mono tracking-widest mb-2 block">STEP {s.step}</span>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
