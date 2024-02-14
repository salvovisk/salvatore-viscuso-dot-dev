/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import CvIcon from "@/public//cv-icon.svg";
import { motion } from "framer-motion";
import { AnimateChangeInHeight } from "./AnimateChangeInHeight";
import { cn } from "@/utils/classMerge";
import { EmailSection } from ".";

export const Contacts = () => {
  const [isEmailFormVisible, setIsEmailFormVisible] = useState(false);
  const emailFormHeight = 500;
  const handleClick = () => {
    setIsEmailFormVisible(!isEmailFormVisible);
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginBottom: 0,
    },
    expanded: {
      opacity: 1,
      height: emailFormHeight,
      marginBottom: "5rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const btnVariants = {
    hidden: {
      opacity: 0,
      marginBottom: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section
        id='contact'
        className={cn(
          `h-dvh w-dvw justify-center md:justify-start flex flex-col lg:flex-row py-0 lg:px-20 md:pt-40 lg:py-96`,
          isEmailFormVisible && `pb-[${emailFormHeight}px]`
        )}>
        <div className='flex flex-col lg:w-1/2 px-10'>
          <h1 className='text-5xl lg:text-8xl font-bold text-white'>
            Contact <br /> me<span className='text-white/50 ml-2'>//</span>{" "}
          </h1>
          <p className='text-[#ADB7BE] mt-4 mb-4 max-w-md'>
            Looking for my next adventure, whether it&apos;s conquering a
            complex coding challenge or collaborating on a groundbreaking
            project. If you&apos;re looking for a creative mind and a positive
            attitude, shoot me a message! My inbox is my magic portal to
            exciting possibilities.
          </p>
          <div className='socials flex flex-row gap-2 self-center md:self-start items-center'>
            <a target='_blank' href='https://github.com/salvovisk'>
              <Image
                width={40}
                height={40}
                src={GithubIcon}
                alt='Github Icon'
                style={{ width: 40, height: 40 }}
              />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/salvatore-viscuso-developer/'>
              <Image
                width={50}
                height={50}
                src={LinkedinIcon}
                alt='Github Icon'
              />
            </a>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1rVUHgJ-1gl9jYJ0sH_TrzGRS3Zi6CHir/view?usp=sharing'>
              <Image
                width={40}
                height={40}
                src={CvIcon}
                alt='curriculum Icon'
              />
            </a>
          </div>

          <motion.button
            type='button'
            disabled={isEmailFormVisible}
            onClick={handleClick}
            animate={isEmailFormVisible ? "hidden" : "visible"}
            variants={btnVariants}
            className=' md:self-start lg:hidden w-40 mt-4 self-center bg-pink-500 rounded-md h-10 text-white font-bold'>
            Send me an email
          </motion.button>
        </div>
        <div className='hidden lg:block lg:my-10 lg:w-1/2'>
          <EmailSection hideForm={() => setIsEmailFormVisible(false)} />
        </div>
        <AnimateChangeInHeight className='lg:hidden'>
          <motion.div
            animate={isEmailFormVisible ? "expanded" : "hidden"}
            variants={formVariants}
            className='bg-slate-800 w-vw shadow-inner shadow-slate-900 py-10 px-5 md:px-40 lg:hidden '>
            <EmailSection hideForm={() => setIsEmailFormVisible(false)} />
          </motion.div>
        </AnimateChangeInHeight>
      </section>
    </>
  );
};
