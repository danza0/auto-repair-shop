export interface Service {
  slug: string;
  title: string;
  description: string;
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
    icon: "cpu", category: "Inspection",
    details: ["Full OBD system scan", "Error code analysis", "Written diagnostic report", "Repair recommendations"],
  },
  {
    slug: "programming", title: "Programming", featured: true,
    description: "ECU, key fob, module, and system programming using professional-grade tools for any make or model.",
    icon: "code", category: "Electronics",
    details: ["ECU / PCM programming", "Key fob & immobilizer setup", "Module calibration", "Software updates"],
  },
  {
    slug: "bev-hybrids", title: "BEV / Hybrids", featured: true,
    description: "Specialized service for Battery Electric Vehicles and hybrids — from battery diagnostics to regenerative brake repair.",
    icon: "battery-charging", category: "EV Service",
    details: ["HV battery diagnostics", "Hybrid system scan", "Regenerative brake service", "Inverter & motor checks"],
  },
  {
    slug: "electronics", title: "Electronics", featured: true,
    description: "Comprehensive automotive electronics repair — wiring, sensors, infotainment, and control modules.",
    icon: "monitor", category: "Electrical",
    details: ["Wiring & circuit diagnosis", "Sensor replacement", "Infotainment repair", "Control module repair"],
  },
  {
    slug: "diesels", title: "Diesels", featured: true,
    description: "Expert diesel engine service and repair — injectors, turbos, emissions, and performance tuning.",
    icon: "truck", category: "Diesel",
    details: ["Injector service & testing", "Turbocharger inspection", "DPF / emissions service", "Fuel system repair"],
  },
  {
    slug: "maintenance", title: "Maintenance", featured: true,
    description: "Scheduled maintenance packages to keep your vehicle running like new and your warranty intact.",
    icon: "wrench", category: "Maintenance",
    details: ["Oil & filter change", "30/60/90k services", "Fluid flushes", "Multi-point inspection"],
  },
  // ── Additional Services ────────────────────────────────────────────────────
  {
    slug: "brake-service", title: "Brake Service",
    description: "Complete brake system inspection and repair — pads, rotors, calipers, and fluid.",
    icon: "circle-dot", category: "Safety",
    details: ["Pad & rotor inspection", "Caliper check", "Brake fluid test", "Road test"],
  },
  {
    slug: "battery-replacement", title: "Battery Replacement",
    description: "Battery testing and replacement with premium brands.",
    icon: "battery-charging", category: "Electrical",
    details: ["Battery load test", "Charging system check", "Terminal cleaning", "Old battery disposal"],
  },
  {
    slug: "engine-repair", title: "Engine Repair",
    description: "From minor tune-ups to major overhauls. All engine work with precision.",
    icon: "settings", category: "Engine",
    details: ["Diagnostic scan", "Detailed inspection", "Written repair plan", "Warranty on repairs"],
  },
  {
    slug: "ac-heating", title: "AC / Heating",
    description: "Climate control diagnosis and repair.",
    icon: "thermometer", category: "Climate",
    details: ["System pressure test", "Refrigerant recharge", "Leak detection", "Heater core check"],
  },
  {
    slug: "transmission", title: "Transmission",
    description: "Automatic and manual transmission service.",
    icon: "git-branch", category: "Drivetrain",
    details: ["Fluid analysis", "Diagnostic scan", "Pressure test", "Detailed repair plan"],
  },
];
