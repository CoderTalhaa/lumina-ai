import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Section3() {
  const conversations = [
    {
      date: "25/11/24",
      time: "14:30",
      message: "I truly believe in the future of AI and human collaboration",
    },
    {
      date: "24/11/24",
      time: "09:15",
      message: "Can you help me optimize this algorithm?",
    },
    {
      date: "23/11/24",
      time: "16:45",
      message: "Let's discuss the latest developments in machine learning",
    },
    {
      date: "22/11/24",
      time: "11:20",
      message: "What are your thoughts on quantum computing?",
    },
    {
      date: "21/11/24",
      time: "13:00",
      message: "How can we make technology more accessible to everyone?",
    },
  ];

  const container = useRef();

  return (
    <div ref={container} className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          alt="a"
          src={"/img/lines.jpg"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="cirlces absolute top-5 right-16 p-5 z-[-1] flex flex-col items-start ">
        <div className="cirlceRow flex ">
          <ImageWrapper src="/img/blackBall.png" />
          <ImageWrapper src="/img/whiteBall.png" />
        </div>

        <div className="cirlceRow flex">
          <div className="circle"></div>
          <ImageWrapper src="/img/blackBall.png" />
          <ImageWrapper src="/img/whiteBall.png" />
        </div>

        <div className="cirlceRow flex">
          <div className="circle"></div>

          <ImageWrapper src="/img/whiteBall.png" />
          <ImageWrapper src="/img/blackBall.png" />
          <ImageWrapper src="/img/whiteBall.png" />
        </div>

        <div className="cirlceRow flex">
          <div className="circle"></div>

          <ImageWrapper src="/img/blackBall.png" />
          <ImageWrapper src="/img/whiteBall.png" />
        </div>

        <div className="cirlceRow flex">
          <ImageWrapper src="/img/blackBall.png" />
          <ImageWrapper src="/img/whiteBall.png" />
        </div>
      </div>

      <div className="noise"></div>

      <div className="container ">
        <div className="flex flex-col items-center ">
          <h1 className="text-white lg:text-5xl text-2xl font-secondary mt-20 mb-10">
            RECENT CONVERSATIONS
          </h1>

          <div className=" w-full max-w-[800px] flex-grow z-30 ">
            <div className="space-y-2 p-2">
              {conversations.map((convo, i) => (
                <motion.div
                  whileHover={{
                    scale: 1.07,
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  key={i}
                  className=" flex flex-col lg:flex-row flex-wrap lg:p-3 p-1 items-start rounded-lg bg-white lg:gap-20 gap-3 cursor-pointer"
                >
                  <div className="flex flex-col text-sm text-zinc-800 ">
                    <p>CHAT {convo.date}</p>
                    <p>{convo.time}</p>
                  </div>
                  <div className="lg:text-lg text-base font-circular-web text-zinc-800 ">
                    {convo.message}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ImageWrapper = ({ src }) => {
  return (
    <div
      style={{
        backgroundPosition: "0 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        aspectRatio: "1",
        borderRadius: "50%",
        width: "7vw",
        transform:
          "translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(18.8775deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <Image
        alt=""
        src={src}
        fill
        sizes="100"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
