import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between my-[11px] px-10">
      <img src="/logo.svg" alt="website logo" height={28} width={120}/>
      <button className="border border-black border-2 py-[10px] px-[14px] rounded-sm text-xl leading-5 font-bold">
        Lets Talk!
      </button>
    </div>
  );
};

export default NavBar;
