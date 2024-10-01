import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import React from "react";
import Image from "next/image";

const studentTestimonials = [
  {
    image: "https://via.placeholder.com/150?text=Sarah+J",
    name: "Sarah Johnson",
    description:
      "Thanks to The German Guy, my university application process was seamless! Their step-by-step guidance made everything so easy.",
  },
  {
    image: "https://via.placeholder.com/150?text=Michael+S",
    name: "Michael Smith",
    description:
      "The support I received for both job applications and visa processing was amazing. I couldn't have done it without them!",
  },
  {
    image: "https://via.placeholder.com/150?text=Anna+K",
    name: "Anna Kim",
    description:
      "From crafting my resume to university selection, The German Guy helped me every step of the way. Highly recommend!",
  },
  {
    image: "https://via.placeholder.com/150?text=David+R",
    name: "David Rodriguez",
    description:
      "I was nervous about moving to Germany, but The German Guy made the transition smoother than I expected.",
  },
  {
    image: "https://via.placeholder.com/150?text=Emily+T",
    name: "Emily Taylor",
    description:
      "Their team helped me find the best university and supported me through the entire process. Truly a life-changing experience!",
  },
  {
    image: "https://via.placeholder.com/150?text=John+P",
    name: "John Patel",
    description:
      "The German Guy not only helped with my application but also provided valuable tips for settling into life in Germany.",
  },
  {
    image: "https://via.placeholder.com/150?text=Olivia+M",
    name: "Olivia Martinez",
    description:
      "I can't thank them enough for helping me secure my dream job in Germany. The application process was so easy with their help!",
  },
  {
    image: "https://via.placeholder.com/150?text=Ethan+L",
    name: "Ethan Lee",
    description:
      "Their personalized advice and constant support made all the difference during my move to Germany. Highly professional team!",
  },
  {
    image: "https://via.placeholder.com/150?text=Sophia+W",
    name: "Sophia Williams",
    description:
      "The German Guy took care of everything—from my resume to my job application. I couldn’t be happier with their service!",
  },
  {
    image: "https://via.placeholder.com/150?text=James+B",
    name: "James Brown",
    description:
      "I was lost when it came to applying to German universities, but The German Guy walked me through every single detail. Incredible service!",
  },
];

const CarouselSection = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Success Stories
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] lg:w-full lg:max-w-[1200px] mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {studentTestimonials.map((person, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4 "
            >
              <div className="p-1">
                <Card>
                  <CardHeader className="">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="rounded-full mx-auto"
                      height={150}
                      width={150}
                    />
                  </CardHeader>
                  <CardTitle className="text-center">{person.name}</CardTitle>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-md font-semibold">
                      {person.description}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
