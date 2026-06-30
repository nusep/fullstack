import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-400 transition";

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link to="/home">
          <h1 className="text-2xl font-bold text-blue-400">MyWebsite</h1>
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink to="/home" className={activeClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={activeClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className={activeClass}>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <Link
          to="/"
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
