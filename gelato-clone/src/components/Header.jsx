import React from "react";
import { navigation } from "../constants";

function Header() {
  return (
    <div>
      <div>
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src="./src/assets/gelato_logo_black.svg" alt="Gelato logo" />
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a key={item.id} href={item.url} className={`block relative text-2xl ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold`}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
