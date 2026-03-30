import { addons, ServiceSlug } from "@/config/pricing";
import { cn, formatRange } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props { serviceSlug: ServiceSlug; selected: string[]; onToggle: (id: string) => void; }

export default function StepAddons({ serviceSlug, selected, onToggle }: Props) {
  const applicable = addons.filter((a) => a.applicableTo === "all" || (a.applicableTo as ServiceSlug[]).includes(serviceSlug));
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Add optional upgrades</h2>
      <p className="text-gray-500 mb-6">These add-ons are optional and can be skipped.</p>
      {applicable.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No add-ons available for this service.</p>
      ) : (
        <div className="space-y-3">
          {applicable.map((addon) => {
            const isSelected = selected.includes(addon.id);
            return (
              <button key={addon.id} onClick={() => onToggle(addon.id)} className={cn("w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3", isSelected ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300")}>
                <div className={cn("w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5", isSelected ? "bg-blue-600 border-blue-600" : "border-gray-300")}>
                  {isSelected && <Check className="w-3 h-3 text-white" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className={cn("font-semibold text-sm", isSelected ? "text-blue-700" : "text-gray-900")}>{addon.label}</span>
                    <span className="text-sm font-medium text-blue-600">+{formatRange(addon.priceMin, addon.priceMax)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{addon.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
