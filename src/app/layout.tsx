import type { Metadata } from "next";
import "./globals.css";
import { getSiteSettings } from "@/sanity/queries";

/**
 * Root layout is intentionally minimal — the site chrome (Navbar/Footer)
 * lives in `(site)/layout.tsx` so the /studio route can render bare.
 * Metadata comes from Sanity when configured, else the hardcoded defaults.
 */
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title:
      settings?.metaTitle ??
      "SmartCare Auto Repair — EV & Hybrid Specialists | Spanaway, WA",
    description:
      settings?.metaDescription ??
      "SmartCare Auto Repair in Spanaway, WA — EV & hybrid specialists. Diagnostics, programming, HV battery service, electronics, and maintenance. Call (253) 214-3774.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-black-pure text-white">{children}</body>
    </html>
  );
}
