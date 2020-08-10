import React from "react";

import { Layout, SEO, Section, Button } from "../components/common";
import { Twitter } from "react-feather";

function IndexPage() {
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
    </Layout>
  );
}

export default IndexPage;
