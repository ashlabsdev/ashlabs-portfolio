import Container from "../../ui/Container";
import Section from "../../ui/Section";
import ProjectCard from "../../ui/ProjectCard";

import { projects } from "../../../data/projects";

export default function ProjectsGrid() {
  return (
    <Section className="pt-0">
      <Container>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}