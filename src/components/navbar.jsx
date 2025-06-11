import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink>
        </li>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink>
        </li>
      </ul>
    </nav>
  );
}
