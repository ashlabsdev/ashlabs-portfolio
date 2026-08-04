import Container from "../ui/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Logo />

          <DesktopNav />

          <NavLink
            to="/contact"
            className="hidden rounded-xl bg-[#00F48E] px-5 py-2.5 font-medium text-black transition hover:scale-105 hover:bg-[#00D97E] lg:inline-flex"
          >
            Let's Talk
          </NavLink>

          <MobileMenu />

        </nav>
      </Container>
    </header>
  );
}