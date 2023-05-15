"use client";
import { useRef, useState } from "react";

function Info() {
  const handleClick = () => {
    textToggle.current.classList.toggle("hidden");
    setToggle(!toggle);
  };
  const textToggle = useRef(null);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="bg-white/50 border-2 border-slate-300 rounded-md p-10 backdrop-blur-2xl m-5 -z-50 flex flex-col">
      <h1 className="font-bold text-4xl text-center">About me</h1>
      <p className="text-[#272727] text-2xl mt-10 hidden" ref={textToggle}>
        <strong>Hard skills: </strong>C, C++, HTML, JS, CSS, JS, React, SASS,
        Tailwind, Data structures, Algorithms, Git and GitHub, mathematics,
        basic knowledge about hardware, software, electronic. Currently I am
        studying node, MySQL, mongoDB and practicing my main skills.
        <br /> <strong>Soft skills: </strong>Responsible, Perceptive, dedicate,
        studious. <br /> <strong>Studies: </strong>Student Computer science at
        UACJ (6th Semester)
      </p>
      <button
        className="text-center py-2 px-8 bg-slate-900 text-white rounded-md mt-10"
        onClick={handleClick}
      >
        {toggle ? "More +" : "Less -"}
      </button>
    </div>
  );
}

export default Info;
