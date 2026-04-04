export interface Service {
  slug: string;
  title: string;
  description: string;
  startingPrice: string;
  icon: string;
  category: string;
  details: string[];
  featured?: boolean;
}

export const services: Service[] = [
  // ── SmartCare 6 Core / Featured Services ──────────────────────────────────
  {
    slug: "diagnostics", title: "Diagnostics", featured: true,
    description: "State-of-the-art computer diagnostics to pinpoint exactly what your vehicle needs — fast and accurate.",
    startingPrice: "From $89", icon: "cpu", category: "Inspection",
    details: ["Full OBD system scan", "Error code analysis", "Written diagnostic report", "Repair recommendations"],
  },
  {
    slug: "programming", title: "Programming", featured: true,
    description: "ECU, key fob, module, and system programming using professional-grade tools for any make or model.",
    startingPrice: "From $99", icon: "code", category: "Electronics",
    details: ["ECU / PCM programming", "Key fob & immobilizer setup", "Module calibration", "Software updates"],
  },
  {
    slug: "bev-hybrids", title: "BEV / Hybrids", featured: true,
    description: "Specialized service for Battery Electric Vehicles and hybrids — from battery diagnostics to regenerative brake repair.",
    startingPrice: "From $129", icon: "battery-charging", category: "EV Service",
    details: ["HV battery diagnostics", "Hybrid system scan", "Regenerative brake service", "Inverter & motor checks"],
  },
  {
    slug: "electronics", title: "Electronics", featured: true,
    description: "Comprehensive automotive electronics repair — wiring, sensors, infotainment, and control modules.",
    startingPrice: "From $89", icon: "monitor", category: "Electrical",
    details: ["Wiring & circuit diagnosis", "Sensor replacement", "Infotainment repair", "Control module repair"],
  },
  {
    slug: "diesels", title: "Diesels", featured: true,
    description: "Expert diesel engine service and repair — injectors, turbos, emissions, and performance tuning.",
    startingPrice: "From $99", icon: "truck", category: "Diesel",
    details: ["Injector service & testing", "Turbocharger inspection", "DPF / emissions service", "Fuel system repair"],
  },
  {
    slug: "maintenance", title: "Maintenance", featured: true,
    description: "Scheduled maintenance packages to keep your vehicle running like new and your warranty intact.",
    startingPrice: "From $49", icon: "wrench", category: "Maintenance",
    details: ["Oil & filter change", "30/60/90k services", "Fluid flushes", "Multi-point inspection"],
  },
  // ── Additional Services ────────────────────────────────────────────────────
  {
    slug: "brake-service", title: "Brake Service",
    description: "Complete brake system inspection and repair — pads, rotors, calipers, and fluid.",
    startingPrice: "From $129", icon: "circle-dot", category: "Safety",
    details: ["Pad & rotor inspection", "Caliper check", "Brake fluid test", "Road test"],
  },
  {
    slug: "battery-replacement", title: "Battery Replacement",
    description: "Battery testing and replacement with premium brands.",
    startingPrice: "From $119", icon: "battery-charging", category: "Electrical",
    details: ["Battery load test", "Charging system check", "Terminal cleaning", "Old battery disposal"],
  },
  {
    slug: "tire-service", title: "Tire Service",
    description: "Rotation, balancing, alignment checks, and replacement.",
    startingPrice: "From $29", icon: "circle", category: "Wheels",
    details: ["Tire rotation", "Wheel balancing", "Pressure check", "Tread depth inspection"],
  },
  {
    slug: "engine-repair", title: "Engine Repair",
    description: "From minor tune-ups to major overhauls. All engine work with precision.",
    startingPrice: "Estimate Required", icon: "settings", category: "Engine",
    details: ["Diagnostic scan", "Detailed inspection", "Written estimate", "Warranty on repairs"],
  },
  {
    slug: "suspension", title: "Suspension",
    description: "Shocks, struts, control arms, and alignment.",
    startingPrice: "From $189", icon: "car", category: "Chassis",
    details: ["Suspension inspection", "Shock/strut check", "Alignment measurement", "Steering check"],
  },
  {
    slug: "ac-heating", title: "AC / Heating",
    description: "Climate control diagnosis and repair.",
    startingPrice: "From $89", icon: "thermometer", category: "Climate",
    details: ["System pressure test", "Refrigerant recharge", "Leak detection", "Heater core check"],
  },
  {
    slug: "transmission", title: "Transmission",
    description: "Automatic and manual transmission service.",
    startingPrice: "Estimate Required", icon: "git-branch", category: "Drivetrain",
    details: ["Fluid analysis", "Diagnostic scan", "Pressure test", "Detailed estimate"],
  },
];
