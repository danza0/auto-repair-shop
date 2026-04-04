"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight, Cpu, Code, BatteryCharging, Monitor, Truck, Wrench,
  CircleDot, Settings, Car, Thermometer, GitBranch
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
};

export default function ServicesSection() {
  const featured = services.filter((s) => s.featured);

  return (
    <section id="services" className="section-padding bg-navy-850 relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="container-max relative">
        <div className="text-center mb-16">
          <Badge variant="accent" className="mb-4">What We Do</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Our Core Services
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From diagnostics to diesels — precision service for every vehicle, every system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-navy-800 rounded-2xl border border-navy-600 p-6 cursor-pointer transition-all duration-300 hover:border-accent-500/50 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>

                <Badge variant="navy" className="mb-3">{service.category}</Badge>

                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-navy-700">
                  <span className="font-bold text-accent-400 text-sm">{service.startingPrice}</span>
                  <Link
                    href={`/#booking`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-accent-400 transition-colors group-hover:text-accent-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Book <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent-500 to-transparent" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-accent-500 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold rounded-xl border-2 border-accent-500/40 text-accent-400 hover:bg-accent-500/10 hover:border-accent-500 text-base px-6 py-3 transition-all duration-200"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
