"use client";

import { motion } from "framer-motion";

const shapes = [
  { type: "torus", x: "15%", y: "20%", size: 120, rotate: 45, delay: 0, duration: 20 },
  { type: "octahedron", x: "75%", y: "35%", size: 90, rotate: -30, delay: 1, duration: 25 },
  { type: "ring", x: "60%", y: "70%", size: 100, rotate: 20, delay: 0.5, duration: 18 },
  { type: "diamond", x: "25%", y: "75%", size: 60, rotate: 60, delay: 2, duration: 22 },
  { type: "ring", x: "85%", y: "15%", size: 70, rotate: -45, delay: 1.5, duration: 30 },
];

function WireframeShape({ type, size }: { type: string; size: number }) {
  const s = size;
  const half = s / 2;
  const stroke = "rgba(249,115,22,0.15)";
  const strokeW = 1.2;

  if (type === "torus" || type === "ring") {
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <ellipse cx={half} cy={half} rx={half * 0.9} ry={half * 0.55} stroke={stroke} strokeWidth={strokeW} />
        <ellipse cx={half} cy={half} rx={half * 0.9} ry={half * 0.55} stroke={stroke} strokeWidth={strokeW} transform={`rotate(60 ${half} ${half})`} />
        <ellipse cx={half} cy={half} rx={half * 0.9} ry={half * 0.55} stroke={stroke} strokeWidth={strokeW} transform={`rotate(120 ${half} ${half})`} />
      </svg>
    );
  }

  if (type === "octahedron") {
    const cx = half, cy = half;
    const r = half * 0.85;
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (i * 60 - 90) * (Math.PI / 180);
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" ");
    return (
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
        <polygon points={pts} stroke={stroke} strokeWidth={strokeW} />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (i * 60 - 90) * (Math.PI / 180);
          return <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} stroke={stroke} strokeWidth={0.6} />;
        })}
      </svg>
    );
  }

  // diamond
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none">
      <polygon points={`${half},${s * 0.05} ${s * 0.95},${half} ${half},${s * 0.95} ${s * 0.05},${half}`} stroke={stroke} strokeWidth={strokeW} />
      <line x1={half} y1={s * 0.05} x2={half} y2={s * 0.95} stroke={stroke} strokeWidth={0.5} />
      <line x1={s * 0.05} y1={half} x2={s * 0.95} y2={half} stroke={stroke} strokeWidth={0.5} />
    </svg>
  );
}

export default function FloatingScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y, transform: `translate(-50%, -50%) rotate(${shape.rotate}deg)` }}
          animate={{
            rotate: [shape.rotate, shape.rotate + 360],
            y: [-15, 15, -15],
          }}
          transition={{
            rotate: { duration: shape.duration, repeat: Infinity, ease: "linear" },
            y: { duration: 6 + i * 0.5, delay: shape.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <WireframeShape type={shape.type} size={shape.size} />
        </motion.div>
      ))}
    </div>
  );
}
