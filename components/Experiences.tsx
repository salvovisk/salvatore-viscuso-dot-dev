import React from "react";
import TimelineElement, { WorkExperience } from "./TimelineElement";
const workExperiences: WorkExperience[] = [
  {
    year: "2024",
    company: "Freelance",
    role: "UI/UX designer & FrontEnd development",
    description:
      "Researched and design the user flow and the UI of web app. The full process of design and development took 9 months.",
  },
  {
    year: "2021",
    onGoing: true,
    company: "TuiMusement",
    role: "Software engineer",
    description:
      "Currently part of a team that developed and succesfully launched a mobile app made with Flutter. All of our products are build with a combination of the following technologies, which I get to use everyday in my job.",
  },
];

const Experiences = () => {
  return (
    <div className='bg-backgroundVariant px-6 md:px-20 py-10 w-screen h-[800px] md:h-[650px]'>
      <div className='md:ml-10 max-w-[1000px] md:w-full'>
        <p className='text-4xl mb-20 text-white font-extralight'>Experience</p>
      </div>
      <div className='w-full flex flex-col gap-4 items-start md:items-center h-full'>
        {workExperiences.map((i, index) => (
          <TimelineElement key={index} workExperience={i} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
