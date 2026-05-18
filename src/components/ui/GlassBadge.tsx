"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface GlassBadgeProps {
  icon?: LucideIcon;
  label: string;
  className?: string;
}

export default function GlassBadge({ icon: Icon, label, className }: GlassBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "glass border border-white/5 border-t-white/10 rounded-2xl px-4 py-2.5 inline-flex items-center gap-2",
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-accent-500" />}
      <span className="text-white text-xs font-medium whitespace-nowrap">{label}</span>
    </motion.div>
  );
}
