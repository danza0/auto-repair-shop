"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight, Navigation } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(253) 214-3774",
    href: "tel:+12532143774",
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
    value: "Monday \u2013 Friday, 9 AM \u2013 5 PM",
    href: null,
  },
  {
    icon: Globe,
    label: "Languages",
    value: "English \u00b7 Spanish \u00b7 Russian",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Call us, send a message, or stop by the shop. We&apos;re here Mon&ndash;Fri, 9&nbsp;AM to 5&nbsp;PM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left column - contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact details list */}
            <div className="space-y-5 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-navy-800/60 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/15 group-hover:border-accent-500/35 transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-200 hover:text-white text-sm font-medium transition-colors duration-200"
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

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+12532143774"
                className="inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-7 py-3.5 transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold rounded-xl border-2 border-navy-600 text-slate-300 hover:border-accent-500/50 hover:text-white text-base px-7 py-3.5 transition-all duration-200 hover:bg-navy-800/50"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-navy-700 shadow-2xl shadow-black/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.5!2d-122.43460000000001!3d47.0887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fee65efbe849%3A0x4312a2f7a4a9a7ea!2s108+163rd+St+S%2C+Spanaway%2C+WA+98387!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: "16px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmartCare Auto Repair location"
              />
            </div>
          </motion.div>

          {/* Right column - contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-navy-800/70 backdrop-blur-sm rounded-3xl border border-navy-600/80 p-8 lg:p-10 shadow-2xl shadow-black/20 relative overflow-hidden">
              {/* Subtle glow behind card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-500/5 rounded-full blur-[80px] pointer-events-none" />

              <h3 className="text-white font-bold text-xl mb-8 font-display relative">
                Send Us a Message
              </h3>

              <form className="space-y-5 relative" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alex"
                      className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700/80 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700/80 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700/80 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(253) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700/80 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your vehicle and what you need..."
                    className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700/80 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3.5 transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35 hover:scale-[1.01]"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
