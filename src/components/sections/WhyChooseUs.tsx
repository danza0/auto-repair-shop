"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cpu, MessageSquare, Globe, Clock, DollarSign, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: Cpu,
    title: "Expert Diagnostics",
    description:
      "Professional-grade diagnostic equipment to find the root cause fast — no guesswork, no unnecessary repairs.",
  },
  {
    icon: Zap,
    title: "EV & Hybrid Specialists",
    description:
      "From BEV battery diagnostics to hybrid drive systems — we have the training and tools for modern vehicles.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain what's wrong, why it matters, and what it will cost — before any work begins. No surprises.",
  },
  {
    icon: Globe,
    title: "Multilingual Service",
    description:
      "We serve our community in English, Spanish, and Russian — so you always understand your vehicle's service.",
  },
  {
    icon: Clock,
    title: "Efficient Turnaround",
    description:
      "We respect your time. Most services are completed promptly and we keep you updated throughout.",
  },
  {
    icon: DollarSign,
    title: "Honest, Transparent Pricing",
    description:
      "Written estimates before work starts. Fair rates with no hidden fees — just straightforward, honest service.",
  },
];

const stats = [
  { value: 3, suffix: "", label: "Languages Spoken" },
  { value: 6, suffix: "+", label: "Service Specialties" },
  { value: 100, suffix: "%", label: "Transparent Pricing" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
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
      // Ease-out cubic for smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
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
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(249,115,22,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 90%, rgba(249,115,22,0.03) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(30,58,95,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Subtle glow orbs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">
            Why SmartCare
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            The SmartCare Difference
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just fix cars — we build trust, communicate clearly,
            and deliver work you can rely on.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={cn(
                "relative text-center p-6 rounded-2xl overflow-hidden",
                "bg-gradient-to-b from-navy-800 to-navy-900",
                "border border-navy-700/50"
              )}
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(249,115,22,0.15), 0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* Gradient border highlight */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.15)",
                }}
              />

              {/* Pulsing orange bottom line */}
              <div
                className="absolute inset-x-0 bottom-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 10%, rgba(249,115,22,0.7) 50%, transparent 90%)",
                  animation: "pulse 2.5s ease-in-out infinite",
                }}
              />

              {/* Large number with gradient text */}
              <div className="text-4xl lg:text-5xl font-black font-display mb-2 gradient-text">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>

              <div className="text-slate-400 text-sm font-medium tracking-wide">
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3x2 reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className={cn(
                "group relative flex gap-4 p-6 rounded-2xl overflow-hidden",
                "bg-navy-800/50 border border-navy-700/60",
                "hover:border-accent-500/30 hover:bg-navy-800/80",
                "hover:-translate-y-1 transition-all duration-300"
              )}
            >
              {/* Orange left border that slides in on hover */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-gradient-to-b from-accent-400 via-accent-500 to-accent-400 group-hover:h-3/4 transition-all duration-400 ease-out rounded-r-full" />

              {/* Icon in accent container */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                  "bg-accent-500/10 border border-accent-500/20",
                  "group-hover:bg-accent-500/20 group-hover:border-accent-500/40",
                  "group-hover:shadow-[0_0_16px_rgba(249,115,22,0.2)]",
                  "transition-all duration-300"
                )}
              >
                <Icon className="w-5 h-5 text-accent-500" />
              </div>

              {/* Text content */}
              <div>
                <h3 className="font-bold text-white mb-1.5 text-[15px] group-hover:text-accent-50 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
