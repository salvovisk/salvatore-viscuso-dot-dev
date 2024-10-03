import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { renderIcon } from "./IconTech";

export interface WorkItem {
  name: string;
  description: string;
  techs?: any;
  link?: string;
  wip?: boolean;
  image: string;
}

const workItems: WorkItem[] = [
  {
    name: "9000 ABCD",
    image: "/9000_screen.png",
    description:
      "Platform to study for public concorsi in italy. It features study plans, quiz simulator and many other features.",
    techs: [
      {
        name: "Typescript",
        value: "typescript",
        color: "#3278C6",
      },
      {
        name: "Next.js",
        value: "next",
        color: "white",
      },
      {
        name: "React",
        value: "react",
        color: "#0B7EA4",
      },

      {
        name: "TailwindCss",
        value: "tailwind",
        color: "#39BDF8",
      },
    ],
    link: "https://9000abcd.iffalse.com/",
  },
  {
    name: "4finance",
    image: "/4finance_screen.png",
    description:
      "Flutter app. The app is to help the user keeps tracks of their finances and budget",
    techs: [
      {
        name: "Flutter",
        value: "flutter",
        color: "#4DD2FD",
      },
    ],
    wip: true,
  },
  {
    name: "HiveMind",
    image: "/hivemind_screen.png",
    description:
      "Fullstack web app. Collaborative tool, board, tasks, reminders.",
    techs: [
      {
        name: "Prisma",
        value: "prisma",
        color: "white",
      },
      {
        name: "Next.js",
        value: "next",
        color: "white",
      },
      {
        name: "Typescript",
        value: "typescript",
        color: "#3278C6",
      },
      {
        name: "React",
        value: "react",
        color: "#0B7EA4",
      },
      {
        name: "TailwindCss",
        value: "tailwind",
        color: "#39BDF8",
      },
    ],
    wip: true,
  },
];

const Portfolio = () => {
  return (
    <div className='shadow-inner w-full bg-background h-full justify-center items-center md:justify-start pt-32 px-10 sm:pb-40 pb-20 flex flex-col'>
      <div className='relative'>
        <p className='text-4xl text-white font-extralight'>Portfolio</p>
        <div className='bg-accent w-20 h-[1px] absolute top-12 left-0' />
      </div>
      <div className='mt-11 p-6 justify-center w-dvw flex flex-wrap gap-6'>
        {workItems.map((i, index) => (
          <div
            key={index}
            className='group relative w-dvh md:w-[300px] lg:w-[400px] h-[330px] max-w-sm overflow-hidden rounded-md shadow-lg border border-secondary/20
            transition-all duration-300'>
            <Image
              src={i.image}
              alt='Portfolio item'
              width={400}
              height={300}
              className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-20'
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className='p-6 absolute inset-0 flex flex-col justify-between bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
              {i.wip && (
                <div className='bg-accent w-36 h-8 rotate-45 absolute -right-10 bg-cover text-center p-1 font-bold'>
                  WIP
                </div>
              )}
              <div className='flex gap-2'>
                {i.techs?.map((t: any) => (
                  <div key={t.value}>
                    {renderIcon(t.value, "26", "flex-shrink-0", t.color)}
                  </div>
                ))}
              </div>
              <div className='text-start text-accent'>
                <h3 className='text-2xl font-semibold'>{i.name}</h3>
                <p className='mt-2 text-md text-white'>{i.description}</p>
                {i.link && (
                  <a key={i.link} href={i.link} target='_blank'>
                    <span className='flex gap-2 items-center'>
                      <p className='underline'>see more</p>
                      <FaExternalLinkAlt size={12} />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
