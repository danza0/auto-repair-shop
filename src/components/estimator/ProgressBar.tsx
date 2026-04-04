interface ProgressBarProps { currentStep: number; totalSteps: number; labels?: string[]; }

export default function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  const pct = Math.round((currentStep / totalSteps) * 100);
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-400">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium text-accent-400">{pct}%</span>
      </div>
      <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
        <div className="h-full bg-accent-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      {labels && (
        <div className="flex justify-between mt-2">
          {labels.map((label, i) => (
            <span key={label} className={`text-xs ${i < currentStep ? "text-accent-400 font-medium" : "text-slate-600"}`}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}
