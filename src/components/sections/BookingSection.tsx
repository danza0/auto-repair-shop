"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle, ChevronRight } from "lucide-react";

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

export default function BookingSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire up to backend / Calendly / email integration
    // Example: await fetch('/api/booking', { method: 'POST', body: JSON.stringify(form) })
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-navy-600 bg-navy-800/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-500/70 focus:border-accent-500/40 hover:border-navy-500 transition-all duration-200 text-sm";

  const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";

  return (
    <section id="booking" className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="accent" className="mb-4">Book an Appointment</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Request Your Appointment
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and we&apos;ll confirm your appointment within 1 business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto"
        >
          {/* Glass-effect form card */}
          <div className="relative bg-navy-950/70 backdrop-blur-sm rounded-3xl border border-navy-600/80 p-8 lg:p-10 shadow-2xl shadow-black/30 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-500/6 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent-500/4 rounded-full blur-[80px] pointer-events-none" />

            {submitted ? (
              <div className="text-center py-10 relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div className="w-18 h-18 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6 w-[72px] h-[72px]">
                    <CheckCircle className="w-9 h-9 text-green-400" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3 font-display">
                  Request Received!
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-sm mx-auto">
                  Thanks, <span className="text-white font-semibold">{form.name}</span>! We&apos;ll reach out within 1 business day to confirm your appointment.
                </p>
                <p className="text-slate-500 text-xs mb-6">
                  Questions? Call us at{" "}
                  <a
                    href="tel:+12532143774"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    (253) 214-3774
                  </a>
                </p>
                <button
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="text-sm text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(253) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={inputClass}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass + " appearance-none cursor-pointer"}
                  >
                    {coreServices.map((s) => (
                      <option key={s.value} value={s.value} className="bg-navy-900">
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred date & time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className={labelClass}>
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={handleChange}
                      className={inputClass + " [color-scheme:dark]"}
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className={labelClass}>
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className={inputClass + " appearance-none cursor-pointer"}
                    >
                      <option value="" className="bg-navy-900">Any time</option>
                      <option value="morning" className="bg-navy-900">Morning (9-11 AM)</option>
                      <option value="midday" className="bg-navy-900">Midday (11 AM-1 PM)</option>
                      <option value="afternoon" className="bg-navy-900">Afternoon (1-5 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Vehicle &amp; Problem Description
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Year, make, model — describe the issue or service needed..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-4 transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/40 hover:scale-[1.01]"
                >
                  Request Appointment
                  <ChevronRight className="w-5 h-5" />
                </button>

                <p className="text-center text-slate-500 text-xs pt-1">
                  We&apos;ll confirm your appointment within 1 business day &middot;{" "}
                  <a
                    href="tel:+12532143774"
                    className="text-accent-400 hover:text-accent-300 transition-colors"
                  >
                    (253) 214-3774
                  </a>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
