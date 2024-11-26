import React from "react";
import { TypeAnimation } from "react-type-animation";
import AnimatedLink from "../utils/nav/AnimatedLink";

export default function Section1() {
  return (
    <div className="relative h-[120vh] container p-3">
      <div className="mt-28 lg:text-7xl md:text-5xl text-2xl font-circular-web w-full ">
        <h1>We use AI</h1>
        <h1>to build</h1>
        <div className="inline-block text-[#46ecf1]">
          <ExampleComponent />
        </div>
        <h1>systems</h1>
      </div>
      <div className="flex flex-col justify-center items-center p-1 gap-3 mt-96">
        <button className="bg-white text-black font-circular-web font-semibold px-4 py-2">
          <AnimatedLink title={"CHAT NOW"} />
        </button>
        <p className="uppercase font-secondary lg:text-4xl">
          THE AI ThAT THINKS ALONG sidE US ALL
        </p>
      </div>
    </div>
  );
}

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={["efficiency", 2000, "workflow", 2000, "tasks", 2000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};
