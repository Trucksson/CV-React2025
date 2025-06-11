// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/about">About Me</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
