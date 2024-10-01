import React from "react";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          How We Help You
        </h2>
        <p className="text-center mt-2 text-lg text-gray-500 dark:text-gray-300">
          Guiding you through every step of the process.
        </p>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 h-full">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-primary mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v6m0 0H9m3 0h3"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Consulting
            </h3>
            <p className="text-center my-2 text-gray-500 dark:text-gray-300">
              Professional consulting services to help you navigate your career
              path.
            </p>
          </div>

          <Button>More Info</Button>
        </div>
        <div className="flex flex-col justify-between items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 h-full">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-primary mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v6m0 0H9m3 0h3"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Language Classes
            </h3>
            <p className="text-center my-2 text-gray-500 dark:text-gray-300">
              Join our language classes to improve your communication skills.
            </p>
          </div>
          <Button>More Info</Button>
        </div>
        <div className="flex flex-col justify-between items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 h-full">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-primary mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v6m0 0H9m3 0h3"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              After Arrival Setup
            </h3>
            <p className="text-center my-2 text-gray-500 dark:text-gray-300">
              Get assistance with setting up your new life after arrival.
            </p>
          </div>
          <Button>More Info</Button>
        </div>
        <div className="flex flex-col justify-between items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-transform duration-300 h-full">
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-primary mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2zm0 0v6m0 0H9m3 0h3"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Job Applications
            </h3>
            <p className="text-center my-2 text-gray-500 dark:text-gray-300">
              Support in landing the perfect job to kickstart your career.
            </p>
          </div>
          <Button>More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
