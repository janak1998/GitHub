"use client";
import Navbar from "@/components/Navbar";
import { Client, Databases, Query } from "appwrite";
import React, { useState } from "react";

export default function Page({ params }) {
  const [blog, setBlog] = useState();

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65bfbb516395058f5705");

  const databases = new Databases(client);

  let promise = databases.listDocuments(
    "65bfbd663a176932e886",
    "65bfbd845b8dc153236e",
    [Query.equal("slug", params.slug)]
  );

  promise.then(
    function (response) {
      console.log(response);
      setBlog(response.documents[0]);
    },
    function (error) {
      console.log(error);
    }
  );

  const markup = { _html: blog?.content };
  console.log(markup);

  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">{blog?.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {!blog == 0 && "Loading..."}
            <div>Author: {blog?.author}</div>
            <div dangerouslySetInnerHTML={markup}> </div>
          </div>
        </div>
      </div>
    </>
  );
}
