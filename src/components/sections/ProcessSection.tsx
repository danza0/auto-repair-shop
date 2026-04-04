"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { CalendarCheck, Search, Car, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Request Appointment",
    description: "Fill out our quick booking form online or give us a call. We confirm within 1 business day.",
  },
  {
    icon: Search,
    step: "02",
    title: "Confirm the Issue",
    description: "We discuss your vehicle's symptoms and confirm what service or diagnostics are needed.",
  },
  {
    icon: Car,
    step: "03",
    title: "Bring Your Vehicle In",
    description: "Drop your vehicle off at our shop at 108 163rd St S, Spanaway, WA. We're ready for you.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Diagnose & Repair",
    description: "Our technicians use professional-grade equipment to diagnose and complete your repairs with precision.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Back on the Road",
    description: "We walk you through what was done, answer any questions, and get you driving confidently again.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="accent" className="mb-4">How It Works</Badge>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Simple, Transparent Process
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Getting your vehicle serviced shouldn&apos;t be stressful. Here&apos;s exactly what to expect with SmartCare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.14, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              {/* Animated connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px z-0 overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-500/50 to-transparent"
                    initial={{ width: "0%" }}
                    animate={inView ? { width: "100%" } : { width: "0%" }}
                    transition={{ delay: 0.5 + i * 0.25, duration: 0.7, ease: "easeInOut" }}
                  />
                  {/* Moving dot along the line */}
                  {inView && (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-500"
                      initial={{ left: "0%" }}
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ delay: 1.2 + i * 0.25, duration: 1.5, ease: "easeInOut" }}
                    />
                  )}
                </div>
              )}

              <div className="relative z-10">
                {/* Step number badge — sequential pulse */}
                <div className="relative inline-flex mb-5">
                  <motion.div
                    className="w-16 h-16 bg-navy-800 border-2 border-accent-500/40 group-hover:border-accent-500 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-500/20"
                    animate={inView ? {
                      boxShadow: [
                        "0 0 0px 0px rgba(249,115,22,0)",
                        "0 0 16px 4px rgba(249,115,22,0.35)",
                        "0 0 0px 0px rgba(249,115,22,0)",
                      ],
                    } : {}}
                    transition={{ delay: 0.8 + i * 0.2, duration: 1, ease: "easeInOut" }}
                  >
                    <Icon className="w-7 h-7 text-accent-500" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center font-display">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
