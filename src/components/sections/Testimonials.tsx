"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    vehicle: "2021 Toyota Camry Hybrid",
    rating: 5,
    text: "They diagnosed my hybrid system issue when two other shops couldn't figure it out. Professional, fast, and they explained everything clearly in Spanish.",
  },
  {
    name: "James T.",
    vehicle: "2020 Ford F-250 Diesel",
    rating: 5,
    text: "Best diesel shop I've found in the area. They know their stuff — diagnosed a tricky injector issue and had me back on the road same week. Fair price too.",
  },
  {
    name: "Natasha V.",
    vehicle: "2019 Chevrolet Bolt EV",
    rating: 5,
    text: "Finally a shop that actually knows EVs. They handled a battery warning code and a programming issue for my Bolt without any issues. Very happy with SmartCare.",
  },
  {
    name: "David K.",
    vehicle: "2018 BMW 3 Series",
    rating: 5,
    text: "Needed ECU programming after a repair — they got it done right the first time. No dealership markup, way more personal service. Highly recommend.",
  },
  {
    name: "Rachel P.",
    vehicle: "2022 Kia Sorento",
    rating: 5,
    text: "Great experience from start to finish. Called in the morning, got an appointment the next day, and they kept me updated the whole time. Clean shop, honest team.",
  },
  {
    name: "Mike H.",
    vehicle: "2017 Ram 2500 Diesel",
    rating: 5,
    text: "Took my Ram 2500 in for a DPF issue. They diagnosed it quickly and gave me a fair written estimate before touching anything. Will be my go-to shop going forward.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-navy-850 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-accent-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real feedback from real customers in the Spanaway community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-navy-800 rounded-2xl border border-navy-600 p-6 hover:border-accent-500/30 transition-colors overflow-hidden"
            >
              {/* Large animated quotation mark */}
              <motion.div
                className="absolute top-3 left-4 text-7xl font-black text-accent-500/10 leading-none select-none pointer-events-none font-display"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 + 0.25, duration: 0.5, type: "spring", stiffness: 120 }}
              >
                &ldquo;
              </motion.div>

              {/* Stars — staggered entrance */}
              <div className="flex gap-0.5 mb-4 relative z-10">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 + j * 0.07 + 0.3, duration: 0.3, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                  </motion.div>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 relative z-10">&ldquo;{t.text}&rdquo;</p>

              <div className="pt-4 border-t border-navy-700 relative z-10">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.vehicle}</p>
              </div>

              {/* Gradient overlay at bottom for depth */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-800/80 to-transparent pointer-events-none rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
