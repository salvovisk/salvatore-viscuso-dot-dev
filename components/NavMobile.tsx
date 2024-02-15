import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";
import { links } from "./Nav";
import { cn } from "@/utils/classMerge";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className='lg:hidden overflow-hidden '>
      <div
        className={cn(
          "absolute top-10 z-20 rounded-3xl border-[1px] backdrop-blur-sm border-slate-50/20",
          isOpen && "bg-transparent border-0"
        )}>
        <Hamburger
          color={isOpen ? "rgb(157 23 77)" : "white"}
          toggled={isOpen}
          size={20}
          toggle={setOpen}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100vw" }}
            transition={{ duration: 0.4 }}
            className='absolute z-10 top-0 left-0 pt-20 pb-40 pr-10 h-dvh bg-white w-dvw flex justify-end '>
            <ul className='flex flex-col justify-end'>
              {links.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.name}
                    className='w-full text-pink-800'>
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={"w-full p-5 rounded-xl text-right"}
                      href={route.path}>
                      <span className='text-5xl font-bold text-pink-800 px-2 '>
                        {route.name}
                      </span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
