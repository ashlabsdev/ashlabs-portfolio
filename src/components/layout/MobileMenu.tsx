import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { navigation } from "../../data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          justify-center
          rounded-lg
          p-2
          text-white
          transition
          hover:text-[var(--primary)]
          lg:hidden
        "
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Dropdown */}

      {open && (
        <div
          className="
            absolute
            left-0
            top-full
            z-50
            w-full
            border-t
            border-white/10
            bg-black
            px-6
            py-8
            shadow-xl
            lg:hidden
          "
        >
          <nav className="flex flex-col items-center gap-7">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                    text-lg
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-white hover:text-[var(--primary)]"
                    }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}