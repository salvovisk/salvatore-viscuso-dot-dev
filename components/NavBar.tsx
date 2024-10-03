import React from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { SiSvelte } from "react-icons/si";
import { NavMobile } from "./NavBarMobile";

export const links = [
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
const Nav = ({ visibleSection }: NavBarProps) => {
  return (
    <nav className='fixed z-10'>
      <NavMobile />

      <div
        className={cn(
          "hidden lg:flex fixed w-screen gap-10 shadow-none bg-backgroundVariant justify-center px-10 py-4 z-[100] duration-500 transition-all",
          visibleSection !== "home" &&
            "shadow-lg backdrop-blur-lg bg-transparent"
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
    </nav>
  );
};

export default Nav;
