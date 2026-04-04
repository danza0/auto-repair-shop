import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

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
    <footer className="bg-navy-950 text-slate-400 relative">
      {/* Gradient accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
      <div className="border-t border-navy-800/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand + Contact column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/20">
                <span className="text-white font-bold text-sm font-display">SC</span>
              </div>
              <div className="leading-none">
                <span className="font-bold text-white text-sm font-display tracking-wide block">
                  SmartCare
                </span>
                <span className="text-[11px] text-slate-500 tracking-widest uppercase">
                  Auto Repair
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400/90">
              Expert diagnostics, programming, BEV/hybrid service, electronics, diesel repair, and
              maintenance in Spanaway, WA.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+12532143774"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                (253) 214-3774
              </a>
              <a
                href="mailto:smartalexmechanic@gmail.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                smartalexmechanic@gmail.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>
                  108 163rd St S
                  <br />
                  Spanaway, WA 98387
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>Mon &ndash; Fri, 9 AM &ndash; 5 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>EN / ES / RU</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-white mb-5 font-display tracking-wide text-sm uppercase">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="font-semibold text-white mb-5 font-display tracking-wide text-sm uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA column */}
          <div>
            <h3 className="font-semibold text-white mb-5 font-display tracking-wide text-sm uppercase">
              Book Appointment
            </h3>
            <p className="text-sm mb-6 leading-relaxed text-slate-400/90">
              Ready to get your vehicle serviced? Book online or give us a call &mdash; we respond
              within 1 business day.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-semibold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-sm px-6 py-3 transition-all duration-200 shadow-lg shadow-accent-500/20 hover:shadow-accent-500/35 hover:scale-[1.02] mb-4"
            >
              Book Online
            </Link>
            <div className="mt-1">
              <a
                href="tel:+12532143774"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                (253) 214-3774
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800/60 mt-14 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SmartCare Auto Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
