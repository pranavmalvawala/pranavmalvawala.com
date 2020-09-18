import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Markdown from "react-markdown";
import "../css/prism-theme.css";
import "../css/markdown.css";

import {
  Layout,
  Newsletter,
  // Divider,
  SEO,
  ReadingProgress,
} from "../components/common";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const GITHUB_USERNAME = "pranavmalvawala";
    const GITHUB_REPO_NAME = "pranavmalvawala.com";
    // const { previous, next } = this.props.pageContext;

    const target = React.createRef();

    let ImgFluid = post.frontmatter.banner.childImageSharp.fluid;
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://pranavmalvawala.com${post.fields.slug}`
    )}`;

    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${post.fields.slug}index.md`;
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
              <article className="mb-10 markdown pt-5" ref={target}>
                <h1 className="text-5xl">{post.frontmatter.title}</h1>
                {post.frontmatter.banner && (
                  <div>
                    <Img fluid={ImgFluid} alt={post.frontmatter.title} />
                    {post.frontmatter.bannerCredit ? (
                      <Markdown className="text-center">
                        {post.frontmatter.bannerCredit}
                      </Markdown>
                    ) : null}
                  </div>
                )}

                <section dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>
              <p>
                <a href={discussUrl} target="_blank" rel="noreferrer noopener">
                  Discuss on Twitter
                </a>{" "}
                •{" "}
                <a href={editUrl} target="_blank" rel="noreferrer noopener">
                  Edit on GitHub
                </a>
              </p>
              {/* <h2 className="border-b-0">Up next</h2>
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
              </nav> */}
            </div>
          </section>

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
        banner {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerCredit
      }
      fields {
        slug
      }
    }
  }
`;
