"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          scrolled
            ? "mx-auto mt-4 max-w-[820px] rounded-full glass border border-white/[0.06] shadow-2xl shadow-black/40 px-4"
            : "bg-transparent px-5 sm:px-8 lg:px-12"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-14 max-w-[820px] mx-auto" : "h-16 lg:h-20 max-w-[1400px] mx-auto"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Logo className="w-8 h-8 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)] transition-all duration-300" />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-sm font-display tracking-wide">SmartCare</span>
              <span className="text-[9px] text-slate-500 tracking-[0.2em] uppercase">Auto Repair</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12532143774"
              className="flex items-center gap-2 text-[13px] font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              (253) 214-3774
            </a>
            <ThemeToggle />
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-[13px] px-5 py-2 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-full text-slate-400 hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-black-pure/95 backdrop-blur-xl z-[-1]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block px-8 py-4 text-2xl font-display font-semibold text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:+12532143774"
                  className="flex items-center gap-2 text-accent-400 text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (253) 214-3774
                </a>
                <Link
                  href="/#booking"
                  className="inline-flex items-center justify-center font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-base px-8 py-3.5 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
