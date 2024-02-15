/* eslint-disable react/jsx-no-comment-textnodes */
import { cn } from "@/utils/classMerge";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaReact, FaVuejs, FaSass } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

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
            "flex flex-col py-5 px-5 lg:mt-10 rounded-3xl lg:self-center items-center lg:justify-evenly lg:w-[800px]  bg-slate-900/50 border-2 border-slate-600 text-white/70 font-bold text-2xl",
            hasDelayThresoldPassed ? "is-visible" : "is-hidden"
          )}>
          <p className=' lg:text-6xl'>Tech stack</p>
          <div className=' mt-4 grid grid-cols-4 gap-4'>
            <a target='_blank' href='https://react.dev/'>
              <FaReact className='about__icon hover:fill-[#0B7EA4]/80' />
            </a>
            <a target='_blank' href='https://react.dev/'>
              <SiNextdotjs className='about__icon hover:fill-black/80' />
            </a>
            <a href=''>
              <FaVuejs className='about__icon hover:fill-[#42B883]/80' />
            </a>
            <a target='_blank' href='https://nuxt.com/'>
              <SiNuxtdotjs className='about__icon hover:fill-[#04DC82]/80' />
            </a>
            <a target='_blank' href='https://tailwindcss.com/'>
              <SiTailwindcss className='about__icon hover:fill-[#39BDF8]/80' />
            </a>
            <a target='_blank' href='https://sass-lang.com/'>
              <FaSass className='about__icon hover:fill-[#CF649A]/80' />
            </a>
            <a target='_blank' href='https://flutter.dev/'>
              <SiFlutter className='about__icon hover:fill-[#4DD2FD]/80' />
            </a>
            <a target='_blank' href='https://www.typescriptlang.org/'>
              <SiTypescript className='about__icon hover:fill-[#3278C6]/80' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
