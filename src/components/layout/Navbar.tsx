import Container from "../ui/Container";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Logo />

          <DesktopNav />

          
          <MobileMenu />

        </nav>
      </Container>
    </header>
  );
}