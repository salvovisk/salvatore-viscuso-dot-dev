/* eslint-disable indent */

import React from "react";

import { FaReact, FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export interface TextRowItemProps {
  icon: string;
  title: string;
  color: string;
}

const IconTech = ({ icon, title, color }: TextRowItemProps) => {
  const renderIcon = (
    iconName: string,
    size: string,
    className: any,
    color: string
  ) => {
    switch (iconName) {
      case "flutter":
        return <SiFlutter color={color} size={size} className={className} />;
      case "next":
        return <SiNextdotjs color={color} size={size} className={className} />;
      case "react":
        return <FaReact color={color} size={size} className={className} />;
      case "vue":
        return <FaVuejs color={color} size={size} className={className} />;
      case "nuxt":
        return <SiNuxtdotjs color={color} size={size} className={className} />;
      case "typescript":
        return <SiTypescript color={color} size={size} className={className} />;

      case "tailwind":
        return (
          <SiTailwindcss color={color} size={size} className={className} />
        );

      default:
        return null;
    }
  };
  return (
    <div className='group bg-backgroundVariant w-40 h-40 rounded-xl shadow-md hover:bg-accent transition-all duration-500 hover:text-black'>
      <div className='h-full flex flex-col items-center justify-center align-middle m-auto gap-3 hover:-translate-y-1 duration-500'>
        {renderIcon(icon, "40", "flex-shrink-0", color)}
        <div>
          <p className='text-xl text-white group-hover:text-black duration-500 '>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconTech;
