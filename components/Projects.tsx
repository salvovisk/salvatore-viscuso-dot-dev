/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

export const Projects = () => {
  return (
    <div className='h-dvh snap-start justify-center lg:justify-start flex flex-col px-10 lg:px-20 lg:py-96'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-5xl lg:text-8xl font-bold text-white'>
          Some of <br /> my works
          <span className='text-white/50 ml-2'> //</span>
        </h1>

        <p className='font-mono text-lg text-white/70 lg:text-2xl'>
          Warning: Personal Projects Under Construction! 🚧
        </p>
        <p className='font-mono text-sm mt-4 text-white/70 lg:text-lg'>
          I&apos;m currently busy building some fantastic creations, but
          they&apos;re still getting their finishing touches. Be sure to revisit
          this section soon to witness the grand unveiling! Please come back
          soon.
        </p>
      </div>
    </div>
  );
};
