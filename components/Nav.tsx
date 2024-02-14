/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { cn } from "@/utils/classMerge";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import { NavMobile } from "./NavMobile";
interface NavProps {
  visibleSection: String;
}

export const links = [
  {
    path: "#home",
    name: "home",
  },
  {
    path: "#about",
    name: "about",
  },
  {
    path: "#projects",
    name: "projects",
  },
  {
    path: "#contacts",
    name: "contacts",
  },
];
export const Nav = ({ visibleSection }: NavProps) => {
  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  const MotionLink = motion(Link);

  return (
    <nav className='fixed p-8 z-10'>
      <NavMobile />

      <ul className='hidden lg:flex text-white/50 gap-12'>
        <AnimatePresence>
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            return (
              <motion.li
                key={link.path}
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                onPointerLeave={(event) => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}>
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:text-white hover:bg-pink-300 ",
                    visibleSection === link.name ? "bg-pink-300 text-white" : ""
                  )}
                  href={link.path}>
                  <motion.span style={{ x, y }} className='z-10 relative '>
                    {link.name}
                  </motion.span>
                  {visibleSection === link.name ? (
                    <motion.div
                      transition={{ type: "spring", stiffness: 50 }}
                      layout
                      layoutId='underline'
                      className='absolute rounded-md left-0 bottom-0 bg-pink-500 w-full h-full'></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </nav>
  );
};
