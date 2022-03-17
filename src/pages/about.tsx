import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                  Hi there! My name is Pranav and I'm a Software Developer, building web-apps (sites).
                  Currently I'm self-employed, working as a full-time freelancer.
                </p>
                <p>
                  I'm always learning or building something. I have a degree in electrical engineering
                  and spent few months with jobs in that sector before I realized what the right career
                  for me is and became a developer. I like documenting my journey and I hope you enjoy
                  the site.
                </p>

                <h3>How I currently spend most of my time</h3>
                <ul>
                  <li>
                    Working on <a href="https://tweethunter.io" target='_blank' rel="noopener noreferrer">TweetHunter</a> and <a href="https://livecs.org/" target="_blank" rel="noopener noreferrer">livecs.org</a>.
                  </li>
                  <li>
                    Understanding and using all types (mostly web) of AWS services.
                  </li>
                  <li>
                    Understanding Docker & Kubernetes. <a href="https://www.udemy.com/course/docker-mastery/">Course link</a>.
                  </li>
                  <li>Following React Storybook <a href="https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/">tutorial</a></li>
                </ul>
                <p>You can contact on any social apps or email at <a href="mailto:hey@pranavmalvawala.com">hey@pranavmalvawala.com</a> to say hi!</p>

                <h3>Books</h3>
                <p>
                  Not long ago, I started reading books for my own understandings. I started with self-help
                  but I'm moving towards programming and finance.
                </p>
                <p>Reach out to me if you've got any suggestions.</p>
                <h3>Currently reading</h3>
                <ul>
                  <li>
                    <a href="https://www.unshakeable.com/">Unshakeable</a>: Your Financial Freedom Playbook
                  </li>
                  <li>
                    <a href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md">Scopes and closures</a> - You Don't Know JS Yet
                  </li>
                </ul>
                <h3>Have read</h3>
                <li>
                  <a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going">Up & Going</a> - You Don't know JS yet
                </li>
                <li>
                  <a href="https://www.navalmanack.com/">The Almanack of Naval Ravikant</a>
                </li>
                <li>
                  <a href="https://www.thesecret.tv/products/the-secret-book/">The Secret</a>
                </li>
                <li>
                  <a href="https://www.amazon.in/Power-your-Subconscious-Mind/dp/8192910962">The Power of your Subconscious Mind</a>
                </li>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
