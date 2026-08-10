import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import { homeService } from "../../../data/homeService";

export default function Services() {
  return (
    <Section className="pt-0 pb-0">
      <Heading
        title="What We Build"
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        {homeService.map((service) => (
          <Card key={service.title}>

            <h3 className="font-heading text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              {service.description}
            </p>

          </Card>
        ))}

      </div>

    </Section >
  );
}