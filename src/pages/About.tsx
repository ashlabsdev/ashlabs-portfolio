import AboutHero from "../components/sections/about/AboutHero";
//import AboutStory from "../components/sections/about/AboutStory";
import ServicesGrid from "../components/sections/about/ServicesGrid";
import Process from "../components/sections/about/Process";
import TechStack from "../components/sections/about/TechStack";
import AboutCTA from "../components/sections/about/AboutCTA";

export default function About() {
    return (
        <>
            <AboutHero />
            {/* <AboutStory /> */}
            <ServicesGrid />
            <Process />
            <TechStack />
            <AboutCTA />
        </>
    );
}