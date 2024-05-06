import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();
  const isMenuVisible =
    location.pathname.indexOf("/plans") === 0 ||
    location.pathname.indexOf("/profile") === 0;
  return (
    <div className="navbar">
      <div className="navbar__logo">School Lunch Planner</div>
      {isMenuVisible && (
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <NavLink to="/plans">Plans</NavLink>
          </li>
          <li className="navbar__menu-item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
