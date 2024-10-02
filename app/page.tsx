"use client";

import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import NavBar from "../components/NavBar";
import { Section } from "@/components/Section";
const sections = ["about", "portfolio", "contacts"];

export default function Home() {
  const [visibleSection, setVisibleSection] = useState(sections[0]);

  const setInView = (inView: any, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };
  return (
    <div className='min-h-screen bg-[#34353A] bg-center bg-fill'>
      <NavBar visibleSection={visibleSection} />
      <InView onChange={setInView} threshold={0.5}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"about"} inViewRef={inViewRef}>
              <div>about</div>
            </Section>
          );
        }}
      </InView>
      <InView onChange={setInView} threshold={0.5}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"portfolio"} inViewRef={inViewRef}>
              <div>works</div>
            </Section>
          );
        }}
      </InView>
      <InView onChange={setInView} threshold={0.5}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"contacts"} inViewRef={inViewRef} isLast>
              <div>contacts</div>
            </Section>
          );
        }}
      </InView>
    </div>
  );
}
