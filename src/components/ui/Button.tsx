"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", magnetic = false, children, ...props }, ref) => {
    const magneticRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(e: React.MouseEvent) {
      if (!magnetic || !magneticRef.current) return;
      const rect = magneticRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.15);
      y.set((e.clientY - centerY) * 0.15);
    }

    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black-pure disabled:opacity-50 disabled:cursor-not-allowed",
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
    );

    if (magnetic) {
      return (
        <motion.div
          ref={magneticRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          className="inline-block"
        >
          <button ref={ref} className={baseClasses} {...props}>
            {children}
          </button>
        </motion.div>
      );
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
