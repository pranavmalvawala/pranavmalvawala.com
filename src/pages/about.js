import React from "react";
import { Link } from "gatsby";

import { Layout, SEO, Section } from "../components/common";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <Section>
        <h1>About Me</h1>
        <div>
          <p>
            Hey, I&#39;m Pranav, a full stack software developer and I&#39; ve
            recently decided to start writing about the things I know.
            <br />
            <br /> Why did I start tho? cause I read an article about{" "}
            <a href="https://www.swyx.io/writing/learn-in-public/">
              learning in public
            </a>{" "}
            and it really got me thinking, like huh? this could actually be fun
            So I made this website where I <Link to="/blog">write</Link> about
            coding and showcase some <Link to="/projects">projects</Link>.
          </p>         
        </div>
      </Section>
      <Section>
        <h2>More to know...</h2>
        <p>
          A little about beginnings, I actually gratuated as an electrical
          engineer but soon realized my passion for coding. At that time I didn
          &#39;t actually know how to code but I found Tech and coding,
          fascinating and cool. So I seriously thought of giving this side of me
          a shot and here I am a self taught software developer. <br /> <br />{" "}
          If you would like to read about this in some detail, I have written a
          blog about it!!
        </p>
      </Section>
      <Section>
        <h2>Pranav:</h2>
        <ul>
          <li>
            <span aria-label="pc" role="img">
              💻
            </span>{" "}
            works full-time as a developer
          </li>
          <li>
            <span aria-label="floppy" role="img">
              💾
            </span>{" "}
            is available for freelance gigs
          </li>
          <li>
            <span aria-label="movie camera" role="img">
              🎥
            </span>{" "}
            loves to watch tv shows / movies
          </li>
          <li>
            <span aria-label="hat" role="img">
              🎓
            </span>{" "}
            is currently working on getting{" "}
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>{" "}
            certifications
          </li>
          <li>
            <span aria-label="trophy" role="img">
              🏆
            </span>{" "}
            recently started practicing in{" "}
            <a href="https://www.codewars.com/">codewars</a>
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default AboutPage;
