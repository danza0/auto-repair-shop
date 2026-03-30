import { VehicleType, ServiceSlug, vehicleMultipliers, pricingRules, addons, Addon } from "@/config/pricing";

export interface VehicleDetails {
  type: VehicleType;
  make: string;
  model: string;
  year: string;
  engineSize?: string;
  mileage?: string;
}

export interface EstimateResult {
  serviceSlug: ServiceSlug;
  serviceName: string;
  vehicleType: VehicleType;
  basePriceMin: number;
  basePriceMax: number;
  laborMin: number;
  laborMax: number;
  vehicleMultiplierLabel: string;
  vehicleMultiplierValue: number;
  addonTotal: number;
  totalMin: number;
  totalMax: number;
  selectedAddons: Addon[];
  note?: string;
  requiresInspection: boolean;
  disclaimers: string[];
}

export function calculateEstimate(
  vehicleDetails: VehicleDetails,
  serviceSlug: ServiceSlug,
  selectedAddonIds: string[]
): EstimateResult {
  const rule = pricingRules.find((r) => r.slug === serviceSlug);
  if (!rule) throw new Error(`No pricing rule for service: ${serviceSlug}`);

  const multiplierConfig = vehicleMultipliers[vehicleDetails.type];
  const m = multiplierConfig.multiplier;
  const lm = multiplierConfig.laborMultiplier;

  const basePriceMin = Math.round(rule.baseMin * m);
  const basePriceMax = Math.round(rule.baseMax * m);
  const laborMin = Math.round(rule.laborMin * lm);
  const laborMax = Math.round(rule.laborMax * lm);

  const selectedAddons = addons.filter((a) => {
    if (!selectedAddonIds.includes(a.id)) return false;
    if (a.applicableTo === "all") return true;
    return (a.applicableTo as ServiceSlug[]).includes(serviceSlug);
  });

  const addonTotal = selectedAddons.reduce((sum, a) => sum + a.priceMin, 0);
  const addonTotalMax = selectedAddons.reduce((sum, a) => sum + a.priceMax, 0);

  const totalMin = basePriceMin + laborMin + addonTotal;
  const totalMax = basePriceMax + laborMax + addonTotalMax;

  const disclaimers = [
    "This is a preliminary estimate only. Final pricing is confirmed after in-person inspection.",
    "Parts pricing subject to availability and market rates.",
    "Labor time may vary based on vehicle condition.",
  ];

  if (vehicleDetails.type === "Luxury" || vehicleDetails.type === "European") {
    disclaimers.push("Luxury and European vehicles may require specialized parts with longer lead times.");
  }
  if (rule.requiresInspection) {
    disclaimers.push("This service requires a preliminary inspection before final pricing can be confirmed.");
  }

  return {
    serviceSlug, serviceName: rule.name, vehicleType: vehicleDetails.type,
    basePriceMin, basePriceMax, laborMin, laborMax,
    vehicleMultiplierLabel: multiplierConfig.label, vehicleMultiplierValue: m,
    addonTotal, totalMin, totalMax, selectedAddons,
    note: rule.note, requiresInspection: rule.requiresInspection ?? false, disclaimers,
  };
}
