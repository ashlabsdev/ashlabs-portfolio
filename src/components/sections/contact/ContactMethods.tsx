import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";

import { contact } from "../../../data/contact";

export default function ContactMethods() {
  return (
    <Section id="contact-methods">

      <Heading
        title="Get in Touch"
        subtitle=""
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {contact.methods.map((method) => {

          const Icon = method.icon;

          return (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="transition-all duration-300 hover:border-[var(--primary)] hover:-translate-y-1">

                <Icon
                  size={34}
                  className="text-[var(--primary)]"
                />

                <h3 className="mt-5 font-heading text-xl font-semibold">
                  {method.title}
                </h3>

                <p className="mt-2 text-[var(--muted)] break-all">
                  {method.value}
                </p>

              </Card>
            </a>
          );

        })}

      </div>

    </Section>
  );
}