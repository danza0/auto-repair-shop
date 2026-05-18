"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Star,
  ShieldCheck,
  Zap,
  Calendar,
} from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(253) 214-3774", href: "tel:+12532143774" },
  { icon: Mail, label: "Email", value: "smartcareautorepair@gmail.com", href: "mailto:smartcareautorepair@gmail.com" },
  { icon: MapPin, label: "Address", value: "108 163rd St S, Spanaway, WA 98387", href: "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387" },
  { icon: Clock, label: "Hours", value: "Monday – Friday, 9 AM – 5 PM", href: null },
  { icon: Globe, label: "Languages", value: "English · Spanish · Ukrainian · Russian", href: null },
];

const promises = [
  { icon: Star, text: "5.0 Google rating", sub: "Verified customer reviews" },
  { icon: ShieldCheck, text: "Honest, transparent service", sub: "No surprise charges" },
  { icon: Zap, text: "We confirm in 1 business day", sub: "Often within hours" },
];

export default function BookingContact() {
  return (
    <section id="booking" className="relative py-28 md:py-36 bg-black-deep overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-accent-500/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Ready to Get<br />
            <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Pick a service, share your vehicle details, and lock in a time
            that works for you.
          </p>
        </motion.div>

        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Contact details + Promise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/[0.06] bg-black-rich/40 backdrop-blur-xl p-8">
              <h3 className="text-white font-display font-bold text-lg mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent-500/[0.08] border border-accent-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/15 transition-all duration-300">
                      <Icon className="w-4 h-4 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-slate-300 hover:text-white text-sm font-medium transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-accent-500/10 bg-gradient-to-br from-accent-500/[0.04] to-transparent backdrop-blur-xl p-8">
              <h3 className="text-white font-display font-bold text-lg mb-1">Our promise to you</h3>
              <p className="text-slate-400 text-sm mb-6">
                No surprise pricing. No upsells. Just honest work.
              </p>

              <ul className="space-y-4">
                {promises.map(({ icon: Icon, text, sub }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent-500/[0.08] border border-accent-500/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium leading-tight">{text}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Book CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-3xl border border-accent-500/15 bg-gradient-to-br from-accent-500/[0.08] via-accent-500/[0.02] to-transparent backdrop-blur-xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent-500/[0.12] rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-accent-500/15 border border-accent-500/25 flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6 text-accent-400" />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-accent-400">
                  Step into the bay
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2 mb-3 leading-tight">
                  Book your<br />appointment online.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                  Tell us about your vehicle and what you need. We&apos;ll
                  walk you through service options, then you pick the time —
                  same week openings most weeks.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "Per-service intake forms",
                    "Live calendar — see what&rsquo;s open",
                    "Instant email confirmation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/book"
                    className="group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-7 py-4 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.45)]"
                  >
                    Start Booking
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="tel:+12532143774"
                    className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/40 hover:text-accent-300 text-base px-7 py-4 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Instead
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
