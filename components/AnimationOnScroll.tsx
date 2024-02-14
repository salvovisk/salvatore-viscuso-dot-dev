"use client";

import React from "react";
import { InView } from "react-intersection-observer";

interface AnimationOnScrollProps {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
}
export const AnimationOnScroll = ({
  children,
  classNameInView,
  classNameNotInView,
}: AnimationOnScrollProps) => {
  return (
    <InView threshold={0.6} rootMargin={"50px 0px -100px 0px"}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}>
          {children}
        </div>
      )}
    </InView>
  );
};
