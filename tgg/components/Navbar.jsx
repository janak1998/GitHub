import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Hamburger from "./Hamburger";
import { ModeToggle } from "./Theme-btn";

const Navbar = () => {
  return (
    <nav className="bg-background/50 sticky top-0  p-1 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl">
          <Link href="/">The German Guy</Link>
        </div>

        <div className="flex justify-center items-center">
          <div className="nav_links_wrapper flex gap-5 items-center ">
            <ul className="md:flex md:items-center md:space-x-6 hidden md:block p-4">
              <li>
                <Link
                  href="/"
                  className="block py-1 md:py-0 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/visa-types"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  Visa Types
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 md:py-0 hover:text-blue-500"
                >
                  About
                </Link>
              </li>
            </ul>
            <Button className="hidden md:block mr-4"> CONTACT US </Button>
          </div>
          <ModeToggle />
          <div className="md:hidden flex">
            <Sheet>
              <SheetTrigger>
                <Hamburger />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">
                    The German Guy
                  </SheetTitle>
                  <SheetDescription>
                    <div className="nav_links_wrapper flex flex-col gap-5 justify-center items-center">
                      <ul className="flex flex-col justify-center items-center">
                        <li>
                          <Link href="/" className=" block py-2 md:py-0">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" className=" block py-2 md:py-0">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className=" block py-2 md:py-0">
                            Visa Types
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className=" block py-2 md:py-0">
                            About
                          </Link>
                        </li>
                      </ul>
                      <Button className="w-[50%]"> CONTACT US </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
