import React from "react";
import { renderIcon } from "./IconTech";

export interface ContactBadgeProps {
  icon: string;
  value: string;
  link?: string;
}

const ContactBadge = ({ icon, value, link }: ContactBadgeProps) => {
  return (
    <>
      <a href={link}>
        <div className='h-fit -left-20 mt-2 bg-zinc-800 rounded-md shadow-lg md:px-4 px-4 py-2 text-white text-center text-sm md:text-base flex items-center gap-2 group hover:scale-[1.02] hover:text-accent '>
          {renderIcon(icon, "26", "group-hover:fill-accent", "white")}
          {value}
        </div>
      </a>
    </>
  );
};

export default ContactBadge;
