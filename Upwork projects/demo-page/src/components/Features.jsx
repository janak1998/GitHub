import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="lg:px-[200px] px-6 md:mx-auto py-6 bg-[#E1E1E1]">
      <p className="text-[34px] leading-[40.8px] font-bold	">Lorem ipsum</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 ">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Features;
