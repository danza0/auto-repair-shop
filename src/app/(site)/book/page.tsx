import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book an Appointment — SmartCare Auto Repair",
  description:
    "Tell us about your vehicle and the service you need. We'll walk you through times available — usually same week.",
};

export default function BookPage() {
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
        <BookingForm />
      </Suspense>
    </div>
  );
}
