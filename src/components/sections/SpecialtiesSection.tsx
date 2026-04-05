"use client";

import { motion } from "framer-motion";
import { BatteryCharging, Truck, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    icon: BatteryCharging,
    tag: "EV & Hybrid",
    title: "Electric & Hybrid Vehicle Service",
    description: "From battery diagnostics to high-voltage system repair, we're equipped and certified to handle modern electric and hybrid vehicles. No need for the dealer — get the same expertise at fair prices.",
    features: ["Battery health diagnostics", "High-voltage system repair", "Charging system service", "Hybrid drive maintenance"],
  },
  {
    icon: Truck,
    tag: "Diesel",
    title: "Diesel Engine Specialists",
    description: "DPF issues, injector problems, turbo diagnostics — we handle all diesel engine services with professional equipment and real experience on trucks and heavy-duty vehicles.",
    features: ["DPF cleaning & replacement", "Injector diagnostics", "Turbo system service", "Engine performance tuning"],
  },
  {
    icon: Cpu,
    tag: "Diagnostics",
    title: "Advanced Computer Diagnostics",
    description: "Our shop runs professional-grade scan tools and diagnostic software to pinpoint issues other shops miss. ECU programming, module coding, and system resets — done right the first time.",
    features: ["OBD-II & factory-level scans", "ECU programming & coding", "Module reset & calibration", "Electrical fault tracing"],
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function SpecialtiesSection() {
  return (
    <section className="relative py-28 md:py-36 bg-navy-950 overflow-hidden">
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
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Specialties</span>
            <div className="h-px w-8 bg-accent-500/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            What Sets Us<br />
            <span className="gradient-text">Apart.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Deep expertise in the areas that matter most for today&apos;s vehicles.
          </p>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-8 lg:space-y-12">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            const isReversed = i % 2 === 1;

            return (
              <motion.div
                key={specialty.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...spring, delay: 0.1 }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-white/[0.06] bg-navy-900/30 p-8 lg:p-12 hover:border-accent-500/15 transition-all duration-300 overflow-hidden relative`}>
                  {/* Ambient glow */}
                  <div className={`absolute ${isReversed ? 'left-0' : 'right-0'} top-0 w-1/2 h-full bg-accent-500/[0.02] blur-[80px] pointer-events-none`} />

                  {/* Content side */}
                  <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-500/20 bg-accent-500/5 mb-6">
                      <Icon className="w-3.5 h-3.5 text-accent-500" />
                      <span className="text-accent-400 text-xs font-mono tracking-wider uppercase">{specialty.tag}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 leading-tight">{specialty.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed mb-8">{specialty.description}</p>

                    <Link
                      href="/#booking"
                      className="inline-flex items-center gap-2 font-display font-semibold text-accent-400 hover:text-accent-300 text-sm min-h-[44px] transition-colors duration-200"
                    >
                      Book This Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* Features side — visual card */}
                  <div className={`relative ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="rounded-2xl border border-white/[0.06] bg-navy-950/60 p-8">
                      <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center mb-8">
                        <Icon className="w-7 h-7 text-accent-500" />
                      </div>
                      <ul className="space-y-4">
                        {specialty.features.map((feature, fi) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: isReversed ? -15 : 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + fi * 0.05, ...spring }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                            <span className="text-slate-300 text-sm font-medium">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
