import Badge from "../../ui/Badge";
import Section from "../../ui/Section";
import Button from "../../ui/Button";
import TechNetwork from "../../ui/TechNetwork";

import { about } from "../../../data/about";
import { NavLink } from "react-router-dom";

export default function AboutHero() {
    return (
        <Section>
            <div className="grid min-h-screen items-center gap-20 lg:grid-cols-2">

                {/* LEFT */}

                <div className="flex flex-col">

                    <Badge text="ABOUT ASHLABS" />

                    <h1 className="mt-8 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-5xl">
                        {about.title}
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                        {about.intro}
                    </p>

                    <div className="mt-10">
                        <NavLink to="/projects">
                            <Button variant="outline">
                                Our Case Studies →
                            </Button>
                        </NavLink>
                    </div>

                    {/* Scroll */}

                    {/* <div
                        onClick={() =>
                            document
                                .getElementById("services")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                        }
                        className="mt-16 flex cursor-pointer items-center gap-3"
                    >

                        <div className="h-10 w-px bg-[var(--primary)] animate-pulse" />

                        <span className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">
                            Scroll to explore
                        </span>

                    </div> */}

                </div>

                {/* RIGHT */}

                <div className="hidden justify-center lg:flex">

                    <TechNetwork />

                </div>

            </div>

        </Section>
    );
}