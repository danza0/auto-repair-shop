import { services } from "@/config/services";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, CheckCircle, Cpu, Code, BatteryCharging, Monitor, Truck, Wrench, CircleDot, Settings, Car, Thermometer, GitBranch } from "lucide-react";

export const metadata = {
  title: "Services — SmartCare Auto Repair | Spanaway, WA",
  description: "Full range of automotive repair and maintenance services — diagnostics, programming, BEV/hybrids, electronics, diesels, and more.",
};

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu, code: Code, "battery-charging": BatteryCharging, monitor: Monitor,
  truck: Truck, wrench: Wrench, "circle-dot": CircleDot, settings: Settings,
  car: Car, thermometer: Thermometer, "git-branch": GitBranch,
};

export default function ServicesPage() {
  const featured = services.filter((s) => s.featured);
  const additional = services.filter((s) => !s.featured);

  return (
    <div className="pt-20 bg-navy-900 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
              Complete Auto Repair &amp; Service
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From diagnostics to diesel repair — expert service for every make, model, and system.
            </p>
          </div>

          {/* Core Services */}
          <h2 className="text-xl font-bold text-white mb-6 font-display">Core Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featured.map((service) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <div
                  key={service.slug}
                  className="bg-navy-800 rounded-2xl border border-navy-600 hover:border-accent-500/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 flex flex-col"
                >
                  <div className="w-12 h-12 bg-accent-500/10 border border-accent-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <Badge variant="navy" className="self-start mb-3">{service.category}</Badge>
                  <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-navy-700 mt-auto">
                    <span className="font-bold text-accent-400">{service.startingPrice}</span>
                    <Link
                      href="/#booking"
                      className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-accent-400 transition-colors"
                    >
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services */}
          <h2 className="text-xl font-bold text-white mb-6 font-display">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additional.map((service) => {
              const Icon = iconMap[service.icon] ?? Wrench;
              return (
                <div
                  key={service.slug}
                  className="bg-navy-800 rounded-2xl border border-navy-700 hover:border-navy-600 p-6 transition-all duration-200 flex flex-col"
                >
                  <div className="w-10 h-10 bg-navy-700 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <Badge variant="navy" className="self-start mb-2">{service.category}</Badge>
                  <h2 className="text-lg font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-slate-400 text-sm mb-4 flex-1">{service.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-navy-700 mt-auto">
                    <span className="font-semibold text-slate-300 text-sm">{service.startingPrice}</span>
                    <Link
                      href="/#booking"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
                    >
                      Book <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
