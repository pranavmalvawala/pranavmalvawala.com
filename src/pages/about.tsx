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
                  Hi there! I'm Pranav and I work as a Software Developer. I build web-apps
                  (sites), mobile apps and recently started working on extensions as well. Currently I'm self-employed, working as a full-time freelancer.
                </p>
                <p>
                  I'm always learning or building something. I have a degree in electrical
                  engineering and spent few months with jobs in that sector before I realized what
                  the right career for me is and became a developer. I like documenting my journey
                  so I{' '}
                  <a
                    href="https://twitter.com/pranavmalvawala"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tweet
                  </a>{' '}
                  stuff.
                </p>
                <h3>
                  Currently I spend most of my time building{' '}
                  <a href="https://tweethunter.io" target="_blank" rel="noopener noreferrer">
                    TweetHunter
                  </a>
                  ,{' '}
                  <a href="https://www.taplio.com" target="_blank" rel="noopener noreferrer">
                    Taplio
                  </a>,{' '}
                  <a href="https://www.tweethunter.io/twemex" target="_blank" rel="noopener noreferrer">
                    Twemex
                  </a>{' '}
                  and{' '}
                  <a href="https://livecs.org/" target="_blank" rel="noopener noreferrer">
                    livecs.org
                  </a>
                </h3>
                <br />
                <p>
                  You can contact on any social apps (@pranavmalvawala) or email at{' '}
                  <a href="mailto:hey@pranavmalvawala.com">hey@pranavmalvawala.com</a> to say hi!
                </p>
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
