import { pricingRules, ServiceSlug } from "@/config/pricing";
import { cn, formatRange } from "@/lib/utils";

interface Props { selected: ServiceSlug | null; onSelect: (s: ServiceSlug) => void; }

export default function StepService({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">What service do you need?</h2>
      <p className="text-gray-500 mb-6">Select the service closest to what you need. We&apos;ll refine pricing after inspection.</p>
      <div className="space-y-2">
        {pricingRules.map((rule) => (
          <button key={rule.slug} onClick={() => onSelect(rule.slug)} className={cn("w-full text-left p-4 rounded-xl border-2 transition-all duration-200", selected === rule.slug ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50")}>
            <div className="flex items-center justify-between">
              <span className={cn("font-semibold", selected === rule.slug ? "text-blue-700" : "text-gray-900")}>{rule.name}</span>
              <span className="text-sm font-medium text-blue-600">{formatRange(rule.baseMin, rule.baseMax)}</span>
            </div>
            {rule.note && <p className="text-xs text-gray-500 mt-1">{rule.note}</p>}
          </button>
        ))}
      </div>
    </div>
  );
}
