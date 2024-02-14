import React, { useEffect, useState } from "react";
interface BouncingArrowProps {
  scrollThresholdPassed: boolean;
  delayThresholdPassed: boolean;
}

export const BouncingArrow = ({
  scrollThresholdPassed,
  delayThresholdPassed,
}: BouncingArrowProps) => {
  return (
    <div
      className={`w-screen fixed bottom-20 flex-col hidden ${
        delayThresholdPassed === true && scrollThresholdPassed === false
          ? "is-visible"
          : "is-hidden"
      } `}>
      <div className=' pb-2 w-fit self-center text-white/50 '>
        scroll down to know more about me
      </div>
      <div className='w-fit self-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='rgb(255 255 255 / 0.5)'
          className='w-14 h-14 bounce'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
          />
        </svg>
      </div>
    </div>
  );
};
