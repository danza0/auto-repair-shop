"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import {
  ArrowRight,
  Cpu,
  Code,
  BatteryCharging,
  Monitor,
  Truck,
  Wrench,
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu, code: Code, "battery-charging": BatteryCharging, monitor: Monitor,
  truck: Truck, wrench: Wrench,
};

const specialties = [
  {
    icon: BatteryCharging,
    tag: "EV & Hybrid",
    title: "Electric & Hybrid Vehicle Service",
    description: "From battery diagnostics to high-voltage system repair, certified to handle modern EVs and hybrids.",
    features: ["Battery health diagnostics", "High-voltage system repair", "Charging system service", "Hybrid drive maintenance"],
  },
  {
    icon: Truck,
    tag: "Diesel",
    title: "Diesel Engine Specialists",
    description: "DPF issues, injector problems, turbo diagnostics — professional equipment for trucks and heavy-duty vehicles.",
    features: ["DPF cleaning & replacement", "Injector diagnostics", "Turbo system service", "Engine performance tuning"],
  },
  {
    icon: Cpu,
    tag: "Diagnostics",
    title: "Advanced Computer Diagnostics",
    description: "Professional-grade scan tools to pinpoint issues other shops miss. ECU programming, module coding, and system resets.",
    features: ["OBD-II & factory-level scans", "ECU programming & coding", "Module reset & calibration", "Electrical fault tracing"],
  },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: spring },
};

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const featuredMain = featured[2]; // BEV/Hybrids as the featured large card
  const regularCards = featured.filter((s) => s.slug !== featuredMain.slug);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-black-pure overflow-hidden">
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-500/50" />
              <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">What We Do</span>
              <div className="h-px w-8 bg-accent-500/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              Full-Service<br />
              <span className="gradient-text">Auto Care.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-accent-400 transition-colors self-start sm:self-auto"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5"
        >
          {/* Featured large card — col-span-5 */}
          <motion.div variants={item} className="lg:col-span-5">
            <TiltCard className="h-full">
              <div className="group relative h-full rounded-2xl border border-accent-500/15 bg-gradient-to-br from-accent-500/[0.08] to-transparent overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-500/60 via-accent-400/40 to-transparent" />
                <div className="relative p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 group-hover:shadow-[0_0_24px_rgba(249,115,22,0.15)] transition-all duration-300">
                    <BatteryCharging className="w-7 h-7 text-accent-500" />
                  </div>
                  <span className="text-accent-500/50 text-[10px] font-mono tracking-widest uppercase">{featuredMain.category}</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-2 mb-3">{featuredMain.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{featuredMain.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredMain.details.map((d) => (
                      <span key={d} className="text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-slate-400">{d}</span>
                    ))}
                  </div>
                  <Link
                    href="/#booking"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Regular cards — remaining 5 */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {regularCards.map((service) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <motion.div key={service.slug} variants={item}>
                  <TiltCard className="h-full">
                    <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-black-deep/60 hover:border-accent-500/20 transition-all duration-300 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-accent-500/60 transition-all duration-300" />
                      <div className="relative p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-accent-500/[0.08] border border-accent-500/15 flex items-center justify-center group-hover:bg-accent-500/15 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300">
                            <Icon className="w-5 h-5 text-accent-500" />
                          </div>
                          <span className="text-accent-500/30 text-[10px] font-mono tracking-widest uppercase mt-2">{service.category}</span>
                        </div>
                        <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-accent-50 transition-colors duration-200">{service.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">{service.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-600">Same-week appts</span>
                          <Link
                            href="/#booking"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 group-hover:text-accent-300 transition-colors duration-200"
                          >
                            Book
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Specialty strips */}
        <div className="line-accent my-16" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={specialty.tag}
                variants={item}
                className="group rounded-2xl border border-white/[0.06] bg-black-deep/40 hover:border-accent-500/15 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8">
                  {/* Left: icon + title + description */}
                  <div className="flex items-start gap-5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/[0.08] border border-accent-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/15 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-accent-500/60 text-[10px] font-mono tracking-widest uppercase">{specialty.tag}</span>
                      </div>
                      <h3 className="font-display font-bold text-white text-lg mb-1">{specialty.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{specialty.description}</p>
                    </div>
                  </div>

                  {/* Right: feature tags + CTA */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4 lg:flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {specialty.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-slate-500">{f}</span>
                      ))}
                    </div>
                    <Link
                      href="/#booking"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors whitespace-nowrap"
                    >
                      Book Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
