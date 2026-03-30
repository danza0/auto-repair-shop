export type VehicleType = "Sedan" | "SUV" | "Truck" | "Coupe" | "Van" | "Hybrid" | "Luxury" | "European";

export type ServiceSlug =
  | "diagnostics" | "oil-change" | "brake-pad-replacement" | "battery-replacement"
  | "tire-rotation" | "ac-inspection" | "engine-repair-consultation"
  | "transmission-inspection" | "full-maintenance";

export interface PricingRule {
  slug: ServiceSlug;
  name: string;
  baseMin: number;
  baseMax: number;
  laborMin: number;
  laborMax: number;
  note?: string;
  requiresInspection?: boolean;
}

export interface VehicleMultiplier {
  type: VehicleType;
  multiplier: number;
  laborMultiplier: number;
  label: string;
}

export interface Addon {
  id: string;
  label: string;
  description: string;
  priceMin: number;
  priceMax: number;
  applicableTo: ServiceSlug[] | "all";
}

export const VEHICLE_TYPES: VehicleType[] = ["Sedan","SUV","Truck","Coupe","Van","Hybrid","Luxury","European"];

export const vehicleMultipliers: Record<VehicleType, VehicleMultiplier> = {
  Sedan:    { type: "Sedan",    multiplier: 1.0,  laborMultiplier: 1.0,  label: "Sedan" },
  Coupe:    { type: "Coupe",    multiplier: 1.0,  laborMultiplier: 1.0,  label: "Coupe" },
  SUV:      { type: "SUV",      multiplier: 1.15, laborMultiplier: 1.1,  label: "SUV" },
  Truck:    { type: "Truck",    multiplier: 1.2,  laborMultiplier: 1.15, label: "Truck" },
  Van:      { type: "Van",      multiplier: 1.15, laborMultiplier: 1.1,  label: "Van" },
  Hybrid:   { type: "Hybrid",   multiplier: 1.25, laborMultiplier: 1.2,  label: "Hybrid" },
  Luxury:   { type: "Luxury",   multiplier: 1.5,  laborMultiplier: 1.35, label: "Luxury" },
  European: { type: "European", multiplier: 1.6,  laborMultiplier: 1.4,  label: "European" },
};

export const pricingRules: PricingRule[] = [
  { slug: "diagnostics", name: "Diagnostics", baseMin: 89, baseMax: 120, laborMin: 0, laborMax: 0, note: "Flat fee. Applied toward repair if booked same day." },
  { slug: "oil-change", name: "Oil Change", baseMin: 49, baseMax: 79, laborMin: 20, laborMax: 35, note: "Price varies by oil type and vehicle requirements." },
  { slug: "brake-pad-replacement", name: "Brake Pad Replacement", baseMin: 129, baseMax: 249, laborMin: 60, laborMax: 120, note: "Per axle. Rotor resurfacing may be additional." },
  { slug: "battery-replacement", name: "Battery Replacement", baseMin: 119, baseMax: 219, laborMin: 25, laborMax: 50, note: "Includes battery, installation, and disposal." },
  { slug: "tire-rotation", name: "Tire Rotation", baseMin: 29, baseMax: 49, laborMin: 15, laborMax: 25, note: "Includes pressure check and visual inspection." },
  { slug: "ac-inspection", name: "AC Inspection", baseMin: 89, baseMax: 149, laborMin: 45, laborMax: 75, note: "Refrigerant recharge billed separately if needed." },
  { slug: "engine-repair-consultation", name: "Engine Repair Consultation", baseMin: 149, baseMax: 299, laborMin: 120, laborMax: 240, requiresInspection: true, note: "Final pricing depends on specific repair needed." },
  { slug: "transmission-inspection", name: "Transmission Inspection", baseMin: 129, baseMax: 249, laborMin: 90, laborMax: 180, requiresInspection: true, note: "Estimate only. Full repair pricing after inspection." },
  { slug: "full-maintenance", name: "Full Maintenance Package", baseMin: 199, baseMax: 349, laborMin: 80, laborMax: 140, note: "Exact scope depends on vehicle mileage interval." },
];

export const addons: Addon[] = [
  { id: "synthetic-oil", label: "Full Synthetic Oil Upgrade", description: "Upgrade to full synthetic oil.", priceMin: 30, priceMax: 50, applicableTo: ["oil-change"] },
  { id: "premium-parts", label: "Premium OEM Parts", description: "Use OEM or equivalent premium parts.", priceMin: 40, priceMax: 120, applicableTo: "all" },
  { id: "same-day-priority", label: "Same-Day Priority Service", description: "Move to the top of the queue.", priceMin: 49, priceMax: 75, applicableTo: "all" },
  { id: "inspection-addon", label: "Multi-Point Inspection Add-On", description: "Full 27-point vehicle inspection.", priceMin: 39, priceMax: 59, applicableTo: "all" },
  { id: "extended-warranty", label: "Extended Parts Warranty", description: "Extend parts warranty from 12 to 24 months.", priceMin: 25, priceMax: 45, applicableTo: "all" },
];
