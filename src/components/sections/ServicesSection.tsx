"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import {
  ArrowRight,
  ChevronRight,
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
  cpu: Cpu,
  code: Code,
  "battery-charging": BatteryCharging,
  monitor: Monitor,
  truck: Truck,
  wrench: Wrench,
  "circle-dot": CircleDot,
  settings: Settings,
  car: Car,
  thermometer: Thermometer,
  "git-branch": GitBranch,
  circle: Circle,
};

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="services" className="relative py-28 md:py-36 bg-navy-950 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-accent-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-400 max-w-xl">
            From diagnostics to diesels — precision service for every vehicle, every system.
          </p>
        </motion.div>

        {/* Featured service — large card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          {(() => {
            const hero = featured[0];
            const Icon = iconMap[hero.icon] ?? Wrench;
            return (
              <div className="group relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-navy-900 to-navy-950 p-8 sm:p-12 lg:p-16">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-500/[0.04] blur-[80px] pointer-events-none" />
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent-500" />
                    </div>
                    <span className="text-accent-500/70 text-xs font-mono tracking-widest uppercase mb-3 block">{hero.category}</span>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">{hero.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-md">{hero.description}</p>
                    <div className="flex items-center gap-6">
                      <span className="text-accent-400 font-display font-bold text-lg">{hero.startingPrice}</span>
                      <Link
                        href="/#booking"
                        className="group/btn inline-flex items-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-6 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_35px_rgba(249,115,22,0.35)]"
                      >
                        Book Now
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:flex flex-wrap gap-3 justify-end">
                    {hero.details.map((d) => (
                      <div key={d} className="px-4 py-2 rounded-full border border-white/8 text-slate-500 text-sm">
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Horizontal scroll cards */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {featured.slice(1).map((service, i) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="snap-start flex-shrink-0 w-[320px] sm:w-[360px]"
                >
                  <div className="group relative h-full rounded-2xl p-6 border border-white/5 bg-navy-900/50 hover:border-accent-500/20 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.1)]">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/15 flex items-center justify-center mb-5 group-hover:bg-accent-500/15 group-hover:border-accent-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>

                    <span className="text-accent-500/50 text-[10px] font-mono tracking-widest uppercase block mb-2">{service.category}</span>
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent-50 transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="font-display font-bold text-accent-400 text-sm">{service.startingPrice}</span>
                      <Link
                        href="/#booking"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-accent-400 group-hover:text-accent-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display font-semibold rounded-full border border-white/10 text-slate-400 hover:border-accent-500/40 hover:text-accent-400 text-sm px-7 py-3.5 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
