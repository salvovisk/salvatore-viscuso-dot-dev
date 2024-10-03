import React from "react";
import IconTech from "./IconTech";
import { LayoutGridDemo } from "./ProjectsGrid";

const techStack = [
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

const Portfolio = () => {
  return (
    <div className='w-full bg-background h-full justify-center items-center md:justify-start pt-40 px-20 flex flex-col'>
      <LayoutGridDemo />
    </div>
  );
};

export default Portfolio;
