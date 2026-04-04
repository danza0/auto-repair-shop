"use client";

import { services } from "@/config/services";
import { bookingConfig } from "@/config/booking";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Clock, AlertCircle } from "lucide-react";

interface Props { selected: string | null; onSelect: (slug: string) => void; }

export default function ServiceSelector({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 font-display">Select a Service</h2>
      <p className="text-slate-400 mb-6">Choose the service you&apos;d like to book.</p>
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
        {services.map((service) => {
          const config = bookingConfig.find((b) => b.serviceSlug === service.slug);
          const isSelected = selected === service.slug;
          return (
            <button
              key={service.slug}
              onClick={() => onSelect(service.slug)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200",
                isSelected
                  ? "border-accent-500 bg-accent-500/10"
                  : "border-navy-600 bg-navy-700/50 hover:border-navy-500 hover:bg-navy-700"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn("font-semibold text-sm", isSelected ? "text-accent-400" : "text-white")}>
                      {service.title}
                    </span>
                    <Badge variant={config?.requiresApproval ? "yellow" : "green"} className="text-xs">
                      {config?.requiresApproval ? "Consultation" : "Book Now"}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">{service.startingPrice}</p>
                </div>
                {config && (
                  <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {config.durationMinutes}min
                  </div>
                )}
              </div>
              {isSelected && config?.availabilityNote && (
                <div className="mt-2 flex gap-2 text-xs text-accent-400">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  {config.availabilityNote}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
