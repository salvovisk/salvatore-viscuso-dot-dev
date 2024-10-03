import React from "react";
import { Badge } from "./ui/badge";

export interface TimeLineElementProps {
  workExperience: WorkExperience;
}

export interface WorkExperience {
  year: string;
  company: string;
  role: string;
  description: string;
}

const TimelineElement = ({ workExperience }: TimeLineElementProps) => {
  const { year, company, role, description } = workExperience;

  return (
    <div className='relative flex gap-4 w-[500px]'>
      {/* <div className='absolute w-[70px] -left-20 mt-2 bg-zinc-800 rounded-md shadow-lg px-4 py-1 text-white text-right'>
        {year}
        ongoing
      </div> */}
      <Badge>{year}</Badge>
      <div className=' mt-4 h-full flex flex-col gap-3 items-center'>
        <div className='bg-accent shadow-lg flex-shrink-0 w-4 h-4 rounded-full' />
        <div className='bg-white shadow-lg flex-shrink-0 w-[2px] h-3/4 rounded-full' />
      </div>
      <div className='ml-4 flex flex-col'>
        <div>
          <p className='text-4xl text-white'>{company}</p>
          <p className='text-xl text-accent'>{role}</p>
        </div>

        <p className='mt-4 text-[#B3B3B3]'>{description}</p>
      </div>
    </div>
  );
};

export default TimelineElement;
