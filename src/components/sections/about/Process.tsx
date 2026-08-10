import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import Card from "../../ui/Card";

import { process } from "../../../data/process";

export default function Process() {
    return (
        <Section className="pt-18 pb-0">
            <Heading
                title="Our Process"
                subtitle=""
                align="center"
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-4">
                {process.map((item) => (
                    <Card key={item.step} className="relative">

                        <span className="font-heading text-5xl font-bold text-[var(--primary)]/20">
                            {item.step}
                        </span>

                        <h3 className="mt-6 font-heading text-2xl font-semibold">
                            {item.title}
                        </h3>

                        <p className="mt-4 leading-7 text-[var(--muted)]">
                            {item.description}
                        </p>

                    </Card>
                ))}
            </div>
        </Section>
    );
}