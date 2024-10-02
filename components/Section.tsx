import React from "react";
import { AnimationOnScroll } from "./AnimationOnScroll";

interface SectionProps {
  title: string;
  inViewRef: any;
  children: React.ReactNode;
  isLast?: boolean;
}
export const Section = ({
  title,
  inViewRef,
  children,
  isLast,
}: SectionProps) => {
  return (
    <AnimationOnScroll
      classNameInView={"fade-in-section"}
      classNameNotInView={"fade-out-section"}
      isLast={isLast ? isLast : false}>
      <section
        className='h-dvh justify-center flex items-center md:justify-start px-20'
        id={title}
        ref={inViewRef}>
        {children}
      </section>
    </AnimationOnScroll>
  );
};
