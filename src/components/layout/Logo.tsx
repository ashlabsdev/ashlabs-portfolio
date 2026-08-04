import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.jpeg";

export default function Logo() {
  return (
    <NavLink
      to="/"
      className="flex items-center gap-3"
    >
      <img
        src={logo}
        alt="AshLabs"
        className="h-11 w-11 rounded-xl border border-[#00F48E]/40"
      />

      <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">
        AshLabs
      </span>
    </NavLink>
  );
}