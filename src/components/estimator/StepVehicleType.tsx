import { VEHICLE_TYPES, VehicleType } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { Car } from "lucide-react";

interface Props { selected: VehicleType | null; onSelect: (t: VehicleType) => void; }

export default function StepVehicleType({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">What type of vehicle do you have?</h2>
      <p className="text-gray-500 mb-6">Vehicle type affects parts pricing and labor complexity.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {VEHICLE_TYPES.map((type) => (
          <button key={type} onClick={() => onSelect(type)} className={cn("p-4 rounded-xl border-2 font-medium text-sm transition-all duration-200 flex flex-col items-center gap-2", selected === type ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-blue-300 text-gray-700 hover:bg-gray-50")}>
            <Car className={cn("w-6 h-6", selected === type ? "text-blue-600" : "text-gray-400")} />
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
