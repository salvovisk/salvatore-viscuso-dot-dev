import { BouncingArrow } from "./BouncingArrow";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

/* eslint-disable react/jsx-no-comment-textnodes */
export const Hero = () => {
  const [hasScrollThresoldPassed, setHasScrollThresoldPassed] = useState(false);
  const [hasDelayThresoldPassed, setHasDelayThresoldPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 4; // Hide after scrolling half the screen
      setHasScrollThresoldPassed(window.scrollY > threshold);
      if (!window.sessionStorage.getItem("scrollInfoShown")) {
        console.log("scrolled");
        window.sessionStorage.setItem("scrollInfoShown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setHasDelayThresoldPassed(true), 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className='h-dvh justify-center flex items-center md:justify-start px-20'>
        <div>
          <h1 className='text-5xl lg:text-8xl font-bold text-white '>
            Salvatore
          </h1>
          <h1 className='text-5xl lg:text-8xl font-bold text-white '>
            Viscuso <span className='text-white/50 &nbsp'>//</span>
          </h1>
          <p className='font-mono mt-4 mb-8 text-white/70 w-[300px] md:w-[600px]'>
            <TypeAnimation
              sequence={[
                "I am a Software Engineer trying to make awesome things on the web!",
                2000,
                "I am a Mobile Dev enjoying creating new and modern apps",
                2000,
              ]}
              wrapper='span'
              speed={50}
              style={{ fontSize: "1.2 rem" }}
              repeat={Infinity}
              deletionSpeed={{ type: "keyStrokeDelayInMs", value: 20 }}
            />
          </p>
        </div>
      </div>

      <BouncingArrow
        scrollThresholdPassed={hasScrollThresoldPassed}
        delayThresholdPassed={hasDelayThresoldPassed}
      />
    </>
  );
};
