"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#booking", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-navy-900/95 backdrop-blur-md border-b border-navy-700 shadow-lg shadow-black/20"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-accent-500 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-accent-400 transition-colors">
              <span className="text-white font-bold text-sm font-display">SC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-sm font-display tracking-wide">SmartCare</span>
              <span className="text-xs text-slate-400 tracking-widest uppercase">Auto Repair</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12532143774"
              className="flex items-center gap-2 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (253) 214-3774
            </a>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-semibold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-sm px-5 py-2.5 transition-all duration-200 shadow-lg hover:shadow-accent-500/30 hover:scale-[1.02]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-navy-700 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-850 border-t border-navy-700 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-navy-700 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-navy-700 space-y-2">
              <a
                href="tel:+12532143774"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-accent-400 border border-accent-500/30 hover:bg-accent-500/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (253) 214-3774
              </a>
              <Link
                href="/#booking"
                className="flex w-full items-center justify-center font-semibold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
