"use client";

import { Phone } from "lucide-react";
import type { SiteSettings } from "@/sanity/queries";

interface FloatingCTAProps {
  siteSettings?: SiteSettings | null;
}

export default function FloatingCTA({ siteSettings }: FloatingCTAProps = {}) {
  const phoneHref = `tel:${siteSettings?.phoneHref ?? "+12532143774"}`;
  const businessName = siteSettings?.businessName ?? "SmartCare Auto Repair";
  return (
    <a
      href={phoneHref}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-accent-500/40 hover:scale-105 transition-all duration-200 lg:hidden"
      aria-label={`Call ${businessName}`}
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
