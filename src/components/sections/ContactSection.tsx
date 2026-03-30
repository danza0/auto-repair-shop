"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function ContactSection() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Badge variant="blue" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 text-xl mb-8">Book online, call us, or stop by the shop. We&apos;re here to help.</p>
            <div className="space-y-4 mb-8">
              <a href="tel:+15555551234" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center"><Phone className="w-5 h-5 text-blue-400" /></div>
                <span>(555) 555-1234</span>
              </a>
              <a href="mailto:service@autoprecision.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center"><Mail className="w-5 h-5 text-blue-400" /></div>
                <span>service@autoprecision.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center"><MapPin className="w-5 h-5 text-blue-400" /></div>
                <span>123 Main Street, Anytown, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5 text-blue-400" /></div>
                <span>Mon–Fri 7am–6pm · Sat 8am–4pm</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-base px-6 py-3 transition-all duration-200">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/estimate" className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl border-2 border-gray-600 text-white hover:border-blue-500 hover:text-blue-400 text-base px-6 py-3 transition-all duration-200">
                Get Estimate
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800 rounded-3xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Smith" className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your vehicle and what you need..." className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-base px-6 py-3 transition-all duration-200">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
