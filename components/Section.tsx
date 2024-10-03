import React from "react";

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
    <section className='h-dvh bg-background' id={title} ref={inViewRef}>
      {children}
    </section>
  );
};
