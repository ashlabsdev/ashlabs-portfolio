import { NavLink } from "react-router-dom";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import Section from "../../ui/Section";

import { home } from "../../../data/home";

import heroImage from "../../../assets/images/home/home.webp";

export default function HomeHero() {
    return (
        <Section className="pt-28 pb-0">
            <div className="grid min-h-[75vh] items-center gap-12 lg:grid-cols-2">

                {/* LEFT */}

                <div  className="flex flex-col">
                    <Badge text={home.hero.badge} />

                    <h1 className="mt-6 max-w-2xl font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        {home.hero.title}
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                        {home.hero.description}
                    </p>

                    <div className="mt-8">
                        <NavLink to="/contact">
                            <Button>
                                {home.hero.cta} →
                            </Button>
                        </NavLink>
                    </div>
                </div>

                {/* RIGHT */}

                <div className="flex justify-center lg:justify-end">

                    <div
                        className="
                relative
                w-full
                max-w-lg
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
              "
                    >
                        <img
                            src={heroImage}
                            alt="AshLabs digital solutions"
                            className="
                  h-auto
                  w-full
                  object-cover
                "
                        />
                    </div>

                </div>

            </div>

        </Section>
    );
}