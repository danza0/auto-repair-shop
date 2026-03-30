import { VehicleType, ServiceSlug, vehicleMultipliers, pricingRules, addons, Addon } from "@/config/pricing";

export interface VehicleDetails {
  type: VehicleType;
  make: string;
  model: string;
  year: string;
  engineSize?: string;
  mileage?: string;
}

export interface ServiceLineItem {
  slug: ServiceSlug;
  name: string;
  priceMin: number;
  priceMax: number;
}

export interface EstimateResult {
  serviceSlugs: ServiceSlug[];
  serviceName: string;
  vehicleType: VehicleType;
  lineItems: ServiceLineItem[];
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
  requiresInspection: boolean;
  disclaimers: string[];
}

export function calculateEstimate(
  vehicleDetails: VehicleDetails,
  serviceSlugs: ServiceSlug[],
  selectedAddonIds: string[]
): EstimateResult {
  if (serviceSlugs.length === 0) throw new Error("At least one service must be selected");

  const multiplierConfig = vehicleMultipliers[vehicleDetails.type];
  const m = multiplierConfig.multiplier;
  const lm = multiplierConfig.laborMultiplier;

  let basePriceMin = 0;
  let basePriceMax = 0;
  let laborMin = 0;
  let laborMax = 0;
  let requiresInspection = false;
  const lineItems: ServiceLineItem[] = [];

  for (const slug of serviceSlugs) {
    const rule = pricingRules.find((r) => r.slug === slug);
    if (!rule) throw new Error(`No pricing rule for service: ${slug}`);

    const itemBaseMin = Math.round(rule.baseMin * m);
    const itemBaseMax = Math.round(rule.baseMax * m);
    const itemLaborMin = Math.round(rule.laborMin * lm);
    const itemLaborMax = Math.round(rule.laborMax * lm);

    basePriceMin += itemBaseMin;
    basePriceMax += itemBaseMax;
    laborMin += itemLaborMin;
    laborMax += itemLaborMax;
    if (rule.requiresInspection) requiresInspection = true;

    lineItems.push({ slug, name: rule.name, priceMin: itemBaseMin + itemLaborMin, priceMax: itemBaseMax + itemLaborMax });
  }

  const serviceName = lineItems.map((li) => li.name).join(", ");

  const selectedAddons = addons.filter((a) => {
    if (!selectedAddonIds.includes(a.id)) return false;
    if (a.applicableTo === "all") return true;
    return serviceSlugs.some((slug) => (a.applicableTo as ServiceSlug[]).includes(slug));
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
  if (requiresInspection) {
    disclaimers.push("One or more selected services require a preliminary inspection before final pricing can be confirmed.");
  }

  return {
    serviceSlugs, serviceName, vehicleType: vehicleDetails.type,
    lineItems, basePriceMin, basePriceMax, laborMin, laborMax,
    vehicleMultiplierLabel: multiplierConfig.label, vehicleMultiplierValue: m,
    addonTotal, totalMin, totalMax, selectedAddons,
    requiresInspection, disclaimers,
  };
}
