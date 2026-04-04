import { Badge } from "@/components/ui/Badge";
import { MapPin, Phone, Clock, Mail, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact — SmartCare Auto Repair | Spanaway, WA",
  description: "Get in touch with SmartCare Auto Repair in Spanaway, WA. Call (253) 214-3774.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "(253) 214-3774", href: "tel:+12532143774" },
  { icon: Mail, label: "Email", value: "smartalexmechanic@gmail.com", href: "mailto:smartalexmechanic@gmail.com" },
  { icon: MapPin, label: "Address", value: "108 163rd St S, Spanaway, WA 98387", href: "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387" },
  { icon: Clock, label: "Hours", value: "Monday – Friday, 9 AM – 5 PM", href: null },
  { icon: Globe, label: "Languages", value: "English · Spanish · Russian", href: null },
];

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-navy-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">Contact Us</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have a question? We&apos;re here to help. Reach out via phone, email, or stop by the shop.
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 bg-navy-800 rounded-2xl border border-navy-600 p-5">
                <div className="w-11 h-11 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-slate-200 hover:text-white text-sm font-medium transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-slate-200 text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-lg px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-accent-500/30 hover:scale-[1.02]"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
