import Hero from "@/components/Hero";
import Info from "@/components/Info";
import React from "react";

function Aboutpage() {
  const title = "Resume 📄";
  const text =
    "I am a person who likes to learn for other people, I like to study and be an autodidact. Every day I try to improve my skills and be 1% better each day, and at the end of the year be a better version of me";
  return (
    <>
      <Hero title={title} text={text} />
      <Info/>
    </>
  );
}

export default Aboutpage;
