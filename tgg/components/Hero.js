import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroSvg from "../app/assets/hero_illustration.svg";
import teamSvg from "../app/assets/team_illustration.svg";

const Hero = () => {
  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 justify-center items-center flex flex-col-reverse lg:flex-row gap-5">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8 flex flex-col gap-8 justify-center items-center lg:items-start">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl font-bold">
          You Decide, We Support
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 mb-9 max-w-[600px]">
          Starting your journey to Germany can feel daunting. At{" "}
          <b>The German Guy </b>, we're here to make it easier for both students
          and professionals. From crafting resumes to navigating university and
          job applications, our dedicated team supports you every step of the
          way, ensuring a smooth and successful transition.
        </p>
        <Button size="elg" className="text-xl max-w-[500px]">
          Start Your Journey
        </Button>
      </div>
      <div className="w-3/4 mt-4 lg:mt-0 lg:w-[500px]">
        <Image src={heroSvg} alt="The Hero Image" layout="responsive" />
      </div>
    </section>
  );
};

export default Hero;
