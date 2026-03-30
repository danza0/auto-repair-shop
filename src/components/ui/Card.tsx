import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> { hover?: boolean; }

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div className={cn("bg-white rounded-2xl border border-gray-100 shadow-sm", hover && "hover:shadow-lg hover:-translate-y-1 transition-all duration-300", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props}>{children}</div>;
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props}>{children}</div>;
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-6 pb-6", className)} {...props}>{children}</div>;
}
