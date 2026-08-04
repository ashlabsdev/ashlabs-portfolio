import { NavLink } from "react-router-dom";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";

import { about } from "../../../data/about";

export default function AboutCTA() {
  return (
    <Section>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-8 py-16 text-center">

          <Heading
            title={about.cta.title}
            subtitle={about.cta.description}
            align="center"
          />

          <div className="mt-10">

            <NavLink to="/contact">

              <Button>
                {about.cta.button} →
              </Button>

            </NavLink>

          </div>

        </div>
    </Section>
  );
}