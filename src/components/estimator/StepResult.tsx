import { EstimateResult, VehicleDetails } from "@/lib/estimator";
import { formatRange } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { getBookingUrlForEstimator, buildCalendlyUrl } from "@/config/booking";

interface Props { result: EstimateResult; vehicleDetails?: VehicleDetails; onReset: () => void; }

export default function StepResult({ result, vehicleDetails, onReset }: Props) {
  const baseBookingUrl = getBookingUrlForEstimator(result.serviceSlugs[0]);
  const bookingUrl = buildCalendlyUrl(baseBookingUrl, {
    vehicleYear: vehicleDetails?.year,
    vehicleMake: vehicleDetails?.make,
    vehicleModel: vehicleDetails?.model,
    vehicleType: result.vehicleMultiplierLabel,
    services: result.serviceName,
    estimateRange: formatRange(result.totalMin, result.totalMax),
    addons: result.selectedAddons.length > 0
      ? result.selectedAddons.map((a) => a.label).join(", ")
      : undefined,
  });
  const isMultiple = result.serviceSlugs.length > 1;
  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500/10 border border-accent-500/20 rounded-2xl mb-4">
          <CheckCircle className="w-8 h-8 text-accent-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-1 font-display">Your Estimate</h2>
        <p className="text-slate-400">{result.serviceName} · {result.vehicleMultiplierLabel}</p>
      </div>

      <div className="bg-accent-500/8 border border-accent-500/20 rounded-2xl p-6 mb-6">
        {isMultiple && (
          <div className="mb-4 pb-4 border-b border-navy-600 space-y-2">
            {result.lineItems.map((item) => (
              <div key={item.slug} className="flex justify-between text-sm">
                <span className="text-slate-300">{item.name}</span>
                <span className="font-medium text-white">{formatRange(item.priceMin, item.priceMax)}</span>
              </div>
            ))}
          </div>
        )}
        <div className="text-center">
          <div className="text-4xl font-bold text-accent-400 mb-1">{formatRange(result.totalMin, result.totalMax)}</div>
          <p className="text-sm text-slate-400">Estimated Total Range</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-navy-700">
          <div className="text-center">
            <div className="font-semibold text-white text-sm">{formatRange(result.basePriceMin, result.basePriceMax)}</div>
            <div className="text-xs text-slate-500">Parts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-white text-sm">{formatRange(result.laborMin, result.laborMax)}</div>
            <div className="text-xs text-slate-500">Labor</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-white text-sm">{result.addonTotal > 0 ? `+$${result.addonTotal}` : "$0"}</div>
            <div className="text-xs text-slate-500">Add-ons</div>
          </div>
        </div>
      </div>

      {result.selectedAddons.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-300 mb-2">Selected Add-ons</p>
          <div className="flex flex-wrap gap-2">
            {result.selectedAddons.map((a) => <Badge key={a.id} variant="accent">{a.label}</Badge>)}
          </div>
        </div>
      )}

      {result.requiresInspection && (
        <div className="flex gap-3 p-4 bg-yellow-900/20 border border-yellow-700/30 rounded-xl mb-4">
          <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-300">One or more selected services require a preliminary inspection before final pricing can be confirmed.</p>
        </div>
      )}

      <div className="bg-navy-700/50 rounded-xl p-4 mb-6">
        <p className="text-xs font-medium text-slate-400 mb-2">Important Disclaimers</p>
        <ul className="space-y-1">
          {result.disclaimers.map((d) => <li key={d} className="text-xs text-slate-500 flex gap-2"><span className="mt-0.5">•</span>{d}</li>)}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3 transition-all duration-200 shadow-lg hover:shadow-accent-500/30"
        >
          {isMultiple ? "Book These Services" : "Book This Service"} <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={onReset}
          className="flex-1 inline-flex items-center justify-center font-semibold rounded-xl border-2 border-navy-600 text-slate-300 hover:bg-navy-700 hover:text-white text-base px-6 py-3 transition-all duration-200"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
