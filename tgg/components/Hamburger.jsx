import React from "react";

const Hamburger = () => {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      width="40"
      height="40"
      stroke="black"
      strokeWidth=".6"
      fill="rgba(0,0,0,0)"
      strokeLinecap="round"
    >
      <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" />
    </svg>
  );
};

export default Hamburger;
