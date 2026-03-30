"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Clock, Award, ChevronRight } from "lucide-react";

const stats = [
  { icon: Shield, label: "Warranty Backed", value: "2-Year" },
  { icon: Clock, label: "Avg Wait Time", value: "< 2 Hrs" },
  { icon: Award, label: "Certified Techs", value: "ASE Cert." },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Accepting New Appointments</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Auto Repair<br />
            <span className="text-blue-400">Done Right.</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            Certified technicians, transparent pricing, and warranty-backed repairs. No surprises — just honest work on your vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/booking" className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-lg px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
              Book Appointment <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/estimate" className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl border-2 border-gray-600 text-white hover:border-blue-500 hover:text-blue-400 text-lg px-8 py-4 transition-all duration-200">
              Get Free Estimate
            </Link>
          </div>

          <div className="flex flex-wrap gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">{value}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
