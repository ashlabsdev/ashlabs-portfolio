import AboutHero from "../components/sections/about/AboutHero";
import ServicesGrid from "../components/sections/about/ServicesGrid";
import Process from "../components/sections/about/Process";
import TechStack from "../components/sections/about/TechStack";
import AboutCTA from "../components/sections/about/AboutCTA";

export default function About() {
    return (
        <>
            <AboutHero />
            <ServicesGrid />
            <Process />
            <TechStack />
            <AboutCTA />
        </>
    );
}