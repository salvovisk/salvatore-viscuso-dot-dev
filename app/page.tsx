"use client";

import { About, Contacts, Hero, Nav, Projects, Section } from "@/components";
import React, { useState } from "react";
import { InView } from "react-intersection-observer";

const sections = ["home", "about", "projects", "contacts"];

export default function Home() {
  const [visibleSection, setVisibleSection] = useState(sections[0]);

  const setInView = (inView: any, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };
  return (
    <div className='h-full bg-main-bg bg-center bg-fill'>
      <Nav visibleSection={visibleSection} />
      <div className='overflow-scroll snap-y snap-mandatory h-screen w-screen'>
        <InView onChange={setInView} threshold={0.5}>
          {({ ref: inViewRef }) => {
            return (
              <Section title={"home"} inViewRef={inViewRef}>
                <Hero />
              </Section>
            );
          }}
        </InView>
        <InView onChange={setInView} threshold={0.5}>
          {({ ref: inViewRef }) => {
            return (
              <Section title={"about"} inViewRef={inViewRef}>
                <About />
              </Section>
            );
          }}
        </InView>
        <InView onChange={setInView} threshold={0.5}>
          {({ ref: inViewRef }) => {
            return (
              <Section title={"projects"} inViewRef={inViewRef}>
                <Projects />
              </Section>
            );
          }}
        </InView>
        <InView onChange={setInView} threshold={0.5}>
          {({ ref: inViewRef }) => {
            return (
              <Section isLast title={"contacts"} inViewRef={inViewRef}>
                <Contacts />
              </Section>
            );
          }}
        </InView>
      </div>
    </div>
  );
}
