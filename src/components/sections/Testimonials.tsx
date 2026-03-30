"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", vehicle: "2019 Honda Accord", rating: 5, text: "Brought my car in for a mysterious noise. They diagnosed it quickly, gave me a fair estimate, and fixed it same day. Couldn't be happier!" },
  { name: "James T.", vehicle: "2021 Ford F-150", rating: 5, text: "Best shop in town. I've been coming here for years. Transparent pricing, fast service, and they always explain what needs to be done and why." },
  { name: "Maria L.", vehicle: "2018 BMW 3 Series", rating: 5, text: "They specialize in European vehicles which is why I trust them with my BMW. Fair prices and they always do quality work with a warranty." },
  { name: "David K.", vehicle: "2020 Toyota RAV4", rating: 5, text: "Routine oil change turned into them catching a brake issue I didn't know about. They showed me the wear and gave me options. Honest shop!" },
  { name: "Rachel P.", vehicle: "2022 Chevy Tahoe", rating: 5, text: "Online booking was super easy. I picked my time, dropped off, got a text when it was done. The whole experience was seamless." },
  { name: "Mike H.", vehicle: "2017 Subaru Outback", rating: 5, text: "They did a full transmission service on my Subaru. Quoted me a fair price and came in under budget. Will definitely be back." },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don&apos;t take our word for it. Here&apos;s what real customers think about AutoPrecision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.vehicle}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
