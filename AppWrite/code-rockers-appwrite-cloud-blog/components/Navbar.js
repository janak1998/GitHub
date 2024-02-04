import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-purple-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white text-lg font-bold">
            CodeRockers
          </Link>
        </div>

        {/* Responsive Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:items-center ${
            menuOpen ? "flex" : "hidden"
          } mt-4 lg:mt-0`}
        >
          <a
            href="#"
            className="text-white px-4 py-2 block hover:bg-purple-600 lg:inline-block lg:mt-0"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 block hover:bg-purple-600 lg:inline-block lg:mt-0"
          >
            About
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 block hover:bg-purple-600 lg:inline-block lg:mt-0"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white px-4 py-2 block hover:bg-purple-600 lg:inline-block lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
