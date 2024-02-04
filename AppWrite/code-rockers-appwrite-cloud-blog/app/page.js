"use client";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Client, Databases, ID } from "appwrite";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65bfbb516395058f5705");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "65bfbd663a176932e886",
    "65bfbd845b8dc153236e",
    []
  );

  promise.then(
    function (response) {
      console.log(response);
      setBlogs(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );

  function truncateHTML(htmlString, maxLength) {
    // Create a temporary div element to parse and manipulate the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    // Get the text content of the div
    let textContent = tempDiv.textContent || tempDiv.innerText;

    // Trim the text to the specified maxLength
    const truncatedText = textContent.trim().slice(0, maxLength);

    // Check if the original text is longer than the specified maxLength
    if (textContent.length > maxLength) {
      // Add '...' to indicate that there is more content
      return truncatedText + "...";
    }

    // Return the original text if it's within the maxLength limit
    return truncatedText;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.length == 0 && "Loading..."}
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
              metaDesc={truncateHTML(blog.content)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
