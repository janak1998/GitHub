"use client";
import Image from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    quote: "The German Guy made my move to Germany so much easier!",
    name: "John Doe",
    image: "path/to/image1.jpg",
  },
  {
    quote:
      "They supported me from start to finish—I couldn’t have done it without them.",
    name: "Jane Smith",
    image: "path/to/image2.jpg",
  },
  {
    quote: "Their guidance was invaluable during my transition.",
    name: "Michael Brown",
    image: "path/to/image3.jpg",
  },
  {
    quote: "I highly recommend their services to anyone moving to Germany.",
    name: "Emily Davis",
    image: "path/to/image4.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container px-4 py-10 mx-auto relative">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Success Stories
        </h2>
      </div>

      <div className="relative mt-10 px-6">
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 transition-transform duration-500 ease-in-out transform">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full transform transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transform:
                  index === currentIndex ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.5s ease",
              }}
            >
              <div className="flex flex-col items-center p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <p className="text-lg text-gray-500 dark:text-gray-300">
                  "{testimonial.quote}"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left/Right Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-primary text-white rounded-full hover:bg-primary/70 focus:outline-none focus:bg-primary/70 z-10"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-primary text-white rounded-full hover:bg-primary/70 focus:outline-none focus:bg-primary/70 z-10"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
