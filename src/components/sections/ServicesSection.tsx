"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
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

  return (
    <section
      id="services"
      className="section-padding bg-navy-950 relative overflow-hidden"
    >
      {/* Background dots overlay */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      {/* Subtle glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-500/4 rounded-full blur-[100px] pointer-events-none" />

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
            What We Do
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Our Core Services
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From diagnostics to diesels — precision service for every vehicle,
            every system.
          </p>
        </motion.div>

        {/* 3x2 grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className={cn(
                  "group relative rounded-2xl p-6 cursor-pointer overflow-hidden",
                  "bg-gradient-to-b from-navy-900 to-navy-950",
                  "border border-navy-700/60",
                  "hover:border-accent-500/40",
                  "transition-[border-color,box-shadow] duration-300",
                  "hover:shadow-[0_8px_40px_rgba(249,115,22,0.1),0_0_0_1px_rgba(249,115,22,0.2)]"
                )}
              >
                {/* Gradient border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 40%, transparent 60%, rgba(249,115,22,0.06) 100%)",
                  }}
                />

                {/* Animated orange top border on hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500 group-hover:w-full transition-all duration-500 ease-out rounded-t-2xl" />

                {/* Shimmer overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 20%, rgba(249,115,22,0.04) 40%, rgba(249,115,22,0.06) 50%, rgba(249,115,22,0.04) 60%, transparent 80%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />

                {/* Icon container with glow on hover */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                    "bg-accent-500/10 border border-accent-500/20",
                    "group-hover:bg-accent-500/20 group-hover:border-accent-500/50",
                    "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
                    "transition-all duration-300"
                  )}
                >
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>

                {/* Category badge */}
                <Badge variant="navy" className="mb-3">
                  {service.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-50 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Footer: price + book link */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-700/80">
                  <span className="font-bold text-accent-400 text-sm tracking-wide">
                    {service.startingPrice}
                  </span>
                  <Link
                    href="/#booking"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-semibold",
                      "text-slate-400 hover:text-accent-400",
                      "group-hover:text-accent-400 transition-colors duration-300"
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Corner accent lines */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-accent-500/60 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-10 bg-gradient-to-l from-accent-500/60 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/services"
            className={cn(
              "inline-flex items-center gap-2 font-semibold rounded-xl",
              "border-2 border-accent-500/40 text-accent-400",
              "hover:bg-accent-500/10 hover:border-accent-500",
              "text-base px-7 py-3.5 transition-all duration-300",
              "hover:shadow-[0_0_24px_rgba(249,115,22,0.15)]"
            )}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
