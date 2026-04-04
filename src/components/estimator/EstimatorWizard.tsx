"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import ProgressBar from "./ProgressBar";
import StepVehicleType from "./StepVehicleType";
import StepVehicleDetails from "./StepVehicleDetails";
import StepService from "./StepService";
import StepAddons from "./StepAddons";
import StepResult from "./StepResult";
import { VehicleType, ServiceSlug } from "@/config/pricing";
import { VehicleDetails, EstimateResult, calculateEstimate } from "@/lib/estimator";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STEPS = ["Vehicle Type", "Vehicle Details", "Service", "Add-ons", "Estimate"];

export default function EstimatorWizard() {
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [vehicleDetails, setVehicleDetails] = useState<Partial<VehicleDetails>>({});
  const [serviceSlugs, setServiceSlugs] = useState<ServiceSlug[]>([]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [result, setResult] = useState<EstimateResult | null>(null);

  const canProceed = () => {
    if (step === 1) return vehicleType !== null;
    if (step === 2) return !!vehicleDetails.make && !!vehicleDetails.model && !!vehicleDetails.year;
    if (step === 3) return serviceSlugs.length > 0;
    return true;
  };

  const handleNext = () => {
    if (step === 4) {
      const details: VehicleDetails = {
        type: vehicleType!,
        make: vehicleDetails.make ?? "",
        model: vehicleDetails.model ?? "",
        year: vehicleDetails.year ?? "",
        mileage: vehicleDetails.mileage,
      };
      const estimate = calculateEstimate(details, serviceSlugs, selectedAddons);
      setResult(estimate);
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };

  const handleReset = () => {
    setStep(1); setVehicleType(null); setVehicleDetails({});
    setServiceSlugs([]); setSelectedAddons([]); setResult(null);
  };

  const toggleService = (slug: ServiceSlug) => {
    setServiceSlugs((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {step < 5 && <ProgressBar currentStep={step} totalSteps={4} labels={STEPS.slice(0, 4)} />}
      <Card>
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {step === 1 && <StepVehicleType selected={vehicleType} onSelect={setVehicleType} />}
              {step === 2 && <StepVehicleDetails details={vehicleDetails} onChange={setVehicleDetails} />}
              {step === 3 && <StepService selected={serviceSlugs} onToggle={toggleService} />}
              {step === 4 && serviceSlugs.length > 0 && <StepAddons serviceSlugs={serviceSlugs} selected={selectedAddons} onToggle={toggleAddon} />}
              {step === 5 && result && <StepResult result={result} vehicleDetails={{ type: vehicleType!, make: vehicleDetails.make ?? "", model: vehicleDetails.model ?? "", year: vehicleDetails.year ?? "", mileage: vehicleDetails.mileage }} onReset={handleReset} />}
            </motion.div>
          </AnimatePresence>

          {step < 5 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-navy-700">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                className="inline-flex items-center gap-2 font-semibold rounded-xl border-2 border-navy-600 text-slate-300 hover:bg-navy-700 hover:text-white text-base px-6 py-3 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="inline-flex items-center gap-2 font-bold rounded-xl bg-accent-500 text-white hover:bg-accent-400 text-base px-6 py-3 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-accent-500/30"
              >
                {step === 4 ? "Calculate Estimate" : "Continue"} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
