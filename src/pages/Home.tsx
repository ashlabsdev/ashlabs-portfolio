import HomeHero from "../components/sections/home/HomeHero";
import Services from "../components/sections/home/Services";
import Testimonials from "../components/sections/home/Testimonials";
import ContactMethods from "../components/sections/contact/ContactMethods";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Services />

      <Testimonials />

      <ContactMethods />
    </>
  );
}