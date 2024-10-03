"use client";

import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import Nav from "../components/NavBar";
import { Section } from "@/components/Section";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Experiences from "@/components/Experiences";
import Contacts from "@/components/Contacts";
const sections = ["home", "about", "portfolio", "contacts"];

export default function Home() {
  const [visibleSection, setVisibleSection] = useState(sections[0]);

  const setInView = (inView: any, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };
  return (
    <main className='h-full w-screen bg-background'>
      <Nav visibleSection={visibleSection} />
      <InView onChange={setInView} threshold={0.8}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"home"} inViewRef={inViewRef}>
              <Hero />
            </Section>
          );
        }}
      </InView>
      <InView onChange={setInView} threshold={0.8}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"about"} inViewRef={inViewRef}>
              <About />
            </Section>
          );
        }}
      </InView>
      <Experiences />
      <InView onChange={setInView} threshold={0.8}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"portfolio"} inViewRef={inViewRef}>
              <Portfolio />
            </Section>
          );
        }}
      </InView>
      <InView onChange={setInView} threshold={0.8}>
        {({ ref: inViewRef }) => {
          return (
            <Section title={"contacts"} inViewRef={inViewRef}>
              <Contacts />
            </Section>
          );
        }}
      </InView>
    </main>
  );
}
