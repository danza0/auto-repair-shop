"use client";

import { motion } from "framer-motion";

const orangeParticles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.5 + Math.random() * 3,
  duration: 15 + Math.random() * 25,
  delay: Math.random() * 10,
  opacity: 0.1 + Math.random() * 0.3,
}));

const goldParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i + 100,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  duration: 20 + Math.random() * 20,
  delay: Math.random() * 8,
  opacity: 0.08 + Math.random() * 0.2,
}));

function TorusKnotSVG() {
  // Generate a wireframe torus-knot-like shape with SVG paths
  const paths: string[] = [];
  const segments = 120;
  const r1 = 140, r2 = 50;

  for (let ring = 0; ring < 4; ring++) {
    let d = "";
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      const p = t * 3; // trefoil knot
      const cx = (r1 + r2 * Math.cos(p)) * Math.cos(t);
      const cy = (r1 + r2 * Math.cos(p)) * Math.sin(t);
      const offset = (ring / 4) * Math.PI * 2;
      const x = cx * Math.cos(offset * 0.1) - cy * Math.sin(offset * 0.1);
      const y = cx * Math.sin(offset * 0.1) + cy * Math.cos(offset * 0.1);
      d += `${i === 0 ? "M" : "L"} ${250 + x * 0.55} ${250 + y * 0.55} `;
    }
    paths.push(d);
  }

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ opacity: 0.06 }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none" className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#f97316"
            strokeWidth={0.8}
            fill="none"
            opacity={0.4 + i * 0.15}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Torus knot wireframe */}
      <TorusKnotSVG />

      {/* Orange particles */}
      {orangeParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: "#f97316",
            opacity: 0,
          }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gold particles */}
      {goldParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: "#D4A843",
            opacity: 0,
          }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [15, -15, 15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
