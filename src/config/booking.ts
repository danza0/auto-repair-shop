export type BookingType = "self-schedule" | "approval-required" | "consultation-first";

export interface BookingConfig {
  serviceSlug: string;
  serviceName: string;
  calendlyUrl: string;
  bookingType: BookingType;
  durationMinutes: number;
  dailyCapacityNote: string;
  requiresApproval: boolean;
  approvalMessage?: string;
  availabilityNote?: string;
}

export const bookingConfig: BookingConfig[] = [
  { serviceSlug: "diagnostics", serviceName: "Diagnostics", calendlyUrl: "https://calendly.com/dushukdanyil/diagnostics", bookingType: "self-schedule", durationMinutes: 60, dailyCapacityNote: "Limited to 2 slots per day", requiresApproval: false, availabilityNote: "Only 2 diagnostic slots available per day. Book early." },
  { serviceSlug: "oil-change", serviceName: "Oil Change", calendlyUrl: "https://calendly.com/dushukdanyil/oil-change", bookingType: "self-schedule", durationMinutes: 45, dailyCapacityNote: "High availability", requiresApproval: false, availabilityNote: "Flexible scheduling — most times available." },
  { serviceSlug: "brake-service", serviceName: "Brake Service", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 90, dailyCapacityNote: "Up to 4 slots per day", requiresApproval: false, availabilityNote: "Same-day brake service available most days." },
  { serviceSlug: "battery-replacement", serviceName: "Battery Replacement", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 45, dailyCapacityNote: "High availability", requiresApproval: false, availabilityNote: "Quick service — usually under an hour." },
  { serviceSlug: "tire-service", serviceName: "Tire Service", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 60, dailyCapacityNote: "High availability", requiresApproval: false, availabilityNote: "Tire rotations and balancing available daily." },
  { serviceSlug: "engine-repair", serviceName: "Engine Repair", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "consultation-first", durationMinutes: 60, dailyCapacityNote: "Limited to 1 per day", requiresApproval: true, approvalMessage: "Engine repair requires an initial consultation before scheduling.", availabilityNote: "Engine consultation slots are limited — only 1 per day." },
  { serviceSlug: "suspension", serviceName: "Suspension", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 120, dailyCapacityNote: "Up to 2 slots per day", requiresApproval: false, availabilityNote: "Suspension work typically takes 2–4 hours." },
  { serviceSlug: "ac-heating", serviceName: "AC / Heating", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 90, dailyCapacityNote: "Up to 3 slots per day", requiresApproval: false, availabilityNote: "AC and heating service available Monday–Saturday." },
  { serviceSlug: "transmission", serviceName: "Transmission", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "consultation-first", durationMinutes: 60, dailyCapacityNote: "Limited to 1 per day", requiresApproval: true, approvalMessage: "Transmission service requires a preliminary inspection.", availabilityNote: "Transmission slots are limited — 1 consultation per day." },
  { serviceSlug: "general-maintenance", serviceName: "General Maintenance", calendlyUrl: "https://calendly.com/dushukdanyil/30min", bookingType: "self-schedule", durationMinutes: 90, dailyCapacityNote: "High availability", requiresApproval: false, availabilityNote: "Maintenance packages available any day of the week." },
];

export const generalBookingUrl = "https://calendly.com/dushukdanyil/30min";

export function getBookingConfig(serviceSlug: string): BookingConfig | undefined {
  return bookingConfig.find((b) => b.serviceSlug === serviceSlug);
}

export function getBookingUrlForEstimator(serviceSlug: string): string {
  // Strip consultation/inspection suffixes used in pricing slugs to match booking config slugs
  const normalized = serviceSlug
    .replace(/-consultation$/, "")
    .replace(/-inspection$/, "");
  const config = getBookingConfig(normalized);
  return config?.calendlyUrl ?? generalBookingUrl;
}
