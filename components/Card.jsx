import React from "react";

function Card() {
  return (
    <div className="card -z-50 flex flex-col">
      <div className="project animate-pulse"></div>
      <div className="flex">
        <div className="circle ml-4"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Card;
