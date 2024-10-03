import React from "react";
import IconTech from "./IconTech";

export const techStack = [
  {
    name: "Flutter",
    value: "flutter",
    color: "#4DD2FD",
  },
  {
    name: "Typescript",
    value: "typescript",
    color: "#3278C6",
  },
  {
    name: "Next.js",
    value: "next",
    color: "black",
  },
  {
    name: "React",
    value: "react",
    color: "#0B7EA4",
  },
  {
    name: "Vue.js",
    value: "vue",
    color: "#42B883",
  },
  {
    name: "Nuxt",
    value: "nuxt",
    color: "#04DC82",
  },
  {
    name: "TailwindCss",
    value: "tailwind",
    color: "#39BDF8",
  },
];

const About = () => {
  return (
    <div className='shadow-inner w-full bg-background h-full justify-center items-center md:justify-start pt-32 px-20 sm:pb-40 pb-20 flex flex-col'>
      <div className='w-screen md:w-full max-w-[1200px] flex flex-col gap-6 lg:px-36 px-10'>
        <p className='text-4xl text-white font-extralight'>About</p>
        <div className='flex items-start gap-2'>
          <div className='bg-accent mt-3 w-48 h-[2px]'></div>
          <span className='text-white'>
            From tinkering with early PCs to building mobile apps, my journey in
            software development has been fueled by a love for technology and a
            desire to create.
            <p className='text-accent'>
              As a skilled software engineer and mobile developer
            </p>
            I enjoy crafting clean, efficient code that brings ideas to life.
          </span>
        </div>
      </div>
      <div className='w-screen max-w-[700px]'>
        <p className='text-4xl pt-10 mt-20 mb-4 text-white font-extralight text-center'>
          Tech stack
        </p>
        <div className='flex flex-wrap gap-4 justify-center'>
          {techStack.map((i) => (
            <IconTech
              title={i.name}
              color={i.color}
              icon={i.value}
              key={i.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
