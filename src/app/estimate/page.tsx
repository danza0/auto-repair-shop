import EstimatorWizard from "@/components/estimator/EstimatorWizard";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Get an Estimate — SmartCare Auto Repair | Spanaway, WA",
  description: "Get a free, instant estimate for your auto repair needs from SmartCare Auto Repair.",
};

export default function EstimatePage() {
  return (
    <div className="pt-20 min-h-screen bg-navy-900">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="accent" className="mb-4">Free Estimate</Badge>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-display">
            Get an Instant Estimate
          </h1>
          <p className="text-xl text-slate-400">
            Answer a few questions about your vehicle and service needed. We&apos;ll give you a transparent price range in seconds.
          </p>
        </div>
        <EstimatorWizard />
      </section>
    </div>
  );
}
