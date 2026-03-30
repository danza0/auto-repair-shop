import BookingFlow from "@/components/booking/BookingFlow";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Book an Appointment — AutoPrecision",
  description: "Schedule your auto repair or maintenance appointment online.",
};

export default function BookingPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="blue" className="mb-4">Online Booking</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Select your service and schedule a time that works for you. Most appointments confirmed instantly.
          </p>
        </div>
        <BookingFlow />
      </section>
    </div>
  );
}
