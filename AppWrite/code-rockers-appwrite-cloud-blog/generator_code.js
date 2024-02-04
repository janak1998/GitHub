"use client";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65bfbb516395058f5705");

  const databases = new Databases(client);

  let a = [
    {
      title: "Learn JavaScript",
      content:
        "<p>Welcome to the world of JavaScript! Whether you're a beginner or an experienced developer, diving into JavaScript is an exciting journey...</p>",
      slug: "learn-javascript",
      views: 1200,
      author: "John Doe",
      is_published: true,
    },
    {
      title: "Mastering JavaScript Fundamentals",
      content:
        "<p>Build a strong foundation in JavaScript with this comprehensive guide covering variables, data types, and more...</p>",
      slug: "mastering-js-fundamentals",
      views: 850,
      author: "Jane Smith",
      is_published: true,
    },
    {
      title: "Advanced JavaScript Techniques",
      content:
        "<p>Dive into advanced JavaScript concepts such as closures, prototypes, and design patterns. Take your skills to the next level...</p>",
      slug: "advanced-js-techniques",
      views: 1205,
      author: "Chris Williams",
      is_published: true,
    },
    {
      title: "Building Responsive Web Apps with JavaScript",
      content:
        "<p>Explore techniques for creating responsive and user-friendly web applications using JavaScript and modern front-end frameworks...</p>",
      slug: "responsive-web-apps",
      views: 950,
      author: "Emily Johnson",
      is_published: true,
    },
    {
      title: "JavaScript for Beginners: Getting Started",
      content:
        "<p>If you're new to programming, this beginner-friendly guide will help you take your first steps into the world of JavaScript...</p>",
      slug: "js-for-beginners",
      views: 670,
      author: "Mark Anderson",
      is_published: true,
    },
    {
      title: "Effective Debugging in JavaScript",
      content:
        "<p>Learn essential debugging techniques to identify and fix errors in your JavaScript code efficiently...</p>",
      slug: "javascript-debugging",
      views: 1100,
      author: "Sophie Turner",
      is_published: true,
    },
    {
      title: "JavaScript ES6+: The Modern Syntax",
      content:
        "<p>Discover the power of ES6+ features in JavaScript, including arrow functions, destructuring, and template literals...</p>",
      slug: "javascript-es6",
      views: 800,
      author: "Michael Brown",
      is_published: true,
    },
    {
      title: "Securing Your JavaScript Applications",
      content:
        "<p>Learn best practices for securing your JavaScript applications and protecting against common security vulnerabilities...</p>",
      slug: "secure-js-apps",
      views: 980,
      author: "Laura Martinez",
      is_published: true,
    },
    {
      title: "JavaScript Frameworks: A Comparative Guide",
      content:
        "<p>Explore popular JavaScript frameworks such as React, Vue, and Angular. Find the right framework for your next project...</p>",
      slug: "js-frameworks-guide",
      views: 1300,
      author: "Alex Rodriguez",
      is_published: true,
    },
    {
      title: "JavaScript Best Practices: Code Like a Pro",
      content:
        "<p>Level up your coding skills with these JavaScript best practices. Write clean, maintainable code that stands the test of time...</p>",
      slug: "js-best-practices",
      views: 1050,
      author: "Ryan Wilson",
      is_published: true,
    },
  ];

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    const promise = databases.createDocument(
      "65bfbd663a176932e886",
      "65bfbd845b8dc153236e",
      ID.unique(),
      element
    );
  }

  return (
    <>
      navbar here
      <div>app here</div>
    </>
  );
}
