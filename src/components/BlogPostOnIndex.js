import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const BlogPostOnIndex = ({ edge }) => {
  const description = edge.node.frontmatter.description;
  const slug = edge.node.fields.slug;
  const date = edge.node.frontmatter.date;
  const title = edge.node.frontmatter.title;
  const timeToRead = edge.node.timeToRead;

  return (
    <div className="mb-8">
      <h3 className="text-2xl mb-0">
        <Link to={slug}>{title}</Link>
      </h3>
      <small className="text-sm">
        {date} • ☕️ {timeToRead} min read
      </small>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

BlogPostOnIndex.propTypes = {
  edge: PropTypes.object,
};

export default BlogPostOnIndex;
