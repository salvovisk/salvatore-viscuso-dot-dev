/* eslint-disable react/jsx-no-comment-textnodes */
import { cn } from "@/utils/classMerge";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

export const About = () => {
  const [hasDelayThresoldPassed, setHasDelayThresoldPassed] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setHasDelayThresoldPassed(true), 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className='h-dvh snap-start justify-center md:justify-start flex flex-col px-10 lg:px-20 md:py-96'>
        <div className='flex flex-col'>
          <h1 className='text-5xl lg:text-8xl font-bold text-white '>About</h1>
          <h1 className='text-5xl lg:text-8xl font-bold text-white '>
            {" "}
            me <span className='text-white/50 ml-2'>//</span>
          </h1>

          <p className='font-mono text-sm mt-4 mb-8 text-white/70 lg:text-xl'>
            From tinkering with early PCs to building mobile apps, my journey in
            software development has been fueled by a love for technology and a
            desire to create. As a skilled software engineer and mobile
            developer, I enjoy crafting clean, efficient code that brings ideas
            to life.
          </p>
        </div>

        <div
          className={cn(
            "flex flex-col lg:flex-row gap-5 py-5 px-5 lg:mt-10 rounded-2xl lg:self-center items-center lg:justify-evenly lg:w-[800px]  bg-slate-900/50 border-2 border-slate-600 text-white/70 font-bold text-2xl",
            hasDelayThresoldPassed ? "is-visible" : "is-hidden"
          )}>
          <div className='flex gap-2 lg:gap-0 lg:flex-col lg:items-center'>
            <CountUp delay={4.2} end={30} /> <p>years old</p>
          </div>
          <div className='flex gap-2 lg:gap-0 lg:flex-col lg:items-center'>
            <CountUp delay={4.6} prefix='+' end={3} /> <p>of experience</p>
          </div>
          <div className='flex gap-2 lg:gap-0 lg:flex-col lg:items-center'>
            <CountUp delay={4.8} end={3} /> <p>projects</p>
          </div>
        </div>
      </div>
    </>
  );
};
