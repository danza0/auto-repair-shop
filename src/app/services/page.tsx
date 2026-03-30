import { services } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services — AutoPrecision",
  description: "Full range of automotive repair and maintenance services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="blue" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Auto Repair & Maintenance
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs — our certified technicians handle it all with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.slug} hover className="flex flex-col">
                <CardContent className="flex flex-col flex-1 p-6">
                  <Badge variant="gray" className="self-start mb-3">{service.category}</Badge>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="font-bold text-blue-600">{service.startingPrice}</span>
                    <Link
                      href={`/booking?service=${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
