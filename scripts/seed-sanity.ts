#!/usr/bin/env tsx
/**
 * Bulk-import the current site content into Sanity. Run once after
 * creating the Sanity project:
 *
 *   npx tsx scripts/seed-sanity.ts
 *
 * Needs three env vars set in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET (default: production)
 *   SANITY_API_WRITE_TOKEN     (Editor role, from sanity.io/manage → API → Tokens)
 *
 * The script is idempotent: docs use fixed `_id`s (siteSettings, hero,
 * service-<slug>, testimonial-<i>, etc.), so running twice replaces
 * instead of duplicating.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { config } from "dotenv";

config({ path: ".env.local" });
config({ path: ".env" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.\n" +
      "Copy .env.example to .env.local and fill them in first.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-10-01",
  useCdn: false,
});

// ─── Content ──────────────────────────────────────────────────────────────

const SITE_SETTINGS = {
  _id: "siteSettings",
  _type: "siteSettings",
  businessName: "SmartCare Auto Repair",
  shortName: "SmartCare",
  tagline: "Auto Repair",
  phone: "(253) 214-3774",
  phoneHref: "+12532143774",
  email: "smartcareautorepair@gmail.com",
  address: "108 163rd St S",
  cityStateZip: "Spanaway, WA 98387",
  mapsUrl:
    "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387",
  hours: "Mon – Fri, 9 AM – 5 PM",
  languages: "EN / ES / UK / RU",
  generalBookingUrl: "https://calendly.com/dushukdanyil/30min",
  metaTitle:
    "SmartCare Auto Repair — EV & Hybrid Specialists | Spanaway, WA",
  metaDescription:
    "SmartCare Auto Repair in Spanaway, WA — EV & hybrid specialists. Diagnostics, programming, HV battery service, electronics, and maintenance. Call (253) 214-3774.",
  footerDescription:
    "EV & hybrid specialists in Spanaway, WA — diagnostics, programming, electronics, HV battery service, and maintenance.",
};

const HERO = {
  _id: "hero",
  _type: "hero",
  statusBadge: "Now Accepting Appointments · Spanaway, WA",
  headlineLine1: "SmartCare",
  headlineLine2: "Auto",
  headlineLine3: "Repair.",
  subheadline:
    "Expert diagnostics, EV & hybrid service, and honest pricing. Professional-grade equipment. Multilingual team.",
  primaryCtaLabel: "Book Appointment",
  secondaryCtaLabel: "Call Now",
  trustBadges: [
    { _key: "b1", icon: "zap", label: "EV & Hybrid Certified" },
    { _key: "b2", icon: "search", label: "Factory-Level Diagnostics" },
    { _key: "b3", icon: "messageSquare", label: "English · Spanish · Ukrainian · Russian" },
  ],
};

const SERVICES = [
  {
    slug: "diagnostics", title: "Diagnostics", featured: true, order: 1,
    description: "State-of-the-art computer diagnostics to pinpoint exactly what your vehicle needs — fast and accurate.",
    icon: "cpu", category: "Inspection",
    details: ["Full OBD system scan", "Error code analysis", "Written diagnostic report", "Repair recommendations"],
    calendlyUrl: "https://calendly.com/dushukdanyil/diagnostics",
    durationMinutes: 60,
    availabilityNote: "Only 2 diagnostic slots per day — book early.",
  },
  {
    slug: "programming", title: "Programming", featured: true, order: 2,
    description: "ECU, key fob, module, and system programming using professional-grade tools for any make or model.",
    icon: "code", category: "Electronics",
    details: ["ECU / PCM programming", "Key fob & immobilizer setup", "Module calibration", "Software updates"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "ECU, key fob, and module programming. Same-week availability.",
  },
  {
    slug: "bev-hybrids", title: "EV & Hybrid", featured: true, order: 3,
    description: "Our focus — full service for battery electric vehicles and hybrids. HV battery diagnostics, regenerative brakes, inverters, and drive motors.",
    icon: "battery-charging", category: "EV & Hybrid",
    details: ["HV battery diagnostics", "Hybrid system scan", "Regenerative brake service", "Inverter & motor checks"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "EV-certified bay. Service available Mon–Fri.",
  },
  {
    slug: "electronics", title: "Electronics", featured: true, order: 4,
    description: "Comprehensive automotive electronics repair — wiring, sensors, infotainment, and control modules.",
    icon: "monitor", category: "Electrical",
    details: ["Wiring & circuit diagnosis", "Sensor replacement", "Infotainment repair", "Control module repair"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "Wiring, sensors, modules. Same-week slots most weeks.",
  },
  {
    slug: "charging-battery", title: "Charging & Battery", featured: true, order: 5,
    description: "12V and HV battery testing, thermal system service, and charge-port diagnostics for EVs and hybrids.",
    icon: "zap", category: "EV & Hybrid",
    details: ["HV pack health check", "12V battery test & replace", "Charge port diagnostics", "Thermal system service"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "HV battery, 12V, and charge-port diagnostics. Mon–Fri.",
  },
  {
    slug: "maintenance", title: "Maintenance", featured: true, order: 6,
    description: "Scheduled maintenance for EVs, hybrids, and daily drivers — tires, brakes, fluids, and multi-point inspections.",
    icon: "wrench", category: "Maintenance",
    details: ["Tire rotation & balance", "Brake service", "Cabin & HVAC filters", "Multi-point inspection"],
    calendlyUrl: "https://calendly.com/dushukdanyil/oil-change",
    durationMinutes: 60,
    availabilityNote: "Scheduled maintenance for EVs, hybrids, and daily drivers.",
  },
  {
    slug: "brake-service", title: "Brakes & Regenerative Systems", featured: false, order: 7,
    description: "Brake pads, rotors, calipers, and regenerative brake system service for EVs and hybrids.",
    icon: "circle-dot", category: "Safety",
    details: ["Pad & rotor inspection", "Regen brake check", "Brake fluid test", "Road test"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "Same-day brake service available most days.",
  },
  {
    slug: "12v-battery", title: "12V Battery Service", featured: false, order: 8,
    description: "12V accessory battery testing and replacement — critical for EVs where a dead 12V can lock you out of the car.",
    icon: "battery-charging", category: "Electrical",
    details: ["Load test", "Charging system check", "Terminal service", "Old battery recycling"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 45,
    availabilityNote: "Quick service — usually under an hour.",
  },
  {
    slug: "ac-heating", title: "Climate & Heat Pump", featured: false, order: 9,
    description: "AC, heat pump, and cabin heater diagnosis and repair — including EV thermal management.",
    icon: "thermometer", category: "Climate",
    details: ["System pressure test", "Refrigerant service", "Leak detection", "Heat pump diagnostics"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "AC, heat pump, and cabin heater service Mon–Fri.",
  },
  {
    slug: "drivetrain", title: "Drivetrain", featured: false, order: 10,
    description: "EV single-speed reduction gearboxes, hybrid transmissions, and driveline service.",
    icon: "git-branch", category: "Drivetrain",
    details: ["Fluid analysis", "Diagnostic scan", "Reduction gearbox service", "Detailed repair plan"],
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 60,
    consultationFirst: true,
    availabilityNote: "Drivetrain work starts with an inspection. 1 slot per day.",
  },
];

const SPECIALTIES = [
  {
    order: 1, icon: "battery-charging", tag: "EV & Hybrid",
    title: "Electric & Hybrid Vehicle Service",
    description: "Our focus. HV battery diagnostics, regenerative brakes, inverters, and drive-motor service — certified equipment for modern EVs and hybrids.",
    features: ["HV battery diagnostics", "Regen brake service", "Inverter & motor checks", "Thermal system service"],
  },
  {
    order: 2, icon: "code", tag: "Programming",
    title: "ECU & Module Programming",
    description: "ECU, key fob, and control-module programming for any make or model. Factory-level tools, no dealership markup.",
    features: ["ECU / PCM programming", "Key fob & immobilizer setup", "Module calibration", "Software updates"],
  },
  {
    order: 3, icon: "cpu", tag: "Diagnostics",
    title: "Advanced Computer Diagnostics",
    description: "Professional-grade scan tools to pinpoint issues other shops miss. ECU coding, module resets, and factory-level fault tracing.",
    features: ["OBD-II & factory-level scans", "ECU programming & coding", "Module reset & calibration", "Electrical fault tracing"],
  },
];

const TESTIMONIALS = [
  { name: "Vasiliy B.", source: "Google", rating: 5, text: "Alex's professional, patient services over many years are greatly appreciated by all of our family. Only place I trust my car with." },
  { name: "Kristi Bair", source: "Google", rating: 5, text: "We have brought several of my family's vehicles here over the last few years. They always seem to fit me in, are professional, good prices and do a great job every time! I will continue to use them in the future!" },
  { name: "Lana", source: "Google", rating: 5, text: "Smart Care Auto is the first stop for any of my auto problems. Alex and his team are amazing! Alex has helped me out with urgent repairs several times already." },
  { name: "Gamachu Uke", source: "Google", rating: 5, text: "Best mechanics in the state and no bs. I travel from Seattle to get my car serviced and they work on every type of problem." },
  { name: "Stepan K.", source: "Google", rating: 5, text: "100% recommending this place! Alex is the best!" },
  { name: "Google Reviewer 1", source: "Google", rating: 5, text: "Alex is always helpful and amazing! He's the best one and tries so hard for every customer. He's honest and trustworthy. I will definitely be back." },
  { name: "Google Reviewer 2", source: "Google", rating: 5, text: "Very good people will diagnose and fix your auto problems." },
  { name: "Google Reviewer 3", source: "Google", rating: 5, text: "The best auto shop in town. Amazing, fantastic, and professional customer care and repair service." },
];

const STATS = [
  { label: "Vehicles Serviced", value: 2000, suffix: "+", showInHero: true, showInTrustSection: true, order: 1 },
  { label: "Google Rating", value: 5, suffix: ".0", showStar: true, showInHero: true, showInTrustSection: true, order: 2 },
  { label: "Languages Spoken", value: 3, suffix: "", showInHero: true, showInTrustSection: false, order: 3 },
  { label: "Transparent Pricing", value: 100, suffix: "%", showInHero: true, showInTrustSection: true, order: 4 },
];

const PROCESS_STEPS = [
  { stepNumber: "01", title: "Request Appointment", description: "Fill out our quick booking form online or give us a call. We confirm within 1 business day.", icon: "calendarCheck", order: 1 },
  { stepNumber: "02", title: "Discuss Your Needs", description: "We discuss your vehicle's symptoms and confirm what service or diagnostics are needed.", icon: "search", order: 2 },
  { stepNumber: "03", title: "Drop Off Your Vehicle", description: "Drop your vehicle off at our shop at 108 163rd St S, Spanaway, WA.", icon: "car", order: 3 },
  { stepNumber: "04", title: "Expert Repair", description: "Our technicians use professional-grade equipment to diagnose and complete your repairs.", icon: "wrench", order: 4 },
  { stepNumber: "05", title: "Drive Away Happy", description: "We walk you through what was done, answer questions, and get you driving again.", icon: "checkCircle", order: 5 },
];

const TRUST_REASONS = [
  { title: "Expert Diagnostics", description: "Professional-grade equipment to find the root cause fast.", icon: "cpu", order: 1 },
  { title: "EV & Hybrid Certified", description: "Trained and tooled for modern electric vehicles.", icon: "zap", order: 2 },
  { title: "Clear Communication", description: "We explain what's wrong before any work begins.", icon: "messageSquare", order: 3 },
  { title: "Multilingual Service", description: "English, Spanish, Ukrainian, and Russian available.", icon: "globe", order: 4 },
  { title: "Efficient Turnaround", description: "Most services completed promptly with updates.", icon: "clock", order: 5 },
  { title: "Honest Pricing", description: "Clear repair plans. Fair rates. No hidden fees.", icon: "dollarSign", order: 6 },
];

const GALLERY_PHOTOS = [
  { file: "IMG_1277.jpg", caption: "Hands-on diagnostics", tag: "Diagnostics", size: "large", alt: "SmartCare technician working under the hood of a Mercedes in the shop" },
  { file: "IMG_1269.jpg", caption: "Borescope inspection", tag: "Diagnostics", size: "tall", alt: "Borescope screen showing engine internals during inspection" },
  { file: "IMG_1264.jpg", caption: "Our shop · Spanaway, WA", tag: "Location", size: "small", alt: "SmartCare Auto Repair shop exterior at dusk with cars parked outside" },
  { file: "IMG_1292.jpg", caption: "Multi-point inspection", tag: "Inspection", size: "small", alt: "Mechanic working on a white truck outside the shop" },
  { file: "IMG_1296.jpg", caption: "Mercedes & Euro service", tag: "Luxury", size: "wide", alt: "Mercedes-Benz C280 inside the SmartCare shop bay between two lifts" },
  { file: "IMG_1293_1_.jpg", caption: "Tesla & EV service bay", tag: "EV", size: "tall", alt: "Technician between two white Tesla Model 3 vehicles on lifts in the EV bay" },
  { file: "IMG_1265.jpg", caption: "Undercarriage work", tag: "Service", size: "tall", alt: "SmartCare technician inspecting undercarriage of a lifted vehicle" },
];

// ─── Seed ─────────────────────────────────────────────────────────────────
async function uploadImage(relativePath: string, alt: string) {
  const absPath = join(process.cwd(), "public", "gallery", relativePath);
  const buffer = readFileSync(absPath);
  const asset = await client.assets.upload("image", buffer, {
    filename: relativePath,
  });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}

async function main() {
  console.log(`Seeding Sanity project: ${projectId} / ${dataset}\n`);
  const tx = client.transaction();

  console.log("• Site Settings + Hero");
  tx.createOrReplace(SITE_SETTINGS);
  tx.createOrReplace(HERO);

  console.log("• Services");
  for (const s of SERVICES) {
    tx.createOrReplace({
      _id: `service-${s.slug}`,
      _type: "service",
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      category: s.category,
      description: s.description,
      icon: s.icon,
      details: s.details,
      featured: s.featured,
      calendlyUrl: s.calendlyUrl,
      durationMinutes: s.durationMinutes,
      availabilityNote: s.availabilityNote,
      consultationFirst: (s as { consultationFirst?: boolean }).consultationFirst ?? false,
      order: s.order,
    });
  }

  console.log("• Specialties");
  SPECIALTIES.forEach((sp, i) =>
    tx.createOrReplace({ _id: `specialty-${i + 1}`, _type: "specialty", ...sp }),
  );

  console.log("• Testimonials");
  TESTIMONIALS.forEach((t, i) =>
    tx.createOrReplace({ _id: `testimonial-${i + 1}`, _type: "testimonial", order: i + 1, ...t }),
  );

  console.log("• Trust Stats");
  STATS.forEach((s, i) =>
    tx.createOrReplace({ _id: `stat-${i + 1}`, _type: "stat", ...s }),
  );

  console.log("• Process Steps");
  PROCESS_STEPS.forEach((s) =>
    tx.createOrReplace({ _id: `processStep-${s.stepNumber}`, _type: "processStep", ...s }),
  );

  console.log("• Why Choose Us reasons");
  TRUST_REASONS.forEach((r, i) =>
    tx.createOrReplace({ _id: `trustReason-${i + 1}`, _type: "trustReason", ...r }),
  );

  await tx.commit();
  console.log("  Batch committed.\n");

  console.log("• Gallery Photos (uploading images from /public/gallery/)");
  for (let i = 0; i < GALLERY_PHOTOS.length; i++) {
    const p = GALLERY_PHOTOS[i];
    process.stdout.write(`  – ${p.file} … `);
    const image = await uploadImage(p.file, p.alt);
    await client.createOrReplace({
      _id: `galleryPhoto-${i + 1}`,
      _type: "galleryPhoto",
      image,
      caption: p.caption,
      tag: p.tag,
      size: p.size,
      order: i + 1,
    });
    console.log("uploaded");
  }

  console.log("\n Seed complete. Open /studio to see everything.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
