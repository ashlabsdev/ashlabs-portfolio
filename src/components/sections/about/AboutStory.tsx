import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";

import { about } from "../../../data/about";

export default function AboutStory() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left */}

          <Heading
            title={about.story.title}
          />

          {/* Right */}

          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">

            <p>
              {about.story.paragraphOne}
            </p>

            <p>
              {about.story.paragraphTwo}
            </p>

          </div>

        </div>
      </Container>
    </Section>
  );
}