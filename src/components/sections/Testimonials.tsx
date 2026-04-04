"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden"
    >
      {/* Dots overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Customer Reviews</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={cn(
                "group relative rounded-2xl p-6 sm:p-8",
                "bg-navy-800/60 border border-navy-700/50",
                "transition-all duration-500",
                "hover:border-accent-500/40 hover:shadow-[0_0_30px_-5px_rgba(251,146,60,0.15)]"
              )}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Hover border glow overlay */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-500/0 via-transparent to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-accent-500/5 transition-all duration-500 pointer-events-none" />

              <div className="relative">
                {/* Animated quotation mark */}
                <motion.span
                  className="block text-5xl leading-none font-serif text-accent-500/25 mb-2 select-none"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  &ldquo;
                </motion.span>

                {/* Staggered star rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, rotate: 0 }
                          : {}
                      }
                      transition={{
                        duration: 0.3,
                        delay: 0.25 + i * 0.1 + si * 0.07,
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Name + vehicle */}
                <div className="border-t border-navy-700/50 pt-4">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
