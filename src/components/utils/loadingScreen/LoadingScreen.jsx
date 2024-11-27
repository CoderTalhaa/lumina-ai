"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingScreen({ setIsLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const slideUp = {
    initial: { y: "0" },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 w-full h-screen flex justify-center items-center flex-col bg-[#828282] z-50"
    >
      <div className="noise"></div>
      <div className="scratche"></div>

      <h1 className="lg:text-7xl text-2xl font-zentry ">Loading...</h1>
    </motion.div>
  );
}
