import React from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import Link from "next/link";

const links = [
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
    <div className='fixed w-screen flex gap-10 justify-center p-10 z-10'>
      {links.map((l) => (
        <Link key={l.path} href={l.path}>
          <Button
            className={cn(
              "font-bold relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:text-white hover:bg-pink-300 ",
              visibleSection === l.name ? "text-white" : ""
            )}
            variant={"ghost"}>
            <p>{l.name}</p>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
