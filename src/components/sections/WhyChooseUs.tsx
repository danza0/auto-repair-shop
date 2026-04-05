"use client";

import { motion } from "framer-motion";
import { Cpu, MessageSquare, Globe, Clock, DollarSign, Zap } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Expert Diagnostics", description: "Professional-grade diagnostic equipment to find the root cause fast — no guesswork.", accent: true },
  { icon: Zap, title: "EV & Hybrid Specialists", description: "Battery diagnostics to hybrid drive systems — trained and tooled for modern vehicles.", accent: false },
  { icon: MessageSquare, title: "Clear Communication", description: "We explain what's wrong, why it matters, and what it costs — before any work begins.", accent: false },
  { icon: Globe, title: "Multilingual Service", description: "English, Spanish, and Russian — so you always understand your vehicle's service.", accent: true },
  { icon: Clock, title: "Efficient Turnaround", description: "Most services completed promptly. We keep you updated throughout the process.", accent: false },
  { icon: DollarSign, title: "Honest Pricing", description: "Written estimates before work starts. Fair rates with no hidden fees.", accent: false },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-40 bg-navy-900 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(249,115,22,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(249,115,22,0.03) 0%, transparent 60%)"
      }} />
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Why SmartCare</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05]">
              The SmartCare<br />
              <span className="gradient-text">Difference.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-md lg:ml-auto leading-relaxed">
              We don&apos;t just fix cars — we build trust, communicate clearly, and deliver work you can rely on.
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reasons.map(({ icon: Icon, title, description, accent }, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, ...spring }}
                className={isLarge ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className={`group relative h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                  accent
                    ? "border-accent-500/15 bg-gradient-to-br from-accent-500/[0.06] to-navy-950/50 hover:border-accent-500/30"
                    : "border-white/[0.06] bg-navy-950/50 hover:border-accent-500/15 hover:bg-navy-950/70"
                }`}>
                  {/* Subtle inner glow on accent cards */}
                  {accent && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
                  )}

                  <div className="relative p-7">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center mb-5 group-hover:bg-accent-500/15 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-accent-50 transition-colors duration-200">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 line-accent" />
    </section>
  );
}
