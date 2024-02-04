"use client";
import Navbar from "@/components/Navbar";
import { Client, Databases, Query } from "appwrite";
import React, { useState, useEffect } from "react";

export default function Page({ params }) {
  const [blog, setBlog] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("65bfbb516395058f5705");

      const databases = new Databases(client);

      try {
        const response = await databases.listDocuments(
          "65bfbd663a176932e886",
          "65bfbd845b8dc153236e",
          [Query.equal("slug", params.slug)]
        );

        setBlog(response.documents[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.slug]); // Run effect when params.slug changes

  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
          <div className="flex flex-col  gap-1">
            {!blog && "Loading..."}
            {blog && (
              <div className="text-sm font-bold">Author: {blog?.author}</div>
            )}

            <div
              className="shadow-xl p-10"
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
