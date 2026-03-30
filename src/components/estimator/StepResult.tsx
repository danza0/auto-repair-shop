import { EstimateResult } from "@/lib/estimator";
import { formatRange } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { getBookingUrlForEstimator } from "@/config/booking";

interface Props { result: EstimateResult; onReset: () => void; }

export default function StepResult({ result, onReset }: Props) {
  const bookingUrl = getBookingUrlForEstimator(result.serviceSlug);
  return (
    <div>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
          <CheckCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Your Estimate</h2>
        <p className="text-gray-500">{result.serviceName} · {result.vehicleMultiplierLabel}</p>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-700 mb-1">{formatRange(result.totalMin, result.totalMax)}</div>
          <p className="text-sm text-blue-600">Estimated Total Range</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-blue-200">
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-sm">{formatRange(result.basePriceMin, result.basePriceMax)}</div>
            <div className="text-xs text-gray-500">Parts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-sm">{formatRange(result.laborMin, result.laborMax)}</div>
            <div className="text-xs text-gray-500">Labor</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 text-sm">{result.addonTotal > 0 ? `+$${result.addonTotal}` : "$0"}</div>
            <div className="text-xs text-gray-500">Add-ons</div>
          </div>
        </div>
      </div>

      {result.selectedAddons.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected Add-ons</p>
          <div className="flex flex-wrap gap-2">
            {result.selectedAddons.map((a) => <Badge key={a.id} variant="blue">{a.label}</Badge>)}
          </div>
        </div>
      )}

      {result.requiresInspection && (
        <div className="flex gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl mb-4">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">This service requires a preliminary inspection before final pricing can be confirmed.</p>
        </div>
      )}

      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <p className="text-xs font-medium text-gray-600 mb-2">Important Disclaimers</p>
        <ul className="space-y-1">
          {result.disclaimers.map((d) => <li key={d} className="text-xs text-gray-500 flex gap-2"><span className="mt-0.5">•</span>{d}</li>)}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-base px-6 py-3 transition-all duration-200">
          Book This Service <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={onReset} className="flex-1 inline-flex items-center justify-center font-semibold rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 text-base px-6 py-3 transition-all duration-200">
          Start Over
        </button>
      </div>
    </div>
  );
}
