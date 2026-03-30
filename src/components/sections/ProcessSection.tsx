"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { CalendarCheck, ClipboardList, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: CalendarCheck, step: "01", title: "Book Online", description: "Choose your service and schedule a time that works for you — 24/7 online booking." },
  { icon: ClipboardList, step: "02", title: "Drop Off & Inspect", description: "Bring your vehicle in. We perform a thorough inspection and confirm the estimate before starting." },
  { icon: Wrench, step: "03", title: "We Get to Work", description: "Our certified technicians complete your service with quality parts and precision workmanship." },
  { icon: CheckCircle, step: "04", title: "Pick Up & Drive", description: "We notify you when done. Pay securely and drive away with confidence and a warranty in hand." },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">How It Works</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting your car serviced shouldn&apos;t be stressful. Here&apos;s what to expect.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, step, title, description }, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }} className="text-center">
              <div className="relative inline-flex mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">{step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
