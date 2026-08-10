import Badge from "../../ui/Badge";
import Section from "../../ui/Section";
import { contact } from "../../../data/contact";

export default function ContactHero() {
  return (
    <Section>

        <div className="flex min-h-[60vh] flex-col justify-center">

          <Badge text="CONTACT" />

          <h1 className="mt-8 max-w-3xl font-heading text-4xl font-bold md:text-5xl">
            {contact.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {contact.hero.intro}
          </p>

        </div>

    </Section>
  );
}