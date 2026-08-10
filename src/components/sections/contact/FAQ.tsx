import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";

import { contact } from "../../../data/contact";

export default function FAQ() {
  return (
    <Section>

      <Heading
        title="Frequently Asked Questions"
        subtitle=""
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {contact.faq.map((item) => (
          <Card key={item.question}>

            <h3 className="font-heading text-xl font-semibold">
              {item.question}
            </h3>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              {item.answer}
            </p>

          </Card>
        ))}

      </div>

    </Section>
  );
}