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
    company: "TuiMusement",
    role: "Software engineer",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati exercitationem omnis, facilis rerum placeat consequatur, porro officia, inventore ut neque. Ducimus in unde ea voluptatibus architecto odit impedit optio?",
  },
  {
    year: "2020",
    company: "Edgemony",
    role: "DevBootcamp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati",
  },
  {
    year: "2024",
    company: "TuiMusement",
    role: "Software engineer",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati exercitationem omnis, facilis rerum placeat consequatur, porro officia, inventore ut neque. Ducimus in unde ea voluptatibus architecto odit impedit optio?",
  },
  {
    year: "2024",
    company: "TuiMusement",
    role: "Software engineer",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati exercitationem omnis, facilis rerum placeat consequatur, porro officia, inventore ut neque. Ducimus in unde ea voluptatibus architecto odit impedit optio?",
  },
];

const Experiences = () => {
  return (
    <div className='bg-backgroundVariant h-screen'>
      <p className='text-4xl pt-10 mt-20 mb-4 text-white font-extralight'>
        Experience
      </p>
      <div className='flex flex-wrap gap-4 justify-center'>
        {workExperiences.map((i, index) => (
          <TimelineElement key={index} workExperience={i} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
