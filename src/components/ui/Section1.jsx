import AnimatedLink from "../utils/nav/AnimatedLink";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Section1() {
  return (
    <div className="relative h-screen container p-3">
      <div className="relative mt-20 bg-black">
        <DotLottieReact src="/img/faceLottie.lottie" loop autoplay />
      </div>

      <div className="flex flex-col justify-center items-center p-1 gap-2 mt-10">
        <button className="bg-black text-white font-circular-web font-semibold px-4 py-2">
          <AnimatedLink title={"CHAT NOW"} />
        </button>
        <p className="uppercase font-secondary lg:text-4xl">
          THE AI ThAT THINKS ALONG sidE US ALL
        </p>
      </div>
    </div>
  );
}
