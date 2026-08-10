import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Card from "../../ui/Card";

import { services } from "../../../data/services";

export default function ServicesGrid() {
  return (
    <Section id="services" className="pt-8 pb-0">
        <Heading
          title="What We Build"
          subtitle=""
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title}>

                <Icon
                  size={36}
                  className="text-[var(--primary)]"
                />

                <h3 className="mt-6 font-heading text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {service.description}
                </p>

              </Card>
            );
          })}

        </div>

    </Section>
  );
}