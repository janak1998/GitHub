import React from "react";
import Value from "./Value";

const Values = () => {
  return (
    <div className="mx-6 text-center my-6 max-w=[800px]">
      <p className="text-[34px] leading-[40.8px] font-bold	">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor-
      </p>

      <div className="flex flex-row items-center justify-center flex-wrap">
        <Value />
        <Value />
        <Value />
        <Value />
        <Value />
      </div>
    </div>
  );
};

export default Values;
