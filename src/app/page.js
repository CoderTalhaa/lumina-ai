"use client";
import Section1 from "@/components/ui/Section1";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Section3 from "@/components/ui/Section3";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
    }, 3000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            setIsLoading={setIsLoading}
            imageUrls={["/img/lines.jpg", "/img/whiteBall.png"]}
            lottieAnimations={["/img/faceLottie.lottie"]}
          />
        )}
      </AnimatePresence>
      <main className="relative ">
        <div className="relative h-screen ">
          <Section1 />
        </div>

        <Section3 />
      </main>
    </>
  );
}
