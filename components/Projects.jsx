import React from "react";

function Projects() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-slate-900">
        👷🏻‍♂️ Projects
      </h1>
      <p className="text-center mt-5 font-bold text-yellow-500 text-2xl">
        Work in progress
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mt-2">
        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>

        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>

        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>

        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>

        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>

        <div className="card -z-50 flex flex-col">
          <div className="project animate-pulse"></div>
          <div className="flex">
            <div className="circle ml-4 animate-pulse"></div>
            <div className="bar animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
