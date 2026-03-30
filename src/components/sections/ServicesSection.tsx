"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight, Cpu, Droplets, CircleDot, BatteryCharging, Circle, Settings, Car, Thermometer, GitBranch, Wrench } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu, droplets: Droplets, "circle-dot": CircleDot, "battery-charging": BatteryCharging,
  circle: Circle, settings: Settings, car: Car, thermometer: Thermometer, "git-branch": GitBranch, wrench: Wrench,
};

export default function ServicesSection() {
  const featured = services.slice(0, 6);
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">What We Do</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Auto Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From routine oil changes to complex engine work — we handle every make and model with precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="gray" className="mb-3">{service.category}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-600">{service.startingPrice}</span>
                      <Link href={`/booking?service=${service.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Book <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-flex items-center gap-2 font-semibold rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-base px-6 py-3 transition-all duration-200">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
