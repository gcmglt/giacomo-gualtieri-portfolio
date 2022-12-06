import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";

import ProPic from "../public/assets/giacomo-gualtieri-propic.jpg";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["<Front End Developer />", "Minimal design enthusiast", "In love with animals"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="flex items-center justify-center flex-col text-center pt-5 pb-6">
      <h1 className="text-4xl text-orange-600/80 dark:text-orange-500/70 md:text-7xl my-2 font-medium">
        Giacomo Gualtieri
      </h1>
      <p className="text-base mt-1 md:text-xl font-medium text-orange-400/90 dark:text-orange-200">
        <span>{text}</span>
        <Cursor cursorColor="#FF8000" />
      </p>
      <Image
        src={ProPic}
        alt="Giacomo Gualtieri Profile Picture"
        className="my-8 rounded-full border-2 border-orange-200 dark:border-orange-300 object-cover w-44 h-44"
      />
      <div className="max-w-xl mb-5">
        <span className="text-xl font-semibold">
          Hi! My name's Giacomo Gualtieri and I'm a front end developer from Italy, who focuses on
          ReactJS.
        </span>
        <p className="text-md mt-3">
          I love to design and develop fresh, <span className="animate-spin">minimal</span>{" "}
          interfaces with attention to details and coherence. Some of my favourite hobbies are to
          play video games and chess (and eating{" "}
          <span className="text-emerald-400 dark:text-emerald-300">avocado</span>, yes).
        </p>
      </div>
    </div>
  );
};

export default Intro;
