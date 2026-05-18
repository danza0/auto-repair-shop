"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ChevronRight, Phone, Mail, MapPin, Clock, Globe, Star, ShieldCheck, Zap } from "lucide-react";
import { generalBookingUrl, buildCalendlyUrl, getBookingConfig } from "@/config/booking";

const coreServices = [
  { value: "", label: "Select a Service" },
  { value: "diagnostics", label: "Diagnostics" },
  { value: "programming", label: "Programming" },
  { value: "bev-hybrids", label: "BEV / Hybrids" },
  { value: "electronics", label: "Electronics" },
  { value: "diesels", label: "Diesels" },
  { value: "maintenance", label: "Maintenance" },
  { value: "other", label: "Other / Not Sure" },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(253) 214-3774", href: "tel:+12532143774" },
  { icon: Mail, label: "Email", value: "smartalexmechanic@gmail.com", href: "mailto:smartalexmechanic@gmail.com" },
  { icon: MapPin, label: "Address", value: "108 163rd St S, Spanaway, WA 98387", href: "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387" },
  { icon: Clock, label: "Hours", value: "Monday \u2013 Friday, 9 AM \u2013 5 PM", href: null },
  { icon: Globe, label: "Languages", value: "English \u00b7 Spanish \u00b7 Ukrainian \u00b7 Russian", href: null },
];

const promises = [
  { icon: Star, text: "5.0 Google rating", sub: "Verified customer reviews" },
  { icon: ShieldCheck, text: "Honest, transparent service", sub: "No surprise charges" },
  { icon: Zap, text: "We confirm in 1 business day", sub: "Often within hours" },
];

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function BookingContact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const config = form.service ? getBookingConfig(form.service) : undefined;
    const baseUrl = config?.calendlyUrl ?? generalBookingUrl;
    const calendlyUrl = buildCalendlyUrl(baseUrl, {
      name: form.name,
      email: form.email || undefined,
      services: config?.serviceName ?? form.service ?? undefined,
      notes: [
        form.phone ? `Phone: ${form.phone}` : "",
        form.preferredDate ? `Preferred date: ${form.preferredDate}` : "",
        form.preferredTime ? `Preferred time: ${form.preferredTime}` : "",
        form.notes ? form.notes : "",
      ].filter(Boolean).join(" | ") || undefined,
    });

    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-white/[0.06] bg-black-rich/50 text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500/20 transition-all duration-200 text-sm";

  const labelClass = "block text-[10px] font-mono tracking-widest text-slate-600 uppercase mb-2";

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
            <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">Get In Touch</span>
            <div className="h-px w-8 bg-accent-500/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Ready to Get<br />
            <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Fill out the form below and we&apos;ll confirm your appointment within 1 business day.
          </p>
        </motion.div>

        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Contact info + Trust panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact details card */}
            <div className="rounded-3xl border border-white/[0.06] bg-black-rich/40 backdrop-blur-xl p-8">
              <h3 className="text-white font-display font-bold text-lg mb-6">Contact Details</h3>
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 bg-accent-500/[0.08] border border-accent-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/15 transition-all duration-300">
                      <Icon className="w-4 h-4 text-accent-500" />
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
            </div>

            {/* Our promise panel */}
            <div className="rounded-3xl border border-accent-500/10 bg-gradient-to-br from-accent-500/[0.04] to-transparent backdrop-blur-xl p-8">
              <h3 className="text-white font-display font-bold text-lg mb-1">Our promise to you</h3>
              <p className="text-slate-400 text-sm mb-6">No surprise pricing. No upsells. Just honest work.</p>

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

              <a
                href="tel:+12532143774"
                className="group mt-6 inline-flex items-center gap-2 font-display font-semibold rounded-full border border-accent-500/30 text-accent-400 hover:bg-accent-500/10 text-sm px-6 py-3 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call (253) 214-3774
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Right — Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative rounded-3xl border border-white/[0.06] bg-black-deep/60 backdrop-blur-xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

              {submitted ? (
                <div className="text-center py-10 relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <div className="w-[72px] h-[72px] bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-9 h-9 text-green-400" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">Request Received!</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-sm mx-auto">
                    Thanks, <span className="text-white font-semibold">{form.name}</span>! We&apos;ll reach out within 1 business day to confirm your appointment.
                  </p>
                  <p className="text-slate-600 text-xs mb-6">
                    Questions? Call{" "}
                    <a href="tel:+12532143774" className="text-accent-400 hover:text-accent-300 transition-colors">(253) 214-3774</a>
                  </p>
                  <button
                    onClick={() => { setForm(initialForm); setSubmitted(false); }}
                    className="text-sm text-slate-500 hover:text-white underline underline-offset-2 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Alex Smith" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(253) 000-0000" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="alex@example.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClass}>Service Needed *</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
                      {coreServices.map((s) => (
                        <option key={s.value} value={s.value} className="bg-black-deep">{s.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className={labelClass}>Preferred Date</label>
                      <input id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className={inputClass + " [color-scheme:dark]"} />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className={labelClass}>Preferred Time</label>
                      <select id="preferredTime" name="preferredTime" value={form.preferredTime} onChange={handleChange} className={inputClass + " appearance-none cursor-pointer"}>
                        <option value="" className="bg-black-deep">Any time</option>
                        <option value="morning" className="bg-black-deep">Morning (9-11 AM)</option>
                        <option value="midday" className="bg-black-deep">Midday (11 AM-1 PM)</option>
                        <option value="afternoon" className="bg-black-deep">Afternoon (1-5 PM)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className={labelClass}>Vehicle &amp; Problem Description</label>
                    <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handleChange} placeholder="Year, make, model — describe the issue or service needed..." className={inputClass + " resize-none"} />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
                  >
                    Request Appointment
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-slate-600 text-xs pt-1">
                    We&apos;ll confirm within 1 business day &middot;{" "}
                    <a href="tel:+12532143774" className="text-accent-400 hover:text-accent-300 transition-colors">(253) 214-3774</a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
