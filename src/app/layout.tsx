import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title:
    "SmartCare Auto Repair — Diagnostics, Programming & Expert Vehicle Service | Spanaway, WA",
  description:
    "SmartCare Auto Repair in Spanaway, WA — expert diagnostics, programming, BEV/hybrid service, electronics, diesel repair, and maintenance. Call (253) 214-3774.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-navy-950 text-white">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
