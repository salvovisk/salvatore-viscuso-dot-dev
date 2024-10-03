import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import CvIcon from "@/public//cv-icon.svg";
import { CiLinkedin } from "react-icons/ci";
import { GrGithub } from "react-icons/gr";
import Link from "next/link";

const Hero = () => {
  return (
    <div className='w-screen  bg-backgroundVariant h-dvh justify-center items-center md:justify-start px-40 flex'>
      <div className='font-medium text-white flex flex-col gap-4 w-[600px]'>
        <p className='text-accent text-6xl'>Salvatore Viscuso</p>
        <p className='text-2xl'>Front end & mobile developer</p>
        <Link href={"#contacts"}>
          <Button className='w-36 h-10' variant={"outline"}>
            Contact me
          </Button>
        </Link>
      </div>
      <div className='flex flex-col gap-6 items-center absolute bottom-20 md:right-40'>
        <div className='bg-accent w-44  h-[1px] md:w-[1px] md:h-32' />
        <div className='socials flex  md:flex-col gap-2 self-center md:self-start items-center'>
          <a target='_blank' href='https://github.com/salvovisk'>
            <GrGithub className='text-[#ADB7BE]' size={30} />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/salvatore-viscuso-developer/'>
            <CiLinkedin className='text-[#ADB7BE]' size={30} />
          </a>
          <a
            target='_blank'
            href='https://drive.google.com/file/d/1rVUHgJ-1gl9jYJ0sH_TrzGRS3Zi6CHir/view?usp=sharing'>
            <Image
              width={30}
              height={30}
              src={CvIcon}
              alt='Cv Icon'
              style={{ width: 30, height: 30 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
