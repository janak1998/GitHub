import React from "react";
import Image from "next/image";
import steps_img from "../app/assets/steps_illustration.svg";
import { Button } from "./ui/button";
const Guide = () => {
  return (
    <section className="container px-4 py-10 mx-auto bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Your Path to Germany in 4 Simple Steps
      </h2>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Step 1: Schedule a Consultation
            </h3>
            <p>
              Book a session with our experts to discuss your goals and plans.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Personalized Resume & Application Support
            </h3>
            <p>
              Get tailored assistance to craft a compelling resume and
              application.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Step 3: Submission & Follow-up
            </h3>
            <p>
              Submit your application and receive continuous support throughout
              the process.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Step 4: Get Ready for Your New Life in Germany
            </h3>
            <p>
              Prepare for your move with our comprehensive pre-departure
              guidance.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src={steps_img}
            alt="A beautiful landscape"
            width={800}
            height={500}
            style="responsive"
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button variant="lg">Start Now</Button>
      </div>
    </section>
  );
};

export default Guide;
