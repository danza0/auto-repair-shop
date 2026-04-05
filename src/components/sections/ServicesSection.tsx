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
  CircleDot,
  Settings,
  Car,
  Thermometer,
  GitBranch,
  Circle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu, code: Code, "battery-charging": BatteryCharging, monitor: Monitor,
  truck: Truck, wrench: Wrench, "circle-dot": CircleDot, settings: Settings,
  car: Car, thermometer: Thermometer, "git-branch": GitBranch, circle: Circle,
};

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-500/50" />
              <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-6 py-3 min-h-[44px] transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] active:scale-[0.97] self-start sm:self-auto"
          >
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, ...spring }}
              >
                <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-navy-900/40 hover:bg-navy-900/70 hover:border-accent-500/20 transition-all duration-300 overflow-hidden active:scale-[0.98]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/0 to-transparent group-hover:via-accent-500/60 transition-all duration-300" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/0 to-accent-500/0 group-hover:from-accent-500/[0.03] group-hover:via-transparent group-hover:to-accent-500/[0.02] transition-all duration-300 pointer-events-none" />

                  <div className="relative p-7">
                    {/* Icon + category */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center group-hover:bg-accent-500/20 group-hover:border-accent-500/30 group-hover:shadow-[0_0_24px_rgba(249,115,22,0.12)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <span className="text-accent-500/40 text-[10px] font-mono tracking-widest uppercase mt-2">{service.category}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent-50 transition-colors duration-200">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                      <span className="font-display font-bold text-accent-400 text-sm">{service.startingPrice}</span>
                      <Link
                        href="/#booking"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-accent-400 group-hover:text-accent-400 transition-colors duration-200 min-h-[44px] min-w-[44px] justify-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get Service
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
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
