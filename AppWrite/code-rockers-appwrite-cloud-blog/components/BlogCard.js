import Link from "next/link";
import React from "react";

const BlogCard = ({ title, author, metaDesc, readMoreLink, slug }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {author}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </p>
          <p className="mt-2 text-gray-500">{metaDesc}</p>
          <div className="mt-4">
            <Link
              href={"/blogpost/" + slug}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
