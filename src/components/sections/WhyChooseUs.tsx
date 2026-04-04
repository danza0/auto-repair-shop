"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Cpu, MessageSquare, Globe, Clock, DollarSign, Zap } from "lucide-react";

const reasons = [
  { icon: Cpu, title: "Expert Diagnostics", description: "Professional-grade diagnostic equipment to find the root cause fast — no guesswork." },
  { icon: Zap, title: "EV & Hybrid Specialists", description: "Battery diagnostics to hybrid drive systems — trained and tooled for modern vehicles." },
  { icon: MessageSquare, title: "Clear Communication", description: "We explain what's wrong, why it matters, and what it costs — before any work begins." },
  { icon: Globe, title: "Multilingual Service", description: "English, Spanish, and Russian — so you always understand your vehicle's service." },
  { icon: Clock, title: "Efficient Turnaround", description: "Most services completed promptly. We keep you updated throughout the process." },
  { icon: DollarSign, title: "Honest Pricing", description: "Written estimates before work starts. Fair rates with no hidden fees." },
];

const stats = [
  { value: 3, suffix: "", label: "Languages" },
  { value: 6, suffix: "+", label: "Specialties" },
  { value: 100, suffix: "%", label: "Transparent" },
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setCount(target);
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-40 overflow-hidden">
      {/* Full-width cinematic bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-navy-900"
      >
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(249,115,22,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 20% 80%, rgba(249,115,22,0.03) 0%, transparent 60%)"
        }} />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
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
            <p className="text-lg text-slate-400 max-w-md lg:ml-auto">
              We don&apos;t just fix cars — we build trust, communicate clearly, and deliver work you can rely on.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-20 max-w-2xl">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold gradient-text mb-2">
                <AnimatedCounter target={value} suffix={suffix} />
              </div>
              <div className="text-slate-500 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid — staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-navy-950/50 hover:border-accent-500/20 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center mb-4 group-hover:bg-accent-500/15 transition-all duration-300">
                <Icon className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-accent-50 transition-colors">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 line-accent" />
    </section>
  );
}
