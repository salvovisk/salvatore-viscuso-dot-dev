import React from "react";

interface SectionProps {
  title: string;
  inViewRef: any;
  children: React.ReactNode;
}
export const Section = ({ title, inViewRef, children }: SectionProps) => {
  return (
    <section className='p-0 m-0' id={title} ref={inViewRef}>
      {children}
    </section>
  );
};
