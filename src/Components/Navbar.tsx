import { Bell, UserPen } from "lucide-react";
import { NavLink } from "react-router";
// className="font-bold m-1 p-2 text-[1rem] hover:cursor-pointer"
const Navbar = () => {
  const navLinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Courses", path: "/courses" },
    { id: 3, label: "Notes", path: "/notes" },
    { id: 4, label: "Profile", path: "/profile" },
  ];
  return (
    <div className="flex flex-row bg-surface w-full h-auto items-center justify-between p-[0.5rem]">
      <div className="font-bold text-2xl">🎓 StudentHub</div>
      <div>
        {navLinks.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className={({ isActive }) =>
              `font-bold m-1 p-2 text-base hover:cursor-pointer ${
                isActive
                  ? "text-primary border-b-2 border-primary"
                  : "text-text-secondary"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-row items-center">
        <Bell className="m-1" />
        <UserPen className="m-1" />
        <span className="font-bold m-1 p-2 text-[1rem] hover:cursor-pointer">
          Priya
        </span>
      </div>
    </div>
  );
};

export default Navbar;
