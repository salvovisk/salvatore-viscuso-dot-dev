import React from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { SiSvelte } from "react-icons/si";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "about",
    path: "#about",
  },
  {
    name: "portfolio",
    path: "#portfolio",
  },
  {
    name: "contacts",
    path: "#contacts",
  },
];
interface NavBarProps {
  visibleSection: String;
}
const NavBar = ({ visibleSection }: NavBarProps) => {
  return (
    <div
      className={cn(
        "fixed w-screen flex gap-10 shadow-none bg-backgroundVariant justify-center px-10 py-4 z-[100] duration-1000",
        visibleSection !== "home" && "shadow-xl"
      )}>
      <div className='left-20 top-4 absolute'>
        <SiSvelte size={40} className='text-[#FEC86A]' />
      </div>
      <div>
        {links.map((l) => (
          <Link key={l.path} href={l.path}>
            <div
              className={cn(
                "relative rounded-md font-medium text-xl py-2 px-4 transition-all duration-500 ease-out text-secondary hover:text-white",
                visibleSection === l.name ? "text-white" : ""
              )}>
              <p className='capitalize'>{l.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
