import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "navy" | "green" | "yellow";
}

export function Badge({ className, variant = "accent", children, ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide", {
      "bg-accent-500/10 text-accent-400 border border-accent-500/20": variant === "accent",
      "bg-navy-700 text-slate-300 border border-navy-600": variant === "navy",
      "bg-green-900/30 text-green-400 border border-green-700/30": variant === "green",
      "bg-yellow-900/30 text-yellow-400 border border-yellow-700/30": variant === "yellow",
    }, className)} {...props}>
      {children}
    </span>
  );
}
