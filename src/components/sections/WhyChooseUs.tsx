"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  { value: 3,     suffix: "",    label: "Languages Spoken" },
  { value: 6,     suffix: "+",   label: "Service Specialties" },
  { value: 100,   suffix: "%",   label: "Transparent Pricing" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">Why SmartCare</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            The SmartCare Difference
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just fix cars — we build trust, communicate clearly, and deliver work you can rely on.
          </p>
        </motion.div>

        {/* Stats row — animated counters + gradient border */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative text-center p-5 bg-navy-700 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a2332 0%, #111827 100%)",
                boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.2)",
              }}
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.2)" }} />
              <div
                className="absolute inset-x-0 bottom-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }}
              />
              <div className="text-3xl font-black text-accent-500 font-display mb-1">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div className="text-slate-400 text-xs">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative flex gap-4 p-5 rounded-2xl bg-navy-700/50 border border-navy-600 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Orange left border slide-in on hover */}
              <div className="absolute left-0 top-0 w-0.5 h-0 bg-accent-500 group-hover:h-full transition-all duration-400 ease-out rounded-l-2xl" />

              <div className="w-11 h-11 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/20 group-hover:border-accent-500/40 transition-all duration-300">
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
