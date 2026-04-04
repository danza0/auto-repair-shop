import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import Logo from "@/components/ui/Logo";

const serviceLinks = [
  { label: "Diagnostics", href: "/services" },
  { label: "Programming", href: "/services" },
  { label: "BEV / Hybrids", href: "/services" },
  { label: "Electronics", href: "/services" },
  { label: "Diesels", href: "/services" },
  { label: "Maintenance", href: "/services" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Appointment", href: "/#booking" },
  { label: "Get Estimate", href: "/estimate" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-500 relative">
      <div className="line-accent" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-10 h-10" />
              <div className="leading-none">
                <span className="font-bold text-white text-sm font-display tracking-wide block">SmartCare</span>
                <span className="text-[10px] text-slate-600 tracking-[0.2em] uppercase">Auto Repair</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              Expert diagnostics, programming, BEV/hybrid service, electronics, diesel repair, and maintenance in Spanaway, WA.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+12532143774" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                (253) 214-3774
              </a>
              <a href="mailto:smartalexmechanic@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                smartalexmechanic@gmail.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0 mt-0.5" />
                <span>108 163rd St S<br />Spanaway, WA 98387</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                <span>Mon &ndash; Fri, 9 AM &ndash; 5 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                <span>EN / ES / RU</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-xs tracking-widest uppercase">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-xs tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-xs tracking-widest uppercase">Book Appointment</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Ready to get your vehicle serviced? Book online or give us a call.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-6 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] mb-4"
            >
              Book Online
            </Link>
            <div className="mt-1">
              <a href="tel:+12532143774" className="inline-flex items-center gap-2 text-sm font-medium text-accent-400/70 hover:text-accent-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (253) 214-3774
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 mt-14 pt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} SmartCare Auto Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
