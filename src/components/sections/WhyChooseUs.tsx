"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Star, Users, Award } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const reasons = [
  { icon: Award, title: "ASE Certified Technicians", description: "All our mechanics are ASE certified and continuously trained on the latest vehicles and technologies." },
  { icon: DollarSign, title: "Transparent Pricing", description: "You get a written estimate before any work begins. No hidden fees, no surprises on your bill." },
  { icon: Shield, title: "2-Year Warranty", description: "All parts and labor are backed by our 2-year / 24,000-mile warranty — whichever comes first." },
  { icon: Clock, title: "Fast Turnaround", description: "Most routine services completed same-day. We respect your time and keep you updated throughout." },
  { icon: Star, title: "5-Star Rated", description: "Consistently rated 5 stars by hundreds of local customers. We earn your trust with every visit." },
  { icon: Users, title: "Family Owned", description: "Locally owned and operated since 2004. We treat your vehicle like our own." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">Why AutoPrecision</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">The Right Choice for Your Vehicle</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We&apos;ve been earning the trust of local drivers for over 20 years.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
