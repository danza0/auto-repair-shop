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
    slug: "bev-hybrids", title: "EV & Hybrid", featured: true,
    description: "Our focus — full service for battery electric vehicles and hybrids. HV battery diagnostics, regenerative brakes, inverters, and drive motors.",
    icon: "battery-charging", category: "EV & Hybrid",
    details: ["HV battery diagnostics", "Hybrid system scan", "Regenerative brake service", "Inverter & motor checks"],
  },
  {
    slug: "electronics", title: "Electronics", featured: true,
    description: "Comprehensive automotive electronics repair — wiring, sensors, infotainment, and control modules.",
    icon: "monitor", category: "Electrical",
    details: ["Wiring & circuit diagnosis", "Sensor replacement", "Infotainment repair", "Control module repair"],
  },
  {
    slug: "charging-battery", title: "Charging & Battery", featured: true,
    description: "12V and HV battery testing, thermal system service, and charge-port diagnostics for EVs and hybrids.",
    icon: "zap", category: "EV & Hybrid",
    details: ["HV pack health check", "12V battery test & replace", "Charge port diagnostics", "Thermal system service"],
  },
  {
    slug: "maintenance", title: "Maintenance", featured: true,
    description: "Scheduled maintenance for EVs, hybrids, and daily drivers — tires, brakes, fluids, and multi-point inspections.",
    icon: "wrench", category: "Maintenance",
    details: ["Tire rotation & balance", "Brake service", "Cabin & HVAC filters", "Multi-point inspection"],
  },
  // ── Additional Services ────────────────────────────────────────────────────
  {
    slug: "brake-service", title: "Brakes & Regenerative Systems",
    description: "Brake pads, rotors, calipers, and regenerative brake system service for EVs and hybrids.",
    icon: "circle-dot", category: "Safety",
    details: ["Pad & rotor inspection", "Regen brake check", "Brake fluid test", "Road test"],
  },
  {
    slug: "12v-battery", title: "12V Battery Service",
    description: "12V accessory battery testing and replacement — critical for EVs where a dead 12V can lock you out of the car.",
    icon: "battery-charging", category: "Electrical",
    details: ["Load test", "Charging system check", "Terminal service", "Old battery recycling"],
  },
  {
    slug: "ac-heating", title: "Climate & Heat Pump",
    description: "AC, heat pump, and cabin heater diagnosis and repair — including EV thermal management.",
    icon: "thermometer", category: "Climate",
    details: ["System pressure test", "Refrigerant service", "Leak detection", "Heat pump diagnostics"],
  },
  {
    slug: "drivetrain", title: "Drivetrain",
    description: "EV single-speed reduction gearboxes, hybrid transmissions, and driveline service.",
    icon: "git-branch", category: "Drivetrain",
    details: ["Fluid analysis", "Diagnostic scan", "Reduction gearbox service", "Detailed repair plan"],
  },
];
