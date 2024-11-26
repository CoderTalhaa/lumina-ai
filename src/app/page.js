"use client";
import { Gradient } from "@/components/three/experience/Gradient";
import Scene from "@/components/three/Scene";
import Section1 from "@/components/ui/Section1";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import AnimatedLink from "@/components/utils/nav/AnimatedLink";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen setIsLoading={setIsLoading} /> : null}
      <main className="relative h-svh ">
        <canvas id="gradient-canvas" data-transition-in />
        <div className="h-[50svh] relative z-30 ">
          <Scene />
          <div className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center p-1">
            <button className="bg-white text-black font-circular-web font-semibold px-4 py-2">
              <AnimatedLink title={"CHAT NOW"} />
            </button>
            <p className="uppercase font-secondary lg:text-lg">
              THE AI ThAT THINKS ALONG sidE US ALL
            </p>
          </div>
        </div>
        <div className=" h-[50svh]  relative">
          <div className="absolute h-full w-full opacity-30">
            <Image
              src="/img/qq.svg"
              alt="a"
              width={100}
              height={100}
              priority
            />
          </div>
          <Section1 />
        </div>
      </main>
    </>
  );
}
