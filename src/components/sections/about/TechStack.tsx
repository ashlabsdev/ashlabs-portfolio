import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import Tag from "../../ui/Tag";

import { technologies } from "../../../data/technologies";

export default function TechStack() {
  return (
    <Section>
        <Heading
          title="Technology Stack"
          subtitle=""
          align="center"
        />

        <div className="mt-16 space-y-10">

          {technologies.map((group) => (
            <div
              key={group.category}
              className="grid gap-6 border-b border-[var(--border)] pb-8 lg:grid-cols-[220px_1fr]"
            >

              <h3 className="font-heading text-2xl font-semibold">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.items.map((tech) => (
                  <Tag
                    key={tech}
                    text={tech}
                  />
                ))}

              </div>

            </div>
          ))}

        </div>

    </Section>
  );
}