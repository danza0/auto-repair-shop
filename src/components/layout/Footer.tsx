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
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">SC</span>
              </div>
              <div className="leading-none">
                <span className="font-bold text-white text-sm font-display tracking-wide block">SmartCare</span>
                <span className="text-xs text-slate-500 tracking-widest uppercase">Auto Repair</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Expert diagnostics, programming, BEV/hybrid service, electronics, diesel repair, and maintenance in Spanaway, WA.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+12532143774" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                (253) 214-3774
              </a>
              <a href="mailto:smartalexmechanic@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                smartalexmechanic@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>108 163rd St S<br />Spanaway, WA 98387</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>Mon – Fri, 9 AM – 5 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>English · Spanish · Russian</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-display tracking-wide text-sm">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-display tracking-wide text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4 font-display tracking-wide text-sm">Book Appointment</h3>
            <p className="text-sm mb-5 leading-relaxed">
              Ready to get your vehicle serviced? Book online or give us a call — we respond within 1 business day.
            </p>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-semibold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-sm px-5 py-2.5 transition-all duration-200 shadow-lg hover:shadow-accent-500/30 hover:scale-[1.02] mb-3"
            >
              Book Online
            </Link>
            <div className="mt-3">
              <a
                href="tel:+12532143774"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (253) 214-3774
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SmartCare Auto Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
