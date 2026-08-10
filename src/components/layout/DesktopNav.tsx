import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `transition-colors duration-200 ${
              isActive
                ? "text-white"
                : "text-gray-400 hover:text-[#00F48E]"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}