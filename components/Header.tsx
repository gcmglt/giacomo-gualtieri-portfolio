import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import socials from "../data/socials";

const Header = () => {
  // impostazione tema colore base
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // gestione tema colore
  const themeSwitchHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //* gestione player musica background
  // const [playing, setPlaying] = useState(false);
  // const music = new Audio("../../public/assets/sound/life-and-death.mp3");
  // const musicRef = useRef(music);

  // const play = () => {
  //   setPlaying(true);
  //   musicRef.current.play();
  // };
  // const pause = () => {
  //   setPlaying(false);
  //   musicRef.current.pause();
  // };

  // svg icone dello switch di tema colore
  const sunSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const moonSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  //* svg icone player musica background
  // const playSvg = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 26 26"
  //     className="w-6 h-6">
  //     <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
  //     <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
  //   </svg>
  // );
  // const pauseSvg = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="w-6 h-6"
  //     viewBox="0 0 512 512">
  //     <path
  //       d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320
  // c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320
  // c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"
  //     />
  //   </svg>
  // );

  return (
    <header className="sticky top-0 p-1 flex items-start justify-between w-full mx-auto z-50 xl:items-center bg-stone-100/95 dark:bg-stone-800/95">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {socials.map((social, i) => (
          <SocialIcon
            key={i}
            url={social.socialLink}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
            rel="noopener"
            className="hover:blur-[0.8px]"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 cursor-pointer">
        <SocialIcon
          url="#contact"
          className="cursor-pointer hover:blur-[0.8px]"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* switch di tema */}
        <button
          type="button"
          onClick={themeSwitchHandler}
          className="p-1 ml-1 z-10 bg-violet-400 dark:bg-orange-400  rounded-md animate-pulse">
          {theme === "dark" ? sunSvg : moonSvg}
        </button>
        {/* play/pause musica */}
        {/* <button
          type="button"
          onClick={playing ? pause : play}
          className="p-1 ml-1 z-10 bg-emerald-400 rounded-md">
          {playing ? pauseSvg : playSvg}
        </button> */}
      </motion.div>
    </header>
  );
};

export default Header;
