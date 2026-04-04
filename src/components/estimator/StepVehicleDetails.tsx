import { VehicleDetails } from "@/lib/estimator";
import Input from "@/components/ui/Input";

interface Props { details: Partial<VehicleDetails>; onChange: (d: Partial<VehicleDetails>) => void; }

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => String(currentYear - i));

export default function StepVehicleDetails({ details, onChange }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 font-display">Tell us about your vehicle</h2>
      <p className="text-slate-400 mb-6">We use this to give you the most accurate estimate possible.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Year</label>
          <select
            value={details.year ?? ""}
            onChange={(e) => onChange({ ...details, year: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-navy-600 bg-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent appearance-none hover:border-navy-500 transition-colors"
          >
            <option value="" className="bg-navy-800">Select year</option>
            {years.map((y) => <option key={y} value={y} className="bg-navy-800">{y}</option>)}
          </select>
        </div>
        <Input label="Make" placeholder="e.g. Toyota, Honda, Ford" value={details.make ?? ""} onChange={(e) => onChange({ ...details, make: e.target.value })} />
        <Input label="Model" placeholder="e.g. Camry, Civic, F-150" value={details.model ?? ""} onChange={(e) => onChange({ ...details, model: e.target.value })} />
        <Input label="Mileage (optional)" placeholder="e.g. 45000" value={details.mileage ?? ""} onChange={(e) => onChange({ ...details, mileage: e.target.value })} />
      </div>
    </div>
  );
}
