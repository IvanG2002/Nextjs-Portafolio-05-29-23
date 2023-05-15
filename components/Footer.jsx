import React from "react";

function Footer() {
  return (
    <div className="w-full bg-slate-900 text-white grid grid-cols-1 text-center h-60 absolute mt-5 py-5 md:max-h-fit">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold">Contact me:</h1>
        <ul className="flex flex-col gap-5 mt-5 md:text-2xl">
          <li>
            <strong>Email: </strong>DevL2002@outlook.com
          </li>
          <li>
            <strong>Number: </strong>+52 (656) 3 10 24 75
          </li>
          <li>
            <strong>Github: </strong> https://github.com/IvanG2002
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
