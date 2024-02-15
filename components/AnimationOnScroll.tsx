"use client";

import React from "react";
import { InView } from "react-intersection-observer";

interface AnimationOnScrollProps {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
  isLast: boolean;
}
export const AnimationOnScroll = ({
  children,
  classNameInView,
  classNameNotInView,
  isLast,
}: AnimationOnScrollProps) => {
  return (
    <InView
      threshold={0.6}
      rootMargin={!isLast ? "50px 0px -100px 0px" : "50px 0px 200px 0px"}>
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
