import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">School Lunch Planner</div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <NavLink to="/plans">Plans</NavLink>
        </li>
        <li className="navbar__menu-item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
