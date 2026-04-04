import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-accent-500 text-white hover:bg-accent-400 focus:ring-accent-500 shadow-sm hover:shadow-accent-500/30 hover:shadow-lg hover:scale-[1.02]": variant === "primary",
            "bg-navy-700 text-white hover:bg-navy-600 focus:ring-navy-500 border border-navy-600": variant === "secondary",
            "border-2 border-accent-500 text-accent-500 hover:bg-accent-500/10 focus:ring-accent-500": variant === "outline",
            "text-slate-300 hover:bg-navy-700 hover:text-white focus:ring-navy-600": variant === "ghost",
          },
          {
            "text-sm px-4 py-2": size === "sm",
            "text-base px-6 py-3": size === "md",
            "text-lg px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
