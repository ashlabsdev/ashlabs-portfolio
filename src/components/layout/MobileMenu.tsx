import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { navigation } from "../../data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-xl bg-[#00F48E] px-6 py-3 font-semibold text-black"
            >
              Let's Talk
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}