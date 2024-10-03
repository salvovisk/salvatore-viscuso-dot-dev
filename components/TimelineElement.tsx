import React from "react";
import { Badge } from "./ui/badge";
import { SiFlutter, SiNextdotjs } from "react-icons/si";

export interface TimeLineElementProps {
  workExperience: WorkExperience;
}

export interface WorkExperience {
  year: string;
  company: string;
  role: string;
  description: string;
  onGoing?: boolean;
  skills?: string[];
}

const TimelineElement = ({ workExperience }: TimeLineElementProps) => {
  const { year, company, role, description, onGoing, skills } = workExperience;

  return (
    <div className='flex gap-4'>
      <div className='min-w-[50px] md:min-w-[80px] max-w-[80px] h-fit -left-20 mt-2 bg-zinc-800 rounded-md shadow-lg md:px-4 py-1 text-white text-center text-sm md:text-base'>
        {year}
      </div>
      <div className=' mt-4 h-full flex flex-col gap-3 items-center'>
        <div className='bg-accent shadow-lg flex-shrink-0 w-4 h-4 rounded-full' />
        <div className='bg-white shadow-lg flex-shrink-0 w-[2px] h-5/6  rounded-full' />
      </div>
      <div className='w-full md:ml-4 flex flex-col'>
        <div>
          <p className='text-xl md:text-4xl text-white'>{company}</p>
          <p className='text-md md:text-xl text-accent'>{role}</p>
          {onGoing && (
            <Badge className='mt-1' variant={"outline"}>
              ongoing
            </Badge>
          )}
        </div>
        <p className='md:max-w-[500px] mt-4 text-[#B3B3B3]'>{description}</p>
      </div>
    </div>
  );
};

export default TimelineElement;
