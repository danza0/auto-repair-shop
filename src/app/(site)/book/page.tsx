import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "./BookingForm";
import { bookingConfig as defaultBookingConfig, generalBookingUrl as defaultGeneralBookingUrl, type BookingConfig } from "@/config/booking";
import { getServices, getSiteSettings } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Book an Appointment — SmartCare Auto Repair",
  description:
    "Tell us about your vehicle and the service you need. We'll walk you through times available — usually same week.",
};

export default async function BookPage() {
  // Pull services from Sanity so the dropdown reflects what Alex edits in
  // Studio. Fall back to the hardcoded list when Sanity isn't configured.
  const [sanityServices, siteSettings] = await Promise.all([
    getServices(),
    getSiteSettings(),
  ]);

  const generalBookingUrl =
    siteSettings?.generalBookingUrl || defaultGeneralBookingUrl;

  const servicesFromSanity: BookingConfig[] = sanityServices.map((s) => ({
    serviceSlug: s.slug,
    serviceName: s.title,
    calendlyUrl: s.calendlyUrl || generalBookingUrl,
    durationMinutes: s.durationMinutes ?? 60,
    availabilityNote: s.availabilityNote || "Same-week appointments",
    consultationFirst: s.consultationFirst ?? false,
  }));

  const otherOption: BookingConfig = {
    serviceSlug: "other",
    serviceName: "Other / Not Sure",
    calendlyUrl: generalBookingUrl,
    durationMinutes: 30,
    availabilityNote: "We'll figure it out together — describe the issue below.",
  };

  const bookingConfig =
    servicesFromSanity.length > 0
      ? [...servicesFromSanity, otherOption]
      : defaultBookingConfig;
  return (
    <div className="relative min-h-screen bg-black-pure pt-28 pb-20 lg:pt-32 overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="noise absolute inset-0 pointer-events-none" aria-hidden />

      <Suspense fallback={null}>
        <BookingForm
          bookingConfig={bookingConfig}
          generalBookingUrl={generalBookingUrl}
        />
      </Suspense>
    </div>
  );
}
