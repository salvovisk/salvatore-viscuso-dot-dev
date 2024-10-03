import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";
import { cn } from "@/utils/classMerge";
import { links } from "./NavBar";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className='p-8 lg:hidden overflow-hidden '>
      <div
        className={cn(
          "absolute top-10 z-20 rounded-xl border-[1px] backdrop-blur-sm border-slate-50/20",
          isOpen && "bg-transparent border-0"
        )}>
        <Hamburger
          color={isOpen ? "rgb(254 200 106)" : "white"}
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
            className='absolute z-10 top-0 left-0 pt-20 pb-40 pr-10 h-dvh bg-backgroundVariant w-dvw flex justify-end '>
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
                    className='w-full text-white'>
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={"w-full p-5 rounded-xl text-right"}
                      href={route.path}>
                      <span className='text-5xl font-bold text-white/80 px-2 '>
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
