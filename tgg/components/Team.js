import React from "react";
import teamSvg from "../app/assets/team_illustration.svg";
import { Button } from "./ui/button";
import Image from "next/image";
const Team = () => {
  return (
    <div>
      <div className="container px-4 py-10 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md mt-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center text-center">
            <Image
              src={teamSvg}
              alt="The German Guy Team"
              width={800}
              height={500}
              style="responsive"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Our journey into Germany began with a passion for learning and
              exploring new horizons. Captivated by the high-quality education
              and research opportunities, we embraced the vibrant community of
              students and professors, which fostered both academic and personal
              growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Recognizing the challenges faced by international students and
              professionals—such as language barriers, visa complexities, and
              accommodation hurdles—we founded The German Guy (TGG). Our mission
              is to ease the transition for those aspiring to study or work in
              Germany.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              TGG offers personalized guidance in admission counseling, visa
              assistance, resume writing, interview preparation, and career
              coaching. We also provide information on scholarships,
              internships, Au pair opportunities, Ausbildung programs, and job
              openings.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We are dedicated to empowering individuals to achieve their dreams
              in Germany, offering tailored solutions and connecting you with
              valuable resources. Join us and turn your aspirations into
              reality.
            </p>
            <Button className="mr-6">Know More</Button>
            <Button>Let's Talk</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
