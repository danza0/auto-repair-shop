"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(253) 214-3774",
    href: "tel:+12532143774",
    cta: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "smartalexmechanic@gmail.com",
    href: "mailto:smartalexmechanic@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "108 163rd St S, Spanaway, WA 98387",
    href: "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Friday, 9 AM – 5 PM",
    href: null,
  },
  {
    icon: Globe,
    label: "Languages",
    value: "English · Spanish · Russian",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-navy-850 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left column – info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
              Ready to Get Started?
            </h2>
            <p className="text-slate-400 text-xl mb-8">
              Call us, send a message, or stop by the shop. We&apos;re here Mon–Fri, 9 AM to 5 PM.
            </p>

            <div className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-200 hover:text-white text-sm font-medium transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-slate-200 text-sm font-medium">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+12532143774"
                className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3 transition-all duration-200 shadow-lg hover:shadow-accent-500/30 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-navy-600 text-slate-300 hover:border-accent-500/50 hover:text-white text-base px-6 py-3 transition-all duration-200"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right column – contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-800 rounded-3xl border border-navy-600 p-8"
          >
            <h3 className="text-white font-bold text-xl mb-6 font-display">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Alex"
                    className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent hover:border-navy-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent hover:border-navy-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent hover:border-navy-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Phone</label>
                <input
                  type="tel"
                  placeholder="(253) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent hover:border-navy-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vehicle and what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent hover:border-navy-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3 transition-all duration-200 shadow-lg hover:shadow-accent-500/30"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
