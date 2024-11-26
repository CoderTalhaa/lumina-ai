"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Model } from "./experience/Model";

export default function Scene() {
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      setEventSource(document.body);
    }
  }, []);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const x = -0.5 + clientX / innerWidth;
    const y = -0.5 + clientY / innerHeight;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 15], fov: 30 }}
      eventSource={eventSource}
    >
      {/* <color attach="background" args={["#353535"]} /> */}
      <fog attach="fog" args={["#353535", 5, 25]} />

      <Suspense fallback={null}>
        <motion.group rotation-x={mouse.y} rotation-y={mouse.x}>
          <Model position={[0, -3, 0]} />
        </motion.group>
        <Environment preset="studio" />
      </Suspense>

      {/* <OrbitControls /> */}
      <ambientLight intensity={1} />
    </Canvas>
  );
}
