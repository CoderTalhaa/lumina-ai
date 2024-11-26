import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Section1() {
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
  return (
    <div className=" relative h-full  wrap flex flex-col items-center">
      <h1 className="mt-3 mb-2 lg:text-2xl font-secondary text-center">
        RECENT CONVERSATIONS
      </h1>

      <div className="relative w-full max-w-[800px] flex-grow ">
        <div className="space-y-2 p-2">
          {conversations.map((convo, i) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              key={i}
              className=" flex flex-col lg:flex-row flex-wrap p-3 items-start rounded bg-zinc-800/50 lg:gap-20 gap-3 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 cursor-pointer"
            >
              <div className="flex flex-col text-sm text-zinc-400 ">
                <p>CHAT {convo.date}</p>
                <p>{convo.time}</p>
              </div>
              <div className="text-lg font-circular-web text-zinc-200 ">
                {convo.message}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
