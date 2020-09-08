import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import "../css/prism-theme.css";
import "../css/markdown.css";

import {
  Layout,
  Newsletter,
  Divider,
  SEO,
  ReadingProgress,
} from "../components/common";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    const { previous, next } = this.props.pageContext;

    const target = React.createRef();

    return (
      <>
        <Layout>
          <SEO
            title={post.frontmatter.title}
            description={post.excerpt}
            slug={post.fields.slug}
          />

          <section>
            <div className="max-w-3xl mx-auto px-6 md:px-8">
              <article className="mb-10 markdown" ref={target}>
                <h1 className="text-5xl">{post.frontmatter.title}</h1>
                <div>
                  <img
                    className="w-full h-full"
                    src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
                    alt="Sunset in the mountains"
                  />
                </div>

                <section dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>
              <h2 className="border-b-0">Up next</h2>
              <nav className="my-2 text-base md:text-xl opacity-5">
                <ul className="flex justify-between">
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <Divider />
          <Newsletter />
        </Layout>
        <ReadingProgress target={target} />
      </>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`;
