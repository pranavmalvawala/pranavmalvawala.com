import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Layout, SEO, Section, Button } from "../components/common";
import { Twitter } from "react-feather";
import BlogPostOnIndex from "../components/BlogPostOnIndex";

function IndexPage({ data }) {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO keywords={[]} title="Home" />

      <Section>
        <div className="mt-16">
          <p className="text-neutral-500 dark:text-neutral-300 text-4xl">
            Hello!{" "}
            <span role="img" aria-label="hande">
              👋
            </span>
          </p>
          <h2 className="text-4xl md:text-6xl leading-tight font-bold dark:text-neutral-10 mb-8 border-b-0">
            I’m Pranav and I build things for the web.
          </h2>
          <Button
            text="Let's connect"
            icon={<Twitter />}
            to="https://twitter.com/pranavmalvawala"
            extend="bg-primary-500"
          />
        </div>
      </Section>
      <section className="mt-10">
        <div className="max-w-3xl p-5 md:px-20 md:py-10 mx-auto rounded-md bg-white dark:bg-neutral-700">
          <h2 className="border-b-0">Blog</h2>
          {edges.map((edge) => (
            <BlogPostOnIndex key={edge.node.frontmatter.title} edge={edge} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
          }
          timeToRead
        }
      }
    }
  }
`;
