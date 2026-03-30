import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const links = {
  Services: [
    { label: "Oil Change", href: "/services" },
    { label: "Brake Service", href: "/services" },
    { label: "Diagnostics", href: "/services" },
    { label: "Engine Repair", href: "/services" },
    { label: "Tire Service", href: "/services" },
  ],
  Company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Get Estimate", href: "/estimate" },
    { label: "Book Appointment", href: "/booking" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="font-bold text-white text-sm">AutoPrecision</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Premium automotive repair and maintenance. Certified technicians, transparent pricing, and warranty-backed repairs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-500" /><a href="tel:+15555551234" className="hover:text-white transition-colors">(555) 555-1234</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-500" /><a href="mailto:service@autoprecision.com" className="hover:text-white transition-colors">service@autoprecision.com</a></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /><span>123 Main St, Anytown, CA 90210</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /><span>Mon–Fri 7am–6pm · Sat 8am–4pm</span></div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white mb-4">Book Online</h3>
            <p className="text-sm mb-4">Schedule your appointment 24/7 through our online booking system.</p>
            <Link href="/booking" className="inline-flex items-center justify-center font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm px-4 py-2 transition-all duration-200">
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AutoPrecision Auto Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
