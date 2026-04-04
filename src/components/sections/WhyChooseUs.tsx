"use client";

import { motion } from "framer-motion";
import { Cpu, MessageSquare, Globe, Clock, DollarSign, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const reasons = [
  {
    icon: Cpu,
    title: "Expert Diagnostics",
    description: "Professional-grade diagnostic equipment to find the root cause fast — no guesswork, no unnecessary repairs.",
  },
  {
    icon: Zap,
    title: "EV & Hybrid Specialists",
    description: "From BEV battery diagnostics to hybrid drive systems — we have the training and tools for modern vehicles.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "We explain what's wrong, why it matters, and what it will cost — before any work begins. No surprises.",
  },
  {
    icon: Globe,
    title: "Multilingual Service",
    description: "We serve our community in English, Spanish, and Russian — so you always understand your vehicle's service.",
  },
  {
    icon: Clock,
    title: "Efficient Turnaround",
    description: "We respect your time. Most services are completed promptly and we keep you updated throughout.",
  },
  {
    icon: DollarSign,
    title: "Honest, Transparent Pricing",
    description: "Written estimates before work starts. Fair rates with no hidden fees — just straightforward, honest service.",
  },
];

const stats = [
  { value: "3", label: "Languages Spoken" },
  { value: "6+", label: "Service Specialties" },
  { value: "100%", label: "Transparent Pricing" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">Why SmartCare</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            The SmartCare Difference
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just fix cars — we build trust, communicate clearly, and deliver work you can rely on.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center p-4 bg-navy-700 rounded-2xl border border-navy-600">
              <div className="text-3xl font-black text-accent-500 font-display mb-1">{value}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 p-5 rounded-2xl bg-navy-700/50 border border-navy-600 hover:border-accent-500/30 transition-colors"
            >
              <div className="w-11 h-11 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-accent-500" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1.5 text-sm">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
