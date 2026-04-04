import BookingFlow from "@/components/booking/BookingFlow";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Book an Appointment — SmartCare Auto Repair | Spanaway, WA",
  description: "Schedule your auto repair or maintenance appointment online with SmartCare Auto Repair.",
};

export default function BookingPage() {
  return (
    <div className="pt-20 min-h-screen bg-navy-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="accent" className="mb-4">Online Booking</Badge>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Book Your Appointment
          </h1>
          <p className="text-xl text-slate-400">
            Select your service and schedule a time that works for you. We confirm within 1 business day.
          </p>
        </div>
        <BookingFlow />
      </section>
    </div>
  );
}
