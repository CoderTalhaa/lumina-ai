import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Section2() {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const container = useRef();

  useGSAP(
    () => {
      const line1 = new SplitType(textRef1.current, {
        types: "lines",
      });
      const line2 = new SplitType(textRef2.current, {
        types: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "30% 30%",
          scrub: true,
          pin: true,
          toggleActions: "play none reverse none",
        },
        defaults: {
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.1,
        },
      });

      tl.fromTo(
        line1.lines,
        {
          clipPath: "inset(0 0 0 0)",
          yPercent: 0,
        },
        {
          clipPath: "inset(100% 0 0 0)",
          yPercent: -50,
        }
      )
        .to(
          container.current,
          { backgroundColor: "#2D5263", color: "#fff" },
          "-=0.5"
        )
        .set(textRef2.current, { opacity: 1 }, "-=0.5")
        .fromTo(
          line2.lines,
          {
            clipPath: "inset(0 0 100% 0)",
            yPercent: 0,
          },
          {
            clipPath: "inset(0 0 0% 0)",
            yPercent: -50,
          },
          "<"
        );
    },
    { dependencies: [] }
  );
  return (
    <div
      ref={container}
      className="relative h-screen p-4 bg-[#F6FAF9] text-black"
    >
      <h1 className=" mt-20 lg:text-5xl text-2xl font-circular-web font-semibold ">
        AI - powered business
      </h1>
      <h1 className="lg:text-5xl text-2xl font-circular-web font-semibold">
        Solutions
      </h1>
      <div className="relative mx-auto max-w-[1000px] font-secondary flex items-center justify-center px-2 mt-20 text-center ">
        <h2 className="text-5xl leading-normal" ref={textRef1}>
          Improve customer service, optimize inventory management, personalize
          marketing efforts, and streamline order processing.Enhance patient
          automate biling.
        </h2>
        <h2
          ref={textRef2}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] opacity-0 text-5xl leading-normal z-10"
        >
          My dedication to quality and innovation has consistently earned
          positive feedback from clients, contributing to their business growth
          and success.
        </h2>
      </div>
    </div>
  );
}
