export interface BookingConfig {
  serviceSlug: string;
  serviceName: string;
  calendlyUrl: string;
  durationMinutes: number;
  availabilityNote: string;
  /** Marked true when the service requires us to look at the car before scheduling. */
  consultationFirst?: boolean;
}

/**
 * Per-service Calendly URLs. Each event type can carry its own custom
 * intake questions inside Calendly — that's where the owner customizes
 * the per-service form. The URL must point at the service's event type.
 *
 * To add a new service:
 *  1. Create an event type in Calendly (e.g. /smartcare/diesels)
 *  2. Add this URL below
 *  3. Customize its intake questions in Calendly's dashboard
 */
export const bookingConfig: BookingConfig[] = [
  {
    serviceSlug: "diagnostics",
    serviceName: "Diagnostics",
    calendlyUrl: "https://calendly.com/dushukdanyil/diagnostics",
    durationMinutes: 60,
    availabilityNote: "Only 2 diagnostic slots per day — book early.",
  },
  {
    serviceSlug: "programming",
    serviceName: "Programming",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "ECU, key fob, and module programming. Same-week availability.",
  },
  {
    serviceSlug: "bev-hybrids",
    serviceName: "BEV / Hybrids",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "EV-certified bay. Service available Mon–Fri.",
  },
  {
    serviceSlug: "electronics",
    serviceName: "Electronics",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "Wiring, sensors, modules. Same-week slots most weeks.",
  },
  {
    serviceSlug: "diesels",
    serviceName: "Diesel Service",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 120,
    availabilityNote: "Diesel work typically takes 2–4 hours.",
  },
  {
    serviceSlug: "maintenance",
    serviceName: "Maintenance",
    calendlyUrl: "https://calendly.com/dushukdanyil/oil-change",
    durationMinutes: 60,
    availabilityNote: "Oil changes and scheduled maintenance — most times available.",
  },
  {
    serviceSlug: "brake-service",
    serviceName: "Brake Service",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "Same-day brake service available most days.",
  },
  {
    serviceSlug: "battery-replacement",
    serviceName: "Battery Replacement",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 45,
    availabilityNote: "Quick service — usually under an hour.",
  },
  {
    serviceSlug: "engine-repair",
    serviceName: "Engine Repair",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 60,
    consultationFirst: true,
    availabilityNote: "Engine work starts with a 60-min consultation. 1 slot per day.",
  },
  {
    serviceSlug: "ac-heating",
    serviceName: "AC / Heating",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 90,
    availabilityNote: "AC and heating service Mon–Fri.",
  },
  {
    serviceSlug: "transmission",
    serviceName: "Transmission",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 60,
    consultationFirst: true,
    availabilityNote: "Transmission work starts with an inspection. 1 slot per day.",
  },
  {
    serviceSlug: "other",
    serviceName: "Other / Not Sure",
    calendlyUrl: "https://calendly.com/dushukdanyil/30min",
    durationMinutes: 30,
    availabilityNote: "We'll figure it out together — describe the issue below.",
  },
];

export const generalBookingUrl = "https://calendly.com/dushukdanyil/30min";

export function getBookingConfig(serviceSlug: string): BookingConfig | undefined {
  return bookingConfig.find((b) => b.serviceSlug === serviceSlug);
}

export interface BookingFormPayload {
  // Customer
  name: string;
  email?: string;
  phone: string;
  preferredLanguage?: string;
  // Vehicle
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleMileage?: string;
  vehicleVin?: string;
  // Request
  services: string; // comma-separated service names
  problemDescription?: string;
  preferredTimeframe?: string;
  hearAboutUs?: string;
}

/**
 * Build a Calendly URL with the booking-form payload prefilled.
 * - `name` / `email` are first-class Calendly params and prefill the
 *   guest form fields.
 * - Everything else gets packed into `a1` (Calendly's first custom
 *   question answer) as a structured `Key: value` list so the owner
 *   sees the full intake at a glance in the Calendly dashboard.
 */
export function buildCalendlyUrl(baseUrl: string, payload: BookingFormPayload): string {
  const params = new URLSearchParams();

  if (payload.name) params.set("name", payload.name);
  if (payload.email) params.set("email", payload.email);

  const lines: string[] = [];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.preferredLanguage) lines.push(`Language: ${payload.preferredLanguage}`);

  const vehicleParts = [payload.vehicleYear, payload.vehicleMake, payload.vehicleModel]
    .filter(Boolean)
    .join(" ");
  if (vehicleParts) lines.push(`Vehicle: ${vehicleParts}`);
  if (payload.vehicleMileage) lines.push(`Mileage: ${payload.vehicleMileage}`);
  if (payload.vehicleVin) lines.push(`VIN: ${payload.vehicleVin}`);

  if (payload.services) lines.push(`Service: ${payload.services}`);
  if (payload.problemDescription) lines.push(`Issue: ${payload.problemDescription}`);
  if (payload.preferredTimeframe) lines.push(`Preferred: ${payload.preferredTimeframe}`);
  if (payload.hearAboutUs) lines.push(`Found us via: ${payload.hearAboutUs}`);

  if (lines.length > 0) {
    params.set("a1", lines.join("\n"));
  }

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${params.toString()}`;
}
