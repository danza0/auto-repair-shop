"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarCheck, Search, Car, Wrench, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Request Appointment",
    description:
      "Fill out our quick booking form online or give us a call. We confirm within 1 business day.",
  },
  {
    icon: Search,
    step: "02",
    title: "Discuss Your Needs",
    description:
      "We discuss your vehicle's symptoms and confirm what service or diagnostics are needed.",
  },
  {
    icon: Car,
    step: "03",
    title: "Drop Off Your Vehicle",
    description:
      "Drop your vehicle off at our shop at 108 163rd St S, Spanaway, WA.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Expert Repair",
    description:
      "Our technicians use professional-grade equipment to diagnose and complete your repairs.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Drive Away Happy",
    description:
      "We walk you through what was done, answer questions, and get you driving again.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Simple, Transparent Process
          </h2>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px]">
            <div className="relative w-full h-full bg-navy-800 rounded-full overflow-visible">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-400 shadow-[0_0_12px_4px_rgba(251,146,60,0.6)]"
                initial={{ left: "0%" }}
                animate={isInView ? { left: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Mobile connecting line */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[2px]">
            <div className="relative w-full h-full bg-navy-800 rounded-full overflow-visible">
              <motion.div
                className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent-500 to-accent-400 rounded-full"
                initial={{ height: "0%" }}
                animate={isInView ? { height: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-400 shadow-[0_0_12px_4px_rgba(251,146,60,0.6)]"
                initial={{ top: "0%" }}
                animate={isInView ? { top: "100%" } : {}}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-0"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                >
                  {/* Icon container */}
                  <div className="relative flex-shrink-0">
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute -inset-1 rounded-2xl bg-accent-500/20"
                      animate={
                        isInView
                          ? {
                              scale: [1, 1.4, 1],
                              opacity: [0.3, 0, 0.3],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                    <div
                      className={cn(
                        "relative w-16 h-16 flex items-center justify-center rounded-2xl",
                        "bg-gradient-to-br from-accent-500/20 to-accent-600/10",
                        "border border-accent-500/30"
                      )}
                    >
                      <Icon className="w-7 h-7 text-accent-400" />
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white shadow-lg shadow-accent-500/30">
                      {s.step}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="lg:mt-5">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-[260px] lg:max-w-none">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
