"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  ">
      <div className="w-full text-white relative pl-5 pr-5">
        <div className=" w-full flex justify-between items-center rounded-xl p-3">
          <h1 data-hover className="text-4xl font-zentry tracking-wide">
            AI10
          </h1>
          <div className="flex gap-3">
            <button className="text-xl font-circular-web">
              <AnimatedLink title={"PAPER"} />
            </button>
            <button className="bg-white text-black font-circular-web font-semibold px-5 py-2">
              <AnimatedLink title={"TOKEN"} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
