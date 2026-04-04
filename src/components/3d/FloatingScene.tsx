"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function RotatingTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={ref} position={[-2.5, 1.2, -1]}>
        <torusGeometry args={[1.2, 0.35, 16, 32]} />
        <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

function RotatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.z += delta * 0.08;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={[2.8, -0.8, -2]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#f97316" wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

function RotatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.1;
    ref.current.rotation.z += delta * 0.06;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={ref} position={[0.5, 2, -3]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#fb923c" wireframe transparent opacity={0.2} />
      </mesh>
    </Float>
  );
}

function SmallTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.x -= delta * 0.2;
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref} position={[-1.5, -1.8, -1.5]}>
        <torusGeometry args={[0.6, 0.2, 12, 24]} />
        <meshBasicMaterial color="#ea580c" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function FloatingScene() {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasError(true);
        return;
      }
    } catch {
      setHasError(true);
      return;
    }
    setMounted(true);
  }, []);

  if (!mounted || hasError) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: true }}
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: "transparent" }}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#f97316" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#fb923c" />
        <RotatingTorus />
        <RotatingOctahedron />
        <RotatingIcosahedron />
        <SmallTorus />
      </Canvas>
    </div>
  );
}
