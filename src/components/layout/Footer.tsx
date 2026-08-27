import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";
import type { SiteSettings } from "@/sanity/queries";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Appointment", href: "/book" },
  { label: "Contact", href: "/#contact" },
];

interface FooterProps {
  siteSettings?: SiteSettings | null;
}

export default function Footer({ siteSettings }: FooterProps = {}) {
  const shortName = siteSettings?.shortName ?? "SmartCare";
  const businessName = siteSettings?.businessName ?? "SmartCare Auto Repair";
  const tagline = siteSettings?.tagline ?? "Auto Repair";
  const description =
    siteSettings?.footerDescription ??
    "EV & hybrid specialists in Spanaway, WA — diagnostics, programming, electronics, HV battery service, and maintenance.";
  const phone = siteSettings?.phone ?? "(253) 214-3774";
  const phoneHref = `tel:${siteSettings?.phoneHref ?? "+12532143774"}`;
  const email = siteSettings?.email ?? "smartcareautorepair@gmail.com";
  const address = siteSettings?.address ?? "108 163rd St S";
  const cityStateZip = siteSettings?.cityStateZip ?? "Spanaway, WA 98387";
  const mapsUrl = siteSettings?.mapsUrl ?? "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387";
  const hours = siteSettings?.hours ?? "Mon – Fri, 9 AM – 5 PM";
  const languages = siteSettings?.languages ?? "EN / ES / UK / RU";
  return (
    <footer className="bg-black-pure text-slate-500 relative">
      <div className="line-accent" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-accent-500/[0.06] rounded-full blur-[40px] pointer-events-none" />
              <Logo className="w-10 h-10 relative" />
              <div className="leading-none relative">
                <span className="font-bold text-white text-sm font-display tracking-wide block">{shortName}</span>
                <span className="text-[10px] text-slate-600 tracking-[0.2em] uppercase">{tagline}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              {description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-xs tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm hover:text-accent-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-xs tracking-widest uppercase">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href={phoneHref} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0" />
                {email}
              </a>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-accent-500/70 flex-shrink-0 mt-0.5" />
                <span>{address}<br />{cityStateZip}</span>
              </a>
              <p className="text-slate-600 text-xs pt-2">{hours} &middot; {languages}</p>
            </div>
            <div className="mt-6">
              <Link
                href="/book"
                className="inline-flex items-center justify-center font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-6 py-3 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright + legal */}
        <div className="border-t border-white/5 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-700">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
