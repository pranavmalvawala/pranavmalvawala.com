import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function BlogPostCard({ title, excerpt, slug, tags, imgSrc }) {
  return (
    <Link className="w-full px-2 my-2 md:my-6 md:px-2 md:w-1/2 h-65" to={slug}>
      <div className="rounded overflow-hidden shadow-lg min-h-full dark:bg-neutral-700 bg-white">
        <Img fluid={imgSrc} alt={title} />

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

BlogPostCard.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  tags: PropTypes.array,
  imgSrc: PropTypes.object,
};

export default BlogPostCard;
