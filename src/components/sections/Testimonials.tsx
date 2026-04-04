"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    <div className="flex-shrink-0 w-[340px] sm:w-[400px] p-6 rounded-2xl border border-white/5 bg-navy-900/50">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center">
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
  // Double the testimonials for seamless infinite scroll
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section className="relative py-28 md:py-36 bg-navy-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Reviews</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            What Our Customers<br />
            <span className="gradient-text">Say.</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee row 1 — left */}
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
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee row 2 — right */}
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
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
