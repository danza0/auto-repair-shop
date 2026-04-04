import { pricingRules, ServiceSlug } from "@/config/pricing";
import { cn, formatRange } from "@/lib/utils";
import { Check } from "lucide-react";

interface Props { selected: ServiceSlug[]; onToggle: (s: ServiceSlug) => void; }

export default function StepService({ selected, onToggle }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 font-display">What services do you need?</h2>
      <p className="text-slate-400 mb-6">Select one or more services. We&apos;ll combine the estimates.</p>
      <div className="space-y-2">
        {pricingRules.map((rule) => {
          const isSelected = selected.includes(rule.slug);
          return (
            <button
              key={rule.slug}
              onClick={() => onToggle(rule.slug)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3",
                isSelected
                  ? "border-accent-500 bg-accent-500/10"
                  : "border-navy-600 bg-navy-700/50 hover:border-navy-500 hover:bg-navy-700"
              )}
            >
              <div className={cn(
                "w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center mt-0.5",
                isSelected ? "bg-accent-500 border-accent-500" : "border-navy-500"
              )}>
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={cn("font-semibold text-sm", isSelected ? "text-accent-400" : "text-white")}>{rule.name}</span>
                  <span className="text-sm font-medium text-accent-400">{formatRange(rule.baseMin, rule.baseMax)}</span>
                </div>
                {rule.note && <p className="text-xs text-slate-500 mt-1">{rule.note}</p>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
