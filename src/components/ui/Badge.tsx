import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "blue" | "gray" | "green" | "yellow";
}

export function Badge({ className, variant = "blue", children, ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", {
      "bg-blue-50 text-blue-700": variant === "blue",
      "bg-gray-100 text-gray-700": variant === "gray",
      "bg-green-50 text-green-700": variant === "green",
      "bg-yellow-50 text-yellow-700": variant === "yellow",
    }, className)} {...props}>
      {children}
    </span>
  );
}
