import { VEHICLE_TYPES, VehicleType } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

interface Props { selected: VehicleType | null; onSelect: (t: VehicleType) => void; }

export default function StepVehicleType({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 font-display">What type of vehicle?</h2>
      <p className="text-slate-400 mb-6">Vehicle type affects parts pricing and labor complexity.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {VEHICLE_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={cn(
              "p-4 rounded-xl border-2 font-medium text-sm transition-all duration-200 flex flex-col items-center gap-2",
              selected === type
                ? "border-accent-500 bg-accent-500/10 text-accent-400"
                : "border-navy-600 bg-navy-700/50 hover:border-navy-500 text-slate-300 hover:bg-navy-700"
            )}
          >
            <Car className={cn("w-6 h-6", selected === type ? "text-accent-500" : "text-slate-500")} />
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
