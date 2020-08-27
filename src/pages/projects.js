import React from "react";
import projects from "../../content/data/projects";
import { Layout, SEO, Section } from "../components/common";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <Layout>
      <SEO keywords={[]} title="Projects" />
      <Section>
        <h1>What have I build</h1>
        <p className="measure">
          Here are few projects that I&#39;ve worked on recently. You can
          find more of my work on{" "}
          <a href="https://github.com/pranavmalvawala">GitHub</a>.
        </p>
      </Section>
      <Section extend="mt-0">
        {projects.map((project) => {
          const { title, source, url, description, buildUsing } = project;
          return (
            <ProjectCard
              title={title}
              source={source}
              url={url}
              description={description}
              buildUsing={buildUsing}
              key={title}
            />
          );
        })}
      </Section>
    </Layout>
  );
}

export default ProjectsPage;
