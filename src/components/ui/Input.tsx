import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; error?: string; }

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, id, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={id} className="text-sm font-medium text-slate-300">{label}</label>}
      <input ref={ref} id={id} className={cn(
        "w-full px-4 py-3 rounded-xl border bg-navy-700 text-white placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent",
        error ? "border-red-500 focus:ring-red-500" : "border-navy-600 hover:border-navy-500 focus:ring-accent-500",
        className
      )} {...props} />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
