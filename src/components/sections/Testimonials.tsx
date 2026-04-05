"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Carlos M.", vehicle: "2021 Toyota Camry Hybrid", rating: 5, text: "They diagnosed my hybrid system issue when two other shops couldn't figure it out. Professional, fast, and they explained everything clearly in Spanish." },
  { name: "James T.", vehicle: "2020 Ford F-250 Diesel", rating: 5, text: "Best diesel shop I've found in the area. They know their stuff — diagnosed a tricky injector issue and had me back on the road same week. Fair price too." },
  { name: "Natasha V.", vehicle: "2019 Chevrolet Bolt EV", rating: 5, text: "Finally a shop that actually knows EVs. They handled a battery warning code and a programming issue for my Bolt without any issues. Very happy with SmartCare." },
  { name: "David K.", vehicle: "2018 BMW 3 Series", rating: 5, text: "Needed ECU programming after a repair — they got it done right the first time. No dealership markup, way more personal service. Highly recommend." },
  { name: "Rachel P.", vehicle: "2022 Kia Sorento", rating: 5, text: "Great experience from start to finish. Called in the morning, got an appointment the next day, and they kept me updated the whole time. Clean shop, honest team." },
  { name: "Mike H.", vehicle: "2017 Ram 2500 Diesel", rating: 5, text: "Took my Ram 2500 in for a DPF issue. They diagnosed it quickly and gave me a fair written estimate before touching anything. Will be my go-to shop going forward." },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[400px] p-6 rounded-2xl border border-white/[0.06] bg-navy-900/50 hover:border-accent-500/15 transition-all duration-300 relative overflow-hidden group">
      {/* Subtle quote watermark */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-white/[0.03] rotate-180" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6 relative">&ldquo;{t.text}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/10 border border-accent-500/15 flex items-center justify-center">
          <span className="text-accent-400 text-xs font-display font-bold">{t.name[0]}</span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{t.name}</p>
          <p className="text-slate-600 text-xs">{t.vehicle}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section className="relative py-28 md:py-36 bg-navy-900 overflow-hidden">
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Reviews</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              What Our Customers<br />
              <span className="gradient-text">Say.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-md lg:ml-auto leading-relaxed">
              Real reviews from real customers. We let our work speak for itself.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-5">
        <div className="marquee-track animate-marquee">
          <div className="flex gap-5 pr-5">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
          <div className="flex gap-5 pr-5">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1d-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee row 2 */}
      <div className="relative">
        <div className="marquee-track animate-marquee-rev">
          <div className="flex gap-5 pr-5">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
          <div className="flex gap-5 pr-5">
            {row2.map((t, i) => (
              <TestimonialCard key={`r2d-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
