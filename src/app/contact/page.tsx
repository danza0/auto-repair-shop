import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us — AutoPrecision",
  description: "Get in touch with AutoPrecision auto repair shop.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(555) 555-1234", href: "tel:+15555551234" },
  { icon: Mail, label: "Email", value: "service@autoprecision.com", href: "mailto:service@autoprecision.com" },
  { icon: MapPin, label: "Address", value: "123 Main Street, Anytown, CA 90210", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 7am–6pm · Sat 8am–4pm", href: "#" },
];

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="blue" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question? We&apos;re here to help. Reach out via phone, email, or stop by the shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <Card key={label} hover>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
                    <a href={href} className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
