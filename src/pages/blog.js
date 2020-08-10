import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Layout, SEO, Section } from "../components/common";
import BlogPostCard from "../components/BlogPostCard";

function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Writing" />
      <Section>
        <h1>Blog</h1>
        <p>
          So every dev has one problem we tend forget how we did something but I
          found a solution and you are looking right at it. Yes!! This blog is
          my solution, So welcome and I hope you find what you came looking for.
        </p>
      </Section>

      <Section extend="mt-0 ">
        <div className="flex flex-wrap -mx-2">
          {posts &&
            posts.map(({ node }) => {
              const title = node.frontmatter.title;
              const timeToRead = node.timeToRead;
              const excerpt = node.excerpt;
              const slug = node.fields.slug;
              const date = node.frontmatter.date;
              const tags = node.frontmatter.tags;

              return (
                <BlogPostCard
                  title={title}
                  excerpt={excerpt}
                  timeToRead={timeToRead}
                  slug={slug}
                  date={date}
                  tags={tags}
                  key={title}
                />
              );
            })}
        </div>
      </Section>
    </Layout>
  );
}

Blog.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`;

export default Blog;
