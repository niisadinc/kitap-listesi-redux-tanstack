import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "rounded-full bg-white px-5 py-2 font-semibold text-purple-700 shadow"
      : "rounded-full px-5 py-2 font-semibold text-white hover:bg-white/20";

  return (
    <nav className="flex flex-wrap justify-center gap-3">
      <NavLink to="/" className={linkClass}>Ana Sayfa</NavLink>
      <NavLink to="/kitaplar" className={linkClass}>Kitaplar</NavLink>
      <NavLink to="/okuma-listem" className={linkClass}>Okuma Listem</NavLink>
    </nav>
  );
}

export default Navbar;
