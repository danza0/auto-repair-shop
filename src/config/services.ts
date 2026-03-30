export interface Service {
  slug: string;
  title: string;
  description: string;
  startingPrice: string;
  icon: string;
  category: string;
  details: string[];
}

export const services: Service[] = [
  {
    slug: "diagnostics", title: "Diagnostics",
    description: "Advanced computer diagnostics to identify exactly what your vehicle needs.",
    startingPrice: "From $89", icon: "cpu", category: "Inspection",
    details: ["Full system scan", "Error code analysis", "Written diagnostic report", "Repair recommendations"],
  },
  {
    slug: "oil-change", title: "Oil Change",
    description: "Conventional and full synthetic oil changes with multi-point inspection.",
    startingPrice: "From $49", icon: "droplets", category: "Maintenance",
    details: ["Conventional or synthetic", "Filter replacement", "Multi-point inspection", "Fluid top-off"],
  },
  {
    slug: "brake-service", title: "Brake Service",
    description: "Complete brake system inspection and repair. Pads, rotors, calipers, and fluid.",
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
  {
    slug: "general-maintenance", title: "General Maintenance",
    description: "Scheduled maintenance packages that keep your warranty valid.",
    startingPrice: "From $79", icon: "wrench", category: "Maintenance",
    details: ["30/60/90k services", "Filter replacements", "Fluid flushes", "Multi-point inspection"],
  },
];
