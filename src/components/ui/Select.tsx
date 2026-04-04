import { cn } from "@/lib/utils";
import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string; error?: string; options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, label, error, id, options, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-slate-300">{label}</label>}
      <select ref={ref} id={id} className={cn(
        "w-full px-4 py-3 rounded-xl border bg-navy-700 text-white transition-all duration-200 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:border-transparent",
        error ? "border-red-500 focus:ring-red-500" : "border-navy-600 hover:border-navy-500 focus:ring-accent-500",
        className
      )} {...props}>
        {options.map((opt) => <option key={opt.value} value={opt.value} className="bg-navy-800">{opt.label}</option>)}
      </select>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});
Select.displayName = "Select";
export default Select;
