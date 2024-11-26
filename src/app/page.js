"use client";
import { Gradient } from "@/components/three/experience/Gradient";
import Scene from "@/components/three/Scene";
import Section1 from "@/components/ui/Section1";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Section2 from "@/components/ui/Section2";
import Section3 from "@/components/ui/Section3";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  useEffect(() => {
    const lenis = new Lenis({});

    lenis.stop();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    if (!isLoading) {
      handleLoading(lenis);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  const handleLoading = (lenis) => {
    setTimeout(() => {
      setIsLoading(false);
      lenis.start();
      window.scrollTo(0, 0);
    }, 2000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      </AnimatePresence>
      <main className="relative ">
        <canvas id="gradient-canvas" data-transition-in />

        <div className="relative h-screen ">
          <Scene />
          <Section1 />
        </div>

        <Section2 />

        <Section3 />
      </main>
    </>
  );
}
