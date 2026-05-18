"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Cpu, Zap, MessageSquare, Globe, Clock, DollarSign, ExternalLink } from "lucide-react";
import Link from "next/link";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

const bigStats = [
  { value: 2000, suffix: "+", label: "Vehicles Serviced" },
  { value: 5, suffix: ".0", label: "Google Rating", star: true },
  { value: 100, suffix: "%", label: "Transparent Pricing" },
];

const reasons = [
  { icon: Cpu, title: "Expert Diagnostics", desc: "Professional-grade equipment to find the root cause fast." },
  { icon: Zap, title: "EV & Hybrid Certified", desc: "Trained and tooled for modern electric vehicles." },
  { icon: MessageSquare, title: "Clear Communication", desc: "We explain what's wrong before any work begins." },
  { icon: Globe, title: "Multilingual Service", desc: "English, Spanish, Ukrainian, and Russian available." },
  { icon: Clock, title: "Efficient Turnaround", desc: "Most services completed promptly with updates." },
  { icon: DollarSign, title: "Honest Pricing", desc: "Clear repair plans. Fair rates. No hidden fees." },
];

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJrXPilcABkVQRozWP4m-OJPs";

const testimonials = [
  { name: "Vasiliy B.", source: "Google", rating: 5, text: "Alex's professional, patient services over many years are greatly appreciated by all of our family. Only place I trust my car with." },
  { name: "Kristi Bair", source: "Google", rating: 5, text: "We have brought several of my family's vehicles here over the last few years. They always seem to fit me in, are professional, good prices and do a great job every time! I will continue to use them in the future!" },
  { name: "Lana", source: "Google", rating: 5, text: "Smart Care Auto is the first stop for any of my auto problems. Alex and his team are amazing! Alex has helped me out with urgent repairs several times already." },
  { name: "Gamachu Uke", source: "Google", rating: 5, text: "Best mechanics in the state and no bs. I travel from Seattle to get my car serviced and they work on every type of problem." },
  { name: "Stepan K.", source: "Google", rating: 5, text: "100% recommending this place! Alex is the best!" },
  { name: "Anonymous", source: "Google", rating: 5, text: "Alex is always helpful and amazing! He's the best one and tries so hard for every customer. He's honest and trustworthy. I will definitely be back." },
  { name: "Anonymous", source: "Google", rating: 5, text: "Very good people will diagnose and fix your auto problems." },
  { name: "Anonymous", source: "Google", rating: 5, text: "The best auto shop in town. Amazing, fantastic, and professional customer care and repair service." },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[380px] p-7 rounded-2xl glass-light border border-white/[0.04] hover:border-accent-500/15 transition-all duration-300 relative overflow-hidden group">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-white/[0.03] rotate-180" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-6 relative">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/10 border border-accent-500/15 flex items-center justify-center">
          <span className="text-accent-400 text-xs font-display font-bold">{t.name[0]}</span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">{t.name}</p>
          <p className="text-slate-600 text-xs">{t.source} Review</p>
        </div>
      </div>
    </div>
  );
}

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function TrustSection() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section className="relative py-28 md:py-36 bg-black-deep overflow-hidden">
      <div className="noise absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(249,115,22,0.03) 0%, transparent 70%)"
      }} />

      {/* Part A — Giant numbers */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Why SmartCare</span>
            <div className="h-px w-8 bg-accent-500/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
            Trusted by<br />
            <span className="gradient-text">Thousands.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.04]">
          {bigStats.map(({ value, suffix, label, star }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ...spring }}
              className="text-center py-10 md:py-0"
            >
              <div className="text-[72px] sm:text-[96px] lg:text-[128px] font-display font-black leading-none shimmer-text">
                <Counter target={value} suffix={suffix} />
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                {star && <Star className="w-5 h-5 fill-accent-400 text-accent-400" />}
                <span className="text-slate-500 text-sm tracking-wide">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us — condensed */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8"
        >
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, ...spring }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-500/[0.08] border border-accent-500/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-accent-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Part B — Testimonials marquee */}
      <div className="relative z-10">
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
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ maskImage: "linear-gradient(to right, black, transparent)", WebkitMaskImage: "linear-gradient(to right, black, transparent)", background: "var(--black-deep, #0A0A0F)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)", background: "var(--black-deep, #0A0A0F)" }} />
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
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ maskImage: "linear-gradient(to right, black, transparent)", WebkitMaskImage: "linear-gradient(to right, black, transparent)", background: "var(--black-deep, #0A0A0F)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)", background: "var(--black-deep, #0A0A0F)" }} />
        </div>

        {/* Write a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, ...spring }}
          className="flex justify-center mt-12"
        >
          <Link
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 font-display font-semibold rounded-full border border-accent-500/30 text-accent-400 hover:bg-accent-500 hover:text-white text-sm px-7 py-3.5 transition-all duration-200 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
          >
            <Star className="w-4 h-4" />
            Write a Google Review
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
