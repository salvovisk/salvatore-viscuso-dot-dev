import React from "react";
import { AnimationOnScroll } from ".";

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
      classNameNotInView={"fade-out-section"}>
      <section id={title} ref={inViewRef} className='snap-start'>
        {children}
      </section>
    </AnimationOnScroll>
  );
};
