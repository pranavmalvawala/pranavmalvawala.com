import React from "react";
import { Link } from "gatsby";

function BlogPostCard({ title, excerpt, timeToRead, slug, date, tags }) {
  return (
    <Link className="w-full px-2 my-2 md:my-6 md:px-2 md:w-1/2 h-65" to={slug}>
      <div className="rounded overflow-hidden shadow-lg min-h-full dark:bg-neutral-700 bg-white">
        <img
          className="w-full"
          src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base dark:text-neutral-200">
            {excerpt}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
