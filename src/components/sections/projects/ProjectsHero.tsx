import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Badge from "../../ui/Badge";

export default function ProjectsHero() {
  return (
    <Section className="pb-0">
      <Container>
        <div className="flex min-h-[45vh] flex-col justify-center">

          <Badge text="OUR WORK" />

          <h1 className="mt-8 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl">
            Projects we've built.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            A selection of digital products and solutions built by AshLabs.
          </p>

        </div>
      </Container>
    </Section>
  );
}