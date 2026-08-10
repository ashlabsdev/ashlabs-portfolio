import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import { testimonials } from "../../../data/testimonials";

export default function Testimonials() {
  return (
    <Section className="pt-18 pb-0">

      <Heading
        title="What Our Clients Say"
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        {testimonials.map((testimonial) => (
          <Card key={`${testimonial.name}-${testimonial.company}`}>

            <p className="leading-7 text-[var(--muted)]">
              “{testimonial.message}”
            </p>

            <div className="mt-6">

              <p className="font-semibold">
                {testimonial.name}
              </p>

              <p className="mt-1 text-sm text-[var(--muted)]">
                {testimonial.role} · {testimonial.company}
              </p>

            </div>

          </Card>
        ))}

      </div>

    </Section>
  );
}