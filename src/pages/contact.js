import React from "react";

import { Layout, SEO, Section } from "../components/common";

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[]} title="Contact" />
      <Section>
        <h1>Where to find me</h1>
        <p className="measure">
          Hey there! Feel free to send me an email. I&#39;m around
        </p>
      </Section>
      <Section extend="mt-0">
        <div className="py-4 flex">
          <div className="w-32 sm:w-48">Twitter:</div>
          <a href="https://twitter.com/pranavmalvawala">@pranavmalvawala</a>
        </div>
        <div className="py-4 flex border-t">
          <div className="w-32 sm:w-48">Github:</div>
          <a href="https://github.com/pranavmalvawala">@pranavmalvawala</a>
        </div>
        <div className="py-4 flex border-t">
          <div className="w-32 sm:w-48">LinkedIn:</div>
          <a href="https://www.linkedin.com/in/pranavmalvawala/">
            @pranavmalvawala
          </a>
        </div>
        <div className="py-4 flex border-t">
          <div className="w-32 sm:w-48">Email:</div>
          <a href="mailto:pranavmalvawala@gmail.com">pranavmalvawala</a>
        </div>
      </Section>
    </Layout>
  );
}

export default ContactPage;
