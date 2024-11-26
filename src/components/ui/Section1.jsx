import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AnimatedLink from "../utils/nav/AnimatedLink";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Section1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);

  return (
    <div className="relative h-screen container  p-3">
      <div className="relative mt-10">
        {/* Skeleton Loader */}

        {/* Lottie Animation */}
        <DotLottieReact
          src="/img/faceLottie.lottie"
          loop
          autoplay
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="flex flex-col justify-center items-center p-1 gap-2 mt-10">
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

// const ExampleComponent = () => {
//   return (
//     <TypeAnimation
//       sequence={["efficiency", 2000, "workflow", 2000, "tasks", 2000]}
//       wrapper="span"
//       speed={50}
//       repeat={Infinity}
//     />
//   );
// };
