"use client";
import AnimatedLink from "./AnimatedLink";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  ">
      <div className="relative w-full flex justify-between items-center rounded-xl p-3">
        <h1
          data-hover
          className="lg:text-4xl text-lg font-zentry tracking-wide"
        >
          AI10
        </h1>
        <div className="flex gap-3">
          <button className="text-lg font-circular-web">
            <AnimatedLink title={"PAPER"} />
          </button>
          <button className="bg-white text-lg text-black font-circular-web font-semibold lg:px-5 lg:py-2 px-1 py-1">
            <AnimatedLink title={"TOKEN"} />
          </button>
        </div>
      </div>
    </header>
  );
}
