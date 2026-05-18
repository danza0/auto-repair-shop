"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Camera, MapPin, ArrowRight, Calendar, Phone } from "lucide-react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  span: string;
};

const photos: Photo[] = [
  {
    src: "/gallery/IMG_1277.jpg",
    alt: "SmartCare technician working under the hood of a Mercedes in the shop",
    caption: "Hands-on diagnostics",
    tag: "Engine",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery/IMG_1269.jpg",
    alt: "Borescope screen showing engine internals during inspection",
    caption: "Borescope inspection",
    tag: "Diagnostics",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/gallery/IMG_1264.jpg",
    alt: "SmartCare Auto Repair shop exterior at dusk with cars parked outside",
    caption: "Our shop · Spanaway, WA",
    tag: "Location",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/IMG_1292.jpg",
    alt: "Mechanic working on a white GMC truck outside the shop",
    caption: "Pre-trip inspection",
    tag: "Diesel",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery/IMG_1296.jpg",
    alt: "Mercedes-Benz C280 inside the SmartCare shop bay between two lifts",
    caption: "Mercedes & Euro service",
    tag: "Luxury",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/gallery/IMG_1293_1_.jpg",
    alt: "Technician between two white Tesla Model 3 vehicles on lifts in the EV bay",
    caption: "Tesla & EV service bay",
    tag: "BEV",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/gallery/IMG_1265.jpg",
    alt: "SmartCare technician inspecting undercarriage of a lifted vehicle",
    caption: "Undercarriage work",
    tag: "Service",
    span: "col-span-1 row-span-2",
  },
];

const spring = { type: "spring" as const, stiffness: 120, damping: 20 };

export default function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-black-pure overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(249,115,22,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="noise absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-500/50" />
              <span className="text-accent-500 text-xs font-mono tracking-widest uppercase">
                Inside the Shop
              </span>
              <div className="h-px w-8 bg-accent-500/50" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05]">
              Real work.<br />
              <span className="gradient-text">Real shop.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-sm leading-relaxed">
            Snapshots from our bays in Spanaway, WA. Modern lifts, factory-level tools,
            and a team that actually cares about your car.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[240px]">
          {photos.map((photo, i) => (
            <motion.button
              type="button"
              key={photo.src}
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, ...spring }}
              className={`${photo.span} group relative rounded-2xl overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-accent-500/60 focus:ring-offset-2 focus:ring-offset-black-pure`}
              aria-label={`Open ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Bottom gradient — always visible, intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/85 via-black-pure/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag chip */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black-pure/60 border border-white/10 text-white backdrop-blur-sm">
                  {photo.tag}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display font-semibold text-white text-sm sm:text-base leading-tight drop-shadow">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-1.5 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-3 h-3 text-accent-400" />
                  <span className="text-[10px] font-mono tracking-wider uppercase text-accent-400">
                    View larger
                  </span>
                </div>
              </div>

              {/* Border + inner glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.04] group-hover:border-accent-500/30 transition-colors duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(249,115,22,0.15)]" />
            </motion.button>
          ))}

          {/* CTA card — fills the remaining 2x1 slot on the bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: photos.length * 0.06, ...spring }}
            className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden border border-accent-500/20 bg-gradient-to-br from-accent-500/[0.12] via-accent-500/[0.04] to-transparent"
          >
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18), transparent 65%)" }}
            />
            <div className="relative h-full p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-accent-400">
                  Come see for yourself
                </span>
                <h3 className="font-display font-bold text-white text-lg sm:text-xl mt-1.5 leading-tight">
                  Walk-ins welcome.<br />Book ahead for guaranteed time.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full bg-accent-500 text-white hover:bg-accent-400 text-sm px-5 py-3 transition-all duration-200 shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                >
                  <Calendar className="w-4 h-4" />
                  Book
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+12532143774"
                  className="inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full border border-white/15 text-white hover:border-accent-500/40 hover:text-accent-300 text-sm px-5 py-3 transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-accent-500/70" />
            <span>108 163rd St S, Spanaway, WA</span>
          </div>
          <span className="hidden sm:inline text-slate-700">·</span>
          <a
            href="https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-400 hover:text-accent-300 transition-colors font-medium"
          >
            Get directions →
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close gallery"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white hover:bg-white/15 hover:border-accent-500/40 transition-all flex items-center justify-center z-[110]"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            transition={{ ...spring }}
            className="relative w-full max-w-5xl h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              fill
              className="object-contain rounded-2xl"
              sizes="100vw"
              priority
            />
            <div className="absolute -bottom-14 left-0 right-0 flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <p className="font-display font-semibold text-sm sm:text-base truncate">
                  {photos[openIndex].caption}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {photos[openIndex].tag} · {openIndex + 1} of {photos.length}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length))}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent-500/40 transition-all text-sm font-mono"
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setOpenIndex((i) => (i === null ? 0 : (i + 1) % photos.length))}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 hover:border-accent-500/40 transition-all text-sm font-mono"
                  aria-label="Next photo"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
