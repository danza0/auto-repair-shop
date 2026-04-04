"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, Navigation } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(253) 214-3774", href: "tel:+12532143774" },
  { icon: Mail, label: "Email", value: "smartalexmechanic@gmail.com", href: "mailto:smartalexmechanic@gmail.com" },
  { icon: MapPin, label: "Address", value: "108 163rd St S, Spanaway, WA 98387", href: "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387" },
  { icon: Clock, label: "Hours", value: "Monday \u2013 Friday, 9 AM \u2013 5 PM", href: null },
  { icon: Globe, label: "Languages", value: "English \u00b7 Spanish \u00b7 Russian", href: null },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-navy-900 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500/50" />
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Get In Touch</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05]">
              Ready to Get<br />
              <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-md lg:ml-auto">
              Call us, send a message, or stop by the shop. We&apos;re here Mon&ndash;Fri, 9&nbsp;AM to 5&nbsp;PM.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                  <div className="w-11 h-11 bg-accent-500/10 border border-accent-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/15 transition-all duration-300">
                    <Icon className="w-4.5 h-4.5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
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

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+12532143774"
                className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-7 py-3.5 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/10 text-slate-400 hover:border-accent-500/40 hover:text-white text-sm px-7 py-3.5 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.5!2d-122.43460000000001!3d47.0887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fee65efbe849%3A0x4312a2f7a4a9a7ea!2s108+163rd+St+S%2C+Spanaway%2C+WA+98387!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmartCare Auto Repair location"
              />
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/5 bg-navy-950/50 p-8 lg:p-10">
              <h3 className="text-white font-display font-bold text-xl mb-8">Send Us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Alex"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-900/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-900/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all duration-200 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-900/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="(253) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-900/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your vehicle and what you need..."
                    className="w-full px-4 py-3 rounded-xl border border-white/5 bg-navy-900/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/30 transition-all duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3.5 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 line-accent" />
    </section>
  );
}
